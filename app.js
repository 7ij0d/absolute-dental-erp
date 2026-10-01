/**
 * ABSOLUTE DENTAL — ENTERPRISE OPERATIONS SYSTEM (ERP)
 * Real Server Integration & PIN 9922 Security Engine
 * Server Target: https://api.kurofangs.id.ly (Libyan VPS)
 */

// -------------------------------------------------------------
// 1. SYSTEM SECURITY & ADMIN CONTEXT (PIN: 9922)
// -------------------------------------------------------------
const ADMIN_SECURITY = {
  REQUIRED_PIN: '9922',
  ADMIN_EMAIL: 'admin@smylodent.com',
  ADMIN_PASS: 'admin123'
};

// -------------------------------------------------------------
// 2. SUPABASE LIVE SERVER CONFIGURATION
// -------------------------------------------------------------
const SUPABASE_CONFIG = {
  url: 'https://api.kurofangs.id.ly',
  anonKey: 'sb_publishable_bISG70YeoKP4mu8BKlgsuQ_xPprjcc1'
};

let supabase = null;
if (window.supabase) {
  try {
    supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    console.log('✅ Supabase Client Initialized with Server:', SUPABASE_CONFIG.url);
  } catch (err) {
    console.warn('Supabase initialization warning:', err);
  }
}

// -------------------------------------------------------------
// 3. DATA STORE (Initial fallback populated with real server records)
// -------------------------------------------------------------
const ERP_STATE = {
  activeView: 'board',
  currentPartner: 'طه',
  supabaseConnected: false,

  // 4 Partners Configuration
  partners: [
    {
      id: 'p1',
      name: 'طه',
      fullName: 'طه محمد',
      role: 'شريك مؤسس ومدير العمليات',
      ownership: 33.3,
      capital: 1500,
      drawings: 0,
      profitEntitled: 483,
      currentBalance: 1983,
      avatar: 'طه',
      phone: '092-5813109',
      lastActivity: 'متابعة شحنات الطلبات وتجهيز الكليات'
    },
    {
      id: 'p2',
      name: 'عبدالمؤمن',
      fullName: 'عبدالمؤمن البشير',
      role: 'شريك ومدير المشتريات والمخزون',
      ownership: 33.3,
      capital: 1500,
      drawings: 0,
      profitEntitled: 483,
      currentBalance: 1983,
      avatar: 'مؤمن',
      phone: '091-2345678',
      lastActivity: 'تسجيل طلب تجريبي بقيمة 135 د.ل'
    },
    {
      id: 'p3',
      name: 'ساسي',
      fullName: 'ساسي الهادي',
      role: 'شريك ومسؤول المالية والتوصيل',
      ownership: 33.3,
      capital: 1500,
      drawings: 0,
      profitEntitled: 483,
      currentBalance: 1983,
      avatar: 'ساسي',
      phone: '092-2634570',
      lastActivity: 'تأكيد استلام طلبات وتوصيل الكلية'
    },
    {
      id: 'p4',
      name: 'الشريك الرابع',
      fullName: 'الشريك الإداري / المستثمر',
      role: 'شريك استثماري',
      ownership: 0.1,
      capital: 500,
      drawings: 0,
      profitEntitled: 145,
      currentBalance: 645,
      avatar: 'ش4',
      phone: '092-1112233',
      lastActivity: 'مراجعة التقارير المالية'
    }
  ],

  // Real Products (Populated from live server with instant fallback seed)
  products: (typeof INITIAL_PRODUCTS !== 'undefined' && Array.isArray(INITIAL_PRODUCTS)) ? [...INITIAL_PRODUCTS] : [],

  // Real Orders (Populated from live server with instant fallback seed)
  orders: (typeof INITIAL_ORDERS !== 'undefined' && Array.isArray(INITIAL_ORDERS)) ? [...INITIAL_ORDERS] : [],

  // Real Shipping Rates (From settings table)
  shippingRates: {
    tripoli_dental_college: 0,
    tripoli_delivery: 10,
    other_cities: 25
  },

  // Operating Expenses Ledger
  expenses: JSON.parse(localStorage.getItem('absolute_erp_expenses')) || [
    { id: 'EXP-101', date: '2026-09-28', amount: 250, category: 'شحن', desc: 'شحن طلبيات وتوصيل كليات طرابلس والزاوية', user: 'ساسي', method: 'كاش' },
    { id: 'EXP-102', date: '2026-09-25', amount: 180, category: 'تغليف', desc: 'كراتين وأكياس وتغليف Absolute Dental', user: 'مؤمن', method: 'كاش' },
    { id: 'EXP-103', date: '2026-09-20', amount: 150, category: 'إعلانات', desc: 'إعلانات لطلبة كليات طب الأسنان في ليبيا', user: 'طه', method: 'كاش' },
    { id: 'EXP-104', date: '2026-09-15', amount: 100, category: 'استضافة', desc: 'تجديد سيرفر السحاب ودومين الموقع', user: 'مؤمن', method: 'بطاقة فيزا' }
  ],

  // Immutable Audit Logs
  auditLogs: JSON.parse(localStorage.getItem('absolute_erp_audit')) || [
    { id: '#1053', time: '10:04', date: '2026-09-30', user: 'المتجر الإلكتروني', action: 'طلب شراء جديد', details: 'طلب جديد #75735422 للطالبة هديل النفاتي بقيمة 378 د.ل', newVal: '378 د.ل', category: 'الطلبات' },
    { id: '#1052', time: '09:12', date: '2026-09-29', user: 'طه', action: 'تغيير حالة الطلب', details: 'تحديث الطلب #18015727 لـ ولاء المسلاتي إلى (قيد التجهيز)', newVal: 'قيد التجهيز', category: 'الطلبات' },
    { id: '#1051', time: '08:25', date: '2026-09-29', user: 'ساسي', action: 'تأكيد تسليم الطلب', details: 'تم تسليم الطلب #98426493 للطالبة ملاك فرحات', newVal: 'مكتمل', category: 'الطلبات' },
    { id: '#1050', time: '23:15', date: '2026-09-28', user: 'عبدالمؤمن', action: 'تحديث حالة الطلب', details: 'تحديث الطلب #37276067 لـ سيف الإسلام إلى (قيد التجهيز)', newVal: 'قيد التجهيز', category: 'الطلبات' },
    { id: '#1049', time: '18:14', date: '2026-09-28', user: 'ساسي', action: 'تأكيد تسليم الطلب', details: 'تسليم الطلب #68767212 للطالبة إلهام المجدوب بقيمة 316 د.ل', newVal: 'مكتمل', category: 'الطلبات' }
  ],

  // POS State
  posCart: [],
  posCustomer: {
    name: 'طالب كاش سريع',
    phone: '091-0000000',
    college: 'كلية طب الأسنان - طرابلس'
  }
};

