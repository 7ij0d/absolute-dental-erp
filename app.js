/**
 * ABSOLUTE DENTAL — ENTERPRISE OPERATIONS SYSTEM (ERP)
 * Production JavaScript Engine — Minimalist SaaS Architecture
 * Primary Reference: Clean Light Warm-Gray & Midnight Navy
 */

// -------------------------------------------------------------
// 1. GLOBAL STATE & PRODUCTION DATA STORE
// -------------------------------------------------------------
const SUPABASE_CONFIG = {
  url: 'https://api.kurofangs.id.ly',
  anonKey: 'sb_publishable_bISG70YeoKP4mu8BKlgsuQ_xPprjcc1'
};

let supabaseClient = null;
if (window.supabase) {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
  } catch (_) {}
}

const ERP_STATE = {
  activeScreen: 'dashboard',
  currentPartner: 'طه',
  currentOrderInModal: null,

  // Products from Seed
  products: (typeof INITIAL_PRODUCTS !== 'undefined' && Array.isArray(INITIAL_PRODUCTS))
    ? [...INITIAL_PRODUCTS]
    : [],

  // Orders from Seed
  orders: (typeof INITIAL_ORDERS !== 'undefined' && Array.isArray(INITIAL_ORDERS))
    ? [...INITIAL_ORDERS]
    : [],

  // POS State
  posCart: [],

  // Operating Expenses Ledger
  expenses: JSON.parse(localStorage.getItem('abs_erp_expenses')) || [
    { id: 'EXP-101', date: '2026-09-30', desc: 'شحن طلبيات وتوصيل كليات طرابلس والزاوية', category: 'شحن وتوصيل', user: 'ساسي', method: 'كاش', amount: 500 },
    { id: 'EXP-102', date: '2026-09-28', desc: 'كراتين وأكياس وتغليف Absolute Dental', category: 'تغليف', user: 'عبدالمؤمن', method: 'كاش', amount: 350 },
    { id: 'EXP-103', date: '2026-09-25', desc: 'إعلانات وحملات طلبة كليات الأسنان في ليبيا', category: 'تسويق', user: 'طه', method: 'كاش', amount: 450 },
    { id: 'EXP-104', date: '2026-09-20', desc: 'استضافة وسيرفر المنظومة السحابي والدومين', category: 'سيرفر وتقنية', user: 'طه', method: 'بطاقة فيزا', amount: 200 }
  ],

  // Audit Logs (Operations Ledger)
  auditLogs: JSON.parse(localStorage.getItem('abs_erp_audit')) || [
    { id: '#1092', time: '10:04', date: '2026-09-30', user: 'طه', action: 'تسجيل مصروف', details: 'أضاف مصروفاً بقيمة 500 د.ل (شحن كليات)', oldVal: '-', newVal: '500 د.ل' },
    { id: '#1091', time: '09:45', date: '2026-09-30', user: 'عبدالمؤمن', action: 'إكمال طلب', details: 'أكمل الطلب #1067 للطالبة سارة علي', oldVal: 'قيد التجهيز', newVal: 'جاهز للتوصيل' },
    { id: '#1090', time: '09:12', date: '2026-09-30', user: 'ساسي', action: 'إيداع خزينة', details: 'أضاف دفعة للصندوق بقيمة 1,000 د.ل (كاش)', oldVal: '-', newVal: '1,000 د.ل' },
    { id: '#1089', time: '08:20', date: '2026-09-30', user: 'طه', action: 'تعديل سعر', details: 'عدّل سعر منتج مرآة فحص Dental Mouth Mirror', oldVal: '14 د.ل', newVal: '15 د.ل' },
    { id: '#1088', time: '07:15', date: '2026-09-30', user: 'عبدالمؤمن', action: 'إضافة منتج', details: 'أضاف منتج جديد (ماسك طبي جراحي)', oldVal: '-', newVal: 'متوفر' }
  ]
};

