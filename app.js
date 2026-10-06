/**
 * ABSOLUTE DENTAL — ENTERPRISE OPERATIONS SYSTEM (ERP)
 * Production JavaScript Engine — Minimalist SaaS Architecture (Linear / Stripe Grade)
 * 100% Arabic RTL First — Real Operational Zero-Baseline & Historical Orders Isolation
 */

// -------------------------------------------------------------
// 1. DATA VERSIONING & OPERATIONAL ZERO-BASELINE RESET
// -------------------------------------------------------------
const ERP_DATA_VERSION = 'v4.0_linear_erp';

(function initVersionAndReset() {
  const currentVer = localStorage.getItem('abs_erp_data_version');
  if (currentVer !== ERP_DATA_VERSION) {
    // Reset operational datasets to strictly zero baseline
    localStorage.removeItem('abs_erp_products');
    localStorage.removeItem('abs_erp_orders');
    localStorage.removeItem('abs_erp_purchases');
    localStorage.removeItem('abs_erp_expenses');
    localStorage.removeItem('abs_erp_inventory_transactions');
    localStorage.setItem('abs_erp_data_version', ERP_DATA_VERSION);
  }
})();

// -------------------------------------------------------------
// 2. AUTHORIZED USERS & SESSION GOVERNANCE
// -------------------------------------------------------------
const AUTHORIZED_USERS = ['مؤمن', 'طه', 'ياسي'];

function getCurrentUser() {
  const sessionUser = sessionStorage.getItem('abs_erp_active_user');
  if (sessionUser && AUTHORIZED_USERS.includes(sessionUser)) {
    return sessionUser;
  }
  return 'طه'; // Default operational partner
}

function loginAsUser(userName) {
  if (!AUTHORIZED_USERS.includes(userName)) {
    showToast('غير مخول بالدخول للمنظومة', 'warning');
    return;
  }
  sessionStorage.setItem('abs_erp_active_user', userName);
  ERP_STATE.currentPartner = userName;

  const overlay = document.getElementById('userSelectOverlay');
  if (overlay) {
    overlay.classList.add('hidden');
    overlay.style.display = 'none';
  }

  updateSessionUserUI(userName);
  logOperation({
    user: userName,
    action: 'تسجيل دخول وبدء جلسة',
    target: 'Absolute Dental ERP',
    details: `${userName} قام بتسجيل الدخول إلى المنظومة`
  });
  showToast(`مرحباً بك يا ${userName} 👋`);
}

function updateSessionUserUI(userName) {
  const sideAvatar = document.getElementById('sideUserAvatar');
  const sideName = document.getElementById('sideUserName');
  const topAvatar = document.getElementById('topHeaderAvatar');
  const topName = document.getElementById('topHeaderUserName');
  const settingsUser = document.getElementById('settingsActiveUser');

  const initial = userName ? userName.charAt(0) : 'ط';
  if (sideAvatar) sideAvatar.textContent = initial;
  if (sideName) sideName.textContent = userName;
  if (topAvatar) topAvatar.textContent = initial;
  if (topName) topName.textContent = userName;
  if (settingsUser) settingsUser.textContent = userName;
}

function switchUserPrompt() {
  const overlay = document.getElementById('userSelectOverlay');
  if (overlay) {
    overlay.classList.remove('hidden');
    overlay.style.display = 'flex';
  }
  closeUserDropdown();
}

function logoutCurrentUser() {
  sessionStorage.removeItem('abs_erp_active_user');
  switchUserPrompt();
}

// -------------------------------------------------------------
// 3. GLOBAL STATE & PRODUCTION DATA STORE
// -------------------------------------------------------------
const ERP_STATE = {
  activeScreen: 'dashboard',
  currentPartner: getCurrentUser(),
  productsPage: 1,
  productsPerPage: 10,
  posDeliveryMode: 'pickup',
  posSelectedCategory: 'all',
  posCart: [],
  activeOrdersFilter: 'all',
  lastCreatedInvoiceOrder: null,

  // Products: Master Catalog Retained, Operational Values Reset to 0
  products: (() => {
    let list = (typeof INITIAL_PRODUCTS !== 'undefined' && Array.isArray(INITIAL_PRODUCTS))
      ? JSON.parse(JSON.stringify(INITIAL_PRODUCTS))
      : [];

    const cached = localStorage.getItem('abs_erp_products');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (_) {}
    }

    // Zero Baseline Reset: Stock = 0, Prices = 0 / unset, Status = 'نافد'
    list.forEach(p => {
      p.costPrice = 0;
      p.wholesalePrice = 0;
      p.retailPrice = 0;
      p.sellingPrice = 0;
      p.stock = 0;
      p.minStock = 10;
      p.status = 'نافد';
    });

    try { localStorage.setItem('abs_erp_products', JSON.stringify(list)); } catch (_) {}
    return list;
  })(),

  // Active Orders (Initializes to 0 for New Operations)
  orders: (() => {
    const cached = localStorage.getItem('abs_erp_orders');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed)) return parsed;
      } catch (_) {}
    }
    return [];
  })(),

  // Preserved Historical Orders (18 Real Customer Orders with Frozen Snapshots)
  historicalOrders: (() => {
    if (typeof INITIAL_ORDERS !== 'undefined' && Array.isArray(INITIAL_ORDERS)) {
      return JSON.parse(JSON.stringify(INITIAL_ORDERS));
    }
    return [];
  })(),

  // Purchases Ledger (Initializes to 0 for New Operations)
  purchases: (() => {
    const cached = localStorage.getItem('abs_erp_purchases');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed)) return parsed;
      } catch (_) {}
    }
    return [];
  })(),

  // Expenses Ledger (Initializes to 0 for New Operations)
  expenses: (() => {
    const cached = localStorage.getItem('abs_erp_expenses');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed)) return parsed;
      } catch (_) {}
    }
    return [];
  })(),

  // Audit Operations Log
  auditLogs: (() => {
    const cached = localStorage.getItem('abs_erp_audit_logs');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed)) return parsed;
      } catch (_) {}
    }
    return [
      { id: '#LOG-101', time: '12:00', date: '2026-10-07', user: 'طه', action: 'تهيئة المنظومة', target: 'Absolute Dental ERP', details: 'تفعيل واجهة العمليات الجديدة بالمعايير العالمية' }
    ];
  })()
};

// -------------------------------------------------------------
// 4. AUDIT & LOCAL STORAGE PERSISTENCE
// -------------------------------------------------------------
function logOperation({ user, action, target, details }) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('ar-LY', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toISOString().split('T')[0];

  const logEntry = {
    id: `#LOG-${Math.floor(1000 + Math.random() * 9000)}`,
    time: timeStr,
    date: dateStr,
    user: user || ERP_STATE.currentPartner,
    action: action || 'عملية إدارية',
    target: target || 'النظام',
    details: details || '-'
  };

  ERP_STATE.auditLogs.unshift(logEntry);
  if (ERP_STATE.auditLogs.length > 100) ERP_STATE.auditLogs.pop();
  try { localStorage.setItem('abs_erp_audit_logs', JSON.stringify(ERP_STATE.auditLogs)); } catch (_) {}

  if (ERP_STATE.activeScreen === 'audit') {
    renderAuditTable();
  }
}

function saveStateToLocalStorage() {
  try {
    localStorage.setItem('abs_erp_products', JSON.stringify(ERP_STATE.products));
    localStorage.setItem('abs_erp_orders', JSON.stringify(ERP_STATE.orders));
    localStorage.setItem('abs_erp_purchases', JSON.stringify(ERP_STATE.purchases));
    localStorage.setItem('abs_erp_expenses', JSON.stringify(ERP_STATE.expenses));
  } catch (_) {}
}