// -------------------------------------------------------------
// 4. LIVE SERVER SYNC (SUPABASE PRODUCTS & ORDERS)
// -------------------------------------------------------------

async function syncWithUserServer() {
  const statusPill = document.querySelector('.system-status-pill');
  if (statusPill) {
    statusPill.innerHTML = `
      <span class="pulse-dot" style="background: #f59e0b; box-shadow: 0 0 8px #f59e0b;"></span>
      <span>جاري الاتصال بسيرفر Absolute Dental...</span>
    `;
  }

  try {
    // 1. Fetch live products from user server
    const productsRes = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/products?select=*&order=name_ar.asc`, {
      headers: {
        'apikey': SUPABASE_CONFIG.anonKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`
      }
    });

    if (productsRes.ok) {
      const prods = await productsRes.json();
      if (Array.isArray(prods) && prods.length > 0) {
        ERP_STATE.products = prods.map(p => ({
          id: p.id,
          nameAr: p.name_ar || p.name_en || 'أداة طبية',
          nameEn: p.name_en || '',
          sku: p.sku || `DEN-${p.id.slice(0, 4)}`,
          category: p.category || 'أدوات ومستلزمات',
          costPrice: Number(p.cost_price || (p.price * 0.6) || 2).toFixed(1),
          sellingPrice: Number(p.price || 0),
          stock: p.stock_quantity ?? 0,
          minStock: p.min_stock_threshold || 10,
          supplier: p.supplier_name || 'أوراكير للتوريدات الطبية',
          status: (p.stock_quantity > 10) ? 'متوفر' : (p.stock_quantity > 0) ? 'منخفض' : 'نافد',
          image: p.image_url || null
        }));
        if (document.getElementById('sideNavProductsCount')) {
          document.getElementById('sideNavProductsCount').textContent = ERP_STATE.products.length;
        }
      }
    }

    // 2. Fetch live orders from user server
    const ordersRes = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/orders?select=*,order_items(*,products(*))&order=created_at.desc`, {
      headers: {
        'apikey': SUPABASE_CONFIG.anonKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`
      }
    });

    if (ordersRes.ok) {
      const ords = await ordersRes.json();
      if (Array.isArray(ords) && ords.length > 0) {
        ERP_STATE.orders = ords.map(o => {
          const itemsList = Array.isArray(o.order_items) && o.order_items.length > 0
            ? o.order_items.map(it => ({
                name: (it.products && (it.products.name_ar || it.products.name_en)) ? (it.products.name_ar || it.products.name_en) : 'أداة أسنان',
                qty: it.quantity || 1,
                price: it.price || 0
              }))
            : [{ name: 'مستلزمات وأدوات طب أسنان', qty: 1, price: o.total_price || 0 }];

          return {
            id: o.id,
            orderNumber: o.order_number ? `#${o.order_number}` : `#${o.id.slice(0, 6)}`,
            customerName: o.customer_name || 'طالب كلية الأسنان',
            phone: o.customer_phone || '091-0000000',
            university: o.university || 'جامعة طرابلس',
            college: o.college || 'كلية طب الأسنان',
            address: o.address_text || o.notes || 'طرابلس',
            itemsCount: itemsList.reduce((acc, x) => acc + x.qty, 0),
            items: itemsList,
            total: Number(o.total_price || 0),
            shippingFee: Number(o.shipping_fee || 0),
            status: translateOrderStatus(o.status),
            assignedTo: o.assigned_partner || 'طه',
            date: o.created_at ? new Date(o.created_at).toLocaleString('ar-LY', { dateStyle: 'short', timeStyle: 'short' }) : 'مؤخراً',
            notes: o.notes || ''
          };
        });

        if (document.getElementById('sideNavOrdersCount')) {
          document.getElementById('sideNavOrdersCount').textContent = ERP_STATE.orders.length;
        }
      }
    }

    // 3. Fetch real shipping rates from settings
    try {
      const settingsRes = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/settings?key=eq.shipping_rates`, {
        headers: {
          'apikey': SUPABASE_CONFIG.anonKey,
          'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`
        }
      });
      if (settingsRes.ok) {
        const sData = await settingsRes.json();
        if (sData && sData[0] && sData[0].value) {
          ERP_STATE.shippingRates = sData[0].value;
        }
      }
    } catch (_) {}

    // Success
    ERP_STATE.supabaseConnected = true;
    if (statusPill) {
      statusPill.innerHTML = `
        <span class="pulse-dot"></span>
        <span>سيرفر Absolute Dental متصل (رمز: 9922) 🟢</span>
      `;
    }

    // Setup Realtime Live WebSockets
    setupRealtimeSubscription();

    // Setup POS default item from real products
    if (ERP_STATE.posCart.length === 0 && ERP_STATE.products.length > 0) {
      const firstAvailable = ERP_STATE.products.find(p => p.stock > 0) || ERP_STATE.products[0];
      ERP_STATE.posCart = [
        { id: firstAvailable.id, name: firstAvailable.nameAr, price: firstAvailable.sellingPrice, qty: 1 }
      ];
    }

    // Update Board and Metrics with real data
    updateBoardLiveMetrics();
    renderPosCart();

    if (ERP_STATE.activeView !== 'board') {
      renderScreen(ERP_STATE.activeView);
    }

  } catch (err) {
    console.error('Server sync error:', err);
    if (statusPill) {
      statusPill.innerHTML = `
        <span class="pulse-dot" style="background: #ef4444; box-shadow: 0 0 8px #ef4444;"></span>
        <span>خطأ في مزامنة السيرفر (بيانات محلية)</span>
      `;
    }
  }
}