// -------------------------------------------------------------
// 2. SPA NAVIGATION & SCREEN ROUTING
// -------------------------------------------------------------
function navigateToScreen(screenId, subSection = null) {
  ERP_STATE.activeScreen = screenId;

  // Update Sidebar active state
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    if (item.getAttribute('data-screen') === screenId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Hide all screens
  document.querySelectorAll('.secondary-screen-view').forEach(screen => {
    screen.classList.remove('active');
  });

  // Show target screen
  const targetScreen = document.getElementById(`${screenId}Screen`);
  if (targetScreen) {
    targetScreen.classList.add('active');
  } else {
    document.getElementById('dashboardScreen').classList.add('active');
  }

  // Populate data for that specific screen
  if (screenId === 'orders') {
    renderOrdersTable('all');
  } else if (screenId === 'products') {
    renderProductsTable();
  } else if (screenId === 'inventory') {
    renderInventoryTable();
  } else if (screenId === 'finance') {
    renderExpensesTable();
  } else if (screenId === 'audit') {
    renderFullAuditTable();
  }

  // Auto-close mobile sidebar if open
  const sidebar = document.querySelector('.sidebar');
  if (sidebar && sidebar.classList.contains('mobile-open')) {
    sidebar.classList.remove('mobile-open');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSubmenu(submenuId, event) {
  if (event) event.stopPropagation();
  const submenu = document.getElementById(submenuId);
  const parentItem = submenu ? submenu.previousElementSibling : null;
  if (submenu) {
    submenu.classList.toggle('open');
    if (parentItem) parentItem.classList.toggle('open');
  }
}

// -------------------------------------------------------------
// 3. CHART CONTROLS (Sales over last 30 days)
// -------------------------------------------------------------
function filterChartPeriod(period, btn) {
  // Update button active state
  document.querySelectorAll('.chart-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const displayEl = document.getElementById('chartTotalDisplay');
  if (!displayEl) return;

  if (period === 'day') {
    displayEl.textContent = '1,620 د.ل';
    showToast('عرض مبيعات اليوم (1,620 د.ل)');
  } else if (period === 'week') {
    displayEl.textContent = '11,400 د.ل';
    showToast('عرض مبيعات هذا الأسبوع (11,400 د.ل)');
  } else if (period === 'month') {
    displayEl.textContent = '48,750 د.ل';
    showToast('عرض مبيعات الشهر الحالي (48,750 د.ل)');
  } else if (period === '3months') {
    displayEl.textContent = '142,300 د.ل';
    showToast('عرض مبيعات آخر 3 أشهر (142,300 د.ل)');
  }
}

// -------------------------------------------------------------
// 4. ORDERS MANAGEMENT (Clean Table & Detailed Dialog)
// -------------------------------------------------------------
function renderOrdersTable(filterStatus = 'all', searchQuery = '') {
  const tbody = document.getElementById('fullOrdersTableBody');
  if (!tbody) return;

  let filtered = [...ERP_STATE.orders];

  if (filterStatus && filterStatus !== 'all') {
    const statusMap = {
      'new': 'جديد',
      'preparing': 'قيد التجهيز',
      'shipping': 'جاهز للتوصيل',
      'completed': 'مكتمل'
    };
    const targetStatus = statusMap[filterStatus] || filterStatus;
    filtered = filtered.filter(o => o.status === targetStatus);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(o =>
      o.customerName.toLowerCase().includes(q) ||
      o.orderNumber.toLowerCase().includes(q) ||
      o.phone.includes(q) ||
      (o.college && o.college.toLowerCase().includes(q))
    );
  }

  tbody.innerHTML = filtered.map(order => `
    <tr>
      <td class="num-mono" style="font-weight: 800; color: var(--primary);">${order.orderNumber}</td>
      <td style="font-weight: 700; color: var(--text-main);">${order.customerName}</td>
      <td class="num-mono" style="color: var(--text-muted); font-size: 0.775rem;">${order.phone}</td>
      <td style="color: var(--text-muted); font-size: 0.75rem;">${order.college || 'كلية طب الأسنان طرابلس'}</td>
      <td class="num-mono" style="font-weight: 800; color: var(--text-main);">${order.total} د.ل</td>
      <td>
        <span class="status-pill ${getOrderStatusClass(order.status)}">${order.status}</span>
      </td>
      <td style="color: var(--text-body); font-weight: 600;">${order.assignedTo || 'طه'}</td>
      <td>
        <div style="display: flex; gap: 4px;">
          <button class="order-open-btn" onclick="openOrderDetailsById('${order.id}')">فتح</button>
          <button class="btn-secondary btn-sm" onclick="openWhatsAppForOrder('${order.id}')" title="واتساب">💬</button>
          <button class="btn-secondary btn-sm" onclick="openDeliverySlipById('${order.id}')" title="بوليصة شحن">🖨️</button>
        </div>
      </td>
    </tr>
  `).join('');

  const countBadge = document.getElementById('ordersTotalTabCount');
  if (countBadge) countBadge.textContent = ERP_STATE.orders.length;
}

function filterOrdersTable(status, btn) {
  document.querySelectorAll('.table-filter-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const searchInput = document.getElementById('ordersTableSearchInput');
  const query = searchInput ? searchInput.value : '';
  renderOrdersTable(status, query);
}

function handleOrdersSearch(val) {
  const activeTab = document.querySelector('.table-filter-tab.active');
  const status = activeTab ? activeTab.getAttribute('onclick').match(/'([^']+)'/)[1] : 'all';
  renderOrdersTable(status, val);
}

function getOrderStatusClass(status) {
  switch (status) {
    case 'جديد': return 'new';
    case 'قيد التجهيز': return 'preparing';
    case 'جاهز للتوصيل': return 'ready';
    case 'مكتمل': return 'completed';
    default: return 'new';
  }
}

// -------------------------------------------------------------
// 5. MODAL SYSTEM (Order Details, Slip, POS, Palette)
// -------------------------------------------------------------
function openModal(id) {
  const modal = document.getElementById(id);
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

function openOrderDetailsById(orderId) {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId || o.orderNumber === `#${orderId}`) || ERP_STATE.orders[0];
  if (!order) return;

  ERP_STATE.currentOrderInModal = order;

  document.getElementById('modalOrderNum').textContent = order.orderNumber;
  document.getElementById('modalCustomerName').textContent = order.customerName;
  document.getElementById('modalCustomerPhone').textContent = order.phone;
  document.getElementById('modalCustomerCollege').textContent = `${order.university || 'جامعة طرابلس'} — ${order.college || 'كلية طب الأسنان'}`;
  document.getElementById('modalCustomerAddress').textContent = order.address || 'طرابلس';
  document.getElementById('modalOrderTotal').textContent = `${order.total} د.ل`;

  const statusBadge = document.getElementById('modalOrderStatus');
  if (statusBadge) {
    statusBadge.textContent = order.status;
    statusBadge.className = `status-pill ${getOrderStatusClass(order.status)}`;
  }

  const itemsTbody = document.getElementById('modalOrderItemsBody');
  if (itemsTbody) {
    itemsTbody.innerHTML = (order.items || []).map(item => `
      <tr>
        <td style="font-weight: 700; color: var(--text-main);">${item.name}</td>
        <td class="num-mono" style="text-align: center;">${item.qty}</td>
        <td class="num-mono">${item.price} د.ل</td>
        <td class="num-mono" style="font-weight: 800; color: var(--primary);">${item.price * item.qty} د.ل</td>
      </tr>
    `).join('');
  }

  openModal('orderDetailsModal');
}

function updateOrderStatusFromModal(newStatus) {
  if (!ERP_STATE.currentOrderInModal) return;
  const order = ERP_STATE.currentOrderInModal;
  const oldStatus = order.status;
  order.status = newStatus;

  // Update audit log
  ERP_STATE.auditLogs.unshift({
    id: `#${1095 + ERP_STATE.auditLogs.length}`,
    time: new Date().toLocaleTimeString('ar-LY', { hour: '2-digit', minute: '2-digit' }),
    date: 'اليوم',
    user: ERP_STATE.currentPartner,
    action: 'تحديث حالة الطلب',
    details: `تحديث الطلب ${order.orderNumber} لـ ${order.customerName} إلى (${newStatus})`,
    oldVal: oldStatus,
    newVal: newStatus
  });
  localStorage.setItem('abs_erp_audit', JSON.stringify(ERP_STATE.auditLogs));

  // Update UI in modal
  const statusBadge = document.getElementById('modalOrderStatus');
  if (statusBadge) {
    statusBadge.textContent = newStatus;
    statusBadge.className = `status-pill ${getOrderStatusClass(newStatus)}`;
  }

  showToast(`تم تحديث حالة الطلب ${order.orderNumber} إلى: ${newStatus}`);
  if (ERP_STATE.activeScreen === 'orders') renderOrdersTable();
}

function openWhatsAppForCurrentModal() {
  if (ERP_STATE.currentOrderInModal) {
    openWhatsAppForOrder(ERP_STATE.currentOrderInModal.id);
  }
}

function openWhatsAppForOrder(orderId) {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId || o.orderNumber === `#${orderId}`);
  if (!order) return;
  const cleanPhone = order.phone.replace(/[^0-9]/g, '').replace(/^0/, '');
  const msg = `مرحباً دكتور/ة ${order.customerName}، معك فريق Absolute Dental 🦷\nطلبك رقم ${order.orderNumber} بقيمة ${order.total} د.ل قيد المتابعة.\nمكان التسليم: ${order.college}. تحياتنا!`;
  window.open(`https://wa.me/218${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function openSlipForCurrentModal() {
  if (ERP_STATE.currentOrderInModal) {
    openDeliverySlipById(ERP_STATE.currentOrderInModal.id);
  }
}

function openDeliverySlipById(orderId) {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId || o.orderNumber === `#${orderId}`);
  if (!order) return;

  document.getElementById('slipOrderNum').textContent = order.orderNumber;
  document.getElementById('slipCustomerName').textContent = order.customerName;
  document.getElementById('slipCustomerPhone').textContent = order.phone;
  document.getElementById('slipCollege').textContent = order.college || 'كلية طب الأسنان طرابلس';
  document.getElementById('slipAddress').textContent = order.address || 'طرابلس';
  document.getElementById('slipTotal').textContent = `${order.total} د.ل`;

  const tbody = document.getElementById('slipItemsBody');
  if (tbody) {
    tbody.innerHTML = (order.items || []).map(i => `
      <tr>
        <td style="border: 1px solid #e2e8f0; padding: 6px;">${i.name}</td>
        <td style="border: 1px solid #e2e8f0; padding: 6px; text-align: center;">${i.qty}</td>
        <td style="border: 1px solid #e2e8f0; padding: 6px;">${i.price * i.qty} د.ل</td>
      </tr>
    `).join('');
  }

  openModal('deliverySlipModal');
}

// -------------------------------------------------------------
// 6. HIGH SPEED POS (+ طلب سريع)
// -------------------------------------------------------------
function openPosModal() {
  ERP_STATE.posCart = [];
  renderPosCartModal();

  // Populate product buttons grid
  const grid = document.getElementById('posProductsButtonsGrid');
  if (grid) {
    grid.innerHTML = ERP_STATE.products.slice(0, 15).map(p => `
      <div onclick="posAddToCart('${p.id}')" style="background: #ffffff; border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 6px 8px; cursor: pointer; display: flex; flex-direction: column; gap: 2px; transition: var(--transition);" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border-card)'">
        <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.nameAr}</div>
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <span class="num-mono" style="font-weight: 800; color: var(--primary); font-size: 0.85rem;">${p.sellingPrice} د.ل</span>
          <span style="font-size: 0.65rem; color: var(--text-muted);">${p.stock} متاح</span>
        </div>
      </div>
    `).join('');
  }

  openModal('posModal');
}

function posAddToCart(productId) {
  const prod = ERP_STATE.products.find(p => p.id === productId);
  if (!prod) return;

  const existing = ERP_STATE.posCart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    ERP_STATE.posCart.push({
      id: prod.id,
      name: prod.nameAr,
      price: prod.sellingPrice,
      qty: 1
    });
  }
  renderPosCartModal();
}

function posUpdateQty(productId, delta) {
  const item = ERP_STATE.posCart.find(x => x.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    ERP_STATE.posCart = ERP_STATE.posCart.filter(x => x.id !== productId);
  }
  renderPosCartModal();
}

function renderPosCartModal() {
  const container = document.getElementById('posCartItemsList');
  const totalDisplay = document.getElementById('posCartTotalDisplay');
  if (!container) return;

  let total = 0;
  if (ERP_STATE.posCart.length === 0) {
    container.innerHTML = '<div style="font-size: 0.75rem; color: var(--text-muted); text-align: center; padding: 0.5rem 0;">السلة فارغة. انقر على أداة لإضافتها.</div>';
  } else {
    container.innerHTML = ERP_STATE.posCart.map(item => {
      const itemSubtotal = item.price * item.qty;
      total += itemSubtotal;
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.775rem; padding: 3px 0;">
          <span style="font-weight: 600;">${item.name}</span>
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="num-mono" style="color: var(--primary); font-weight: 700;">${item.price} د.ل × ${item.qty}</span>
            <button onclick="posUpdateQty('${item.id}', -1)" style="border: 1px solid var(--border-card); background: #ffffff; width: 20px; height: 20px; border-radius: 4px; cursor: pointer;">-</button>
            <button onclick="posUpdateQty('${item.id}', 1)" style="border: 1px solid var(--border-card); background: #ffffff; width: 20px; height: 20px; border-radius: 4px; cursor: pointer;">+</button>
          </div>
        </div>
      `;
    }).join('');
  }

  if (totalDisplay) totalDisplay.textContent = `${total} د.ل`;
}

async function confirmPosSale() {
  if (ERP_STATE.posCart.length === 0) {
    showToast('اختر منتجات أولاً قبل تأكيد البيع', 'warning');
    return;
  }

  const name = document.getElementById('posInputName').value || 'طالب كاش';
  const phone = document.getElementById('posInputPhone').value || '091-0000000';
  const total = ERP_STATE.posCart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const orderNumber = `#POS-${randomNum}`;

  const newOrder = {
    id: `pos-${Date.now()}`,
    orderNumber: orderNumber,
    customerName: name,
    phone: phone,
    university: 'جامعة طرابلس',
    college: 'كلية طب الأسنان',
    address: 'تسليم مباشر بالكلية (POS)',
    itemsCount: ERP_STATE.posCart.reduce((sum, item) => sum + item.qty, 0),
    items: [...ERP_STATE.posCart],
    total: total,
    shippingFee: 0,
    status: 'مكتمل',
    assignedTo: ERP_STATE.currentPartner,
    date: 'الآن',
    notes: 'بيع كاش فوري'
  };

  ERP_STATE.orders.unshift(newOrder);

  // Audit log
  ERP_STATE.auditLogs.unshift({
    id: `#${1100 + ERP_STATE.auditLogs.length}`,
    time: new Date().toLocaleTimeString('ar-LY', { hour: '2-digit', minute: '2-digit' }),
    date: 'اليوم',
    user: ERP_STATE.currentPartner,
    action: 'تسجيل بيع POS فوري',
    details: `تم إنشاء الطلب ${orderNumber} للعميل ${name} بقيمة ${total} د.ل`,
    oldVal: '-',
    newVal: `${total} د.ل`
  });
  localStorage.setItem('abs_erp_audit', JSON.stringify(ERP_STATE.auditLogs));

  closeModal('posModal');
  showToast(`تم تسجيل الطلب ${orderNumber} بنجاح واستلام ${total} د.ل كاش 🦷`);
}

// -------------------------------------------------------------
// 7. PRODUCTS CATALOG MANAGEMENT (28 Items)
// -------------------------------------------------------------
function renderProductsTable(searchQuery = '') {
  const tbody = document.getElementById('fullProductsTableBody');
  if (!tbody) return;

  let list = [...ERP_STATE.products];
  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(p => p.nameAr.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q));
  }

  tbody.innerHTML = list.map(p => {
    const margin = p.sellingPrice > 0 ? Math.round(((p.sellingPrice - p.costPrice) / p.sellingPrice) * 100) : 0;
    return `
      <tr>
        <td style="font-weight: 700; color: var(--text-main);">${p.nameAr}</td>
        <td class="num-mono" style="color: var(--text-muted); font-size: 0.75rem;">${p.sku}</td>
        <td style="color: var(--text-muted); font-size: 0.75rem;">${p.category}</td>
        <td class="num-mono">${p.costPrice} د.ل</td>
        <td class="num-mono" style="font-weight: 800; color: var(--primary);">${p.sellingPrice} د.ل</td>
        <td class="num-mono" style="color: var(--status-success); font-weight: 700;">+${margin}%</td>
        <td class="num-mono" style="font-weight: 800;">${p.stock}</td>
        <td>
          <span class="status-pill ${p.stock > 10 ? 'completed' : (p.stock > 0 ? 'preparing' : 'new')}">
            ${p.stock > 10 ? 'متوفر' : (p.stock > 0 ? 'منخفض' : 'نافد')}
          </span>
        </td>
      </tr>
    `;
  }).join('');
}

function handleProductsSearch(val) {
  renderProductsTable(val);
}

// -------------------------------------------------------------
// 8. INVENTORY MANAGEMENT
// -------------------------------------------------------------
function renderInventoryTable() {
  const tbody = document.getElementById('inventoryTableBody');
  if (!tbody) return;

  tbody.innerHTML = ERP_STATE.products.map(p => `
    <tr>
      <td style="font-weight: 700; color: var(--text-main);">${p.nameAr}</td>
      <td class="num-mono" style="font-weight: 800; font-size: 0.95rem;">${p.stock} قطعة</td>
      <td class="num-mono" style="color: var(--text-muted);">${p.minStock}</td>
      <td style="color: var(--text-muted); font-size: 0.75rem;">${p.supplier}</td>
      <td>
        <span class="status-pill ${p.stock > 10 ? 'completed' : (p.stock > 0 ? 'preparing' : 'new')}">
          ${p.stock > 10 ? 'مخزون آمن' : (p.stock > 0 ? 'منخفض (إعادة طلب)' : 'نافد بالكامل')}
        </span>
      </td>
      <td>
        <button class="btn-secondary btn-sm" onclick="showToast('تم إرسال أمر شراء للصنف: ${p.nameAr}')">+ طلب توريد</button>
      </td>
    </tr>
  `).join('');
}

// -------------------------------------------------------------
// 9. EXPENSES & AUDIT LEDGERS
// -------------------------------------------------------------
function renderExpensesTable() {
  const tbody = document.getElementById('expensesTableBody');
  if (!tbody) return;

  tbody.innerHTML = ERP_STATE.expenses.map(e => `
    <tr>
      <td class="num-mono" style="font-weight: 800; color: var(--primary);">${e.id}</td>
      <td class="num-mono" style="color: var(--text-muted); font-size: 0.75rem;">${e.date}</td>
      <td style="font-weight: 600; color: var(--text-main);">${e.desc}</td>
      <td style="color: var(--text-muted); font-size: 0.75rem;">${e.category}</td>
      <td><strong>${e.user}</strong></td>
      <td style="color: var(--text-muted); font-size: 0.75rem;">${e.method}</td>
      <td class="num-mono" style="font-weight: 800; color: var(--status-danger);">${e.amount} د.ل</td>
    </tr>
  `).join('');
}

function openExpenseModal() {
  const desc = prompt('أدخل وصف المصروف (مثال: شحن كليات، إعلانات، صيانة):');
  if (!desc) return;
  const amountStr = prompt('أدخل القيمة بالدينار الليبي (د.ل):');
  const amount = Number(amountStr);
  if (!amount || amount <= 0) return;

  const newExp = {
    id: `EXP-${105 + ERP_STATE.expenses.length}`,
    date: '2026-09-30',
    desc: desc,
    category: 'تشغيلي',
    user: ERP_STATE.currentPartner,
    method: 'كاش',
    amount: amount
  };

  ERP_STATE.expenses.unshift(newExp);
  localStorage.setItem('abs_erp_expenses', JSON.stringify(ERP_STATE.expenses));

  ERP_STATE.auditLogs.unshift({
    id: `#${1105 + ERP_STATE.auditLogs.length}`,
    time: new Date().toLocaleTimeString('ar-LY', { hour: '2-digit', minute: '2-digit' }),
    date: 'اليوم',
    user: ERP_STATE.currentPartner,
    action: 'تسجيل مصروف',
    details: `أضاف مصروفاً بقيمة ${amount} د.ل (${desc})`,
    oldVal: '-',
    newVal: `${amount} د.ل`
  });
  localStorage.setItem('abs_erp_audit', JSON.stringify(ERP_STATE.auditLogs));

  showToast(`تم تسجيل المصروف بقيمة ${amount} د.ل`);
  renderExpensesTable();
}

function renderFullAuditTable() {
  const tbody = document.getElementById('fullAuditTableBody');
  if (!tbody) return;

  tbody.innerHTML = ERP_STATE.auditLogs.map(a => `
    <tr>
      <td class="num-mono" style="font-weight: 800; color: var(--primary);">${a.id}</td>
      <td class="num-mono" style="color: var(--text-muted); font-size: 0.75rem;">${a.time}</td>
      <td class="num-mono" style="color: var(--text-muted); font-size: 0.75rem;">${a.date}</td>
      <td><strong>${a.user}</strong></td>
      <td style="color: var(--primary); font-weight: 700;">${a.action}</td>
      <td style="color: var(--text-body);">${a.details}</td>
      <td class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">${a.oldVal} → <strong style="color: var(--text-main);">${a.newVal}</strong></td>
    </tr>
  `).join('');
}

// -------------------------------------------------------------
// 10. GLOBAL SEARCH & COMMAND PALETTE (Ctrl + K)
// -------------------------------------------------------------
function openCommandPalette() {
  openModal('commandPaletteModal');
  const input = document.getElementById('commandPaletteInput');
  if (input) {
    input.value = '';
    input.focus();
    handleCommandPaletteSearch('');
  }
}

function handleCommandPaletteSearch(val) {
  const resultsContainer = document.getElementById('commandPaletteResults');
  if (!resultsContainer) return;

  const q = (val || '').toLowerCase().trim();
  const matchedOrders = ERP_STATE.orders.filter(o =>
    !q || o.customerName.toLowerCase().includes(q) || o.orderNumber.toLowerCase().includes(q)
  ).slice(0, 4);

  const matchedProducts = ERP_STATE.products.filter(p =>
    !q || p.nameAr.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
  ).slice(0, 4);

  resultsContainer.innerHTML = `
    <div style="font-size: 0.7rem; font-weight: 700; color: var(--text-muted); padding: 4px 8px;">الطلبات:</div>
    ${matchedOrders.map(o => `
      <div onclick="closeModal('commandPaletteModal'); openOrderDetailsById('${o.id}')" style="display: flex; justify-content: space-between; padding: 6px 8px; border-radius: 6px; cursor: pointer;" onmouseover="this.style.background='var(--bg-subtle)'" onmouseout="this.style.background='transparent'">
        <span><strong style="color: var(--primary);">${o.orderNumber}</strong> ${o.customerName}</span>
        <span class="num-mono">${o.total} د.ل</span>
      </div>
    `).join('')}

    <div style="font-size: 0.7rem; font-weight: 700; color: var(--text-muted); padding: 8px 8px 4px;">المنتجات:</div>
    ${matchedProducts.map(p => `
      <div onclick="closeModal('commandPaletteModal'); navigateToScreen('products')" style="display: flex; justify-content: space-between; padding: 6px 8px; border-radius: 6px; cursor: pointer;" onmouseover="this.style.background='var(--bg-subtle)'" onmouseout="this.style.background='transparent'">
        <span>${p.nameAr}</span>
        <span class="num-mono" style="color: var(--primary); font-weight: 700;">${p.sellingPrice} د.ل</span>
      </div>
    `).join('')}
  `;
}

// Keyboard Shortcut: Ctrl + K
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault();
    openCommandPalette();
  } else if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
      m.style.display = 'none';
    });
  }
});