// -------------------------------------------------------------
// 5. METRICS & OPERATIONAL CALCULATIONS
// -------------------------------------------------------------
function calculateRealMetrics() {
  // Sales & Orders strictly from ACTIVE orders (historical orders excluded from operational KPIs)
  const activeCompleted = ERP_STATE.orders.filter(o => o.status === 'مكتمل');
  const totalSales = activeCompleted.reduce((acc, o) => acc + (Number(o.total) || 0), 0);
  const totalOrders = ERP_STATE.orders.length;

  // Expenses
  const totalExpenses = ERP_STATE.expenses.reduce((acc, e) => acc + (Number(e.amount) || 0), 0);

  // Net Profit
  const netProfit = totalSales - totalExpenses;

  // Stock counts
  const totalProds = ERP_STATE.products.length;
  let lowStockCount = 0;
  let outStockCount = 0;
  let availStockCount = 0;
  let totalPieces = 0;
  let totalStockVal = 0;

  ERP_STATE.products.forEach(p => {
    const s = Number(p.stock) || 0;
    const min = Number(p.minStock) || 10;
    const cost = Number(p.costPrice) || 0;

    totalPieces += s;
    totalStockVal += (s * cost);

    if (s === 0) {
      outStockCount++;
      p.status = 'نافد';
    } else if (s <= min) {
      lowStockCount++;
      p.status = 'منخفض';
    } else {
      availStockCount++;
      p.status = 'متوفر';
    }
  });

  return {
    totalSales,
    totalOrders,
    netProfit,
    totalExpenses,
    totalProds,
    lowStockCount,
    outStockCount,
    availStockCount,
    totalPieces,
    totalStockVal
  };
}

// -------------------------------------------------------------
// 6. SCREEN 1: DASHBOARD (الرئيسية)
// -------------------------------------------------------------
function updateDashboardRealUI() {
  const m = calculateRealMetrics();

  // 4 KPI Blocks
  const kpiSales = document.getElementById('kpiSalesVal');
  const kpiOrders = document.getElementById('kpiOrdersVal');
  const kpiProfit = document.getElementById('kpiProfitVal');
  const kpiExpenses = document.getElementById('kpiExpensesVal');

  if (kpiSales) kpiSales.textContent = `${m.totalSales.toLocaleString('en-US')} د.ل`;
  if (kpiOrders) kpiOrders.textContent = m.totalOrders.toString();
  if (kpiProfit) kpiProfit.textContent = `${m.netProfit.toLocaleString('en-US')} د.ل`;
  if (kpiExpenses) kpiExpenses.textContent = `${m.totalExpenses.toLocaleString('en-US')} د.ل`;

  // Inventory Status Section
  const elTotal = document.getElementById('dashTotalProducts');
  const elLow = document.getElementById('dashLowStockCount');
  const elOut = document.getElementById('dashOutStockCount');
  const elAvail = document.getElementById('dashAvailStockCount');

  if (elTotal) elTotal.textContent = m.totalProds.toString();
  if (elLow) elLow.textContent = m.lowStockCount.toString();
  if (elOut) elOut.textContent = m.outStockCount.toString();
  if (elAvail) elAvail.textContent = m.availStockCount.toString();

  // Recent Sales Table
  const tbody = document.getElementById('dashboardRecentSalesBody');
  const emptyState = document.getElementById('dashboardRecentSalesEmpty');

  if (tbody && emptyState) {
    if (ERP_STATE.orders.length === 0) {
      tbody.innerHTML = '';
      emptyState.style.display = 'flex';
    } else {
      emptyState.style.display = 'none';
      const recent = ERP_STATE.orders.slice(0, 5);
      tbody.innerHTML = recent.map(o => `
        <tr>
          <td><strong class="num-mono">${o.orderNumber || '#0000'}</strong></td>
          <td>${o.customerName || '-'}</td>
          <td><strong class="num-mono">${o.total || 0} د.ل</strong></td>
          <td><span class="status-pill ${getOrderStatusClass(o.status)}">${o.status || 'جديد'}</span></td>
          <td class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">${o.date || '-'}</td>
        </tr>
      `).join('');
    }
  }
}

// -------------------------------------------------------------
// 7. SCREEN 2: PRODUCTS (المنتجات)
// -------------------------------------------------------------
function renderProductsTable() {
  const tbody = document.getElementById('fullProductsTableBody');
  if (!tbody) return;

  const searchInput = document.getElementById('productsSearchInput');
  const catFilter = document.getElementById('productsCategoryFilter');
  const yearFilter = document.getElementById('productsYearFilter');
  const statusFilter = document.getElementById('productsStatusFilter');

  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
  const catVal = catFilter ? catFilter.value : 'all';
  const yearVal = yearFilter ? yearFilter.value : 'all';
  const statusVal = statusFilter ? statusFilter.value : 'all';

  let filtered = ERP_STATE.products.filter(p => {
    // Search
    if (query) {
      const nameAr = (p.nameAr || '').toLowerCase();
      const nameEn = (p.nameEn || '').toLowerCase();
      const sku = (p.sku || '').toLowerCase();
      if (!nameAr.includes(query) && !nameEn.includes(query) && !sku.includes(query)) return false;
    }
    // Category
    if (catVal !== 'all') {
      if (p.subject !== catVal && !p.category.includes(catVal)) return false;
    }
    // Year
    if (yearVal !== 'all') {
      if (yearVal === 'year1' && !p.category.includes('سنة 1') && p.subject !== 'dental-anatomy' && p.subject !== 'dental-materials') return false;
      if (yearVal === 'year2' && !p.category.includes('سنة 2') && p.subject !== 'restorative-dentistry' && p.subject !== 'fixed-prosthodontics' && p.subject !== 'removable-prosthodontics' && p.subject !== 'periodontics') return false;
      if (yearVal === 'general' && !p.category.includes('شنط') && !p.category.includes('ملابس') && !p.category.includes('مجسمات') && p.subject !== 'general') return false;
    }
    // Status
    if (statusVal !== 'all') {
      const s = Number(p.stock) || 0;
      const min = Number(p.minStock) || 10;
      if (statusVal === 'out' && s !== 0) return false;
      if (statusVal === 'low' && (s === 0 || s > min)) return false;
      if (statusVal === 'available' && s <= min) return false;
    }
    return true;
  });

  // Pagination
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / ERP_STATE.productsPerPage));
  if (ERP_STATE.productsPage > totalPages) ERP_STATE.productsPage = totalPages;
  if (ERP_STATE.productsPage < 1) ERP_STATE.productsPage = 1;

  const startIdx = (ERP_STATE.productsPage - 1) * ERP_STATE.productsPerPage;
  const pageItems = filtered.slice(startIdx, startIdx + ERP_STATE.productsPerPage);

  const paginationInfo = document.getElementById('productsPaginationInfo');
  const currentPageEl = document.getElementById('currentPageNum');
  if (paginationInfo) {
    const endIdx = Math.min(startIdx + ERP_STATE.productsPerPage, total);
    paginationInfo.textContent = `عرض ${total > 0 ? startIdx + 1 : 0} - ${endIdx} من ${total} منتج`;
  }
  if (currentPageEl) currentPageEl.textContent = ERP_STATE.productsPage.toString();

  if (pageItems.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-muted);">لا توجد منتجات مطابقة للبحث</td></tr>`;
    return;
  }

  tbody.innerHTML = pageItems.map(p => {
    const s = Number(p.stock) || 0;
    const min = Number(p.minStock) || 10;
    let statusClass = 'out';
    let statusTxt = 'نافد';

    if (s > min) {
      statusClass = 'available';
      statusTxt = 'متوفر';
    } else if (s > 0) {
      statusClass = 'low';
      statusTxt = 'منخفض';
    }

    const imgUrl = p.image || 'assets/brand-logo.png';

    return `
      <tr>
        <td>
          <div class="product-cell">
            <img src="${imgUrl}" class="product-thumb" alt="${p.nameAr}" onerror="this.onerror=null; this.src='assets/brand-logo.png';">
            <div class="product-title-wrap">
              <span class="product-name-txt">${p.nameAr || p.nameEn}</span>
              <span class="product-sku-txt">${p.nameEn !== p.nameAr ? p.nameEn : ''}</span>
            </div>
          </div>
        </td>
        <td><span class="num-mono" style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted);">${p.sku || '-'}</span></td>
        <td><span style="font-size: 0.75rem; color: var(--text-muted);">${p.category || '-'}</span></td>
        <td><span class="num-mono">${p.costPrice || 0} د.ل</span></td>
        <td><span class="num-mono">${p.wholesalePrice || p.costPrice || 0} د.ل</span></td>
        <td><span class="num-mono" style="font-weight: 700; color: var(--text-main);">${p.retailPrice || p.sellingPrice || 0} د.ل</span></td>
        <td><strong class="num-mono">${p.stock || 0}</strong></td>
        <td><span class="status-pill ${statusClass}">${statusTxt}</span></td>
        <td style="text-align: center;">
          <button type="button" class="btn-action-dots" onclick="openEditProductModal('${p.id}')" title="تعديل المنتج">•••</button>
        </td>
      </tr>
    `;
  }).join('');
}