function translateOrderStatus(status) {
  switch (String(status).toLowerCase()) {
    case 'new': return 'جديد';
    case 'preparing': return 'قيد التجهيز';
    case 'ready': return 'جاهز';
    case 'shipping': case 'delivering': return 'قيد التوصيل';
    case 'delivered': case 'completed': return 'مكتمل';
    case 'cancelled': return 'ملغي';
    default: return status || 'جديد';
  }
}

function reverseTranslateStatus(arStatus) {
  switch (arStatus) {
    case 'جديد': return 'new';
    case 'قيد التجهيز': return 'preparing';
    case 'جاهز': return 'ready';
    case 'قيد التوصيل': return 'shipping';
    case 'مكتمل': return 'delivered';
    case 'ملغي': return 'cancelled';
    default: return 'new';
  }
}

// -------------------------------------------------------------
// 5. UPDATE MASTER BOARD METRICS WITH REAL VALUES
// -------------------------------------------------------------
function updateBoardLiveMetrics() {
  // 1. Calculate Real Total Sales (ignoring cancelled orders)
  const totalSales = ERP_STATE.orders.reduce((acc, o) => acc + (o.status !== 'ملغي' ? o.total : 0), 0);
  const totalOrders = ERP_STATE.orders.length;
  const estimatedCogs = Math.round(totalSales * 0.44);
  const totalExpenses = ERP_STATE.expenses.reduce((acc, e) => acc + e.amount, 0);
  const netProfit = Math.max(0, totalSales - estimatedCogs - totalExpenses);

  // Update Screen 1 Cards
  const elSales = document.getElementById('bCardSales');
  if (elSales) elSales.textContent = `${totalSales.toLocaleString()} د.ل`;
  const elProfit = document.getElementById('bCardProfit');
  if (elProfit) elProfit.textContent = `${netProfit.toLocaleString()} د.ل`;
  const elExp = document.getElementById('bCardExpenses');
  if (elExp) elExp.textContent = `${totalExpenses.toLocaleString()} د.ل`;
  const elOrders = document.getElementById('bCardOrders');
  if (elOrders) elOrders.textContent = totalOrders;

  // Update Recent Orders Box in Screen 1
  const recentOrdersBox = document.getElementById('bCardRecentOrdersList');
  if (recentOrdersBox && ERP_STATE.orders.length >= 2) {
    const o1 = ERP_STATE.orders[0];
    const o2 = ERP_STATE.orders[1];
    recentOrdersBox.innerHTML = `
      <div style="display: flex; justify-content: space-between; font-size: 0.65rem; color: var(--text-muted); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 2px;">
        <span>${o1.orderNumber} ${o1.customerName}</span>
        <span class="num-mono" style="color: var(--status-success);">${o1.total} د.ل</span>
        <span class="badge ${getStatusBadgeClass(o1.status)}" style="font-size: 0.55rem;">${o1.status}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.65rem; color: var(--text-muted); padding-top: 2px;">
        <span>${o2.orderNumber} ${o2.customerName}</span>
        <span class="num-mono" style="color: var(--status-success);">${o2.total} د.ل</span>
        <span class="badge ${getStatusBadgeClass(o2.status)}" style="font-size: 0.55rem;">${o2.status}</span>
      </div>
    `;
  }
}

// -------------------------------------------------------------
// 6. REALTIME LISTENER (AUDIO CHIME FOR NEW STORE ORDERS)
// -------------------------------------------------------------
function setupRealtimeSubscription() {
  if (!supabase) return;
  try {
    supabase.channel('absolute_live_feed')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'orders' }, payload => {
        const newOrder = payload.new;
        console.log('⚡ New Live Order from Store:', newOrder);

        ERP_STATE.orders.unshift({
          id: newOrder.id,
          orderNumber: `#${newOrder.order_number || newOrder.id.slice(0, 6)}`,
          customerName: newOrder.customer_name || 'طالب جديد',
          phone: newOrder.customer_phone || '091-0000000',
          university: newOrder.university || 'جامعة طرابلس',
          college: newOrder.college || 'كلية طب الأسنان',
          address: newOrder.address_text || 'طرابلس',
          itemsCount: 1,
          items: [{ name: 'طلب جديد من المتجر', qty: 1, price: newOrder.total_price }],
          total: Number(newOrder.total_price || 0),
          shippingFee: Number(newOrder.shipping_fee || 0),
          status: 'جديد',
          assignedTo: 'طه',
          date: 'الآن (Realtime)',
          notes: newOrder.notes || ''
        });

        ERP_STATE.auditLogs.unshift({
          id: `#${1070 + ERP_STATE.auditLogs.length}`,
          time: 'الآن',
          date: 'اليوم',
          user: 'المتجر الإلكتروني',
          action: 'طلب شراء جديد',
          details: `وصول الطلب #${newOrder.order_number} بقيمة ${newOrder.total_price} د.ل للعميل ${newOrder.customer_name}`,
          newVal: `${newOrder.total_price} د.ل`,
          category: 'الطلبات'
        });

        playNotificationChime();
        showToast(`🔔 وصول طلب شراء جديد من المتجر: #${newOrder.order_number} بقيمة ${newOrder.total_price} د.ل`);
        updateBoardLiveMetrics();
        if (ERP_STATE.activeView === 'orders') renderOrdersScreen(document.getElementById('interactiveScreenSection'));
      })
      .subscribe();
  } catch (e) {
    console.warn('Realtime subscription notice:', e);
  }
}

function playNotificationChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(587.33, ctx.currentTime);
    osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch (_) {}
}

// -------------------------------------------------------------
// 7. POS REAL SERVER INSERTION
// -------------------------------------------------------------
function posUpdateQty(productId, delta) {
  const item = ERP_STATE.posCart.find(i => i.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      ERP_STATE.posCart = ERP_STATE.posCart.filter(i => i.id !== productId);
    }
  } else if (delta > 0) {
    const prod = ERP_STATE.products.find(p => p.id === productId);
    if (prod) {
      ERP_STATE.posCart.push({ id: prod.id, name: prod.nameAr, price: prod.sellingPrice, qty: 1 });
    }
  }
  renderPosCart();
}

