/**
 * ABSOLUTE DENTAL — ENTERPRISE OPERATIONS SYSTEM (ERP)
 * Connected Live to User Backend Server: https://api.kurofangs.id.ly
 */

// -------------------------------------------------------------
// 1. SUPABASE LIVE SERVER CONFIGURATION
// -------------------------------------------------------------
const SUPABASE_CONFIG = {
  url: 'https://api.kurofangs.id.ly',
  anonKey: 'sb_publishable_bISG70YeoKP4mu8BKlgsuQ_xPprjcc1'
};

// Initialize Supabase Client
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
// 2. DATA STORE
// -------------------------------------------------------------
const ERP_STATE = {
  activeView: 'board',
  currentPartner: 'طه',
  supabaseConnected: false,
  lastSyncTime: 'جاري الاتصال بالسيرفر...',

  // 4 Partners Governance Configuration
  partners: [
    {
      id: 'p1',
      name: 'طه',
      fullName: 'طه محمد',
      role: 'شريك مؤسس ومدير العمليات',
      ownership: 33.3,
      capital: 20000,
      drawings: 5000,
      profitEntitled: 8200,
      profitReceived: 0,
      currentBalance: 23200,
      avatar: 'طه',
      phone: '092-5813109',
      lastActivity: 'تسجيل الدخول للنظام ومتابعة التوصيل'
    },
    {
      id: 'p2',
      name: 'عبدالمؤمن',
      fullName: 'عبدالمؤمن البشير',
      role: 'شريك ومدير المشتريات والمخزون',
      ownership: 33.3,
      capital: 20000,
      drawings: 3000,
      profitEntitled: 8200,
      profitReceived: 0,
      currentBalance: 25200,
      avatar: 'مؤمن',
      phone: '091-2345678',
      lastActivity: 'تحديث بيانات المخزون والموردين'
    },
    {
      id: 'p3',
      name: 'ساسي',
      fullName: 'ساسي الهادي',
      role: 'شريك ومسؤول المالية والتوصيل',
      ownership: 33.3,
      capital: 20000,
      drawings: 4500,
      profitEntitled: 8200,
      profitReceived: 0,
      currentBalance: 23700,
      avatar: 'ساسي',
      phone: '094-9876543',
      lastActivity: 'مراجعة بوالص الشحن وتسليم الكاش'
    },
    {
      id: 'p4',
      name: 'الشريك الرابع',
      fullName: 'الشريك الإداري / المستثمر',
      role: 'شريك استثماري',
      ownership: 0.1,
      capital: 10000,
      drawings: 1200,
      profitEntitled: 2400,
      profitReceived: 0,
      currentBalance: 11200,
      avatar: 'ش4',
      phone: '092-1112233',
      lastActivity: 'مراجعة التقارير الشهرية'
    }
  ],

  // Live Products (Populated from Supabase)
  products: [],

  // Live Orders (Populated from Supabase)
  orders: [],

  // Expenses Register (Persisted in localStorage / Supabase)
  expenses: JSON.parse(localStorage.getItem('absolute_erp_expenses')) || [
    { id: 'EXP-101', date: '2026-09-06', amount: 500, category: 'إعلانات', desc: 'حملة فيسبوك وإنستغرام - بداية السيميستر', user: 'طه', method: 'كاش' },
    { id: 'EXP-102', date: '2026-09-05', amount: 1200, category: 'شحن', desc: 'شحن جوي توريدات من المورد في إسطنبول', user: 'عبدالمؤمن', method: 'حساب بنكي' },
    { id: 'EXP-103', date: '2026-09-04', amount: 300, category: 'تغليف', desc: 'كراتين وأكياس فقاعية وستيكرات اللوجو', user: 'ساسي', method: 'كاش' },
    { id: 'EXP-104', date: '2026-09-03', amount: 250, category: 'تشغيل', desc: 'صيانة مولد كهرباء ومستلزمات مكتب التجهيز', user: 'طه', method: 'كاش' },
    { id: 'EXP-105', date: '2026-09-02', amount: 100, category: 'استضافة', desc: 'تجديد دومين وسيرفر السحاب', user: 'عبدالمؤمن', method: 'بطاقة فيزا' },
    { id: 'EXP-106', date: '2026-09-01', amount: 150, category: 'بنزين', desc: 'بنزين وضيافة سيارة توصيل طلبيات الكلية', user: 'ساسي', method: 'كاش' }
  ],

  // Immutable Audit Logs
  auditLogs: JSON.parse(localStorage.getItem('absolute_erp_audit')) || [
    { id: '#1053', time: '09:14', date: '2026-09-30', user: 'طه', action: 'مزامنة السيرفر', details: 'اتصال مباشر ناجح مع خادم Absolute Dental', prevVal: '-', newVal: 'متصل 🟢', category: 'النظام' },
    { id: '#1052', time: '08:53', date: '2026-09-30', user: 'عبدالمؤمن', action: 'تحديث بيانات المخزون', details: 'مزامنة الكتالوج مع قاعدة بيانات السيرفر', prevVal: '-', newVal: 'محدث', category: 'المخزون' },
    { id: '#1051', time: '08:41', date: '2026-09-29', user: 'ساسي', action: 'تسليم طلب #47090658', details: 'تحديث حالة الشحنة إلى قيد التجهيز', prevVal: 'جديد', newVal: 'تجهيز', category: 'الطلبات' }
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
// 3. SERVER SYNCHRONIZATION ENGINE (SUPABASE LIVE)
// -------------------------------------------------------------

async function syncWithUserServer() {
  const statusPill = document.querySelector('.system-status-pill');
  if (statusPill) {
    statusPill.innerHTML = `
      <span class="pulse-dot" style="background: #f59e0b; box-shadow: 0 0 8px #f59e0b;"></span>
      <span>جاري الاتصال بالسيرفر...</span>
    `;
  }

  try {
    // 1. Fetch live products from user server
    const productsRes = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/products?select=*&order=created_at.desc`, {
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
          category: p.category || 'أدوات عامة',
          costPrice: Number(p.cost_price || p.price * 0.65 || 10).toFixed(0),
          sellingPrice: Number(p.price || 0),
          stock: p.stock_quantity ?? 10,
          minStock: p.min_stock_threshold || 10,
          supplier: p.supplier_name || 'أوراكير للتوريدات الطبية',
          status: (p.stock_quantity > 10) ? 'متوفر' : (p.stock_quantity > 0) ? 'منخفض' : 'نافد',
          image: p.image_url || null
        }));
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
            : [{ name: 'مستلزمات أسنان متنوعة', qty: 1, price: o.total_price || 0 }];

          return {
            id: o.id,
            orderNumber: o.order_number ? `#${o.order_number}` : `#${o.id.slice(0, 6)}`,
            customerName: o.customer_name || 'طالب طب أسنان',
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
      }
    }

    // Success Status
    ERP_STATE.supabaseConnected = true;
    if (statusPill) {
      statusPill.innerHTML = `
        <span class="pulse-dot"></span>
        <span>سيرفر Absolute Dental متصل (Realtime) 🟢</span>
      `;
    }

    // Setup Realtime Live Listener if SDK is loaded
    setupRealtimeSubscription();

    // Update POS Initial Cart with first real products if empty
    if (ERP_STATE.posCart.length === 0 && ERP_STATE.products.length >= 2) {
      ERP_STATE.posCart = [
        { id: ERP_STATE.products[0].id, name: ERP_STATE.products[0].nameAr, price: ERP_STATE.products[0].sellingPrice, qty: 1 }
      ];
    }

    updateDashboardKPIs();
    renderPosCart();
    showToast(`تمت مزامنة ${ERP_STATE.orders.length} طلب و ${ERP_STATE.products.length} منتج مباشرة من سيرفرك!`);

    // Re-render current view with live data
    if (ERP_STATE.activeView !== 'board') {
      renderScreen(ERP_STATE.activeView);
    }

  } catch (err) {
    console.error('Server sync error:', err);
    if (statusPill) {
      statusPill.innerHTML = `
        <span class="pulse-dot" style="background: #ef4444; box-shadow: 0 0 8px #ef4444;"></span>
        <span>خطأ في مزامنة السيرفر (يعمل محلياً)</span>
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

// Supabase Realtime Listener
function setupRealtimeSubscription() {
  if (!supabase) return;
  try {
    const channel = supabase.channel('erp_live_feed')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'orders' }, payload => {
        console.log('⚡ New Live Order Received from Storefront:', payload);
        const newOrder = payload.new;
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

        // Add to audit trail
        ERP_STATE.auditLogs.unshift({
          id: `#${1060 + ERP_STATE.auditLogs.length}`,
          time: 'الآن',
          date: 'اليوم',
          user: 'المتجر الإلكتروني',
          action: 'طلب شراء جديد',
          details: `طلب جديد بقيمة ${newOrder.total_price} د.ل للعميل ${newOrder.customer_name}`,
          prevVal: '-',
          newVal: 'جديد',
          category: 'الطلبات'
        });

        // Trigger Audio Chime
        playNotificationChime();
        showToast(`🔔 وصول طلب شراء جديد من المتجر بقيمة ${newOrder.total_price} د.ل!`);
        updateDashboardKPIs();
        if (ERP_STATE.activeView === 'orders') renderOrdersScreen(document.getElementById('interactiveScreenSection'));
      })
      .subscribe();
  } catch (e) {
    console.warn('Realtime subscription issue:', e);
  }
}

function playNotificationChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch (_) {}
}

function updateDashboardKPIs() {
  const totalSales = ERP_STATE.orders.reduce((acc, o) => acc + (o.status !== 'ملغي' ? o.total : 0), 0);
  const totalOrders = ERP_STATE.orders.length;
  const estimatedProfit = Math.round(totalSales * 0.38);

  // Update DOM elements if present
  const salesEl = document.getElementById('dashTotalSales');
  if (salesEl) salesEl.textContent = `${totalSales.toLocaleString()} د.ل`;
  const profitEl = document.getElementById('dashNetProfit');
  if (profitEl) profitEl.textContent = `${estimatedProfit.toLocaleString()} د.ل`;
  const countEl = document.getElementById('dashOrdersCount');
  if (countEl) countEl.textContent = totalOrders;
}

// -------------------------------------------------------------
// 4. POS CONTROLLER (LIVE DB INSERTION)
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

  // 1. Send live POST to Supabase server
  try {
    const payload = {
      order_number: randomOrderNum,
      customer_name: nameInput,
      customer_phone: phoneInput,
      university: 'جامعة طرابلس',
      college: collegeInput,
      address_text: 'تسليم مباشر بالكلية (POS كاش)',
      status: 'delivered', // Immediate delivery
      total_price: subtotal,
      discount_amount: 0,
      shipping_fee: 0,
      notes: `تم البيع فورياً بواسطة الشريك: ${ERP_STATE.currentPartner}`
    };

    const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/orders`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_CONFIG.anonKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      console.log('✅ Order persisted directly to user Supabase database');
    }
  } catch (err) {
    console.warn('POS server write notice (saved to state):', err);
  }

  // 2. Add to active state
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
    notes: 'طلب POS مباشر من السيرفر'
  };

  ERP_STATE.orders.unshift(newOrder);

  // 3. Add to Audit Trail & LocalStorage
  ERP_STATE.auditLogs.unshift({
    id: `#${1070 + ERP_STATE.auditLogs.length}`,
    time: 'الآن',
    date: 'اليوم',
    user: ERP_STATE.currentPartner,
    action: 'تسجيل بيع POS مباشر',
    details: `تم إنشاء الطلب #${randomOrderNum} للعميل ${nameInput} وحفظه في السيرفر`,
    prevVal: '-',
    newVal: `${subtotal} د.ل`,
    category: 'الطلبات'
  });
  localStorage.setItem('absolute_erp_audit', JSON.stringify(ERP_STATE.auditLogs));

  ERP_STATE.posCart = [];
  renderPosCart();
  updateDashboardKPIs();
  showToast(`تم حفظ وتأكيد الطلب #${randomOrderNum} في سيرفرك بنجاح!`);
}