function handleProductsSearch() {
  ERP_STATE.productsPage = 1;
  renderProductsTable();
}

function filterProductsTable() {
  ERP_STATE.productsPage = 1;
  renderProductsTable();
}

function changeProductsPage(delta) {
  ERP_STATE.productsPage += delta;
  renderProductsTable();
}

// -------------------------------------------------------------
// 8. SCREEN 3: INVENTORY (المخزون)
// -------------------------------------------------------------
function renderInventoryTable() {
  const tbody = document.getElementById('inventoryTableBody');
  const emptyState = document.getElementById('inventoryEmptyState');
  if (!tbody) return;

  const m = calculateRealMetrics();

  // 4 Inventory KPI Blocks
  const elVal = document.getElementById('invValueKpi');
  const elPieces = document.getElementById('invTotalPiecesKpi');
  const elLow = document.getElementById('invLowStockKpi');
  const elOut = document.getElementById('invOutStockKpi');

  if (elVal) elVal.textContent = `${m.totalStockVal.toLocaleString('en-US')} د.ل`;
  if (elPieces) elPieces.textContent = m.totalPieces.toString();
  if (elLow) elLow.textContent = m.lowStockCount.toString();
  if (elOut) elOut.textContent = m.outStockCount.toString();

  const searchInput = document.getElementById('inventorySearchInput');
  const catFilter = document.getElementById('inventoryCategoryFilter');
  const statusFilter = document.getElementById('inventoryStatusFilter');

  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
  const catVal = catFilter ? catFilter.value : 'all';
  const statusVal = statusFilter ? statusFilter.value : 'all';

  let filtered = ERP_STATE.products.filter(p => {
    if (query) {
      const name = (p.nameAr || '').toLowerCase();
      const sku = (p.sku || '').toLowerCase();
      if (!name.includes(query) && !sku.includes(query)) return false;
    }
    if (catVal !== 'all') {
      if (p.subject !== catVal && !p.category.includes(catVal)) return false;
    }
    if (statusVal !== 'all') {
      const s = Number(p.stock) || 0;
      const min = Number(p.minStock) || 10;
      if (statusVal === 'out' && s !== 0) return false;
      if (statusVal === 'low' && (s === 0 || s > min)) return false;
      if (statusVal === 'available' && s <= min) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'flex';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  tbody.innerHTML = filtered.map(p => {
    const s = Number(p.stock) || 0;
    const min = Number(p.minStock) || 10;
    let statusClass = 'out';
    let statusTxt = 'نافد';

    if (s > min) {
      statusClass = 'available';
      statusTxt = 'متوفر';
    } else if (s > 0) {
      statusClass = 'low';
      statusTxt = 'منخفض';
    }

    return `
      <tr>
        <td>
          <div class="product-cell">
            <img src="${p.image || 'assets/brand-logo.png'}" class="product-thumb" alt="${p.nameAr}" onerror="this.onerror=null; this.src='assets/brand-logo.png';">
            <span class="product-name-txt">${p.nameAr || p.nameEn}</span>
          </div>
        </td>
        <td><span class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">${p.sku || '-'}</span></td>
        <td><strong class="num-mono" style="font-size: 0.95rem;">${p.stock || 0}</strong></td>
        <td><span class="num-mono" style="color: var(--text-muted);">${p.minStock || 10}</span></td>
        <td><span class="status-pill ${statusClass}">${statusTxt}</span></td>
        <td class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">-</td>
        <td style="text-align: center;">
          <button type="button" class="btn-secondary btn-sm" onclick="openEditProductModal('${p.id}')">تعديل المخزون</button>
        </td>
      </tr>
    `;
  }).join('');
}

function handleInventorySearch() {
  renderInventoryTable();
}

function filterInventoryTable() {
  renderInventoryTable();
}

// -------------------------------------------------------------
// 9. SCREEN 4: POS (نقطة البيع) — 3-COLUMN WORKFLOW
// -------------------------------------------------------------
function renderPosScreen() {
  renderPosProducts();
  renderPosCart();
}

function setPosDeliveryMode(mode) {
  ERP_STATE.posDeliveryMode = mode;
  const btnPickup = document.getElementById('posBtnPickup');
  const btnDelivery = document.getElementById('posBtnDelivery');
  const addressGroup = document.getElementById('posAddressGroup');

  if (btnPickup && btnDelivery) {
    if (mode === 'pickup') {
      btnPickup.classList.add('active');
      btnDelivery.classList.remove('active');
      if (addressGroup) addressGroup.style.display = 'none';
    } else {
      btnDelivery.classList.add('active');
      btnPickup.classList.remove('active');
      if (addressGroup) addressGroup.style.display = 'flex';
    }
  }
  recalculatePosTotals();
}

function setPosCategory(cat, btn) {
  ERP_STATE.posSelectedCategory = cat;
  const chips = document.querySelectorAll('#posCategoryChips .category-chip');
  chips.forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderPosProducts();
}

function filterPosProducts() {
  renderPosProducts();
}

function renderPosProducts() {
  const container = document.getElementById('posProductsGrid');
  if (!container) return;

  const searchInput = document.getElementById('posProductSearch');
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
  const selectedCat = ERP_STATE.posSelectedCategory || 'all';

  const filtered = ERP_STATE.products.filter(p => {
    if (query) {
      const name = (p.nameAr || '').toLowerCase();
      const sku = (p.sku || '').toLowerCase();
      if (!name.includes(query) && !sku.includes(query)) return false;
    }
    if (selectedCat !== 'all') {
      if (p.subject !== selectedCat && !p.category.includes(selectedCat)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.85rem;">لا توجد منتجات مطابقة</div>`;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="pos-product-item" onclick="addToPosCart('${p.id}')">
      <img src="${p.image || 'assets/brand-logo.png'}" class="pos-product-thumb" alt="${p.nameAr}" onerror="this.onerror=null; this.src='assets/brand-logo.png';">
      <div class="pos-product-name" title="${p.nameAr}">${p.nameAr || p.nameEn}</div>
      <div class="pos-product-price num-mono">${p.retailPrice || p.sellingPrice || 0} د.ل</div>
    </div>
  `).join('');
}

function addToPosCart(productId) {
  const prod = ERP_STATE.products.find(p => p.id === productId);
  if (!prod) return;

  const existing = ERP_STATE.posCart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    ERP_STATE.posCart.push({
      id: prod.id,
      name: prod.nameAr || prod.nameEn,
      sku: prod.sku,
      price: Number(prod.retailPrice || prod.sellingPrice || 0),
      qty: 1,
      image: prod.image
    });
  }

  renderPosCart();
  showToast(`تمت إضافة ${prod.nameAr} إلى السلة`);
}

function updatePosCartQty(productId, delta) {
  const item = ERP_STATE.posCart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromPosCart(productId);
    return;
  }
  renderPosCart();
}

function removeFromPosCart(productId) {
  ERP_STATE.posCart = ERP_STATE.posCart.filter(i => i.id !== productId);
  renderPosCart();
}

function clearPosCart() {
  ERP_STATE.posCart = [];
  renderPosCart();
}

function renderPosCart() {
  const container = document.getElementById('posCartItemsList');
  const emptyNotice = document.getElementById('posCartEmptyNotice');
  if (!container) return;

  if (ERP_STATE.posCart.length === 0) {
    container.innerHTML = '';
    if (emptyNotice) emptyNotice.style.display = 'flex';
  } else {
    if (emptyNotice) emptyNotice.style.display = 'none';
    container.innerHTML = ERP_STATE.posCart.map(item => `
      <div class="pos-cart-item">
        <div class="pos-cart-item-info">
          <span class="pos-cart-item-title">${item.name}</span>
          <span class="pos-cart-item-price num-mono">${item.price} د.ل × ${item.qty} = ${item.price * item.qty} د.ل</span>
        </div>
        <div class="pos-cart-qty-ctrl">
          <button type="button" class="pos-qty-btn" onclick="updatePosCartQty('${item.id}', -1)">-</button>
          <span class="pos-qty-val num-mono">${item.qty}</span>
          <button type="button" class="pos-qty-btn" onclick="updatePosCartQty('${item.id}', 1)">+</button>
          <button type="button" class="pos-item-remove-btn" onclick="removeFromPosCart('${item.id}')" title="حذف">✕</button>
        </div>
      </div>
    `).join('');
  }

  recalculatePosTotals();
}

function recalculatePosTotals() {
  const subtotal = ERP_STATE.posCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountInput = document.getElementById('posDiscountInput');
  const discount = Math.max(0, Number(discountInput ? discountInput.value : 0) || 0);

  const shippingFee = (ERP_STATE.posDeliveryMode === 'delivery' && ERP_STATE.posCart.length > 0) ? 10 : 0;
  const grandTotal = Math.max(0, subtotal - discount + shippingFee);

  const elSubtotal = document.getElementById('posSubtotalVal');
  const elShipping = document.getElementById('posShippingVal');
  const elGrandTotal = document.getElementById('posGrandTotalVal');

  if (elSubtotal) elSubtotal.textContent = `${subtotal} د.ل`;
  if (elShipping) elShipping.textContent = shippingFee > 0 ? `${shippingFee} د.ل` : 'مجاني';
  if (elGrandTotal) elGrandTotal.textContent = `${grandTotal} د.ل`;

  return { subtotal, discount, shippingFee, grandTotal };
}

function confirmAndIssuePosOrder() {
  const nameInput = document.getElementById('posCustomerName');
  const phoneInput = document.getElementById('posCustomerPhone');
  const univSelect = document.getElementById('posCustomerUniv');
  const collegeSelect = document.getElementById('posCustomerCollege');
  const addressInput = document.getElementById('posCustomerAddress');
  const notesInput = document.getElementById('posCustomerNotes');

  const customerName = nameInput ? nameInput.value.trim() : '';
  const customerPhone = phoneInput ? phoneInput.value.trim() : '';

  if (!customerName) {
    showToast('يرجى إدخال اسم العميل الكامل', 'warning');
    if (nameInput) nameInput.focus();
    return;
  }

  if (!customerPhone) {
    showToast('يرجى إدخال رقم هاتف العميل', 'warning');
    if (phoneInput) phoneInput.focus();
    return;
  }

  if (ERP_STATE.posCart.length === 0) {
    showToast('السلة فارغة! أضف منتجات قبل اعتماد الطلب', 'warning');
    return;
  }

  const { subtotal, discount, shippingFee, grandTotal } = recalculatePosTotals();

  const now = new Date();
  const dateStr = now.toLocaleDateString('ar-LY', { month: '2-digit', day: '2-digit' }) + '، ' + now.toLocaleTimeString('ar-LY', { hour: '2-digit', minute: '2-digit' });
  const rawNum = Math.floor(10000000 + Math.random() * 90000000);
  const invSeq = (ERP_STATE.orders.length + 1).toString().padStart(4, '0');

  const newOrder = {
    id: `ord-${Date.now()}`,
    orderNumber: `#${rawNum}`,
    invoiceNumber: `#INV-2026-${invSeq}`,
    customerName,
    phone: customerPhone,
    university: univSelect ? univSelect.value : 'جامعة طرابلس',
    college: collegeSelect ? collegeSelect.value : 'كلية طب الأسنان',
    address: ERP_STATE.posDeliveryMode === 'delivery' ? (addressInput ? addressInput.value.trim() : 'طرابلس') : 'استلام مباشر بالكلية',
    notes: notesInput ? notesInput.value.trim() : '',
    deliveryMode: ERP_STATE.posDeliveryMode,
    itemsCount: ERP_STATE.posCart.reduce((acc, i) => acc + i.qty, 0),
    items: JSON.parse(JSON.stringify(ERP_STATE.posCart)),
    subtotal,
    discountAmount: discount,
    shippingFee,
    total: grandTotal,
    status: 'مكتمل',
    rawStatus: 'delivered',
    assignedTo: ERP_STATE.currentPartner,
    date: dateStr,
    createdAt: now.toISOString()
  };

  // Add to active orders
  ERP_STATE.orders.unshift(newOrder);
  saveStateToLocalStorage();

  // Deduct stock
  ERP_STATE.posCart.forEach(cartItem => {
    const prod = ERP_STATE.products.find(p => p.id === cartItem.id);
    if (prod) {
      prod.stock = Math.max(0, (Number(prod.stock) || 0) - cartItem.qty);
    }
  });
  saveStateToLocalStorage();

  logOperation({
    user: ERP_STATE.currentPartner,
    action: 'اعتماد طلب فوري وإصدار فاتورة',
    target: newOrder.orderNumber,
    details: `تم إصدار الفاتورة ${newOrder.invoiceNumber} للعميل ${customerName} بمبلغ ${grandTotal} د.ل`
  });

  // Clear inputs & cart
  if (nameInput) nameInput.value = '';
  if (phoneInput) phoneInput.value = '';
  if (notesInput) notesInput.value = '';
  clearPosCart();

  showToast(`تم اعتماد الطلب ${newOrder.orderNumber} بنجاح! 🎉`);

  // Open Printable Invoice Sheet directly
  openInvoiceModalForOrder(newOrder);
}

// -------------------------------------------------------------
// 10. SCREEN 5: ORDERS (الطلبات)
// -------------------------------------------------------------
function renderOrdersTable(filter = 'all') {
  ERP_STATE.activeOrdersFilter = filter;
  const tbody = document.getElementById('ordersTableBody');
  const emptyState = document.getElementById('ordersEmptyState');
  if (!tbody) return;

  // Update tabs
  const tabAll = document.getElementById('tabCountAll');
  const tabNew = document.getElementById('tabCountNew');
  const tabPrep = document.getElementById('tabCountPrep');
  const tabComp = document.getElementById('tabCountComp');
  const tabArchived = document.getElementById('tabCountArchived');

  const newCount = ERP_STATE.orders.filter(o => o.status === 'جديد').length;
  const prepCount = ERP_STATE.orders.filter(o => o.status === 'قيد التجهيز').length;
  const compCount = ERP_STATE.orders.filter(o => o.status === 'مكتمل').length;

  if (tabAll) tabAll.textContent = ERP_STATE.orders.length.toString();
  if (tabNew) tabNew.textContent = newCount.toString();
  if (tabPrep) tabPrep.textContent = prepCount.toString();
  if (tabComp) tabComp.textContent = compCount.toString();
  if (tabArchived) tabArchived.textContent = ERP_STATE.historicalOrders.length.toString();

  const searchInput = document.getElementById('ordersSearchInput');
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

  let targetList = [];
  if (filter === 'archived') {
    targetList = ERP_STATE.historicalOrders;
  } else {
    targetList = ERP_STATE.orders;
    if (filter === 'new') targetList = targetList.filter(o => o.status === 'جديد');
    else if (filter === 'preparing') targetList = targetList.filter(o => o.status === 'قيد التجهيز');
    else if (filter === 'completed') targetList = targetList.filter(o => o.status === 'مكتمل');
  }

  if (query) {
    targetList = targetList.filter(o => {
      const num = (o.orderNumber || '').toLowerCase();
      const name = (o.customerName || '').toLowerCase();
      const phone = (o.phone || '').toLowerCase();
      return num.includes(query) || name.includes(query) || phone.includes(query);
    });
  }

  if (targetList.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) {
      emptyState.style.display = 'flex';
      const emptyTitle = emptyState.querySelector('.empty-state-title');
      if (emptyTitle) emptyTitle.textContent = filter === 'archived' ? 'لا توجد طلبات مؤرشفة' : 'لا توجد طلبات بعد';
    }
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  tbody.innerHTML = targetList.map(o => `
    <tr>
      <td><strong class="num-mono" style="color: var(--primary);">${o.orderNumber || '#0000'}</strong></td>
      <td>
        <div><strong>${o.customerName || '-'}</strong></div>
        <div style="font-size: 0.7rem; color: var(--text-muted);">${o.phone || ''}</div>
      </td>
      <td><span class="num-mono">${o.itemsCount || (o.items ? o.items.length : 0)} صنف</span></td>
      <td><strong class="num-mono">${o.total || 0} د.ل</strong></td>
      <td><span class="status-pill ${getOrderStatusClass(o.status)}">${o.status || 'مكتمل'}</span></td>
      <td><span style="font-size: 0.75rem; color: var(--text-muted);">${o.assignedTo || 'طه'}</span></td>
      <td><span class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">${o.date || '-'}</span></td>
      <td style="text-align: center;">
        <button type="button" class="btn-secondary btn-sm" onclick="openOrderModalById('${o.id || o.orderNumber}')">عرض الفاتورة</button>
      </td>
    </tr>
  `).join('');
}

function filterOrdersTable(filter, btn) {
  const btns = document.querySelectorAll('.orders-filter-pills .order-filter-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderOrdersTable(filter);
}

function handleOrdersSearch() {
  renderOrdersTable(ERP_STATE.activeOrdersFilter);
}

function getOrderStatusClass(status) {
  if (status === 'مكتمل') return 'completed';
  if (status === 'قيد التجهيز') return 'preparing';
  if (status === 'جديد') return 'new';
  if (status === 'ملغي') return 'cancelled';
  return 'archived';
}

function exportOrdersToCsv() {
  const list = ERP_STATE.activeOrdersFilter === 'archived' ? ERP_STATE.historicalOrders : ERP_STATE.orders;
  if (list.length === 0) {
    showToast('لا توجد بيانات لتصديرها', 'warning');
    return;
  }

  const csvRows = [
    ['رقم الطلب', 'الفاتورة', 'العميل', 'الهاتف', 'الكلية', 'العناصر', 'الإجمالي', 'الحالة', 'التاريخ']
  ];

  list.forEach(o => {
    csvRows.push([
      o.orderNumber || '',
      o.invoiceNumber || '',
      o.customerName || '',
      o.phone || '',
      o.college || '',
      o.itemsCount || 0,
      o.total || 0,
      o.status || '',
      o.date || ''
    ]);
  });

  const csvContent = '\uFEFF' + csvRows.map(e => e.map(cell => `"${cell}"`).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `Absolute_Dental_Orders_${Date.now()}.csv`;
  link.click();
  showToast('تم تصدير ملف الطلبات بنجاح');
}

// -------------------------------------------------------------
// 11. SCREEN 6: PURCHASES (المشتريات)
// -------------------------------------------------------------
function renderPurchasesTable() {
  const tbody = document.getElementById('purchasesTableBody');
  const emptyState = document.getElementById('purchasesEmptyState');
  if (!tbody) return;

  const searchInput = document.getElementById('purchasesSearchInput');
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

  let filtered = ERP_STATE.purchases.filter(p => {
    if (query) {
      const sup = (p.supplier || '').toLowerCase();
      const num = (p.invoiceNumber || '').toLowerCase();
      return sup.includes(query) || num.includes(query);
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'flex';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  tbody.innerHTML = filtered.map(p => `
    <tr>
      <td><strong class="num-mono">${p.invoiceNumber || '-'}</strong></td>
      <td><strong>${p.supplier || '-'}</strong></td>
      <td><span class="num-mono">${p.itemsCount || 1}</span></td>
      <td><strong class="num-mono">${p.total || 0} د.ل</strong></td>
      <td><span class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">${p.date || '-'}</span></td>
      <td style="text-align: center;">
        <button type="button" class="btn-secondary btn-sm" onclick="showToast('فاتورة مسجلة وموثقة')">عرض التفاصيل</button>
      </td>
    </tr>
  `).join('');
}

function handlePurchasesSearch() {
  renderPurchasesTable();
}

function openAddPurchaseModal() {
  const modal = document.getElementById('addPurchaseModal');
  if (modal) modal.classList.add('active');
}

function saveNewPurchaseInvoice() {
  const supInput = document.getElementById('newPurSupplier');
  const invNumInput = document.getElementById('newPurInvoiceNum');
  const amountInput = document.getElementById('newPurTotalAmount');
  const notesInput = document.getElementById('newPurNotes');

  const supplier = supInput ? supInput.value.trim() : '';
  const total = Number(amountInput ? amountInput.value : 0) || 0;
  const invoiceNumber = invNumInput && invNumInput.value.trim() ? invNumInput.value.trim() : `PUR-${Date.now().toString().slice(-4)}`;

  if (!supplier) {
    showToast('يرجى إدخال اسم المورد', 'warning');
    return;
  }
  if (total <= 0) {
    showToast('يرجى إدخال مبلغ صحيح للفاتورة', 'warning');
    return;
  }

  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];

  const newPur = {
    id: `pur-${Date.now()}`,
    invoiceNumber,
    supplier,
    itemsCount: 1,
    total,
    notes: notesInput ? notesInput.value.trim() : '',
    date: dateStr,
    user: ERP_STATE.currentPartner
  };

  ERP_STATE.purchases.unshift(newPur);
  saveStateToLocalStorage();

  logOperation({
    user: ERP_STATE.currentPartner,
    action: 'تسجيل فاتورة شراء جديدة',
    target: invoiceNumber,
    details: `تم تسجيل فاتورة شراء من ${supplier} بمبلغ ${total} د.ل`
  });

  if (supInput) supInput.value = '';
  if (amountInput) amountInput.value = '';
  if (notesInput) notesInput.value = '';

  closeModal('addPurchaseModal');
  renderPurchasesTable();
  showToast('تمت إضافة فاتورة الشراء بنجاح');
}

// -------------------------------------------------------------
// 12. SCREEN 7: SALES (المبيعات)
// -------------------------------------------------------------
function renderSalesTable() {
  const tbody = document.getElementById('salesTableBody');
  const emptyState = document.getElementById('salesEmptyState');
  if (!tbody) return;

  const searchInput = document.getElementById('salesSearchInput');
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

  // Active sales
  let filtered = ERP_STATE.orders.filter(o => {
    if (query) {
      const num = (o.orderNumber || '').toLowerCase();
      const name = (o.customerName || '').toLowerCase();
      return num.includes(query) || name.includes(query);
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'flex';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  tbody.innerHTML = filtered.map(o => `
    <tr>
      <td><strong class="num-mono">${o.orderNumber || '-'}</strong></td>
      <td><strong>${o.customerName || '-'}</strong></td>
      <td><strong class="num-mono">${o.total || 0} د.ل</strong></td>
      <td><span class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">${o.date || '-'}</span></td>
      <td style="text-align: center;">
        <button type="button" class="btn-secondary btn-sm" onclick="openOrderModalById('${o.id || o.orderNumber}')">عرض الفاتورة</button>
      </td>
    </tr>
  `).join('');
}

function handleSalesSearch() {
  renderSalesTable();
}

// -------------------------------------------------------------
// 13. SCREEN 8: EXPENSES (المصروفات)
// -------------------------------------------------------------
function renderExpensesTable() {
  const tbody = document.getElementById('expensesTableBody');
  const emptyState = document.getElementById('expensesEmptyState');
  if (!tbody) return;

  const searchInput = document.getElementById('expensesSearchInput');
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

  let filtered = ERP_STATE.expenses.filter(e => {
    if (query) {
      const desc = (e.desc || '').toLowerCase();
      const cat = (e.category || '').toLowerCase();
      return desc.includes(query) || cat.includes(query);
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'flex';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  tbody.innerHTML = filtered.map(e => `
    <tr>
      <td>
        <div><strong>${e.desc || '-'}</strong></div>
        <div style="font-size: 0.7rem; color: var(--text-muted);">${e.category || ''} • بواسطة ${e.user || 'طه'}</div>
      </td>
      <td><strong class="num-mono" style="color: var(--status-danger);">${e.amount || 0} د.ل</strong></td>
      <td><span class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">${e.date || '-'}</span></td>
      <td style="text-align: center;">
        <button type="button" class="btn-action-dots" onclick="showToast('تم تسجيل المصروف رسمياً')">•••</button>
      </td>
    </tr>
  `).join('');
}

function handleExpensesSearch() {
  renderExpensesTable();
}

function openAddExpenseModal() {
  const modal = document.getElementById('addExpenseModal');
  if (modal) modal.classList.add('active');
}

function saveNewExpense() {
  const descInput = document.getElementById('newExpDesc');
  const amountInput = document.getElementById('newExpAmount');
  const catSelect = document.getElementById('newExpCategory');

  const desc = descInput ? descInput.value.trim() : '';
  const amount = Number(amountInput ? amountInput.value : 0) || 0;
  const category = catSelect ? catSelect.value : 'مصاريف عامة';

  if (!desc) {
    showToast('يرجى إدخال وصف المصروف', 'warning');
    return;
  }
  if (amount <= 0) {
    showToast('يرجى إدخال مبلغ صحيح', 'warning');
    return;
  }

  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];

  const newExp = {
    id: `exp-${Date.now()}`,
    desc,
    amount,
    category,
    date: dateStr,
    user: ERP_STATE.currentPartner
  };

  ERP_STATE.expenses.unshift(newExp);
  saveStateToLocalStorage();

  logOperation({
    user: ERP_STATE.currentPartner,
    action: 'تسجيل قيد مصروف جديد',
    target: desc,
    details: `تم صرف ${amount} د.ل تحت بند ${category}`
  });

  if (descInput) descInput.value = '';
  if (amountInput) amountInput.value = '';

  closeModal('addExpenseModal');
  renderExpensesTable();
  updateDashboardRealUI();
  showToast('تم تسجيل المصروف بنجاح');
}

// -------------------------------------------------------------
// 14. CUSTOMERS / PARTNERS SCREEN
// -------------------------------------------------------------
function renderCustomersTable() {
  const tbody = document.getElementById('customersTableBody');
  if (!tbody) return;

  const searchInput = document.getElementById('customersSearchInput');
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

  // Combine customers from active and historical orders
  const allOrders = [...ERP_STATE.orders, ...ERP_STATE.historicalOrders];
  const customerMap = {};

  allOrders.forEach(o => {
    const key = (o.customerName || 'عميل').trim();
    if (!customerMap[key]) {
      customerMap[key] = {
        name: key,
        phone: o.phone || '-',
        college: o.college || o.university || 'كلية طب الأسنان',
        ordersCount: 0,
        totalSpent: 0
      };
    }
    customerMap[key].ordersCount += 1;
    customerMap[key].totalSpent += (Number(o.total) || 0);
  });

  let customers = Object.values(customerMap);
  if (query) {
    customers = customers.filter(c => c.name.toLowerCase().includes(query) || c.phone.includes(query));
  }

  if (customers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-muted);">لا يوجد عملاء</td></tr>`;
    return;
  }

  tbody.innerHTML = customers.map(c => `
    <tr>
      <td><strong>${c.name}</strong></td>
      <td><span class="num-mono" style="color: var(--accent); font-weight: 600;">${c.phone}</span></td>
      <td><span style="font-size: 0.75rem; color: var(--text-muted);">${c.college}</span></td>
      <td><span class="num-mono">${c.ordersCount} طلبات</span></td>
      <td><strong class="num-mono">${c.totalSpent} د.ل</strong></td>
      <td style="text-align: center;">
        <button type="button" class="btn-secondary btn-sm" onclick="showToast('بيانات العميل متزامنة')">عرض السجل</button>
      </td>
    </tr>
  `).join('');
}

function handleCustomersSearch() {
  renderCustomersTable();
}

// -------------------------------------------------------------
// 15. REPORTS SCREEN
// -------------------------------------------------------------
function renderReportsScreen() {
  const m = calculateRealMetrics();
  const elSales = document.getElementById('repTotalSales');
  const elProfit = document.getElementById('repTotalProfit');
  const elExp = document.getElementById('repTotalExpenses');
  const elOrders = document.getElementById('repOrdersCount');

  if (elSales) elSales.textContent = `${m.totalSales} د.ل`;
  if (elProfit) elProfit.textContent = `${m.netProfit} د.ل`;
  if (elExp) elExp.textContent = `${m.totalExpenses} د.ل`;
  if (elOrders) elOrders.textContent = m.totalOrders.toString();
}

// -------------------------------------------------------------
// 16. AUDIT TRAIL SCREEN
// -------------------------------------------------------------
function renderAuditTable() {
  const tbody = document.getElementById('auditTableBody');
  if (!tbody) return;

  tbody.innerHTML = ERP_STATE.auditLogs.map(l => `
    <tr>
      <td><strong class="num-mono" style="color: var(--text-muted); font-size: 0.75rem;">${l.id}</strong></td>
      <td><span class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">${l.date} ${l.time}</span></td>
      <td><strong>${l.user}</strong></td>
      <td><span class="status-pill available">${l.action}</span></td>
      <td><span style="font-size: 0.8rem; color: var(--text-body);">${l.details || '-'}</span></td>
    </tr>
  `).join('');
}

// -------------------------------------------------------------
// 17. PRODUCT MODALS (ADD / EDIT)
// -------------------------------------------------------------
function openAddProductModal() {
  const modal = document.getElementById('addProductModal');
  if (modal) modal.classList.add('active');
}

function saveNewProduct() {
  const nameInput = document.getElementById('newProdNameAr');
  const skuInput = document.getElementById('newProdSku');
  const catSelect = document.getElementById('newProdCategory');
  const costInput = document.getElementById('newProdCostPrice');
  const wsInput = document.getElementById('newProdWholesalePrice');
  const retailInput = document.getElementById('newProdRetailPrice');
  const stockInput = document.getElementById('newProdStock');
  const minStockInput = document.getElementById('newProdMinStock');

  const nameAr = nameInput ? nameInput.value.trim() : '';
  if (!nameAr) {
    showToast('يرجى إدخال اسم المنتج بالعربية', 'warning');
    return;
  }

  const cost = Number(costInput ? costInput.value : 0) || 0;
  const ws = Number(wsInput ? wsInput.value : 0) || cost;
  const retail = Number(retailInput ? retailInput.value : 0) || 0;
  const stock = Number(stockInput ? stockInput.value : 0) || 0;
  const minStock = Number(minStockInput ? minStockInput.value : 10) || 10;
  const sku = skuInput && skuInput.value.trim() ? skuInput.value.trim() : `DEN-${Math.floor(1000 + Math.random() * 9000)}`;

  const newProd = {
    id: `prod-${Date.now()}`,
    nameAr,
    nameEn: nameAr,
    sku,
    category: catSelect ? catSelect.value : 'عام',
    subject: 'general',
    costPrice: cost,
    wholesalePrice: ws,
    retailPrice: retail,
    sellingPrice: retail,
    stock,
    minStock,
    status: stock > minStock ? 'متوفر' : (stock > 0 ? 'منخفض' : 'نافد'),
    image: 'assets/brand-logo.png'
  };

  ERP_STATE.products.unshift(newProd);
  saveStateToLocalStorage();

  logOperation({
    user: ERP_STATE.currentPartner,
    action: 'إضافة منتج جديد',
    target: nameAr,
    details: `تمت إضافة الصنف ${nameAr} بسعر قطاعي ${retail} د.ل ومخزون ${stock}`
  });

  closeModal('addProductModal');
  renderProductsTable();
  updateDashboardRealUI();
  showToast(`تمت إضافة ${nameAr} بنجاح!`);
}

function openEditProductModal(productId) {
  const prod = ERP_STATE.products.find(p => p.id === productId);
  if (!prod) return;

  const idInput = document.getElementById('editProductId');
  const nameInput = document.getElementById('editProdNameAr');
  const skuInput = document.getElementById('editProdSku');
  const costInput = document.getElementById('editProdCostPrice');
  const wsInput = document.getElementById('editProdWholesalePrice');
  const retailInput = document.getElementById('editProdRetailPrice');
  const stockInput = document.getElementById('editProdStock');
  const minStockInput = document.getElementById('editProdMinStock');

  if (idInput) idInput.value = prod.id;
  if (nameInput) nameInput.value = prod.nameAr || prod.nameEn || '';
  if (skuInput) skuInput.value = prod.sku || '';
  if (costInput) costInput.value = prod.costPrice || 0;
  if (wsInput) wsInput.value = prod.wholesalePrice || prod.costPrice || 0;
  if (retailInput) retailInput.value = prod.retailPrice || prod.sellingPrice || 0;
  if (stockInput) stockInput.value = prod.stock || 0;
  if (minStockInput) minStockInput.value = prod.minStock || 10;

  const modal = document.getElementById('editProductModal');
  if (modal) modal.classList.add('active');
}

function saveProductChanges() {
  const idInput = document.getElementById('editProductId');
  const nameInput = document.getElementById('editProdNameAr');
  const skuInput = document.getElementById('editProdSku');
  const costInput = document.getElementById('editProdCostPrice');
  const wsInput = document.getElementById('editProdWholesalePrice');
  const retailInput = document.getElementById('editProdRetailPrice');
  const stockInput = document.getElementById('editProdStock');
  const minStockInput = document.getElementById('editProdMinStock');

  const prodId = idInput ? idInput.value : '';
  const prod = ERP_STATE.products.find(p => p.id === prodId);
  if (!prod) return;

  const oldStock = prod.stock;
  const newStock = Number(stockInput ? stockInput.value : 0) || 0;

  prod.nameAr = nameInput ? nameInput.value.trim() : prod.nameAr;
  prod.sku = skuInput ? skuInput.value.trim() : prod.sku;
  prod.costPrice = Number(costInput ? costInput.value : 0) || 0;
  prod.wholesalePrice = Number(wsInput ? wsInput.value : 0) || prod.costPrice;
  prod.retailPrice = Number(retailInput ? retailInput.value : 0) || 0;
  prod.sellingPrice = prod.retailPrice;
  prod.stock = newStock;
  prod.minStock = Number(minStockInput ? minStockInput.value : 10) || 10;
  prod.status = newStock > prod.minStock ? 'متوفر' : (newStock > 0 ? 'منخفض' : 'نافد');

  saveStateToLocalStorage();

  logOperation({
    user: ERP_STATE.currentPartner,
    action: 'تعديل بيانات وسعر ومخزون منتج',
    target: prod.nameAr,
    details: `تحديث بيانات ${prod.nameAr} (المخزون: من ${oldStock} إلى ${newStock}، السعر: ${prod.retailPrice} د.ل)`
  });

  closeModal('editProductModal');
  renderProductsTable();
  renderInventoryTable();
  updateDashboardRealUI();
  showToast(`تم تحديث بيانات ${prod.nameAr} بنجاح!`);
}

// -------------------------------------------------------------
// 18. OFFICIAL PRINTABLE INVOICE SHEET (#invoiceViewModal)
// -------------------------------------------------------------
function openOrderModalById(orderId) {
  const allOrders = [...ERP_STATE.orders, ...ERP_STATE.historicalOrders];
  const order = allOrders.find(o => o.id === orderId || o.orderNumber === orderId);
  if (order) {
    openInvoiceModalForOrder(order);
  }
}

function openInvoiceModalForOrder(order) {
  ERP_STATE.lastCreatedInvoiceOrder = order;

  const invModal = document.getElementById('invoiceViewModal');
  if (!invModal) return;

  // Header & Status
  const headerNum = document.getElementById('invHeaderNumber');
  const headerPill = document.getElementById('invHeaderStatusPill');
  const docPill = document.getElementById('invDocStatusPill');
  const docNum = document.getElementById('invDocNumber');
  const docDate = document.getElementById('invDocDate');

  const invNumberStr = order.invoiceNumber || order.orderNumber || '#INV-0000';
  if (headerNum) headerNum.textContent = invNumberStr;
  if (docNum) docNum.textContent = invNumberStr;
  if (docDate) docDate.textContent = order.date || 'اليوم';

  const statusStr = order.status || 'مكتمل';
  if (headerPill) headerPill.textContent = statusStr;
  if (docPill) docPill.textContent = statusStr;

  // Customer Details
  const custName = document.getElementById('invDocCustomerName');
  const custPhone = document.getElementById('invDocCustomerPhone');
  const custCollege = document.getElementById('invDocCollege');
  const custAddress = document.getElementById('invDocAddress');

  if (custName) custName.textContent = order.customerName || '-';
  if (custPhone) custPhone.textContent = order.phone || '-';
  if (custCollege) custCollege.textContent = `${order.college || 'كلية طب الأسنان'} - ${order.university || 'جامعة طرابلس'}`;
  if (custAddress) custAddress.textContent = order.address || 'طرابلس';

  // Items Table
  const tbody = document.getElementById('invDocItemsBody');
  if (tbody) {
    const items = order.items && order.items.length > 0 ? order.items : [];
    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 1rem; color: var(--text-muted);">لا توجد بنود</td></tr>`;
    } else {
      tbody.innerHTML = items.map((it, idx) => `
        <tr>
          <td style="text-align: center;" class="num-mono">${idx + 1}</td>
          <td><strong>${it.name || it.nameAr || '-'}</strong></td>
          <td style="text-align: center;" class="num-mono">${it.price || 0} د.ل</td>
          <td style="text-align: center;" class="num-mono">${it.qty || 1}</td>
          <td style="text-align: left;" class="num-mono"><strong>${(it.price || 0) * (it.qty || 1)} د.ل</strong></td>
        </tr>
      `).join('');
    }
  }

  // Financial Totals
  const elSubtotal = document.getElementById('invDocSubtotal');
  const discountRow = document.getElementById('invDocDiscountRow');
  const elDiscount = document.getElementById('invDocDiscountVal');
  const elShipping = document.getElementById('invDocShippingVal');
  const elNetTotal = document.getElementById('invDocNetTotal');

  const subtotal = order.subtotal || order.total || 0;
  const discount = order.discountAmount || 0;
  const shipping = order.shippingFee || 0;
  const total = order.total || subtotal;

  if (elSubtotal) elSubtotal.textContent = `${subtotal} د.ل`;
  if (discount > 0 && discountRow && elDiscount) {
    discountRow.style.display = 'flex';
    elDiscount.textContent = `-${discount} د.ل`;
  } else if (discountRow) {
    discountRow.style.display = 'none';
  }

  if (elShipping) elShipping.textContent = shipping > 0 ? `${shipping} د.ل` : 'مجاني بالكلية';
  if (elNetTotal) elNetTotal.textContent = `${total} د.ل`;

  invModal.classList.add('active');
}

function printInvoiceFromModal() {
  const order = ERP_STATE.lastCreatedInvoiceOrder;
  const rawNum = order ? (order.invoiceNumber || order.orderNumber || 'INV-2026').replace(/\D/g, '') : '2026';
  const originalTitle = document.title;
  document.title = `Absolute_Dental_Invoice_${rawNum}`;
  window.print();
  setTimeout(() => { document.title = originalTitle; }, 1500);
}

async function downloadInvoicePDFFromModal() {
  const order = ERP_STATE.lastCreatedInvoiceOrder;
  const rawNum = order ? (order.invoiceNumber || order.orderNumber || 'INV-2026').replace(/\D/g, '') : '2026';
  const pdfFileName = `Absolute_Dental_Invoice_${rawNum}.pdf`;

  const sheetElement = document.getElementById('printableInvoiceDocument');
  if (!sheetElement) {
    showToast('خطأ: تعذر العثور على وثيقة الفاتورة', 'error');
    return;
  }

  try {
    showToast('جاري إنشاء ملف PDF...');
    const canvas = await html2canvas(sheetElement, { scale: 2, useCORS: true, logging: false });
    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(pdfFileName);
    showToast('تم تحميل الفاتورة بصيغة PDF بنجاح ✓');
  } catch (err) {
    console.error('PDF export error:', err);
    window.print();
  }
}

// -------------------------------------------------------------
// 19. NAVIGATION & GENERAL UI CONTROLS
// -------------------------------------------------------------
function navigateToScreen(screenId) {
  ERP_STATE.activeScreen = screenId;

  // Sidebar link active state
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    if (item.getAttribute('data-screen') === screenId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Screen section views
  document.querySelectorAll('.secondary-screen-view').forEach(screen => {
    screen.classList.remove('active');
  });

  const target = document.getElementById(`${screenId}Screen`);
  if (target) {
    target.classList.add('active');
  } else {
    const dash = document.getElementById('dashboardScreen');
    if (dash) dash.classList.add('active');
  }

  // Populate screen data
  if (screenId === 'dashboard') updateDashboardRealUI();
  else if (screenId === 'products') renderProductsTable();
  else if (screenId === 'inventory') renderInventoryTable();
  else if (screenId === 'pos') renderPosScreen();
  else if (screenId === 'orders') renderOrdersTable('all');
  else if (screenId === 'purchases') renderPurchasesTable();
  else if (screenId === 'sales') renderSalesTable();
  else if (screenId === 'expenses') renderExpensesTable();
  else if (screenId === 'partners') renderCustomersTable();
  else if (screenId === 'reports') renderReportsScreen();
  else if (screenId === 'audit') renderAuditTable();

  closeMobileSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSidebarCollapse() {
  const sidebar = document.getElementById('appSidebar');
  const container = document.getElementById('appMainContainer');
  if (sidebar && container) {
    sidebar.classList.toggle('collapsed');
    container.classList.toggle('sidebar-collapsed');
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('appSidebar');
  if (sidebar) sidebar.classList.remove('mobile-open');
}

function toggleUserDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('headerUserMenu');
  if (menu) menu.classList.toggle('show');
}

function closeUserDropdown() {
  const menu = document.getElementById('headerUserMenu');
  if (menu) menu.classList.remove('show');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    modal.classList.remove('show');
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  if (type === 'warning') toast.style.backgroundColor = 'var(--status-warning)';
  if (type === 'error') toast.style.backgroundColor = 'var(--status-danger)';

  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function openCommandPalette() {
  navigateToScreen('products');
  const searchInput = document.getElementById('productsSearchInput');
  if (searchInput) searchInput.focus();
}

// -------------------------------------------------------------
// 20. INITIALIZATION
// -------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  updateSessionUserUI(ERP_STATE.currentPartner);
  updateDashboardRealUI();

  // Keyboard shortcut listener (Ctrl+K for search, 1/2/3 for user switch)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openCommandPalette();
    }
    const overlay = document.getElementById('userSelectOverlay');
    if (overlay && !overlay.classList.contains('hidden') && overlay.style.display !== 'none') {
      if (e.key === '1') loginAsUser('مؤمن');
      if (e.key === '2') loginAsUser('طه');
      if (e.key === '3') loginAsUser('ياسي');
    }
  });

  // Close dropdowns on outside click
  window.addEventListener('click', () => {
    closeUserDropdown();
  });
});