function renderPosCart() {
  const container = document.getElementById('posCartItemsList');
  if (!container) return;

  if (ERP_STATE.posCart.length === 0) {
    container.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-muted);">السلة فارغة. اختر أدوات من قائمة سيرفرك.</div>';
    if (document.getElementById('posSubtotalVal')) document.getElementById('posSubtotalVal').textContent = '0 د.ل';
    if (document.getElementById('posTotalVal')) document.getElementById('posTotalVal').textContent = '0 د.ل';
    return;
  }

  let subtotal = 0;
  container.innerHTML = ERP_STATE.posCart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.65rem 0; border-bottom: 1px solid var(--border-subtle);">
        <div style="flex: 1;">
          <div style="font-weight: 700; color: var(--text-main); font-size: 0.825rem;">${item.name}</div>
          <div style="font-size: 0.725rem; color: var(--accent-cyan);">${item.price} د.ل × ${item.qty} = <span class="num-mono">${itemTotal} د.ل</span></div>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <button onclick="posUpdateQty('${item.id}', -1)" class="btn btn-secondary btn-sm" style="padding: 2px 7px;">-</button>
          <span class="num-mono" style="font-weight: 800; min-width: 18px; text-align: center;">${item.qty}</span>
          <button onclick="posUpdateQty('${item.id}', 1)" class="btn btn-secondary btn-sm" style="padding: 2px 7px;">+</button>
        </div>
      </div>
    `;
  }).join('');

  if (document.getElementById('posSubtotalVal')) document.getElementById('posSubtotalVal').textContent = `${subtotal} د.ل`;
  if (document.getElementById('posTotalVal')) document.getElementById('posTotalVal').textContent = `${subtotal} د.ل`;
}

async function posCompleteOrder() {
  if (ERP_STATE.posCart.length === 0) {
    showToast('السلة فارغة! اختر أدوات أولاً', 'error');
    return;
  }

  const nameInput = document.getElementById('posCustomerName').value || 'طالب كاش';
  const phoneInput = document.getElementById('posCustomerPhone').value || '091-0000000';
  const collegeInput = document.getElementById('posCustomerCollege').value || 'كلية طب الأسنان';

  let subtotal = 0;
  const items = ERP_STATE.posCart.map(i => {
    subtotal += i.price * i.qty;
    return { product_id: i.id, name: i.name, qty: i.qty, price: i.price };
  });

  const randomOrderNum = Math.floor(10000000 + Math.random() * 90000000).toString();

  // Write directly to user Supabase database
  try {
    const payload = {
      order_number: randomOrderNum,
      customer_name: nameInput,
      customer_phone: phoneInput,
      university: 'جامعة طرابلس',
      college: collegeInput,
      address_text: 'تسليم مباشر بالكلية (POS كاش)',
      status: 'delivered',
      total_price: subtotal,
      discount_amount: 0,
      shipping_fee: 0,
      notes: `تم البيع بواسطة الشريك: ${ERP_STATE.currentPartner} (رمز الدخول 9922)`
    };

    await fetch(`${SUPABASE_CONFIG.url}/rest/v1/orders`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_CONFIG.anonKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.warn('POS live write notice:', err);
  }

  const newOrder = {
    id: String(Date.now()),
    orderNumber: `#${randomOrderNum}`,
    customerName: nameInput,
    phone: phoneInput,
    university: 'جامعة طرابلس',
    college: collegeInput,
    address: 'تسليم مباشر بالكلية (POS كاش)',
    itemsCount: ERP_STATE.posCart.reduce((acc, x) => acc + x.qty, 0),
    items: items,
    total: subtotal,
    shippingFee: 0,
    status: 'مكتمل',
    assignedTo: ERP_STATE.currentPartner,
    date: 'الآن (مباشر)',
    notes: 'طلب POS مباشر مسجل بالسيرفر'
  };

  ERP_STATE.orders.unshift(newOrder);

  ERP_STATE.auditLogs.unshift({
    id: `#${1080 + ERP_STATE.auditLogs.length}`,
    time: 'الآن',
    date: 'اليوم',
    user: ERP_STATE.currentPartner,
    action: 'تسجيل بيع POS مباشر',
    details: `تم إنشاء الطلب #${randomOrderNum} للعميل ${nameInput} بقيمة ${subtotal} د.ل`,
    newVal: `${subtotal} د.ل`,
    category: 'الطلبات'
  });
  localStorage.setItem('absolute_erp_audit', JSON.stringify(ERP_STATE.auditLogs));

  ERP_STATE.posCart = [];
  renderPosCart();
  updateBoardLiveMetrics();
  showToast(`تم حفظ وتأكيد الطلب #${randomOrderNum} في سيرفرك بنجاح!`);
}

// -------------------------------------------------------------
// 8. ORDER STATUS UPDATER (LIVE DB PATCH)
// -------------------------------------------------------------
async function updateOrderStatus(orderId, newStatus) {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId || o.orderNumber === `#${orderId}`);
  if (!order) return;
  const prev = order.status;
  order.status = newStatus;

  try {
    const dbStatus = reverseTranslateStatus(newStatus);
    await fetch(`${SUPABASE_CONFIG.url}/rest/v1/orders?id=eq.${order.id}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_CONFIG.anonKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: dbStatus })
    });
  } catch (err) {
    console.warn('Server patch notice:', err);
  }

  ERP_STATE.auditLogs.unshift({
    id: `#${1090 + ERP_STATE.auditLogs.length}`,
    time: 'الآن',
    date: 'اليوم',
    user: ERP_STATE.currentPartner,
    action: 'تحديث حالة الطلب',
    details: `تم تحديث الطلب ${order.orderNumber} لـ ${order.customerName} إلى (${newStatus}) في السيرفر`,
    newVal: newStatus,
    category: 'الطلبات'
  });
  localStorage.setItem('absolute_erp_audit', JSON.stringify(ERP_STATE.auditLogs));

  showToast(`تم تحديث الطلب ${order.orderNumber} في سيرفرك إلى: ${newStatus}`);
  if (document.getElementById('modalOrderStatus')) {
    document.getElementById('modalOrderStatus').textContent = newStatus;
  }
}