// -------------------------------------------------------------
// 11. MOBILE SIDEBAR RESPONSIVE TOGGLE
// -------------------------------------------------------------
function toggleMobileSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.toggle('mobile-open');
  }
}

document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  if (sidebar && sidebar.classList.contains('mobile-open')) {
    if (!sidebar.contains(e.target) && (!toggleBtn || !toggleBtn.contains(e.target))) {
      sidebar.classList.remove('mobile-open');
    }
  }
});

// -------------------------------------------------------------
// 12. TOAST SYSTEM
// -------------------------------------------------------------
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color: ${type === 'warning' ? 'var(--status-warning)' : 'var(--primary)'}; font-weight: 900;">●</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

// -------------------------------------------------------------
// 13. LIVE SERVER BACKGROUND SYNC (api.kurofangs.id.ly)
// -------------------------------------------------------------
async function syncWithUserServer() {
  try {
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
          status: (p.stock_quantity > 10) ? 'متوفر' : (p.stock_quantity > 0) ? 'منخفض' : 'نافد'
        }));
      }
    }
    showToast('تمت مزامنة البيانات بنجاح مع سيرفر Absolute Dental 🟢');
  } catch (err) {
    console.warn('Sync notice:', err);
  }
}

// -------------------------------------------------------------
// 14. INITIALIZATION
// -------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  // Set current date string
  const dateEl = document.getElementById('headerCurrentDateText');
  if (dateEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    try {
      dateEl.textContent = new Date().toLocaleDateString('ar-LY', options);
    } catch (_) {
      dateEl.textContent = 'الثلاثاء، 30 سبتمبر 2026';
    }
  }

  // Initial Sync in background
  syncWithUserServer();
});
