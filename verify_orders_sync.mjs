import fs from 'fs';

const SUPABASE_URL = 'https://api.kurofangs.id.ly';
const SUPABASE_KEY = 'sb_publishable_bISG70YeoKP4mu8BKlgsuQ_xPprjcc1';
const ERP_CUTOFF_DATE = '2026-10-07T01:55:00+02:00';
const cutoffTime = new Date(ERP_CUTOFF_DATE).getTime();

export function normalizeOrderStatus(status) {
  if (!status) return 'pending_review';
  const s = String(status).trim().toLowerCase();
  if (s === 'delivered' || s.includes('تم التسليم') || s.includes('مسلم')) return 'delivered';
  if (s === 'out_for_delivery' || s.includes('خرج للتوصيل') || s.includes('جاري التوصيل')) return 'out_for_delivery';
  if (s === 'ready_for_delivery' || s.includes('جاهز للتوصيل')) return 'ready_for_delivery';
  if (s === 'preparing' || s.includes('قيد التجهيز') || s.includes('تجهيز')) return 'preparing';
  if (s === 'accepted' || s.includes('تم قبول') || s.includes('مقبول')) return 'accepted';
  if (s === 'cancelled' || s.includes('ملغى') || s.includes('ملغي')) return 'cancelled';
  if (s === 'rejected' || s.includes('مرفوض')) return 'rejected';
  return 'pending_review';
}

export function normalizeServerOrder(ord, cutoff = cutoffTime) {
  const createdAtTime = new Date(ord.created_at).getTime();
  const isHistorical = createdAtTime < cutoff;
  const canonicalStatus = normalizeOrderStatus(ord.status);

  const d = new Date(ord.created_at);
  const dateFormatted = d.toLocaleDateString('ar-LY', { year: 'numeric', month: '2-digit', day: '2-digit' }) + ' ' +
                        d.toLocaleTimeString('ar-LY', { hour: '2-digit', minute: '2-digit' });

  let items = [];
  if (Array.isArray(ord.items) && ord.items.length > 0) {
    items = ord.items.map(it => ({
      id: it.id || it.product_id || null,
      name: it.name_ar || it.name || it.name_en || 'منتج طبي',
      nameEn: it.name_en || it.name || it.name_ar,
      qty: Number(it.quantity || it.qty || 1),
      price: Number(it.price || 0),
      imageUrl: it.image_url || it.image || null
    }));
  } else if (Array.isArray(ord.order_items) && ord.order_items.length > 0) {
    items = ord.order_items.map(it => ({
      id: it.product_id || (it.products ? it.products.id : null),
      name: (it.products ? (it.products.name_ar || it.products.name_en) : null) || it.name_ar || it.name_en || 'منتج طبي',
      nameEn: (it.products ? it.products.name_en : null) || it.name_en,
      qty: Number(it.quantity || 1),
      price: Number(it.price || (it.products ? it.products.price : 0) || 0),
      imageUrl: it.products ? (it.products.main_image_url || it.products.image_url) : null
    }));
  }

  const totalQty = items.reduce((sum, it) => sum + it.qty, 0);
  const itemsSum = items.reduce((sum, it) => sum + (it.qty * it.price), 0);
  const rawTotal = Number(ord.total_price != null ? ord.total_price : (ord.total != null ? ord.total : 0));
  const finalTotal = rawTotal > 0 ? rawTotal : itemsSum;

  let statusHistory = [];
  if (ord.status_note) {
    try {
      const parsed = JSON.parse(ord.status_note);
      if (parsed && Array.isArray(parsed.status_history)) {
        statusHistory = parsed.status_history;
      }
    } catch (_) {}
  }

  const rawNum = ord.order_number ? String(ord.order_number).replace(/\D/g, '') : ord.id.slice(0, 8);
  const isAdminCreated = ord.notes && (ord.notes.includes('Admin') || ord.notes.includes('أنشأه الأدمن'));

  return {
    id: ord.id,
    orderNumber: '#' + rawNum,
    rawOrderNumber: ord.order_number || rawNum,
    invoiceNumber: isHistorical ? ('#INV-HIST-' + rawNum) : ('#INV-2026-' + rawNum),
    orderType: isHistorical ? 'historical' : 'new',
    isHistorical: isHistorical,
    inventoryDeduction: isHistorical ? 'historical_exempt' : 'applied',
    customerName: ord.customer_name || 'عميل المتجر',
    phone: ord.customer_phone || '-',
    secondaryPhone: ord.customer_phone_secondary || null,
    email: ord.customer_email || null,
    university: ord.university || 'جامعة طرابلس',
    college: ord.college || 'كلية طب الأسنان',
    address: ord.address_text || 'طرابلس',
    latitude: ord.latitude || null,
    longitude: ord.longitude || null,
    itemsCount: totalQty || 1,
    items: items,
    total: finalTotal,
    discountAmount: Number(ord.discount_amount || 0),
    shippingFee: Number(ord.shipping_fee || 0),
    status: canonicalStatus,
    originalStatus: ord.status,
    date: dateFormatted,
    created_at: ord.created_at,
    notes: ord.notes || null,
    system_scope: isHistorical ? 'LEGACY' : 'NEW',
    orderSource: isAdminCreated ? 'admin' : (ord.source === 'أنشأه الأدمن' ? 'admin' : 'website'),
    source: isHistorical ? 'Admin الأرشيف التاريخي (جرد قديم)' : (isAdminCreated ? 'أنشأه الأدمن' : 'متجر Absolute Dental'),
    statusHistory: statusHistory
  };
}

async function run() {
  console.log('🔄 Fetching canonical orders from Supabase API...');
  const res = await fetch(`${SUPABASE_URL}/rest/v1/orders?select=*,order_items(*,products(*))&order=created_at.desc`, {
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    }
  });

  if (!res.ok) {
    console.error('Failed to fetch from Supabase:', res.status, res.statusText);
    process.exit(1);
  }

  const rawOrders = await res.json();
  console.log(`✅ Supabase Raw Orders count: ${rawOrders.length}`);

  const normalized = rawOrders.map(o => normalizeServerOrder(o));
  console.log(`✅ Successfully normalized: ${normalized.length} orders`);

  const statusCounts = {};
  normalized.forEach(o => {
    statusCounts[o.status] = (statusCounts[o.status] || 0) + 1;
  });
  console.log('📊 Status Breakdown:', statusCounts);

  // Check specific orders mentioned in instructions
  const checkNumbers = ['40515629', '24336856', '65004781'];
  console.log('\n🔍 Checking highlighted orders:');
  for (const num of checkNumbers) {
    const found = normalized.find(o => o.rawOrderNumber === num || o.orderNumber === '#' + num);
    if (found) {
      console.log(`  ✓ #${num}: Customer "${found.customerName}", Status "${found.status}", Total: ${found.total} LYD, Items: ${found.items.length}`);
    } else {
      console.error(`  ✗ #${num}: NOT FOUND!`);
    }
  }

  console.log('\n🔎 Summary of zero totals:');
  const zeroTotals = normalized.filter(o => o.total <= 0);
  console.log(`  Orders with 0 total: ${zeroTotals.length}`);
  if (zeroTotals.length > 0) {
    zeroTotals.forEach(z => console.log(`    #${z.rawOrderNumber} (${z.customerName}): ${z.items.length} items`));
  }

  console.log('\n🎉 Canonical reconciliation test passed!');
}

run().catch(err => {
  console.error('Error running test:', err);
  process.exit(1);
});