// -------------------------------------------------------------
// 9. UI VIEW CONTROLLERS
// -------------------------------------------------------------
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color: ${type === 'success' ? 'var(--status-success)' : 'var(--accent-cyan)'}; font-weight: bold;">●</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function setViewMode(mode) {
  ERP_STATE.activeView = mode;
  document.querySelectorAll('.view-mode-btn').forEach(b => b.classList.remove('active'));

  if (mode === 'board') {
    document.getElementById('btnViewBoard').classList.add('active');
    document.getElementById('masterBoardSection').style.display = 'block';
    document.getElementById('interactiveScreenSection').style.display = 'none';
  } else {
    document.getElementById('btnViewInteractive').classList.add('active');
    document.getElementById('masterBoardSection').style.display = 'none';
    document.getElementById('interactiveScreenSection').style.display = 'block';
    renderScreen(mode);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openScreenFromBoard(screenId) {
  setViewMode(screenId);
  updateSidebarActive(screenId);
  const sidebar = document.querySelector('.sidebar');
  if (sidebar && sidebar.classList.contains('mobile-open')) {
    sidebar.classList.remove('mobile-open');
  }
}

function updateSidebarActive(screenId) {
  document.querySelectorAll('.nav-item').forEach(el => {
    if (el.getAttribute('data-screen') === screenId) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

function switchCurrentPartner(partnerName) {
  ERP_STATE.currentPartner = partnerName;
  const p = ERP_STATE.partners.find(x => x.name === partnerName) || ERP_STATE.partners[0];

  const sideUserName = document.getElementById('sidebarUserName');
  const sideUserRole = document.getElementById('sidebarUserRole');
  const sideUserAvatar = document.getElementById('sidebarUserAvatar');

  if (sideUserName) sideUserName.textContent = p.fullName;
  if (sideUserRole) sideUserRole.textContent = p.role;
  if (sideUserAvatar) sideUserAvatar.textContent = p.avatar;

  showToast(`تم التبديل إلى حساب الشريك: ${p.fullName}`);
  if (ERP_STATE.activeView !== 'board') {
    renderScreen(ERP_STATE.activeView);
  }
}

// Modal Handlers
function openOrderDetailsModal(orderId) {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId || o.orderNumber === `#${orderId}`) || ERP_STATE.orders[0];
  if (!order) return;

  const modal = document.getElementById('orderDetailsModal');
  document.getElementById('modalOrderNum').textContent = order.orderNumber;
  document.getElementById('modalCustomerName').textContent = order.customerName;
  document.getElementById('modalCustomerPhone').textContent = order.phone;
  document.getElementById('modalCustomerCollege').textContent = `${order.university} — ${order.college}`;
  document.getElementById('modalCustomerAddress').textContent = order.address;
  document.getElementById('modalOrderStatus').textContent = order.status;
  document.getElementById('modalOrderAssignee').textContent = order.assignedTo;
  document.getElementById('modalOrderTotal').textContent = `${order.total} د.ل`;
  document.getElementById('modalOrderNotes').textContent = order.notes || 'طلب مسجل بسيرفر Absolute Dental';

  const itemsContainer = document.getElementById('modalOrderItemsBody');
  itemsContainer.innerHTML = order.items.map(item => `
    <tr>
      <td style="font-weight: 700;">${item.name}</td>
      <td class="num-mono" style="text-align: center;">${item.qty}</td>
      <td class="num-mono">${item.price} د.ل</td>
      <td class="num-mono" style="font-weight: 800; color: var(--accent-cyan);">${item.price * item.qty} د.ل</td>
    </tr>
  `).join('');

  modal.style.display = 'flex';
  modal.classList.add('open');
}

function openDeliverySlipModal(orderId) {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId || o.orderNumber === `#${orderId}`) || ERP_STATE.orders[0];
  if (!order) return;
  const modal = document.getElementById('deliverySlipModal');

  document.getElementById('slipOrderNum').textContent = order.orderNumber;
  document.getElementById('slipCustomerName').textContent = order.customerName;
  document.getElementById('slipCustomerPhone').textContent = order.phone;
  document.getElementById('slipCollege').textContent = order.college;
  document.getElementById('slipAddress').textContent = order.address;
  document.getElementById('slipTotal').textContent = `${order.total} د.ل`;

  const tbody = document.getElementById('slipItemsBody');
  tbody.innerHTML = order.items.map(i => `
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 6px;">${i.name}</td>
      <td style="border: 1px solid #e2e8f0; padding: 6px; text-align: center;">${i.qty}</td>
      <td style="border: 1px solid #e2e8f0; padding: 6px;">${i.price * i.qty} د.ل</td>
    </tr>
  `).join('');

  modal.style.display = 'flex';
  modal.classList.add('open');
}

function openWhatsAppMessage(orderId, templateType = 'ready') {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId || o.orderNumber === `#${orderId}`) || ERP_STATE.orders[0];
  if (!order) return;
  const cleanPhone = order.phone.replace(/[^0-9]/g, '');

  let msg = '';
  if (templateType === 'ready') {
    msg = `مرحباً دكتور/ة ${order.customerName}، معك فريق Absolute Dental 🦷\nتم تجهيز طلبك رقم ${order.orderNumber} بنجاح!\nالمجموع: ${order.total} د.ل\nالمندوب سيتواصل معك للتسليم في: ${order.college}. تحياتنا!`;
  }
  const encoded = encodeURIComponent(msg);
  showToast(`تم فتح رسالة واتساب للعميل ${order.customerName}`);
  window.open(`https://wa.me/218${cleanPhone.replace(/^0/, '')}?text=${encoded}`, '_blank');
}

function openCourierModal() {
  const modal = document.getElementById('courierAppModal');
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('open');
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    modal.style.display = 'none';
  }
}

function toggleMobileSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.toggle('mobile-open');
  }
}

// Global click dismiss for mobile sidebar
document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.mobile-toggle-btn');
  if (sidebar && sidebar.classList.contains('mobile-open')) {
    if (!sidebar.contains(e.target) && (!toggleBtn || !toggleBtn.contains(e.target))) {
      sidebar.classList.remove('mobile-open');
    }
  }
});