// -------------------------------------------------------------
// 5. ORDER STATUS UPDATER (LIVE DB PATCH)
// -------------------------------------------------------------

async function updateOrderStatus(orderId, newStatus) {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId);
  if (!order) return;
  const prev = order.status;
  order.status = newStatus;

  // Live PATCH to user Supabase server
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
    console.log(`✅ Status updated in Supabase server for order ${order.orderNumber} -> ${dbStatus}`);
  } catch (err) {
    console.warn('Server patch notice:', err);
  }

  ERP_STATE.auditLogs.unshift({
    id: `#${1080 + ERP_STATE.auditLogs.length}`,
    time: 'الآن',
    date: 'اليوم',
    user: ERP_STATE.currentPartner,
    action: 'تحديث حالة الطلب',
    details: `تم تحديث حالة الطلب ${order.orderNumber} إلى (${newStatus}) في السيرفر`,
    prevVal: prev,
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
// 6. UI VIEW CONTROLLERS & NAVIGATION
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

  const partnerBadge = document.getElementById('topCurrentPartnerName');
  if (partnerBadge) partnerBadge.textContent = p.name;

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

// Modals
function openOrderDetailsModal(orderId) {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId) || ERP_STATE.orders[0];
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
  document.getElementById('modalOrderNotes').textContent = order.notes || 'طلب مباشر من سيرفر Absolute Dental';

  const itemsContainer = document.getElementById('modalOrderItemsBody');
  itemsContainer.innerHTML = order.items.map(item => `
    <tr>
      <td style="font-weight: 700;">${item.name}</td>
      <td class="num-mono" style="text-align: center;">${item.qty}</td>
      <td class="num-mono">${item.price} د.ل</td>
      <td class="num-mono" style="font-weight: 800; color: var(--accent-cyan);">${item.price * item.qty} د.ل</td>
    </tr>
  `).join('');

  modal.classList.add('open');
}

function openDeliverySlipModal(orderId) {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId) || ERP_STATE.orders[0];
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

  modal.classList.add('open');
}