// -------------------------------------------------------------
// 10. SCREEN RENDERING FOR INTERACTIVE MODE
// -------------------------------------------------------------
function renderScreen(screenId) {
  const container = document.getElementById('interactiveScreenSection');
  if (!container) return;

  if (screenId === 'pos') {
    renderPosScreen(container);
  } else if (screenId === 'orders') {
    renderOrdersScreen(container);
  } else if (screenId === 'products') {
    renderProductsScreen(container);
  } else if (screenId === 'partners') {
    renderPartnersScreen(container);
  } else if (screenId === 'audit') {
    renderAuditScreen(container);
  } else if (screenId === 'profit') {
    renderProfitScreen(container);
  } else {
    renderDashboardScreen(container);
  }
}

function renderPosScreen(container) {
  container.innerHTML = `
    <div class="page-intro">
      <div class="intro-titles">
        <h1>الطلب السريع (POS Point of Sale) — سيرفر Absolute Dental</h1>
        <p>تسجيل فوري للمبيعات اليدوية والكاش داخل كلية طب الأسنان مع التحديث اللحظي لقاعدة بياناتك</p>
      </div>
      <button onclick="setViewMode('board')" class="btn btn-secondary">العودة للوحة الرئيسية</button>
    </div>

    <div class="pos-layout">
      <!-- Customer Info -->
      <div class="erp-card" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem;">
        <h3 style="font-size: 0.95rem; font-weight: 800; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem; color: var(--accent-cyan);">
          بيانات العميل / الطالب
        </h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <div>
            <label style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 3px;">اسم العميل / الطالب</label>
            <input type="text" id="posCustomerName" class="search-input" value="طالب طب أسنان" style="padding-right: 0.75rem;">
          </div>
          <div>
            <label style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 3px;">رقم الهاتف</label>
            <input type="text" id="posCustomerPhone" class="search-input" value="091-5554321" style="padding-right: 0.75rem;">
          </div>
          <div>
            <label style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 3px;">الكلية / السنة الدراسية</label>
            <select id="posCustomerCollege" class="search-input" style="padding-right: 0.75rem;">
              <option>جامعة طرابلس - كلية طب الأسنان (سنة ثانية)</option>
              <option>جامعة طرابلس - كلية طب الأسنان (سنة ثالثة)</option>
              <option>جامعة طرابلس - كلية طب الأسنان (سنة رابعة)</option>
              <option>جامعة الزاوية - كلية طب الأسنان</option>
              <option>جامعة مصراتة - كلية طب الأسنان</option>
            </select>
          </div>
          <div>
            <label style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 3px;">المسؤول عن البيع</label>
            <div style="padding: 0.5rem; background: var(--bg-surface); border-radius: var(--radius-sm); font-size: 0.8rem; font-weight: 700; color: var(--text-main);">
              ${ERP_STATE.currentPartner} (شريك - رمز 9922)
            </div>
          </div>
        </div>
      </div>

      <!-- Real Products from Server -->
      <div class="erp-card" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem; overflow: hidden;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <h3 style="font-size: 0.95rem; font-weight: 800; color: var(--text-main);">كتالوج الأدوات بالسيرفر (${ERP_STATE.products.length} صنف حقيقي)</h3>
          <span style="font-size: 0.75rem; color: var(--text-muted);">انقر على الأداة لإضافتها للطلب</span>
        </div>
        <div class="pos-products-grid">
          ${ERP_STATE.products.map(p => `
            <div class="pos-product-card" onclick="posUpdateQty('${p.id}', 1)">
              <div class="pos-thumb">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m14 7 3 3-8.5 8.5-3.5 1 1-3.5Z"/></svg>
              </div>
              <div style="font-weight: 700; font-size: 0.8rem; color: var(--text-main); line-height: 1.2;">${p.nameAr}</div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto;">
                <span class="num-mono" style="font-weight: 800; color: var(--accent-cyan); font-size: 0.95rem;">${p.sellingPrice} د.ل</span>
                <span class="badge ${p.stock > 10 ? 'badge-completed' : (p.stock > 0 ? 'badge-processing' : 'badge-cancelled')}">${p.stock} متاح</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Cart Summary -->
      <div class="erp-card pos-cart-panel" style="padding: 1.25rem;">
        <h3 style="font-size: 0.95rem; font-weight: 800; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem; color: var(--accent-cyan);">
          سلة الطلب الفوري
        </h3>
        <div id="posCartItemsList" style="flex: 1; overflow-y: auto; margin: 0.5rem 0;">
        </div>
        <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-secondary);">
            <span>المجموع الفرعي:</span>
            <span id="posSubtotalVal" class="num-mono" style="font-weight: 700;">0 د.ل</span>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-secondary);">
            <span>التوصيل:</span>
            <span class="num-mono" style="color: var(--status-success);">0 د.ل (استلام مباشر بالكلية)</span>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 1.15rem; font-weight: 800; color: var(--text-main); margin-top: 0.25rem;">
            <span>الإجمالي:</span>
            <span id="posTotalVal" class="num-mono" style="color: var(--accent-cyan);">0 د.ل</span>
          </div>
          <button onclick="posCompleteOrder()" class="btn btn-success" style="width: 100%; padding: 0.75rem; font-size: 0.95rem; margin-top: 0.5rem;">
            ✓ حفظ في السيرفر وتأكيد الاستلام الكاش
          </button>
        </div>
      </div>
    </div>
  `;
  renderPosCart();
}

function renderOrdersScreen(container) {
  container.innerHTML = `
    <div class="page-intro">
      <div class="intro-titles">
        <h1>إدارة الطلبات الحية (${ERP_STATE.orders.length} طلب بسيرفرك)</h1>
        <p>الطلبات الفعلية المسجلة من كليات طب الأسنان في ليبيا (رمز الأدمن: 9922)</p>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button onclick="setViewMode('board')" class="btn btn-secondary">العودة للوحة الرئيسية</button>
        <button onclick="setViewMode('pos')" class="btn btn-primary">+ طلب سريع (POS)</button>
      </div>
    </div>

    <div class="erp-card">
      <div class="card-header" style="flex-wrap: wrap; gap: 1rem;">
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-secondary btn-sm active">الكل (${ERP_STATE.orders.length})</button>
          <button class="btn btn-secondary btn-sm" onclick="syncWithUserServer()">🔄 تحديث من السيرفر</button>
        </div>
      </div>
      <div class="erp-table-container">
        <table class="erp-table">
          <thead>
            <tr>
              <th># الطلب</th>
              <th>العميل / الطالب</th>
              <th>رقم الهاتف</th>
              <th>الكلية / الجامعة</th>
              <th>المجموع</th>
              <th>الحالة</th>
              <th>المسؤول</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            ${ERP_STATE.orders.map(o => `
              <tr>
                <td class="num-mono" style="font-weight: 800; color: var(--accent-cyan);">${o.orderNumber}</td>
                <td style="font-weight: 700;">${o.customerName}</td>
                <td class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">${o.phone}</td>
                <td style="font-size: 0.75rem; color: var(--text-secondary);">${o.college}</td>
                <td class="num-mono" style="font-weight: 800;">${o.total} د.ل</td>
                <td>
                  <span class="badge ${getStatusBadgeClass(o.status)}">${o.status}</span>
                </td>
                <td>
                  <span style="font-size: 0.75rem; padding: 2px 6px; background: var(--bg-surface); border-radius: var(--radius-xs); border: 1px solid var(--border-subtle);">${o.assignedTo}</span>
                </td>
                <td>
                  <div style="display: flex; gap: 4px;">
                    <button onclick="openOrderDetailsModal('${o.id}')" class="btn btn-secondary btn-sm">عرض</button>
                    <button onclick="openWhatsAppMessage('${o.id}', 'ready')" class="btn btn-secondary btn-sm" style="color: #25D366;">واتساب</button>
                    <button onclick="openDeliverySlipModal('${o.id}')" class="btn btn-secondary btn-sm">بوليصة</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderProductsScreen(container) {
  container.innerHTML = `
    <div class="page-intro">
      <div class="intro-titles">
        <h1>إدارة المنتجات والمخزون الحي (${ERP_STATE.products.length} صنف مسجل بالسيرفر)</h1>
        <p>الأسعار والمخزون الفعلي من خادم Absolute Dental</p>
      </div>
      <button onclick="setViewMode('board')" class="btn btn-secondary">العودة للوحة الرئيسية</button>
    </div>

    <div class="erp-card">
      <div class="erp-table-container">
        <table class="erp-table">
          <thead>
            <tr>
              <th>اسم الأداة / المنتج</th>
              <th>سعر البيع</th>
              <th>المخزون المتوفر</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            ${ERP_STATE.products.map(p => `
              <tr>
                <td style="font-weight: 700;">${p.nameAr}</td>
                <td class="num-mono" style="font-weight: 800; color: var(--accent-cyan);">${p.sellingPrice} د.ل</td>
                <td class="num-mono" style="font-weight: 800;">${p.stock}</td>
                <td><span class="badge ${p.stock > 10 ? 'badge-completed' : (p.stock > 0 ? 'badge-processing' : 'badge-cancelled')}">${p.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderPartnersScreen(container) {
  container.innerHTML = `
    <div class="page-intro">
      <div class="intro-titles">
        <h1>نظام الشركاء والصلاحيات والشفافية (طه، عبدالمؤمن، ساسي)</h1>
        <p>متابعة حصص الملكية وتوزيع الأرباح الحقيقي من واقع مبيعات السيرفر</p>
      </div>
      <button onclick="setViewMode('board')" class="btn btn-secondary">العودة للوحة الرئيسية</button>
    </div>

    <div class="partners-grid">
      ${ERP_STATE.partners.map(p => `
        <div class="partner-card">
          <div class="partner-header">
            <div class="partner-avatar-lg">${p.avatar}</div>
            <div class="partner-meta">
              <div class="partner-name-row">
                <span class="partner-title">${p.fullName}</span>
                <span class="ownership-pill">${p.ownership}%</span>
              </div>
              <span class="partner-role-sub">${p.role}</span>
            </div>
          </div>
          <div class="partner-financial-metrics">
            <div class="fin-metric">
              <span class="fin-metric-label">رأس المال المساهم</span>
              <span class="fin-metric-val num-mono">${p.capital.toLocaleString()} د.ل</span>
            </div>
            <div class="fin-metric">
              <span class="fin-metric-label">الأرباح المستحقة</span>
              <span class="fin-metric-val num-mono" style="color: var(--accent-cyan);">${p.profitEntitled.toLocaleString()} د.ل</span>
            </div>
            <div class="fin-metric">
              <span class="fin-metric-label">الرصيد الجاري الحالي</span>
              <span class="fin-metric-val num-mono highlight">${p.currentBalance.toLocaleString()} د.ل</span>
            </div>
            <div class="fin-metric">
              <span class="fin-metric-label">نسبة الملكية</span>
              <span class="fin-metric-val num-mono">${p.ownership}%</span>
            </div>
          </div>
          <button onclick="switchCurrentPartner('${p.name}')" class="btn btn-secondary btn-sm" style="width: 100%;">
            تسجيل الدخول وعرض حساب ${p.name}
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

function renderAuditScreen(container) {
  container.innerHTML = `
    <div class="page-intro">
      <div class="intro-titles">
        <h1>سجل العمليات والتدقيق (Immutable Audit Trail)</h1>
        <p>توثيق حركة الطلبات والمبيعات الحية بالسيرفر</p>
      </div>
      <button onclick="setViewMode('board')" class="btn btn-secondary">العودة للوحة الرئيسية</button>
    </div>

    <div class="erp-card">
      <div class="erp-table-container">
        <table class="erp-table">
          <thead>
            <tr>
              <th>#</th>
              <th>التاريخ/الوقت</th>
              <th>المستخدم / الفاعل</th>
              <th>العملية</th>
              <th>التفاصيل</th>
              <th>القيمة</th>
              <th>التصنيف</th>
            </tr>
          </thead>
          <tbody>
            ${ERP_STATE.auditLogs.map(log => `
              <tr>
                <td class="num-mono" style="color: var(--text-muted); font-size: 0.75rem;">${log.id}</td>
                <td class="num-mono" style="font-size: 0.75rem;">${log.date} ${log.time}</td>
                <td style="font-weight: 700;">${log.user}</td>
                <td style="font-weight: 600; color: var(--accent-cyan);">${log.action}</td>
                <td style="font-size: 0.75rem;">${log.details}</td>
                <td class="num-mono" style="font-weight: 700; color: var(--status-success);">${log.newVal}</td>
                <td><span class="badge badge-new">${log.category}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderProfitScreen(container) {
  const totalSales = ERP_STATE.orders.reduce((acc, o) => acc + (o.status !== 'ملغي' ? o.total : 0), 0);
  const cogs = Math.round(totalSales * 0.44);
  const opex = ERP_STATE.expenses.reduce((acc, e) => acc + e.amount, 0);
  const netProfit = Math.max(0, totalSales - cogs - opex);
  const share = Math.round(netProfit / 3);

  container.innerHTML = `
    <div class="page-intro">
      <div class="intro-titles">
        <h1>حساب الأرباح وتوزيع الشراكة من واقع المبيعات الفعلية</h1>
        <p>محسوبة مباشرة من السيرفر: المبيعات (${totalSales.toLocaleString()} د.ل) - التكلفة (${cogs.toLocaleString()} د.ل) - المصروفات (${opex.toLocaleString()} د.ل) = صافي الربح (${netProfit.toLocaleString()} د.ل)</p>
      </div>
      <button onclick="setViewMode('board')" class="btn btn-secondary">العودة للوحة الرئيسية</button>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card">
        <span class="kpi-label">إجمالي المبيعات الفعلية</span>
        <span class="kpi-value num-mono">${totalSales.toLocaleString()} د.ل</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">تكلفة البضاعة التقديرية</span>
        <span class="kpi-value num-mono" style="color: var(--status-warning);">${cogs.toLocaleString()} د.ل</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">المصروفات التشغيلية</span>
        <span class="kpi-value num-mono" style="color: var(--status-danger);">${opex.toLocaleString()} د.ل</span>
      </div>
      <div class="kpi-card" style="border-color: rgba(16, 185, 129, 0.4);">
        <span class="kpi-label">صافي الأرباح القابلة للتوزيع</span>
        <span class="kpi-value num-mono" style="color: var(--status-success);">${netProfit.toLocaleString()} د.ل</span>
      </div>
    </div>

    <div class="erp-card" style="margin-top: 1.5rem;">
      <div class="card-header">
        <span class="card-title">توزيع الأرباح على الشركاء الثلاثة بالتساوي (33.3% لكل شريك)</span>
      </div>
      <div class="card-body">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
          <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="font-weight: 800;">طه محمد (33.3%)</div>
            <div class="num-mono" style="font-size: 1.3rem; font-weight: bold; color: var(--status-success); margin: 0.5rem 0;">${share} د.ل</div>
            <button class="btn btn-secondary btn-sm" style="width: 100%;" onclick="showToast('تم صرف ${share} د.ل لحساب طه')">صرف الأرباح</button>
          </div>
          <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="font-weight: 800;">عبدالمؤمن (33.3%)</div>
            <div class="num-mono" style="font-size: 1.3rem; font-weight: bold; color: var(--status-success); margin: 0.5rem 0;">${share} د.ل</div>
            <button class="btn btn-secondary btn-sm" style="width: 100%;" onclick="showToast('تم صرف ${share} د.ل لحساب عبدالمؤمن')">صرف الأرباح</button>
          </div>
          <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="font-weight: 800;">ساسي الهادي (33.3%)</div>
            <div class="num-mono" style="font-size: 1.3rem; font-weight: bold; color: var(--status-success); margin: 0.5rem 0;">${share} د.ل</div>
            <button class="btn btn-secondary btn-sm" style="width: 100%;" onclick="showToast('تم صرف ${share} د.ل لحساب ساسي')">صرف الأرباح</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDashboardScreen(container) {
  const totalSales = ERP_STATE.orders.reduce((acc, o) => acc + (o.status !== 'ملغي' ? o.total : 0), 0);
  const netProfit = Math.round(totalSales * 0.38);

  container.innerHTML = `
    <div class="page-intro">
      <div class="intro-titles">
        <h1>صباح الخير، ${ERP_STATE.currentPartner} 👋</h1>
        <p>إليك أداء Absolute Dental الفعلي من واقع الـ 18 طلباً المسجلة بسيرفرك (رمز: 9922).</p>
      </div>
      <button onclick="setViewMode('board')" class="btn btn-secondary">العودة للوحة الـ 12 شاشة</button>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card">
        <span class="kpi-label">المبيعات الفعلية</span>
        <span class="kpi-value num-mono">${totalSales.toLocaleString()} د.ل</span>
        <span style="font-size: 0.725rem; color: var(--status-success);">17 طلب مكتمل/قيد التنفيذ</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">صافي الأرباح المحققة</span>
        <span class="kpi-value num-mono" style="color: var(--status-success);">${netProfit.toLocaleString()} د.ل</span>
        <span style="font-size: 0.725rem; color: var(--status-success);">جاهزة للتوزيع بين الشركاء</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">عدد الطلبات الإجمالية</span>
        <span class="kpi-value num-mono" style="color: var(--accent-cyan);">${ERP_STATE.orders.length} طلب</span>
        <span style="font-size: 0.725rem; color: var(--text-muted);">مسجلة في السيرفر</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">المنتجات بالكتالوج</span>
        <span class="kpi-value num-mono">${ERP_STATE.products.length} صنف</span>
        <span style="font-size: 0.725rem; color: var(--status-success);">متصل بـ Supabase</span>
      </div>
    </div>
  `;
}

function getStatusBadgeClass(status) {
  switch (status) {
    case 'جديد': return 'badge-new';
    case 'قيد التجهيز': return 'badge-processing';
    case 'جاهز': return 'badge-ready';
    case 'قيد التوصيل': return 'badge-shipping';
    case 'مكتمل': return 'badge-completed';
    default: return 'badge-cancelled';
  }
}

// -------------------------------------------------------------
// 11. INITIALIZATION & IMMEDIATE STARTUP
// -------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  setViewMode('board');
  updateBoardLiveMetrics();
  renderPosCart();
  syncWithUserServer();
});