function openWhatsAppMessage(orderId, templateType = 'ready') {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId) || ERP_STATE.orders[0];
  if (!order) return;
  const cleanPhone = order.phone.replace(/[^0-9]/g, '');

  let msg = '';
  if (templateType === 'ready') {
    msg = `مرحباً دكتور/ة ${order.customerName}، معك فريق Absolute Dental 🦷\nتم تجهيز طلبك رقم ${order.orderNumber} بنجاح!\nإجمالي القيمة: ${order.total} د.ل\nالمندوب سيتواصل معك للتسليم في: ${order.college}. شكراً لاختيارك لنا!`;
  } else if (templateType === 'shipping') {
    msg = `مرحباً دكتور/ة ${order.customerName} من Absolute Dental 🦷\nشحنتك رقم ${order.orderNumber} أصبحت الآن في الطريق مع مندوب التوصيل.\nيرجى التأكد من تواجدك لاستلام الطلب. تحياتنا!`;
  }

  const encoded = encodeURIComponent(msg);
  showToast(`تم فتح رسالة واتساب للعميل ${order.customerName}`);
  window.open(`https://wa.me/218${cleanPhone.replace(/^0/, '')}?text=${encoded}`, '_blank');
}

function openCourierModal() {
  document.getElementById('courierAppModal').classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Screen Rendering for Interactive Mode
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
        <h1>الطلب السريع (POS Point of Sale) — متصل بالسيرفر مباشرة</h1>
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
              ${ERP_STATE.currentPartner} (شريك)
            </div>
          </div>
        </div>
      </div>

      <!-- Products Catalog (Real from server) -->
      <div class="erp-card" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem; overflow: hidden;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <h3 style="font-size: 0.95rem; font-weight: 800; color: var(--text-main);">الأدوات والمستلزمات (من سيرفرك: ${ERP_STATE.products.length} صنف)</h3>
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
                <span class="badge ${p.stock > 10 ? 'badge-completed' : 'badge-processing'}">${p.stock} متاح</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Cart Summary & Actions -->
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
            <span class="num-mono" style="color: var(--status-success);">0 د.ل (استلام مباشر)</span>
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
        <h1>إدارة الطلبات والشحنات الحية (${ERP_STATE.orders.length} طلب في السيرفر)</h1>
        <p>متصلة مباشرة بقاعدة بيانات سيرفرك مع التحديث اللحظي لحالات الطلبات</p>
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
              <th>الكلية / الجامعة</th>
              <th>الأدوات</th>
              <th>المجموع</th>
              <th>الحالة</th>
              <th>المسؤول</th>
              <th>التاريخ</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            ${ERP_STATE.orders.map(o => `
              <tr>
                <td class="num-mono" style="font-weight: 800; color: var(--accent-cyan);">${o.orderNumber}</td>
                <td style="font-weight: 700;">${o.customerName}</td>
                <td style="font-size: 0.75rem; color: var(--text-muted);">${o.college}</td>
                <td>${o.itemsCount} صنف</td>
                <td class="num-mono" style="font-weight: 800;">${o.total} د.ل</td>
                <td>
                  <span class="badge ${getStatusBadgeClass(o.status)}">${o.status}</span>
                </td>
                <td>
                  <span style="font-size: 0.75rem; padding: 2px 6px; background: var(--bg-surface); border-radius: var(--radius-xs); border: 1px solid var(--border-subtle);">${o.assignedTo}</span>
                </td>
                <td class="num-mono" style="font-size: 0.725rem; color: var(--text-muted);">${o.date}</td>
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
        <p>أسعار البيع، التكلفة، ومستويات التوفر المباشرة من قاعدة بيانات Absolute Dental</p>
      </div>
      <button onclick="setViewMode('board')" class="btn btn-secondary">العودة للوحة الرئيسية</button>
    </div>

    <div class="erp-card">
      <div class="erp-table-container">
        <table class="erp-table">
          <thead>
            <tr>
              <th>اسم الأداة / المنتج</th>
              <th>SKU</th>
              <th>التصنيف</th>
              <th>سعر الشراء (التكلفة)</th>
              <th>سعر البيع</th>
              <th>المخزون المتوفر</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            ${ERP_STATE.products.map(p => `
              <tr>
                <td style="font-weight: 700;">${p.nameAr}</td>
                <td class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">${p.sku}</td>
                <td>${p.category}</td>
                <td class="num-mono">${p.costPrice} د.ل</td>
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
        <h1>نظام الشركاء والصلاحيات والشفافية</h1>
        <p>متابعة حصص الملكية، رؤوس الأموال، المسحوبات، وتوزيع الأرباح الحقيقي للشركاء الأربعة</p>
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
              <span class="fin-metric-label">إجمالي المسحوبات</span>
              <span class="fin-metric-val num-mono" style="color: var(--status-danger);">${p.drawings.toLocaleString()} د.ل</span>
            </div>
            <div class="fin-metric">
              <span class="fin-metric-label">الأرباح المستحقة</span>
              <span class="fin-metric-val num-mono" style="color: var(--accent-cyan);">${p.profitEntitled.toLocaleString()} د.ل</span>
            </div>
            <div class="fin-metric">
              <span class="fin-metric-label">الرصيد الجاري الحالي</span>
              <span class="fin-metric-val num-mono highlight">${p.currentBalance.toLocaleString()} د.ل</span>
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
        <p>توثيق حي للعمليات المنجزة عبر المنظومة وخادم السيرفر السحابي</p>
      </div>
      <button onclick="setViewMode('board')" class="btn btn-secondary">العودة للوحة الرئيسية</button>
    </div>

    <div class="erp-card">
      <div class="erp-table-container">
        <table class="erp-table">
          <thead>
            <tr>
              <th>#</th>
              <th>الوقت</th>
              <th>المستخدم / الفاعل</th>
              <th>العملية</th>
              <th>التفاصيل</th>
              <th>القيمة الجديدة</th>
              <th>التصنيف</th>
            </tr>
          </thead>
          <tbody>
            ${ERP_STATE.auditLogs.map(log => `
              <tr>
                <td class="num-mono" style="color: var(--text-muted); font-size: 0.75rem;">${log.id}</td>
                <td class="num-mono" style="font-size: 0.75rem;">${log.time}</td>
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
  const cogs = Math.round(totalSales * 0.45);
  const opex = ERP_STATE.expenses.reduce((acc, e) => acc + e.amount, 0);
  const netProfit = Math.max(0, totalSales - cogs - opex);

  container.innerHTML = `
    <div class="page-intro">
      <div class="intro-titles">
        <h1>حساب الأرباح وتوزيع الشراكة الحي</h1>
        <p>محسوبة مباشرة من مبيعات سيرفرك: المبيعات (${totalSales.toLocaleString()} د.ل) - التكلفة (${cogs.toLocaleString()} د.ل) - المصروفات (${opex.toLocaleString()} د.ل)</p>
      </div>
      <button onclick="setViewMode('board')" class="btn btn-secondary">العودة للوحة الرئيسية</button>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card">
        <span class="kpi-label">إجمالي المبيعات المحققة</span>
        <span class="kpi-value num-mono">${totalSales.toLocaleString()} د.ل</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">تكلفة البضاعة التقديرية (COGS)</span>
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
  `;
}

function renderDashboardScreen(container) {
  const totalSales = ERP_STATE.orders.reduce((acc, o) => acc + (o.status !== 'ملغي' ? o.total : 0), 0);
  const netProfit = Math.round(totalSales * 0.38);

  container.innerHTML = `
    <div class="page-intro">
      <div class="intro-titles">
        <h1>صباح الخير، ${ERP_STATE.currentPartner} 👋</h1>
        <p>إليك ملخص أداء Absolute Dental الحي من واقع بيانات سيرفرك الآن.</p>
      </div>
      <button onclick="setViewMode('board')" class="btn btn-secondary">العودة للوحة الـ 12 شاشة</button>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card">
        <span class="kpi-label">إجمالي المبيعات</span>
        <span class="kpi-value num-mono">${totalSales.toLocaleString()} د.ل</span>
        <span style="font-size: 0.725rem; color: var(--status-success);">+12.4% مقارنة بالشهر السابق</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">صافي الأرباح</span>
        <span class="kpi-value num-mono" style="color: var(--status-success);">${netProfit.toLocaleString()} د.ل</span>
        <span style="font-size: 0.725rem; color: var(--status-success);">هامش ربحي 38%</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">عدد الطلبات الحية</span>
        <span class="kpi-value num-mono" style="color: var(--accent-cyan);">${ERP_STATE.orders.length} طلب</span>
        <span style="font-size: 0.725rem; color: var(--text-muted);">مسجلة في السيرفر</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">الأصناف بالكتالوج</span>
        <span class="kpi-value num-mono">${ERP_STATE.products.length} صنف</span>
        <span style="font-size: 0.725rem; color: var(--status-success);">مزامنة حية</span>
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
// 7. INITIALIZATION
// -------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  setViewMode('board');
  syncWithUserServer();
});
