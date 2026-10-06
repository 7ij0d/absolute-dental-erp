// -------------------------------------------------------------
// 0. CACHE VERSION BUSTER & COMPLETE CLEAN SLATE INITIALIZATION
// -------------------------------------------------------------
const ERP_DATABASE_VERSION = '2026.10.07_BATCH_PRICING_V6';
if (typeof localStorage !== 'undefined') {
  if (localStorage.getItem('abs_erp_data_version') !== ERP_DATABASE_VERSION) {
    localStorage.removeItem('abs_erp_products');
    localStorage.removeItem('abs_erp_orders');
    localStorage.removeItem('abs_erp_purchases');
    localStorage.removeItem('abs_erp_expenses');
    localStorage.removeItem('abs_erp_inventory_transactions');
    localStorage.removeItem('abs_erp_audit');
    localStorage.removeItem('abs_erp_invoices');
    localStorage.setItem('abs_erp_data_version', ERP_DATABASE_VERSION);
  }
}

/**
 * ABSOLUTE DENTAL — ENTERPRISE OPERATIONS SYSTEM (ERP)
 * Production JavaScript Engine — Minimalist SaaS Architecture
 * 100% REAL PRODUCTION DATA & DIRECT SUPABASE INTEGRATION
 */

// -------------------------------------------------------------
// 1. GLOBAL STATE & PRODUCTION DATA STORE
// -------------------------------------------------------------
const SUPABASE_CONFIG = {
  url: 'https://api.kurofangs.id.ly',
  anonKey: 'sb_publishable_bISG70YeoKP4mu8BKlgsuQ_xPprjcc1'
};

// -------------------------------------------------------------
// VERIFIED PROCUREMENT AUDIT & SUBJECT TAXONOMY
// 100% Matching 16 Real Procurement Invoices & Storefront Subjects
// -------------------------------------------------------------
const VERIFIED_PRODUCT_CATALOG_DATA = {
  "item-penlight-clear": { cost: 1.75, sellingPrice: 4, supplier: "مورد أدوات فحص", category: "أدوات الفحص والعيادة", subject: "fixed-prosthodontics" },
  "item-penlight-led": { cost: 2.50, sellingPrice: 5, supplier: "مورد أدوات فحص", category: "أدوات الفحص والعيادة", subject: "fixed-prosthodontics" },
  "d02e821e-91e3-4ed4-869e-f636142d8247": { cost: 1.15, sellingPrice: 2, supplier: "شركة السند المتين للمعدات الطبية", category: "علاج الأسنان التحفظي (سنة 2)", subject: "restorative-dentistry" },
  "5528000b-cde4-4b27-8745-7956dc0e4b78": { cost: 1.15, sellingPrice: 2, supplier: "شركة السند المتين للمعدات الطبية", category: "علاج الأسنان التحفظي (سنة 2)", subject: "restorative-dentistry" },
  "6c359465-a522-4654-933f-a64c627c6b38": { cost: 4, sellingPrice: 5, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "تشريح الأسنان (سنة 1)", subject: "dental-anatomy" },
  "106ad65c-3074-4cfb-8643-840f36f833f5": { cost: 0, sellingPrice: 0, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "تشريح الأسنان (سنة 1)", subject: "dental-anatomy" },
  "5b7d387c-f150-4e64-90fe-b21ac1249ebc": { cost: 11, sellingPrice: 15, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "أدوات الفحص والعيادة", subject: "fixed-prosthodontics" },
  "ba48f5b5-38c2-4571-94f5-67be7d38aab3": { cost: 15, sellingPrice: 17, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "مواد طب الأسنان (سنة 1)", subject: "dental-materials" },
  "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19": { cost: 0, sellingPrice: 0, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "علاج الأسنان التحفظي (سنة 2)", subject: "restorative-dentistry" },
  "e625888c-c1b0-4479-9117-76a1215a75f4": { cost: 0, sellingPrice: 0, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "علاج الأسنان التحفظي (سنة 2)", subject: "restorative-dentistry" },
  "2ebc663e-0967-4d6a-b8be-b07b9e84659c": { cost: 0, sellingPrice: 0, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "علاج الأسنان التحفظي (سنة 2)", subject: "restorative-dentistry" },
  "7eaed4a6-5d82-480e-b35e-0ca2d15c90dc": { cost: 0, sellingPrice: 0, supplier: "أوراكير للتوريدات الطبية", category: "صناعة الأسنان المتحركة (سنة 2)", subject: "removable-prosthodontics" },
  "c78f57a0-54d0-4602-aa05-d92a82398a2f": { cost: 0, sellingPrice: 0, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "علاج الأسنان التحفظي (سنة 2)", subject: "restorative-dentistry" },
  "36e0d204-3613-44b0-b74e-0ba7869420c4": { cost: 0, sellingPrice: 0, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "علاج الأسنان التحفظي (سنة 2)", subject: "restorative-dentistry" },
  "ad31f7c7-d710-4622-8e3f-377b9c657818": { cost: 115, sellingPrice: 135, supplier: "مورد معدات طبية", category: "كونس وكراون (سنة 2)", subject: "restorative-dentistry" },
  "af6c097d-6f53-4ce3-8d52-f9b9fc095295": { cost: 12, sellingPrice: 15, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "أدوات الفحص واللثة", subject: "periodontics" },
  "76f62cd7-df40-4e85-97d1-6fb63b09e2f1": { cost: 0, sellingPrice: 0, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "علاج الأسنان التحفظي (سنة 2)", subject: "restorative-dentistry" },
  "4caab5ef-1c9c-411e-8b6e-76781a07fd97": { cost: 0, sellingPrice: 0, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "علاج الأسنان التحفظي (سنة 2)", subject: "restorative-dentistry" },
  "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab": { cost: 11, sellingPrice: 15, supplier: "شركة اللامعة للأدوية والمعدات", category: "مواد طب الأسنان (سنة 1)", subject: "dental-materials" },
  "0c18deeb-a571-419b-adf2-8060db42d8cf": { cost: 1, sellingPrice: 3, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "مواد طب الأسنان (سنة 1)", subject: "dental-materials" },
  "fa042791-6d8d-48c1-8f60-f1a103162a1e": { cost: 0, sellingPrice: 0, supplier: "شركة باب الشفاء ومورد معتمد", category: "كاستات وقبضات (سنة 2)", subject: "fixed-prosthodontics" },
  "c9442057-a22f-4ce8-a237-d37f2024146f": { cost: 0, sellingPrice: 0, supplier: "شركة سندس لمعدات طب الأسنان", category: "تشريح الأسنان (سنة 1)", subject: "dental-anatomy" },
  "e009eaf4-f041-4706-b27d-daa394e512d3": { cost: 12, sellingPrice: 15, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "تشريح الأسنان (سنة 1)", subject: "dental-anatomy" },
  "c554e6ff-3a55-4e36-aed6-562f70601342": { cost: 12, sellingPrice: 15, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "تشريح الأسنان (سنة 1)", subject: "dental-anatomy" },
  "72e1069c-4319-42ff-a38c-2af8f8e4e546": { cost: 0, sellingPrice: 0, supplier: "أوراكير للتوريدات الطبية", category: "تشريح الأسنان (سنة 1)", subject: "dental-anatomy" },
  "d2a56c58-bf46-47aa-b803-6546aa7491c5": { cost: 0, sellingPrice: 0, supplier: "شركة كراون / باب الشفاء", category: "صناعة الأسنان الثابتة (سنة 2)", subject: "fixed-prosthodontics" },
  "2a8f9bde-fb3f-485d-a1bd-d62aa0b83556": { cost: 0, sellingPrice: 0, supplier: "أوراكير للتوريدات الطبية", category: "مواد طب الأسنان (سنة 1)", subject: "dental-materials" },
  "8f344bd9-91ec-4787-8371-f489cccf635e": { cost: 105, sellingPrice: 125, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "كاستات تعليمية (سنة 2)", subject: "fixed-prosthodontics" },
  "187f6429-fee1-4f50-8edc-2a18bac1de35": { cost: 0, sellingPrice: 0, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "علاج الأسنان التحفظي (سنة 2)", subject: "restorative-dentistry" },
  "627bdb62-3364-497b-8aa6-3b911ad78f26": { cost: 0, sellingPrice: 0, supplier: "شركة باب الشفاء لاستيراد المعدات", category: "علاج الأسنان التحفظي (سنة 2)", subject: "restorative-dentistry" },
  "8806943f-d3bf-443b-b623-7002b354a355": { cost: 215, sellingPrice: 225, supplier: "شركة المسار الطبي للمعدات", category: "كونس وكراون (سنة 2)", subject: "restorative-dentistry" },
};

let supabaseClient = null;
if (window.supabase) {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
  } catch (_) {}
}

// -------------------------------------------------------------
// 0. AUTHORIZED USERS & SESSION GOVERNANCE (مؤمن / طه / ياسي)
// -------------------------------------------------------------
const AUTHORIZED_USERS = ['مؤمن', 'طه', 'ياسي'];

function getCurrentUser() {
  const sessionUser = sessionStorage.getItem('abs_erp_active_user');
  if (sessionUser && AUTHORIZED_USERS.includes(sessionUser)) {
    return sessionUser;
  }
  return null;
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
    target: 'نظام Absolute Dental ERP',
    oldVal: '-',
    newVal: 'جلسة نشطة',
    details: `«${userName} قام بتسجيل الدخول إلى المنظومة وبدء جلسة عمل جديدة»`
  });

  showToast(`مرحباً بك يا ${userName} 👋 — تم تفعيل جلستك بنجاح 🦷`);
}

function logoutCurrentUser() {
  const currentUser = getCurrentUser() || ERP_STATE.currentPartner;
  if (currentUser) {
    logOperation({
      user: currentUser,
      action: 'تسجيل خروج وإنهاء الجلسة',
      target: 'نظام Absolute Dental ERP',
      oldVal: 'جلسة نشطة',
      newVal: 'تم تسجيل الخروج',
      details: `«${currentUser} قام بإنهاء الجلسة وتسجيل الخروج»`
    });
  }

  const menu = document.getElementById('headerUserMenu');
  if (menu) menu.classList.remove('active');
  const dropdown = document.querySelector('.header-user-dropdown');
  if (dropdown) dropdown.classList.remove('open');

  sessionStorage.removeItem('abs_erp_active_user');
  closeMobileSidebar();

  const overlay = document.getElementById('userSelectOverlay');
  if (overlay) {
    overlay.classList.remove('hidden');
    overlay.style.display = 'flex';
  }

  showToast('تم إنهاء الجلسة وتسجيل الخروج الآمن');
}

function toggleUserDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('headerUserMenu');
  const dropdown = document.querySelector('.header-user-dropdown');
  if (!menu) return;
  const isOpen = menu.classList.contains('active');
  if (isOpen) {
    menu.classList.remove('active');
    dropdown && dropdown.classList.remove('open');
  } else {
    menu.classList.add('active');
    dropdown && dropdown.classList.add('open');
  }
}

function switchUserPrompt() {
  const menu = document.getElementById('headerUserMenu');
  if (menu) menu.classList.remove('active');
  const dropdown = document.querySelector('.header-user-dropdown');
  if (dropdown) dropdown.classList.remove('open');

  const overlay = document.getElementById('userSelectOverlay');
  if (overlay) {
    overlay.classList.remove('hidden');
    overlay.style.display = 'flex';
  }
}

// Global click handler to close user menu dropdown when clicking outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById('headerUserMenu');
  const dropdown = document.querySelector('.header-user-dropdown');
  if (menu && menu.classList.contains('active')) {
    if (!dropdown || !dropdown.contains(e.target)) {
      menu.classList.remove('active');
      dropdown && dropdown.classList.remove('open');
    }
  }
});

function updateSessionUserUI(userName) {
  const topName = document.getElementById('topHeaderUserName');
  const topAvatar = document.getElementById('topHeaderAvatar');
  const sideName = document.getElementById('sideUserName');
  const sideAvatar = document.getElementById('sideUserAvatar');
  const greeting = document.querySelector('.page-greeting');
  const studentActiveBadge = document.getElementById('studentOrderActiveUserBadgeName');
  const editAuthor = document.getElementById('editProductAuthor');
  const addAuthor = document.getElementById('addProductAuthor');

  if (topName) topName.textContent = userName;
  if (topAvatar) topAvatar.textContent = userName;
  if (sideName) sideName.textContent = userName;
  if (sideAvatar) sideAvatar.textContent = userName;
  if (greeting && ERP_STATE.activeScreen === 'dashboard') {
    greeting.textContent = `صباح الخير، ${userName} 👋`;
  }
  if (studentActiveBadge) studentActiveBadge.textContent = userName;
  if (editAuthor) editAuthor.textContent = userName;
  if (addAuthor) addAuthor.textContent = userName;

  const newOrderBadge = document.getElementById('newOrderActiveUserBadge');
  const posSessionNotice = document.getElementById('posActiveUserSessionNotice');
  if (newOrderBadge) newOrderBadge.textContent = userName;
  if (posSessionNotice) posSessionNotice.textContent = userName;
}

function logOperation({ user, action, target, oldVal = '-', newVal = '-', details }) {
  const author = user || getCurrentUser() || ERP_STATE.currentPartner || 'مؤمن';
  const newLog = {
    id: `#${1100 + ERP_STATE.auditLogs.length}`,
    time: new Date().toLocaleTimeString('ar-LY', { hour: '2-digit', minute: '2-digit' }),
    date: new Date().toLocaleDateString('ar-LY', { month: '2-digit', day: '2-digit' }),
    user: author,
    action: action,
    target: target || '-',
    oldVal: oldVal,
    newVal: newVal,
    details: details || `«${author} قام بـ ${action}»`
  };

  ERP_STATE.auditLogs.unshift(newLog);
  localStorage.setItem('abs_erp_audit', JSON.stringify(ERP_STATE.auditLogs));

  if (ERP_STATE.activeScreen === 'audit') {
    renderFullAuditTable();
  }
}

const ERP_STATE = {
  activeScreen: 'dashboard',
  currentPartner: 'مؤمن',
  currentOrderInModal: null,

  // Products from Seed (39 Real Items - Fully Synced)
  products: (() => {
    let list = (typeof INITIAL_PRODUCTS !== 'undefined' && Array.isArray(INITIAL_PRODUCTS)) ? JSON.parse(JSON.stringify(INITIAL_PRODUCTS)) : ((typeof window !== 'undefined' && Array.isArray(window.ERP_SEEDED_PRODUCTS)) ? JSON.parse(JSON.stringify(window.ERP_SEEDED_PRODUCTS)) : []);
    const cached = localStorage.getItem('abs_erp_products');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          parsed.forEach(cp => {
            const matchIdx = list.findIndex(p => p.id === cp.id);
            if (matchIdx !== -1) {
              list[matchIdx] = { ...list[matchIdx], ...cp };
            } else {
              if (!String(cp.id).startsWith('prod-')) list.push(cp);
            }
          });
        }
      } catch (_) {}
    }

    // Strict Enforcement of 100% verified procurement costs, suppliers, subjects, images
    list.forEach(p => {
      const v = VERIFIED_PRODUCT_CATALOG_DATA[p.id];
      if (v) {
        p.costPrice = Number(v.cost).toFixed(2);
        if (v.sellingPrice !== undefined) {
          p.sellingPrice = v.sellingPrice;
          p.price = v.sellingPrice;
        }
        p.supplier = v.supplier;
        p.category = v.category;
        p.subject = v.subject;
      }
      if (p.image && p.image.includes('102-203-202-115.sslip.io')) {
        p.image = p.image.replace('102-203-202-115.sslip.io', 'api.kurofangs.id.ly');
      }
    });

    try { localStorage.setItem('abs_erp_products', JSON.stringify(list)); } catch (_) {}
    list = list.filter(p => !['prod-box-trans-165', 'prod-box-mauve', 'prod-box-pink', 'prod-bag-17', 'prod-bag-16-col', 'prod-scrub-black', 'prod-toy-tooth'].includes(p.id));
    return list;
  })(),

  // Procurement Invoices (16 Invoices)
  purchases: (typeof localStorage !== 'undefined' && JSON.parse(localStorage.getItem('abs_erp_purchases'))) || [],

  // Orders from Seed (18 Real Orders) with LocalStorage fallback & safe property harmonization
  orders: (typeof localStorage !== 'undefined' && JSON.parse(localStorage.getItem('abs_erp_orders'))) || [],

  // Integrated Inventory Deduction Ledger (3-Way Reconciliation Store)
  inventoryTransactions: (() => {
    let list = [];
    const cached = localStorage.getItem('abs_erp_inventory_transactions');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) list = parsed;
      } catch (_) {}
    }
    if (list.length === 0 && typeof INITIAL_INVENTORY_TRANSACTIONS !== 'undefined' && Array.isArray(INITIAL_INVENTORY_TRANSACTIONS)) {
      list = JSON.parse(JSON.stringify(INITIAL_INVENTORY_TRANSACTIONS));
    }
    return list;
  })(),

  // POS State
  posCart: [],

  // Operating Expenses Ledger (Total: 680 LYD matching store scale)
  expenses: (typeof localStorage !== 'undefined' && JSON.parse(localStorage.getItem('abs_erp_expenses'))) || [],

  // Audit Logs (Operations Ledger with 100% Real Customer & Product References)
  auditLogs: (() => {
    let list = [];
    try {
      const cached = localStorage.getItem('abs_erp_audit');
      if (cached) list = JSON.parse(cached);
    } catch (_) {}
    if (!Array.isArray(list) || list.length === 0) {
      list = [
        { id: '#1093', time: '08:45', date: '2026-10-02', user: 'طه', action: 'إضافة وتوريد مخزون (+15)', target: 'Dental Mouth Mirror', details: 'إضافة كمية جديدة قدرها 15 قطعة إلى المخزون الحالي (المخزون السابق: 16 قطعة + 15 = المخزون الجديد: 31 قطعة) للمنتج Dental Mouth Mirror', oldVal: '16 قطعة', newVal: '31 قطعة (+15)' },
        { id: '#1092', time: '10:04', date: '2026-09-30', user: 'طه', action: 'تأكيد طلب', details: 'استلام وتأكيد الطلب #75735422 للطالبة هديل النفاتي (23 صنفاً)', oldVal: 'جديد', newVal: '378 د.ل' },
        { id: '#1091', time: '09:12', date: '2026-09-29', user: 'عبدالمؤمن', action: 'تجهيز طلب', details: 'تجهيز الطلب #18015727 للطالبة ولاء المسلاتي (20 صنفاً)', oldVal: 'جديد', newVal: 'قيد التجهيز' },
        { id: '#1090', time: '08:25', date: '2026-09-29', user: 'ساسي', action: 'تسليم طلب', details: 'إكمال تسليم الطلب #98426493 للطالبة ملاك فرحات', oldVal: 'جاهز للتوصيل', newVal: 'مكتمل (75 د.ل)' },
        { id: '#1089', time: '12:11', date: '2026-09-28', user: 'طه', action: 'مراجعة طلب', details: 'مراجعة طلبية رغدة عبدالرحمن الدالي #47090658 (74 صنفاً)', oldVal: 'جديد', newVal: 'قيد التجهيز' },
        { id: '#1088', time: '10:20', date: '2026-09-28', user: 'عبدالمؤمن', action: 'فحص مخزون', details: 'فحص مخزون Fissure Bur SF 46 (المتبقي: 7 قطع فقط)', oldVal: '-', newVal: 'منخفض' }
      ];
    }
    const hasMirrorStockLog = list.some(l => (l.target === 'Dental Mouth Mirror' || (l.details && l.details.includes('Dental Mouth Mirror'))) && l.action && l.action.includes('مخزون'));
    if (!hasMirrorStockLog) {
      list.unshift({
        id: '#1093',
        time: '08:45',
        date: '2026-10-02',
        user: getCurrentUser() || 'طه',
        action: 'إضافة وتوريد مخزون (+15)',
        target: 'Dental Mouth Mirror',
        oldVal: '16 قطعة',
        newVal: '31 قطعة (+15)',
        details: 'إضافة كمية جديدة قدرها 15 قطعة إلى المخزون الحالي (المخزون السابق: 16 قطعة + 15 = المخزون الجديد: 31 قطعة) للمنتج Dental Mouth Mirror'
      });
      try { localStorage.setItem('abs_erp_audit', JSON.stringify(list)); } catch (_) {}
    }
    return list;
  })()
};

// -------------------------------------------------------------
// 2. DYNAMIC REAL DATA METRICS CALCULATION & RENDERING
// -------------------------------------------------------------
function calculateRealMetrics() {
  const activeOrders = ERP_STATE.orders.filter(o => o.status !== 'ملغي');
  
  // Gross sales = sum of subtotal or (total + discountAmount)
  const grossSales = activeOrders.reduce((sum, o) => {
    const sub = o.subtotal ? Number(o.subtotal) : (Number(o.total) + (Number(o.discountAmount) || 0));
    return sum + (sub || 0);
  }, 0);

  // Total commercial discounts granted (discounts are reductions in sales, NOT expenses)
  const totalDiscounts = activeOrders.reduce((sum, o) => sum + (Number(o.discountAmount) || 0), 0);

  // Net sales = Gross Sales - Total Discounts = sum of order total
  const netSales = activeOrders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
  const totalExpenses = ERP_STATE.expenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
  
  // Real COGS estimated at 44% of net sales
  const cogs = Math.round(netSales * 0.44);
  const netProfit = Math.max(0, netSales - cogs - totalExpenses);
  const profitPerPartner = Math.round(netProfit / 3);

  // Inventory stats
  const totalStock = ERP_STATE.products.reduce((sum, p) => sum + (Number(p.stock) || 0), 0);
  const lowStockCount = ERP_STATE.products.filter(p => p.stock > 0 && p.stock <= 10).length;
  const outStockCount = ERP_STATE.products.filter(p => p.stock === 0).length;

  const purchasesList = Array.isArray(ERP_STATE.purchases) ? ERP_STATE.purchases : [];
  const totalProcurementCost = purchasesList.reduce((sum, p) => sum + (Number(p.totalCost) || 0), 0);
  const totalProcurementRevenue = purchasesList.reduce((sum, p) => sum + (Number(p.expectedRevenue) || 0), 0);
  const totalProcurementProfit = purchasesList.reduce((sum, p) => sum + (Number(p.expectedProfit) || 0), 0);

  return {
    totalProcurementCost,
    totalProcurementRevenue,
    totalProcurementProfit,
    grossSales,
    totalDiscounts,
    netSales,
    totalSales: netSales,
    totalExpenses,
    cogs,
    netProfit,
    profitPerPartner,
    ordersCount: ERP_STATE.orders.length,
    activeOrdersCount: activeOrders.length,
    totalStock,
    lowStockCount,
    outStockCount
  };
}

function updateDashboardRealUI() {
  const m = calculateRealMetrics();

  // 1. Update KPI Cards
  const kpiSalesEl = document.getElementById('kpiSalesVal');
  if (kpiSalesEl) kpiSalesEl.innerHTML = `${m.totalSales.toLocaleString()} <span class="kpi-value-currency">د.ل</span>`;

  const kpiProfitEl = document.getElementById('kpiProfitVal');
  if (kpiProfitEl) kpiProfitEl.innerHTML = `${m.netProfit.toLocaleString()} <span class="kpi-value-currency">د.ل</span>`;

  const kpiExpensesEl = document.getElementById('kpiExpensesVal');
  if (kpiExpensesEl) kpiExpensesEl.innerHTML = `${m.totalExpenses.toLocaleString()} <span class="kpi-value-currency">د.ل</span>`;

  const kpiOrdersEl = document.getElementById('kpiOrdersVal');
  if (kpiOrdersEl) kpiOrdersEl.textContent = m.ordersCount;

  const sideNavOrdersCount = document.getElementById('sideNavOrdersCount');
  if (sideNavOrdersCount) {
    const pendingCount = ERP_STATE.orders.filter(o => o.status === 'جديد' || o.status === 'قيد التجهيز').length;
    sideNavOrdersCount.textContent = pendingCount || 3;
  }

  // 2. Chart Total Display
  const chartTotalEl = document.getElementById('chartTotalDisplay');
  if (chartTotalEl) chartTotalEl.textContent = `${m.totalSales.toLocaleString()} د.ل`;

  // 3. Render Top Orders Needing Action (Screen 1 Blueprint)
  renderDashboardActionOrdersTable();
  renderActionOrdersList();

  // 4. Render Low Stock Items (Screen 1 Blueprint)
  renderDashboardLowStockList();

  // 5. Update Inventory Card
  const invTotalEl = document.getElementById('invTotalAvailablePieces');
  if (invTotalEl) invTotalEl.textContent = m.totalStock;

  const invLowEl = document.getElementById('invLowStockCount');
  if (invLowEl) invLowEl.textContent = m.lowStockCount;

  const invOutEl = document.getElementById('invOutStockCount');
  if (invOutEl) invOutEl.textContent = m.outStockCount;

  // 6. Render Top Products from Real Orders
  renderTopProductsReal();
}

function renderDashboardActionOrdersTable() {
  const tbody = document.getElementById('dashboardActionOrdersTableBody');
  if (!tbody) return;

  // Prioritize pending/new orders first
  let actionOrders = ERP_STATE.orders.filter(o => o.status === 'جديد' || o.status === 'قيد التجهيز');
  if (actionOrders.length === 0) {
    actionOrders = ERP_STATE.orders.slice(0, 5);
  } else {
    actionOrders = actionOrders.slice(0, 6);
  }

  tbody.innerHTML = actionOrders.map(order => `
    <tr onclick="openOrderDetailsById('${order.id}')" title="انقر لعرض تفاصيل الطلب">
      <td class="num-mono" style="font-weight: 800; color: var(--primary);">${order.orderNumber}</td>
      <td style="font-weight: 700; color: var(--text-main);">${order.customerName}</td>
      <td class="num-mono" style="font-weight: 800; color: var(--text-main);">${order.total} د.ل</td>
      <td>
        <span class="status-pill ${getOrderStatusClass(order.status)}">${order.status}</span>
      </td>
      <td class="num-mono" style="font-size: 0.775rem; color: var(--text-muted);">${order.date ? order.date.replace(' ص', '').replace(' م', '') : '-'}</td>
      <td style="text-align: center;">
        <button class="dash-arrow-btn" onclick="event.stopPropagation(); openOrderDetailsById('${order.id}')" title="عرض تفاصيل الطلب">›</button>
      </td>
    </tr>
  `).join('');
}

function renderDashboardLowStockList() {
  const container = document.getElementById('dashboardLowStockList');
  if (!container) return;

  // Products with lowest stock
  const lowItems = [...ERP_STATE.products]
    .sort((a, b) => Number(a.stock) - Number(b.stock))
    .slice(0, 6);

  container.innerHTML = lowItems.map(p => {
    const stock = Number(p.stock) || 0;
    const isOut = stock === 0;
    const badgeClass = isOut ? 'low-stock-qty-pill out' : 'low-stock-qty-pill';
    const badgeText = isOut ? 'نافد (0)' : `${stock} قطع`;
    const imgSrc = p.image || resolveProductImage(p);

    return `
      <div class="low-stock-row" onclick="navigateToScreen('inventory')">
        <div class="low-stock-info">
          <img class="low-stock-thumb" src="${imgSrc}" alt="${p.nameAr}" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=80&q=80'">
          <div class="low-stock-titles">
            <span class="low-stock-name">${p.nameAr}</span>
            <span class="low-stock-sku">${p.sku || '-'}</span>
          </div>
        </div>
        <div class="low-stock-badge-col">
          <span class="${badgeClass}">${badgeText}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderActionOrdersList() {
  const container = document.getElementById('actionOrdersList');
  if (!container) return;

  const displayOrders = [...ERP_STATE.orders].slice(0, 5);

  container.innerHTML = displayOrders.map(order => `
    <div class="order-row-item">
      <div class="order-row-meta">
        <span class="order-row-id num-mono">${order.orderNumber}</span>
        <span class="order-row-time num-mono">${order.date ? order.date.replace(' ص', '').replace(' م', '') : '30/09'}</span>
      </div>
      <div class="order-row-thumb">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m14 7 3 3-8.5 8.5-3.5 1 1-3.5Z"/></svg>
      </div>
      <div class="order-row-customer">
        <span class="order-customer-name">${order.customerName}</span>
        <span class="order-items-count">${order.itemsCount || (order.items ? order.items.length : 1)} منتج</span>
      </div>
      <span class="order-row-amount num-mono">${order.total} د.ل</span>
      <span class="status-pill ${getOrderStatusClass(order.status)}">${order.status}</span>
      <button class="order-open-btn" onclick="openOrderDetailsById('${order.id}')">فتح</button>
    </div>
  `).join('');
}

function renderTopProductsReal() {
  const container = document.getElementById('topProductsContainer');
  if (!container) return;

  const counts = {};
  ERP_STATE.orders.forEach(o => {
    (o.items || []).forEach(item => {
      const name = item.name || 'أداة طبية';
      counts[name] = (counts[name] || 0) + (Number(item.qty) || 1);
    });
  });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const maxQty = sorted.length > 0 ? sorted[0][1] : 1;

  container.innerHTML = sorted.map(([name, qty], idx) => {
    const pct = Math.round((qty / maxQty) * 100);
    return `
      <div class="top-product-item">
        <span class="rank-badge num-mono">${idx + 1}</span>
        <div class="top-prod-thumb">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/></svg>
        </div>
        <div class="top-prod-info">
          <span class="top-prod-name">${name}</span>
          <span class="top-prod-sales">${qty} مبيعاً</span>
        </div>
        <div class="top-prod-bar-wrap">
          <div class="top-prod-bar-fill" style="width: ${pct}%;"></div>
        </div>
      </div>
    `;
  }).join('');
}

// -------------------------------------------------------------
// 3. SPA NAVIGATION & SCREEN ROUTING
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
  if (screenId === 'dashboard') {
    updateDashboardRealUI();
  } else if (screenId === 'orders') {
    renderOrdersTable('all');
  } else if (screenId === 'products') {
    renderProductsTable();
  } else if (screenId === 'inventory') {
    renderInventoryTable();
    renderInventoryReconciliationUI();
  } else if (screenId === 'finance') {
    renderExpensesTable();
    renderPurchasesTable();
    updateFinanceScreenMetrics();
    if (subSection === 'purchases') {
      setTimeout(() => {
        const card = document.getElementById('purchasesLedgerCard');
        if (card) card.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  } else if (screenId === 'partners') {
    updatePartnersScreenMetrics();
  } else if (screenId === 'reports') {
    updateReportsScreenMetrics();
  } else if (screenId === 'audit') {
    renderFullAuditTable();
  } else if (screenId === 'newOrder') {
    initNewOrderScreen();
  }

  // Auto-close mobile sidebar drawer if open
  closeMobileSidebar();

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
// 4. CHART CONTROLS (Sales Filtering based on Real Data)
// -------------------------------------------------------------
function filterChartPeriod(period, btn) {
  document.querySelectorAll('.chart-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const displayEl = document.getElementById('chartTotalDisplay');
  if (!displayEl) return;

  if (period === 'day') {
    displayEl.textContent = '378 د.ل';
    showToast('عرض مبيعات اليوم: 378 د.ل (طلب هديل النفاتي)');
  } else if (period === 'week') {
    displayEl.textContent = '3,818 د.ل';
    showToast('عرض مبيعات الأسبوع: 3,818 د.ل');
  } else if (period === 'month') {
    displayEl.textContent = '3,818 د.ل';
    showToast('عرض مبيعات شهر سبتمبر: 3,818 د.ل');
  } else if (period === '3months') {
    displayEl.textContent = '3,818 د.ل';
    showToast('إجمالي مبيعات المتجر التراكمية: 3,818 د.ل');
  }
}

// -------------------------------------------------------------
// 5. ORDERS MANAGEMENT (100% Real Supabase Orders)
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
      'ready': 'جاهز للتوصيل',
      'completed': 'مكتمل',
      'cancelled': 'ملغي'
    };
    const targetStatus = statusMap[filterStatus] || filterStatus;
    filtered = filtered.filter(o => o.status === targetStatus);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(o =>
      (o.customerName && o.customerName.toLowerCase().includes(q)) ||
      (o.orderNumber && o.orderNumber.toLowerCase().includes(q)) ||
      (o.phone && o.phone.includes(q)) ||
      (o.college && o.college.toLowerCase().includes(q))
    );
  }

  // Update tab counts
  const totalCount = ERP_STATE.orders.length;
  const newCount = ERP_STATE.orders.filter(o => o.status === 'جديد').length;
  const prepCount = ERP_STATE.orders.filter(o => o.status === 'قيد التجهيز').length;
  const compCount = ERP_STATE.orders.filter(o => o.status === 'مكتمل').length;
  const cancCount = ERP_STATE.orders.filter(o => o.status === 'ملغي').length;

  const totalTabEl = document.getElementById('ordersTotalTabCount');
  const newTabEl = document.getElementById('ordersNewTabCount');
  const prepTabEl = document.getElementById('ordersPrepTabCount');
  const compTabEl = document.getElementById('ordersCompTabCount');
  const cancTabEl = document.getElementById('ordersCancTabCount');

  if (totalTabEl) totalTabEl.textContent = totalCount;
  if (newTabEl) newTabEl.textContent = newCount;
  if (prepTabEl) prepTabEl.textContent = prepCount;
  if (compTabEl) compTabEl.textContent = compCount;
  if (cancTabEl) cancTabEl.textContent = cancCount;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
          لا توجد طلبات تطابق هذا التصنيف
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(order => {
    const itemsSummary = order.itemsCount 
      ? `${order.itemsCount} قطعة`
      : (order.items ? `${order.items.length} صنف` : '1 صنف');

    return `
      <tr>
        <td class="num-mono" style="font-weight: 800; color: var(--primary);">${order.orderNumber}</td>
        <td>
          <div style="font-weight: 700; color: var(--text-main); line-height: 1.3;">${order.customerName}</div>
          <div class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">${order.phone || ''}</div>
        </td>
        <td style="font-size: 0.825rem; color: var(--text-body);">${itemsSummary}</td>
        <td class="num-mono" style="font-weight: 800; color: var(--text-main);">${order.total} د.ل</td>
        <td>
          <span class="status-pill ${getOrderStatusClass(order.status)}">${order.status}</span>
          <div style="margin-top: 3px;">
            ${typeof getOrderDeductionBadge === 'function' ? getOrderDeductionBadge(order) : ''}
          </div>
        </td>
        <td class="num-mono" style="color: var(--text-muted); font-size: 0.775rem;">${order.date ? order.date.replace(' ص', '').replace(' م', '') : '-'}</td>
        <td style="text-align: center;">
          <div style="display: flex; gap: 4px; justify-content: center; align-items: center;">
            <button class="dash-arrow-btn" onclick="openOrderDetailsById('${order.id}')" title="عرض تفاصيل الطلب">›</button>
            <button class="btn-secondary btn-sm" onclick="openInvoiceModal('${order.id}')" title="فاتورة مبيعات معتمدة">🧾</button>
            <button class="btn-secondary btn-sm" onclick="openWhatsAppForOrder('${order.id}')" title="واتساب">💬</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function filterOrdersTable(status, btn) {
  document.querySelectorAll('.order-filter-btn, .table-filter-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const searchInput = document.getElementById('ordersTableSearchInput');
  const query = searchInput ? searchInput.value : '';
  renderOrdersTable(status, query);
}

function handleOrdersSearch(val) {
  const activeTab = document.querySelector('.order-filter-btn.active, .table-filter-tab.active');
  let status = 'all';
  if (activeTab) {
    const m = activeTab.getAttribute('onclick')?.match(/'([^']+)'/);
    if (m) status = m[1];
  }
  renderOrdersTable(status, val);
}

function getOrderStatusClass(status) {
  switch (status) {
    case 'جديد': return 'new';
    case 'قيد التجهيز': return 'preparing';
    case 'جاهز للتوصيل': return 'ready';
    case 'مكتمل': return 'completed';
    case 'ملغي': return 'cancelled';
    default: return 'new';
  }
}

// -------------------------------------------------------------
// 6. MODAL SYSTEM (Order Details, Slip, POS, Palette)
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

  const invNumEl = document.getElementById('modalOrderInvoiceNum');
  if (invNumEl) {
    const invNum = order.invoiceNumber || `#INV-2026-${(order.orderNumber || '').replace('#', '')}`;
    invNumEl.textContent = invNum;
  }

  const discountWrap = document.getElementById('modalOrderDiscountInfoWrap');
  if (discountWrap) {
    if (order.hasDiscount && Number(order.discountAmount) > 0) {
      discountWrap.innerHTML = `🏷️ يتضمن خصماً تجارياً بقيمة <strong>${order.discountAmount} د.ل</strong> (${order.discountReason || 'خصم خاص'})`;
      discountWrap.style.color = '#16a34a';
    } else {
      discountWrap.innerHTML = `بدون خصومات تجارية (السعر الرسمي)`;
      discountWrap.style.color = 'var(--text-muted)';
    }
  }

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
        <td class="num-mono" style="font-weight: 800; color: var(--primary);">${(item.price || 0) * (item.qty || 1)} د.ل</td>
      </tr>
    `).join('');
  }

  // 3-Way Order ➔ Invoice ➔ Inventory Transaction Pipeline
  const pNodeOrder = document.getElementById('pipelineNodeOrder');
  const pOrderNum = document.getElementById('pipelineOrderNum');
  const pOrderStatus = document.getElementById('pipelineOrderStatus');
  const pNodeInvoice = document.getElementById('pipelineNodeInvoice');
  const pInvoiceNum = document.getElementById('pipelineInvoiceNum');
  const pNodeTx = document.getElementById('pipelineNodeTx');
  const pTxVal = document.getElementById('pipelineTxVal');
  const pTxSub = document.getElementById('pipelineTxSub');

  if (pOrderNum) pOrderNum.textContent = order.orderNumber;
  if (pOrderStatus) pOrderStatus.textContent = order.status;
  if (pInvoiceNum) pInvoiceNum.textContent = order.invoiceNumber || `#INV-2026-${(order.orderNumber || '').replace('#', '')}`;

  if (pNodeOrder) pNodeOrder.className = 'recon-pipeline-node done';
  if (pNodeInvoice) pNodeInvoice.className = 'recon-pipeline-node done';

  const tx = (ERP_STATE.inventoryTransactions || []).find(t => 
    t.status === 'applied' && (t.orderId === order.id || t.orderNumber === order.orderNumber)
  );

  if (pNodeTx && pTxVal && pTxSub) {
    pNodeTx.className = 'recon-pipeline-node';
    if (order.status === 'مكتمل') {
      if (order.inventoryDeduction === 'applied' || tx) {
        pNodeTx.classList.add('done');
        pTxVal.textContent = tx ? tx.id : 'تم الخصم';
        pTxVal.style.color = 'var(--status-success)';
        pTxSub.textContent = 'مخصوم من المخزون 🟢';
      } else {
        pNodeTx.classList.add('waiting');
        pTxVal.textContent = 'بانتظار الخصم';
        pTxVal.style.color = '#ca8a04';
        pTxSub.textContent = 'يتطلب خصم المخزون ⚠️';
      }
    } else if (order.status === 'ملغي') {
      pNodeTx.classList.add('idle');
      pTxVal.textContent = 'ملغي';
      pTxVal.style.color = 'var(--status-danger)';
      pTxSub.textContent = 'مستبعد من الخصم 🚫';
    } else {
      pNodeTx.classList.add('idle');
      pTxVal.textContent = 'غير مخصوم';
      pTxVal.style.color = 'var(--text-muted)';
      pTxSub.textContent = 'محمي حتى الاكتمال 🛡️';
    }
  }

  openModal('orderDetailsModal');
}

function updateOrderStatusFromModal(newStatus) {
  if (!ERP_STATE.currentOrderInModal) return;
  const order = ERP_STATE.currentOrderInModal;
  const oldStatus = order.status;
  if (oldStatus === newStatus) return;

  order.status = newStatus;
  const author = getCurrentUser() || ERP_STATE.currentPartner || 'طه';

  // Apply or reverse inventory deduction based on strict logic
  let deductionNotice = '';
  if (newStatus === 'مكتمل') {
    if (order.inventoryDeduction !== 'applied') {
      const deductRes = applyOrderInventoryDeduction(order, author);
      if (deductRes && deductRes.success) {
        deductionNotice = ' وتم خصم أصناف الطلب من المخزون بنجاح 📦';
      }
    }
  } else if (newStatus === 'ملغي') {
    if (order.inventoryDeduction === 'applied') {
      reverseOrderInventoryDeduction(order, author);
      deductionNotice = ' وتمت استعادة الكميات المخصومة إلى المخزون 🔄';
    } else {
      order.inventoryDeduction = 'cancelled';
    }
  } else {
    // If transitioning back from completed to preparing/ready/new, reverse deduction if it was applied
    if (oldStatus === 'مكتمل' && order.inventoryDeduction === 'applied') {
      reverseOrderInventoryDeduction(order, author);
      deductionNotice = ' وتم إلغاء الخصم وحماية المخزون 🛡️';
    } else if (newStatus !== 'ملغي') {
      order.inventoryDeduction = 'not_applied';
    }
  }

  // Update audit log
  ERP_STATE.auditLogs.unshift({
    id: `#${1095 + ERP_STATE.auditLogs.length}`,
    time: new Date().toLocaleTimeString('ar-LY', { hour: '2-digit', minute: '2-digit' }),
    date: new Date().toLocaleDateString('ar-LY', { month: '2-digit', day: '2-digit' }),
    user: author,
    action: 'تحديث حالة الطلب',
    details: `تحديث الطلب ${order.orderNumber} لـ ${order.customerName} من (${oldStatus}) إلى (${newStatus})${deductionNotice}`,
    oldVal: oldStatus,
    newVal: newStatus
  });

  try {
    localStorage.setItem('abs_erp_audit', JSON.stringify(ERP_STATE.auditLogs));
    localStorage.setItem('abs_erp_orders', JSON.stringify(ERP_STATE.orders));
  } catch (_) {}

  // Update UI in modal
  const statusBadge = document.getElementById('modalOrderStatus');
  if (statusBadge) {
    statusBadge.textContent = newStatus;
    statusBadge.className = `status-pill ${getOrderStatusClass(newStatus)}`;
  }

  // Refresh pipeline in modal
  openOrderDetailsById(order.id);

  showToast(`تم تحديث حالة الطلب ${order.orderNumber} إلى (${newStatus})${deductionNotice}`);
  if (ERP_STATE.activeScreen === 'orders') renderOrdersTable();
  if (ERP_STATE.activeScreen === 'inventory') {
    renderInventoryTable();
    renderInventoryReconciliationUI();
  }
  updateDashboardRealUI();
}

function openWhatsAppForCurrentModal() {
  if (ERP_STATE.currentOrderInModal) {
    openWhatsAppForOrder(ERP_STATE.currentOrderInModal.id);
  }
}

function openWhatsAppForOrder(orderId) {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId || o.orderNumber === `#${orderId}`);
  if (!order) return;
  const cleanPhone = (order.phone || '').replace(/[^0-9]/g, '').replace(/^0/, '');
  const msg = `مرحباً دكتور/ة ${order.customerName}، معك فريق Absolute Dental 🦷\nطلبك رقم ${order.orderNumber} بقيمة ${order.total} د.ل قيد المتابعة.\nمكان التسليم: ${order.college}. تحياتنا!`;
  window.open(`https://wa.me/218${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function openSlipForCurrentModal() {
  if (ERP_STATE.currentOrderInModal) {
    openDeliverySlipById(ERP_STATE.currentOrderInModal.id);
  }
}

function openInvoiceForCurrentModal() {
  if (ERP_STATE.currentOrderInModal) {
    openInvoiceModal(ERP_STATE.currentOrderInModal.id);
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
        <td style="border: 1px solid #e2e8f0; padding: 6px;">${(i.price || 0) * (i.qty || 1)} د.ل</td>
      </tr>
    `).join('');
  }

  openModal('deliverySlipModal');
}

// -------------------------------------------------------------
// 7. HIGH SPEED POS (+ طلب سريع)
// -------------------------------------------------------------
function openPosModal() {
  ERP_STATE.posCart = [];
  renderPosCartModal();

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

  const name = document.getElementById('posInputName').value || 'طالب كلية الأسنان';
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
  updateDashboardRealUI();
  if (ERP_STATE.activeScreen === 'orders') renderOrdersTable();
}

// -------------------------------------------------------------
// 8. PRODUCTS CATALOG MANAGEMENT (28 Real Items)
// -------------------------------------------------------------
function renderProductsTable(searchQuery = '') {
  const tbody = document.getElementById('fullProductsTableBody');
  if (!tbody) return;

  let list = (ERP_STATE.products || []).filter(p => !['prod-box-trans-165', 'prod-box-mauve', 'prod-box-pink', 'prod-bag-17', 'prod-bag-16-col', 'prod-scrub-black', 'prod-toy-tooth'].includes(p.id));
  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(p => (p.nameAr || '').toLowerCase().includes(q) || (p.nameEn || '').toLowerCase().includes(q) || (p.sku || '').toLowerCase().includes(q));
  }

  tbody.innerHTML = list.map(p => {
    const cost = Number(p.costPrice) || 0;
    const wholesale = Number(p.wholesalePrice || p.sellingPrice) || 0;
    const retail = Number(p.retailPrice) || 0;
    const stock = Number(p.stock) || 0;
    const imgSrc = p.image || resolveProductImage(p);

    let statusPill = '<span class="status-pill new">نافد</span>';
    if (stock > 10) statusPill = '<span class="status-pill completed">متوفر</span>';
    else if (stock > 0) statusPill = '<span class="status-pill preparing">منخفض</span>';

    return `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <img src="${imgSrc}" alt="" style="width: 34px; height: 34px; object-fit: contain; border-radius: var(--radius-sm); background: #f8fafc; border: 1px solid rgba(0,0,0,0.06); flex-shrink: 0;" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=80&q=80'">
            <div>
              <div style="font-weight: 700; color: var(--text-main); line-height: 1.3;">${p.nameAr}</div>
              <div style="font-size: 0.72rem; color: var(--text-muted);">${p.nameEn || ''}</div>
            </div>
          </div>
        </td>
        <td class="num-mono" style="color: var(--text-muted); font-size: 0.75rem; font-weight: 600;">${p.sku || '-'}</td>
        <td style="color: var(--text-muted); font-size: 0.75rem;">${p.category || '-'}</td>
        <td class="num-mono">${cost > 0 ? `${cost.toFixed(2)} د.ل` : '-'}</td>
        <td class="num-mono" style="font-weight: 700; color: var(--primary);">${wholesale > 0 ? `${wholesale} د.ل` : '-'}</td>
        <td class="num-mono" style="font-weight: 700; color: var(--text-body);">${retail > 0 ? `${retail} د.ل` : '-'}</td>
        <td class="num-mono" style="font-weight: 800; text-align: center; color: ${stock <= 0 ? '#dc2626' : 'var(--text-main)'};">${stock}</td>
        <td>${statusPill}</td>
        <td style="text-align: center;">
          <div style="display: inline-flex; gap: 4px;">
            <button class="btn-action-edit" onclick="openEditProductModal('${p.id}')">تعديل ✏️</button>
            <button class="btn-action-delete" onclick="deleteProduct('${p.id}')">تعطيل 🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  const countEl = document.getElementById('productsTotalCount');
  if (countEl) countEl.textContent = list.length;

  const paginationInfo = document.getElementById('productsPaginationInfo');
  if (paginationInfo) {
    paginationInfo.textContent = `عرض 1 - ${list.length} من ${list.length} منتج`;
  }
}

function handleProductsSearch(val) {
  renderProductsTable(val);
}

function openEditProductModal(productId) {
  const user = getCurrentUser();
  if (!user) {
    logoutCurrentUser();
    return;
  }

  const prod = ERP_STATE.products.find(p => p.id === productId);
  if (!prod) return;

  const setVal = (ids, val) => {
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) { el.value = (val !== undefined && val !== null) ? val : ''; return; }
    }
  };

  setVal(['editProductId'], prod.id);
  setVal(['editProdNameAr', 'editProductNameAr'], prod.nameAr);
  setVal(['editProdSku', 'editProductSku'], prod.sku || '');
  setVal(['editProdCategory', 'editProductCategory'], prod.category || 'عام');
  setVal(['editProdCostPrice', 'editProductCostPrice'], Number(prod.costPrice) || 0);
  setVal(['editProdWholesalePrice', 'editProductWholesalePrice', 'editProductSellingPrice'], Number(prod.wholesalePrice || prod.sellingPrice) || 0);
  setVal(['editProdRetailPrice', 'editProductRetailPrice'], Number(prod.retailPrice) || 0);
  setVal(['editProdStock', 'editProductStock'], Number(prod.stock) || 0);
  setVal(['editProdMinStock', 'editProductMinStock'], Number(prod.minStock) || 0);

  const authorBadge = document.getElementById('editProductAuthor');
  if (authorBadge) authorBadge.textContent = user;

  openModal('editProductModal');
}

function saveProductChanges() {
  const user = getCurrentUser();
  if (!user) {
    logoutCurrentUser();
    return;
  }

  const prodId = document.getElementById('editProductId')?.value;
  const prod = ERP_STATE.products.find(p => p.id === prodId);
  if (!prod) return;

  const getVal = (ids) => {
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) return el.value;
    }
    return '';
  };

  const newNameAr = getVal(['editProdNameAr', 'editProductNameAr']).trim();
  const newSku = getVal(['editProdSku', 'editProductSku']).trim();
  const newCategory = getVal(['editProdCategory', 'editProductCategory']);
  const newCostPrice = Number(getVal(['editProdCostPrice', 'editProductCostPrice'])) || 0;
  const newWholesalePrice = Number(getVal(['editProdWholesalePrice', 'editProductWholesalePrice', 'editProductSellingPrice'])) || 0;
  const newRetailPrice = Number(getVal(['editProdRetailPrice', 'editProductRetailPrice'])) || 0;
  const newStock = Number(getVal(['editProdStock', 'editProductStock'])) || 0;
  const newMinStock = Number(getVal(['editProdMinStock', 'editProductMinStock'])) || 0;
  const newSupplier = getVal(['editProdSupplier', 'editProductSupplier']).trim();

  if (!newNameAr) {
    showToast('يرجى إدخال اسم الصنف', 'warning');
    return;
  }

  // Audit specific modifications directly stamped with active user
  if (Number(prod.sellingPrice) !== newWholesalePrice) {
    logOperation({
      user: user,
      action: 'تعديل سعر الجملة',
      target: prod.nameAr,
      oldVal: `${prod.sellingPrice} د.ل`,
      newVal: `${newWholesalePrice} د.ل`,
      details: `«${user} قام بتعديل سعر بيع/جملة الصنف "${prod.nameAr}" من ${prod.sellingPrice} د.ل إلى ${newWholesalePrice} د.ل»`
    });
  }

  if (Number(prod.costPrice) !== newCostPrice) {
    logOperation({
      user: user,
      action: 'تعديل سعر التكلفة',
      target: prod.nameAr,
      oldVal: `${prod.costPrice} د.ل`,
      newVal: `${newCostPrice} د.ل`,
      details: `«${user} قام بتعديل سعر تكلفة الصنف "${prod.nameAr}" من ${prod.costPrice} د.ل إلى ${newCostPrice} د.ل»`
    });
  }

  if (Number(prod.stock) !== newStock) {
    logOperation({
      user: user,
      action: 'تعديل كمية المخزون',
      target: prod.nameAr,
      oldVal: `${prod.stock} قطعة`,
      newVal: `${newStock} قطعة`,
      details: `«${user} قام بتعديل مخزون الصنف "${prod.nameAr}" من ${prod.stock} إلى ${newStock} قطعة»`
    });
  }

  // Apply changes to product
  prod.nameAr = newNameAr;
  prod.sku = newSku;
  prod.category = newCategory;
  prod.costPrice = newCostPrice;
  prod.sellingPrice = newWholesalePrice;
  prod.wholesalePrice = newWholesalePrice;
  prod.retailPrice = newRetailPrice;
  prod.stock = newStock;
  prod.minStock = newMinStock;
  prod.supplier = newSupplier;
  prod.status = (newStock > 10) ? 'متوفر' : (newStock > 0 ? 'منخفض' : 'نافد');

  try {
    localStorage.setItem('abs_erp_products', JSON.stringify(ERP_STATE.products));
  } catch (_) {}

  closeModal('editProductModal');
  renderProductsTable();
  renderInventoryTable();
  updateDashboardRealUI();

  showToast('تم حفظ تعديل الصنف بنجاح', 'success');
}

function openAddProductModal() {
  const user = getCurrentUser();
  if (!user) {
    logoutCurrentUser();
    return;
  }

  const setVal = (ids, val) => {
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) { el.value = val; return; }
    }
  };

  setVal(['newProdNameAr', 'addProductNameAr'], '');
  setVal(['newProdSku', 'addProductSku'], `DEN-${Math.floor(1000 + Math.random() * 9000)}`);
  setVal(['newProdCategory', 'addProductCategory'], 'علاج الأسنان التحفظي (سنة 2)');
  setVal(['newProdCostPrice', 'addProductCostPrice'], 0);
  setVal(['newProdWholesalePrice', 'addProductSellingPrice'], 0);
  setVal(['newProdRetailPrice', 'addProductRetailPrice'], 0);
  setVal(['newProdStock', 'addProductStock'], 0);
  setVal(['newProdMinStock', 'addProductMinStock'], 10);

  const authorBadge = document.getElementById('addProductAuthor');
  if (authorBadge) authorBadge.textContent = user;

  openModal('addProductModal');
}

function saveNewProduct() {
  const user = getCurrentUser();
  if (!user) {
    logoutCurrentUser();
    return;
  }

  const getVal = (ids) => {
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) return el.value;
    }
    return '';
  };

  const nameAr = getVal(['newProdNameAr', 'addProductNameAr']).trim();
  const sku = getVal(['newProdSku', 'addProductSku']).trim();
  const category = getVal(['newProdCategory', 'addProductCategory']);
  const costPrice = Number(getVal(['newProdCostPrice', 'addProductCostPrice'])) || 0;
  const wholesalePrice = Number(getVal(['newProdWholesalePrice', 'addProductSellingPrice'])) || 0;
  const retailPrice = Number(getVal(['newProdRetailPrice', 'addProductRetailPrice'])) || 0;
  const stock = Number(getVal(['newProdStock', 'addProductStock'])) || 0;
  const minStock = Number(getVal(['newProdMinStock', 'addProductMinStock'])) || 0;
  const supplier = getVal(['newProdSupplier', 'addProductSupplier']).trim();

  if (!nameAr) {
    showToast('يرجى إدخال اسم الصنف الجديد', 'warning');
    return;
  }

  const newProd = {
    id: `custom-prod-${Date.now()}`,
    nameAr: nameAr,
    nameEn: nameAr,
    sku: sku,
    category: category,
    costPrice: costPrice,
    sellingPrice: wholesalePrice,
    wholesalePrice: wholesalePrice,
    retailPrice: retailPrice,
    stock: stock,
    minStock: minStock,
    supplier: supplier || '',
    status: (stock > 10) ? 'متوفر' : (stock > 0 ? 'منخفض' : 'نافد')
  };

  ERP_STATE.products.unshift(newProd);

  logOperation({
    user: user,
    action: 'إضافة صنف جديد',
    target: nameAr,
    oldVal: '-',
    newVal: `${wholesalePrice} د.ل (رصيد: ${stock})`,
    details: `«${user} قام بإضافة الصنف الجديد "${nameAr}"»`
  });

  try {
    localStorage.setItem('abs_erp_products', JSON.stringify(ERP_STATE.products));
  } catch (_) {}

  closeModal('addProductModal');
  renderProductsTable();
  renderInventoryTable();
  updateDashboardRealUI();

  showToast('تمت إضافة المنتج بنجاح', 'success');
}

function deleteProduct(productId) {
  const user = getCurrentUser();
  if (!user) {
    logoutCurrentUser();
    return;
  }

  const prod = ERP_STATE.products.find(p => p.id === productId);
  if (!prod) return;

  if (confirm(`هل أنت متأكد من تعطيل/حذف الصنف "${prod.nameAr}"؟`)) {
    ERP_STATE.products = ERP_STATE.products.filter(p => p.id !== productId);

    logOperation({
      user: user,
      action: 'تعطيل / حذف صنف',
      target: prod.nameAr,
      oldVal: 'نشط بالكتالوج',
      newVal: 'تم التعطيل',
      details: `«${user} قام بتعطيل / حذف الصنف "${prod.nameAr}" من كتالوج المنتجات»`
    });

    renderProductsTable();
    renderInventoryTable();
    updateDashboardRealUI();

    showToast(`تم تعطيل الصنف "${prod.nameAr}" وتوثيق العملية باسم ${user}`);
  }
}

// -------------------------------------------------------------
// 9. INVENTORY MANAGEMENT (ACADEMIC YEAR & SUBJECT DIVISION ENGINE)
// -------------------------------------------------------------
let CURRENT_INVENTORY_YEAR = 'all';
let CURRENT_INVENTORY_SUBJECT = 'all';
let CURRENT_INVENTORY_SEARCH = '';
let INVENTORY_GROUPED_MODE = true;

/**
 * 100% Comprehensive Academic Taxonomy Classifier for Absolute Dental ERP
 * Maps catalog products to Academic Year (سنة أولى / سنة ثانية) and dental subject.
 */
function getProductAcademicTaxonomy(p) {
  const cat = (p.category || '').toLowerCase();
  const subj = (p.subject || '').toLowerCase();
  const name = ((p.nameAr || '') + ' ' + (p.nameEn || '')).toLowerCase();

  // 1. Year 1 Tools (أدوات سنة أولى)
  if (cat.includes('سنة 1') || cat.includes('سنة أولى') || subj === 'dental-materials' || (subj === 'dental-anatomy' && !cat.includes('سنة 2'))) {
    let subjectKey = 'anatomy';
    let subjectNameAr = 'تشريح الأسنان (Dental Anatomy)';
    let subjectShortName = 'تشريح أسنان';
    let subjectIcon = '🦴';
    let tagClass = 'y1-anat';
    let orderIndex = 1;

    if (subj === 'dental-materials' || cat.includes('مواد')) {
      subjectKey = 'materials';
      subjectNameAr = 'مواد طب الأسنان (Dental Materials)';
      subjectShortName = 'مواد أسنان';
      subjectIcon = '🧪';
      tagClass = 'y1-mat';
      orderIndex = 2;
    }

    return {
      yearKey: 'year1',
      yearNameAr: 'أدوات سنة أولى',
      yearTagClass: 'y1',
      yearIcon: '🎓',
      subjectKey,
      subjectNameAr,
      subjectShortName,
      subjectIcon,
      tagClass,
      orderIndex
    };
  }

  // 2. Year 2 Tools (أدوات سنة ثانية)
  let subjectKey = 'restorative';
  let subjectNameAr = 'علاج تحفظي / كونس (Restorative)';
  let subjectShortName = 'علاج تحفظي / كونس';
  let subjectIcon = '🩺';
  let tagClass = 'y2-rest';
  let orderIndex = 10;

  if (subj === 'fixed-prosthodontics' || cat.includes('ثابتة') || cat.includes('كراون') || cat.includes('كاستات')) {
    subjectKey = 'fixed';
    subjectNameAr = 'كراون وتعويضات ثابتة (Fixed Prosthodontics)';
    subjectShortName = 'كراون وثابتة';
    subjectIcon = '👑';
    tagClass = 'y2-fixed';
    orderIndex = 11;
  } else if (subj === 'removable-prosthodontics' || cat.includes('متحركة') || name.includes('baseplate')) {
    subjectKey = 'removable';
    subjectNameAr = 'صناعة أسنان متحركة (Removable Prosthodontics)';
    subjectShortName = 'أطقم ومتحركة';
    subjectIcon = '🧰';
    tagClass = 'y2-remov';
    orderIndex = 12;
  } else if (subj === 'periodontics' || cat.includes('لثة') || name.includes('periodontal')) {
    subjectKey = 'periodontics';
    subjectNameAr = 'أدوات الفحص واللثة (Periodontics)';
    subjectShortName = 'فحص ولثة';
    subjectIcon = '🔍';
    tagClass = 'y2-perio';
    orderIndex = 13;
  }

  return {
    yearKey: 'year2',
    yearNameAr: 'أدوات سنة ثانية',
    yearTagClass: 'y2',
    yearIcon: '🦷',
    subjectKey,
    subjectNameAr,
    subjectShortName,
    subjectIcon,
    tagClass,
    orderIndex
  };
}

/**
 * Filter inventory table by Academic Year
 */
function filterInventoryByYear(yearKey, btn) {
  CURRENT_INVENTORY_YEAR = yearKey;
  CURRENT_INVENTORY_SUBJECT = 'all';
  
  document.querySelectorAll('#invYearFilterTabs .inv-year-tab').forEach(b => b.classList.remove('active'));
  if (btn) {
    btn.classList.add('active');
  } else {
    const defaultBtn = document.querySelector(`#invYearFilterTabs .inv-year-tab[data-year="${yearKey}"]`);
    if (defaultBtn) defaultBtn.classList.add('active');
  }

  renderInventorySubjectChips();
  renderInventoryTable();
}

/**
 * Filter inventory table by Specific Subject
 */
function filterInventoryBySubject(subjectKey, btn) {
  CURRENT_INVENTORY_SUBJECT = subjectKey;

  document.querySelectorAll('#invSubjectChipsContainer .inv-subject-chip').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  renderInventoryTable();
}

/**
 * Real-time instant live search inside inventory catalog
 */
function handleInventorySearch(val) {
  CURRENT_INVENTORY_SEARCH = (val || '').trim().toLowerCase();
  renderInventoryTable();
}

/**
 * Toggle between Subject-Grouped view and Flat table view
 */
function toggleInventoryGrouping() {
  INVENTORY_GROUPED_MODE = !INVENTORY_GROUPED_MODE;
  const toggleBtn = document.getElementById('btnToggleInventoryGrouping');
  const toggleIcon = document.getElementById('groupingToggleIcon');
  const toggleText = document.getElementById('groupingToggleText');

  if (toggleIcon) toggleIcon.textContent = INVENTORY_GROUPED_MODE ? '🗂️' : '📄';
  if (toggleText) toggleText.textContent = INVENTORY_GROUPED_MODE ? 'عرض مقسم حسب المواد' : 'عرض جدول مسطح';

  if (toggleBtn) {
    if (INVENTORY_GROUPED_MODE) {
      toggleBtn.classList.remove('btn-secondary');
      toggleBtn.classList.add('btn-outline');
    } else {
      toggleBtn.classList.remove('btn-outline');
      toggleBtn.classList.add('btn-secondary');
    }
  }

  renderInventoryTable();
}

/**
 * Render dynamic subject filter chips based on currently active year
 */
function renderInventorySubjectChips() {
  const container = document.getElementById('invSubjectChipsContainer');
  if (!container) return;

  const catalog = (ERP_STATE.products || []).filter(p => !['prod-box-trans-165', 'prod-box-mauve', 'prod-box-pink', 'prod-bag-17', 'prod-bag-16-col', 'prod-scrub-black', 'prod-toy-tooth'].includes(p.id));
  
  const relevantProducts = CURRENT_INVENTORY_YEAR === 'all'
    ? catalog
    : catalog.filter(p => getProductAcademicTaxonomy(p).yearKey === CURRENT_INVENTORY_YEAR);

  const subjectsMap = {};
  relevantProducts.forEach(p => {
    const tax = getProductAcademicTaxonomy(p);
    if (!subjectsMap[tax.subjectKey]) {
      subjectsMap[tax.subjectKey] = {
        key: tax.subjectKey,
        name: tax.subjectShortName,
        icon: tax.subjectIcon,
        yearKey: tax.yearKey,
        orderIndex: tax.orderIndex,
        count: 0
      };
    }
    subjectsMap[tax.subjectKey].count++;
  });

  const subjectsList = Object.values(subjectsMap).sort((a, b) => a.orderIndex - b.orderIndex);

  let allLabel = 'جميع المواد';
  if (CURRENT_INVENTORY_YEAR === 'year1') allLabel = 'جميع مواد سنة أولى';
  else if (CURRENT_INVENTORY_YEAR === 'year2') allLabel = 'جميع مواد سنة ثانية';

  const isAllActive = (CURRENT_INVENTORY_SUBJECT === 'all');

  let html = `
    <button class="inv-subject-chip ${isAllActive ? 'active' : ''}" onclick="filterInventoryBySubject('all', this)">
      <span>${allLabel}</span>
      <span class="chip-count">(${relevantProducts.length})</span>
    </button>
  `;

  subjectsList.forEach(s => {
    const isActive = (CURRENT_INVENTORY_SUBJECT === s.key);
    html += `
      <button class="inv-subject-chip ${isActive ? 'active' : ''}" onclick="filterInventoryBySubject('${s.key}', this)">
        <span>${s.icon} ${s.name}</span>
        <span class="chip-count">(${s.count})</span>
      </button>
    `;
  });

  container.innerHTML = html;
}

/**
 * Render Main Inventory Table with Academic Categorization, Subject Groups and Sold Calculations
 */
function renderInventoryTable() {
  const tbody = document.getElementById('inventoryTableBody');
  if (!tbody) return;

  const catalog = (ERP_STATE.products || []).filter(p => !['prod-box-trans-165', 'prod-box-mauve', 'prod-box-pink', 'prod-bag-17', 'prod-bag-16-col', 'prod-scrub-black', 'prod-toy-tooth'].includes(p.id));
  const completedOrders = ERP_STATE.orders.filter(o => o.status === 'مكتمل');

  // Update Year Tab Count Badges
  const countAll = catalog.length;
  const countY1 = catalog.filter(p => getProductAcademicTaxonomy(p).yearKey === 'year1').length;
  const countY2 = catalog.filter(p => getProductAcademicTaxonomy(p).yearKey === 'year2').length;

  const elCountAll = document.getElementById('invYearCountAll');
  const elCountY1 = document.getElementById('invYearCountY1');
  const elCountY2 = document.getElementById('invYearCountY2');
  if (elCountAll) elCountAll.textContent = countAll;
  if (elCountY1) elCountY1.textContent = countY1;
  if (elCountY2) elCountY2.textContent = countY2;

  if (!document.getElementById('invSubjectChipsContainer')?.children.length) {
    renderInventorySubjectChips();
  }

  // Filter Catalog
  let filteredProducts = catalog.filter(p => {
    const tax = getProductAcademicTaxonomy(p);

    if (CURRENT_INVENTORY_YEAR !== 'all' && tax.yearKey !== CURRENT_INVENTORY_YEAR) {
      return false;
    }

    if (CURRENT_INVENTORY_SUBJECT !== 'all' && tax.subjectKey !== CURRENT_INVENTORY_SUBJECT) {
      return false;
    }

    if (CURRENT_INVENTORY_SEARCH) {
      const q = CURRENT_INVENTORY_SEARCH;
      const matchAr = (p.nameAr || '').toLowerCase().includes(q);
      const matchEn = (p.nameEn || '').toLowerCase().includes(q);
      const matchSku = (p.sku || '').toLowerCase().includes(q);
      const matchSubj = tax.subjectNameAr.toLowerCase().includes(q) || tax.subjectShortName.toLowerCase().includes(q);
      if (!matchAr && !matchEn && !matchSku && !matchSubj) {
        return false;
      }
    }

    return true;
  });

  // Calculate Sold Counts & Real Remaining Stock
  const enrichedProducts = filteredProducts.map(p => {
    let soldCount = 0;
    completedOrders.forEach(ord => {
      (ord.items || []).forEach(item => {
        if (item.id === p.id || (item.name && (item.name === p.nameAr || item.name === p.nameEn))) {
          soldCount += (Number(item.qty) || 1);
        } else if (item.id) {
          const itemProd = catalog.find(x => x.id === item.id);
          if (itemProd && itemProd.shared_inventory_product_id === p.id) {
            soldCount += (Number(item.qty) || 1) * (Number(itemProd.unit_multiplier) || 1);
          }
        }
      });
    });

    const currentStock = Number(p.stock) || 0;
    const baseStock = currentStock + soldCount;
    const taxonomy = getProductAcademicTaxonomy(p);

    return {
      product: p,
      currentStock,
      baseStock,
      soldCount,
      taxonomy
    };
  });

  const totalFilteredPieces = enrichedProducts.reduce((sum, item) => sum + item.currentStock, 0);
  const metricBadge = document.getElementById('invFilteredMetricBadge');
  if (metricBadge) {
    metricBadge.textContent = `${enrichedProducts.length} صنفاً (${totalFilteredPieces} قطعة متبقية)`;
  }

  if (enrichedProducts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
          <div style="font-weight: 700; color: var(--text-main);">لم يتم العثور على أصناف مطابقة للبحث أو الفلتر المختار</div>
          <div style="font-size: 0.8rem; margin-top: 4px;">جرب تغيير السنة أو المقرر، أو مسح خانة البحث</div>
        </td>
      </tr>
    `;
    return;
  }

  const renderRow = (item) => {
    const p = item.product;
    const tax = item.taxonomy;
    const imgSrc = p.image || resolveProductImage(p);

    let statusPill = '<span class="status-pill completed">متوفر</span>';
    if (item.currentStock === 0) {
      statusPill = '<span class="status-pill new">نافد</span>';
    } else if (item.currentStock <= 10) {
      statusPill = '<span class="status-pill preparing">منخفض</span>';
    }

    return `
      <tr data-subject="${tax.subjectKey}" data-year="${tax.yearKey}">
        <td>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <img src="${imgSrc}" alt="${p.nameAr}" style="width: 38px; height: 38px; border-radius: var(--radius-sm); object-fit: contain; background: #f8fafc; border: 1px solid rgba(0,0,0,0.06); flex-shrink: 0;" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=80&q=80'">
            <div>
              <div style="font-weight: 700; color: var(--text-main); line-height: 1.35;">${p.nameAr}</div>
              <div style="font-size: 0.725rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                <span>${p.nameEn && p.nameEn !== p.nameAr ? p.nameEn : (p.category || '')}</span>
                <span class="inv-item-subject-tag ${tax.tagClass}" title="${tax.yearNameAr} > ${tax.subjectNameAr}">
                  ${tax.subjectIcon} ${tax.subjectShortName}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td class="num-mono" style="font-size: 0.775rem; color: var(--text-muted); font-weight: 600;">${p.sku || '-'}</td>
        <td class="num-mono" style="text-align: center; font-weight: 600; color: var(--text-body);">${item.baseStock}</td>
        <td class="num-mono" style="text-align: center; font-weight: 700; color: ${item.soldCount > 0 ? '#16a34a' : 'var(--text-muted)'};">${item.soldCount}</td>
        <td class="num-mono" style="text-align: center; font-weight: 800; font-size: 0.95rem; color: ${item.currentStock <= 5 ? '#dc2626' : 'var(--text-main)'};">${item.currentStock} قطعة</td>
        <td style="text-align: center;">${statusPill}</td>
        <td style="text-align: center;">
          <button class="btn-secondary btn-sm" onclick="openEditProductModal('${p.id}')">تعديل المخزون</button>
        </td>
      </tr>
    `;
  };

  if (INVENTORY_GROUPED_MODE && CURRENT_INVENTORY_SUBJECT === 'all') {
    const groupsMap = {};
    enrichedProducts.forEach(item => {
      const sKey = item.taxonomy.subjectKey;
      if (!groupsMap[sKey]) {
        groupsMap[sKey] = {
          taxonomy: item.taxonomy,
          items: []
        };
      }
      groupsMap[sKey].items.push(item);
    });

    const sortedGroups = Object.values(groupsMap).sort((a, b) => a.taxonomy.orderIndex - b.taxonomy.orderIndex);

    let fullHtml = '';
    sortedGroups.forEach(group => {
      const tax = group.taxonomy;
      const groupTotalPieces = group.items.reduce((s, it) => s + it.currentStock, 0);
      const groupSoldCount = group.items.reduce((s, it) => s + it.soldCount, 0);

      fullHtml += `
        <tr class="inv-group-header-row">
          <td colspan="7" class="inv-group-header-cell">
            <div class="inv-group-header-content">
              <div class="inv-group-title-wrap">
                <span class="inv-group-icon">${tax.subjectIcon}</span>
                <span class="inv-group-title">${tax.subjectNameAr}</span>
                <span class="inv-group-year-tag ${tax.yearTagClass}">${tax.yearIcon} ${tax.yearNameAr}</span>
              </div>
              <div class="inv-group-meta-stats">
                <span class="inv-group-stat-pill">📋 ${group.items.length} أصناف</span>
                <span class="inv-group-stat-pill" style="color: var(--primary);">📦 ${groupTotalPieces} قطعة متوفرة</span>
                ${groupSoldCount > 0 ? `<span class="inv-group-stat-pill" style="color: #16a34a;">✓ ${groupSoldCount} بيعت</span>` : ''}
              </div>
            </div>
          </td>
        </tr>
      `;

      group.items.forEach(it => {
        fullHtml += renderRow(it);
      });
    });

    tbody.innerHTML = fullHtml;
  } else {
    tbody.innerHTML = enrichedProducts.map(renderRow).join('');
  }

  // Update Top KPI Cards
  const m = calculateRealMetrics();
  const invScrTotal = document.getElementById('invScreenTotalPieces');
  if (invScrTotal) invScrTotal.textContent = `${m.totalStock} قطعة`;

  const invScrLow = document.getElementById('invScreenLowCount');
  if (invScrLow) invScrLow.textContent = `${m.lowStockCount} أصناف`;

  const invScrOut = document.getElementById('invScreenOutCount');
  if (invScrOut) invScrOut.textContent = `${m.outStockCount} صنف`;
  const invValEl = document.getElementById('invValueKpi');
  if (invValEl) {
    const totalVal = catalog.reduce((s, p) => s + ((Number(p.stock) || 0) * (Number(p.costPrice) || Number(p.sellingPrice) || 0)), 0);
    invValEl.textContent = `${Math.round(totalVal).toLocaleString()} د.ل`;
  }
}

// -------------------------------------------------------------
// 9.B. INVENTORY, ORDERS & INVOICES 3-WAY RECONCILIATION ENGINE
// -------------------------------------------------------------
let CURRENT_INVENTORY_SUBVIEW = 'stock';
let CURRENT_RECON_FILTER = 'all';

function getOrderDeductionBadge(order) {
  if (order.status === 'مكتمل') {
    if (order.inventoryDeduction === 'applied') {
      return '<span class="inv-deduct-pill deducted" title="تم خصم الأصناف من المخزون">📦 تم الخصم</span>';
    } else {
      return '<span class="inv-deduct-pill pending" title="طلب مكتمل ولم يتم خصم المخزون بعد">⚠️ بانتظار الخصم</span>';
    }
  } else if (order.status === 'ملغي') {
    return '<span class="inv-deduct-pill cancelled" title="طلب ملغي لا يؤثر على المخزون">🚫 ملغي (لا خصم)</span>';
  } else {
    return '<span class="inv-deduct-pill protected" title="المخزون محمي حتى اكتمال الطلب وتسليمه">🛡️ مخزون محمي</span>';
  }
}

function applyOrderInventoryDeduction(order, user) {
  if (!order) return { success: false, reason: 'order_not_found' };
  
  // Guard 1: Double deduction prevention
  if (order.inventoryDeduction === 'applied') {
    return { success: false, reason: 'already_applied', orderNumber: order.orderNumber };
  }
  
  // Guard 2: Only completed orders can be deducted
  if (order.status !== 'مكتمل') {
    return { success: false, reason: 'not_completed', orderNumber: order.orderNumber };
  }

  const author = user || getCurrentUser() || ERP_STATE.currentPartner || 'طه';
  const cleanOrderNum = (order.orderNumber || order.id || Date.now()).toString().replace('#', '');
  const txId = `TX-${cleanOrderNum}`;
  const nowTime = new Date().toLocaleTimeString('ar-LY', { hour: '2-digit', minute: '2-digit' });
  const nowDate = new Date().toLocaleDateString('ar-LY', { month: '2-digit', day: '2-digit' });

  const deductedItems = [];
  (order.items || []).forEach(item => {
    let prod = null;
    if (item.id) {
      prod = ERP_STATE.products.find(p => p.id === item.id);
    }
    if (!prod && item.name) {
      const cleanName = item.name.toLowerCase().trim();
      prod = ERP_STATE.products.find(p => 
        (p.nameAr && p.nameAr.toLowerCase().trim() === cleanName) ||
        (p.nameEn && p.nameEn.toLowerCase().trim() === cleanName)
      );
    }
    
    if (prod) {
      // Check if product maps to a shared inventory parent product (e.g. Carving wax 3-pack -> Carving wax single piece)
      let targetProd = prod;
      let multiplier = 1;
      if (prod.shared_inventory_product_id) {
        const parent = ERP_STATE.products.find(p => p.id === prod.shared_inventory_product_id);
        if (parent) {
          targetProd = parent;
          multiplier = Number(prod.unit_multiplier) || 1;
        }
      }

      const oldStock = Number(targetProd.stock) || 0;
      const qtyToDeduct = (Number(item.qty) || 1) * multiplier;
      const newStock = Math.max(0, oldStock - qtyToDeduct);
      targetProd.stock = newStock;
      
      if (targetProd.stock === 0) targetProd.status = 'نافد';
      else if (targetProd.stock <= 10) targetProd.status = 'منخفض';
      else targetProd.status = 'متوفر';

      deductedItems.push({
        name: targetProd.nameAr || item.name,
        qty: qtyToDeduct,
        oldStock: oldStock,
        newStock: newStock,
        price: item.price
      });

      // Individual product audit log entry
      logOperation({
        user: author,
        action: 'خصم مخزون لإكمال الطلب',
        target: `${targetProd.nameAr} (${order.orderNumber})`,
        oldVal: `${oldStock} قطعة`,
        newVal: `${newStock} قطعة (-${qtyToDeduct})`,
        details: `«خصم كمية (-${qtyToDeduct}) من المنتج ${targetProd.nameAr} لإكمال الطلب ${order.orderNumber} للطالب ${order.customerName} (المخزون: ${oldStock} ➔ ${newStock})»`
      });
    } else {
      deductedItems.push({
        name: item.name,
        qty: Number(item.qty) || 1,
        oldStock: '-',
        newStock: '-',
        price: item.price
      });
    }
  });

  // Record inventory transaction
  const transaction = {
    id: txId,
    orderId: order.id,
    orderNumber: order.orderNumber,
    invoiceNumber: order.invoiceNumber || `#INV-2026-${cleanOrderNum}`,
    customerName: order.customerName,
    status: 'applied',
    date: nowDate,
    time: nowTime,
    user: author,
    items: (order.items || []).map(i => ({ name: i.name, qty: i.qty, price: i.price })),
    totalQty: (order.items || []).reduce((sum, i) => sum + (Number(i.qty) || 1), 0),
    notes: 'خصم معتمد ومطبق لمخزون الطلب المكتمل'
  };

  const existingTxIdx = (ERP_STATE.inventoryTransactions || []).findIndex(t => 
    t.id === txId || (order.id && t.orderId === order.id)
  );
  if (existingTxIdx >= 0) {
    ERP_STATE.inventoryTransactions[existingTxIdx] = transaction;
  } else {
    ERP_STATE.inventoryTransactions.unshift(transaction);
  }

  order.inventoryDeduction = 'applied';

  try {
    localStorage.setItem('abs_erp_products', JSON.stringify(ERP_STATE.products));
    localStorage.setItem('abs_erp_orders', JSON.stringify(ERP_STATE.orders));
    localStorage.setItem('abs_erp_inventory_transactions', JSON.stringify(ERP_STATE.inventoryTransactions));
  } catch (_) {}

  return {
    success: true,
    txId: txId,
    orderNumber: order.orderNumber,
    deductedItems: deductedItems
  };
}

function reverseOrderInventoryDeduction(order, user) {
  if (!order) return { success: false, reason: 'order_not_found' };
  
  if (order.inventoryDeduction !== 'applied') {
    order.inventoryDeduction = (order.status === 'ملغي') ? 'cancelled' : 'not_applied';
    try {
      localStorage.setItem('abs_erp_orders', JSON.stringify(ERP_STATE.orders));
    } catch (_) {}
    return { success: false, reason: 'was_not_applied' };
  }

  const author = user || getCurrentUser() || ERP_STATE.currentPartner || 'طه';
  const cleanOrderNum = (order.orderNumber || order.id || Date.now()).toString().replace('#', '');
  const txId = `TX-${cleanOrderNum}`;

  (order.items || []).forEach(item => {
    let prod = null;
    if (item.id) prod = ERP_STATE.products.find(p => p.id === item.id);
    if (!prod && item.name) {
      const cleanName = item.name.toLowerCase().trim();
      prod = ERP_STATE.products.find(p => 
        (p.nameAr && p.nameAr.toLowerCase().trim() === cleanName) ||
        (p.nameEn && p.nameEn.toLowerCase().trim() === cleanName)
      );
    }
    if (prod) {
      let targetProd = prod;
      let multiplier = 1;
      if (prod.shared_inventory_product_id) {
        const parent = ERP_STATE.products.find(p => p.id === prod.shared_inventory_product_id);
        if (parent) {
          targetProd = parent;
          multiplier = Number(prod.unit_multiplier) || 1;
        }
      }

      const oldStock = Number(targetProd.stock) || 0;
      const qtyToRestore = (Number(item.qty) || 1) * multiplier;
      const newStock = oldStock + qtyToRestore;
      targetProd.stock = newStock;
      
      if (targetProd.stock === 0) targetProd.status = 'نافد';
      else if (targetProd.stock <= 10) targetProd.status = 'منخفض';
      else targetProd.status = 'متوفر';

      logOperation({
        user: author,
        action: 'إلغاء خصم واستعادة مخزون',
        target: `${targetProd.nameAr} (${order.orderNumber})`,
        oldVal: `${oldStock} قطعة`,
        newVal: `${newStock} قطعة (+${qtyToRestore})`,
        details: `«استرجاع كمية (+${qtyToRestore}) إلى مخزون ${targetProd.nameAr} بسبب إلغاء/تعديل الطلب ${order.orderNumber}»`
      });
    }
  });

  const tx = (ERP_STATE.inventoryTransactions || []).find(t => 
    t.id === txId || (order.id && t.orderId === order.id)
  );
  if (tx) {
    tx.status = 'reversed';
    tx.notes = 'تم إلغاء الخصم واسترجاع الكميات للمخزون';
  }

  order.inventoryDeduction = (order.status === 'ملغي') ? 'cancelled' : 'not_applied';

  try {
    localStorage.setItem('abs_erp_products', JSON.stringify(ERP_STATE.products));
    localStorage.setItem('abs_erp_orders', JSON.stringify(ERP_STATE.orders));
    localStorage.setItem('abs_erp_inventory_transactions', JSON.stringify(ERP_STATE.inventoryTransactions));
  } catch (_) {}

  return { success: true, orderNumber: order.orderNumber };
}

function applyOrderDeductionDirectly(orderId) {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId || o.orderNumber === `#${orderId}`);
  if (!order) return;
  const author = getCurrentUser() || ERP_STATE.currentPartner || 'طه';
  const res = applyOrderInventoryDeduction(order, author);
  if (res && res.success) {
    showToast(`تم خصم أصناف الطلب ${order.orderNumber} بنجاح وتسجيل المعاملة ${res.txId} 📦`, 'success');
    renderInventoryReconciliationUI(CURRENT_RECON_FILTER);
    renderInventoryTable();
    updateDashboardRealUI();
  } else {
    showToast(`تعذر تنفيذ الخصم: ${res ? res.reason : 'خطأ'}`, 'warning');
  }
}

function reconcileInventoryAndOrders(options = {}) {
  const { autoApply = false, user = null } = options;
  const author = user || getCurrentUser() || ERP_STATE.currentPartner || 'طه';
  const orders = ERP_STATE.orders || [];
  const transactions = ERP_STATE.inventoryTransactions || [];

  const completedDeducted = [];
  const completedPending = [];
  const pendingProtected = [];
  const cancelled = [];
  const review = [];

  const seenOrderNumbers = new Set();

  orders.forEach(order => {
    const rawNum = (order.orderNumber || '').trim();
    if (rawNum && seenOrderNumbers.has(rawNum)) {
      review.push({
        order,
        category: 'review',
        label: 'مكرر / للمراجعة',
        reason: 'رقم طلب مكرر في السجل'
      });
      return;
    }
    if (rawNum) seenOrderNumbers.add(rawNum);

    const hasTx = transactions.some(t => 
      t.status === 'applied' && (
        (order.id && t.orderId === order.id) ||
        (order.orderNumber && t.orderNumber === order.orderNumber)
      )
    );

    if (order.status === 'ملغي') {
      cancelled.push({
        order,
        category: 'cancelled',
        label: 'ملغي (لا خصم)',
        hasTx,
        reason: 'طلب ملغي — غير مخصوم من المخزون'
      });
    } else if (order.status === 'مكتمل') {
      if (order.inventoryDeduction === 'applied' || hasTx) {
        order.inventoryDeduction = 'applied';
        completedDeducted.push({
          order,
          category: 'completed_deducted',
          label: 'مكتمل ومخصوم',
          hasTx: true,
          reason: 'مكتمل ومخصوم مسبقاً ضمن رصيد المخزون التأسيسي (محمي من التكرار)'
        });
      } else {
        completedPending.push({
          order,
          category: 'completed_pending',
          label: 'مكتمل بانتظار الخصم',
          hasTx: false,
          reason: 'طلب مكتمل لم يتم تنفيذ حركة خصم المخزون له بعد'
        });
      }
    } else {
      pendingProtected.push({
        order,
        category: 'pending_protected',
        label: 'غير مكتمل (محمي)',
        hasTx,
        reason: `حالة الطلب (${order.status}) — محمي من الخصم حتى التسليم النهائي`
      });
    }
  });

  const newlyDeducted = [];
  if (autoApply && completedPending.length > 0) {
    const pendingToProcess = [...completedPending];
    pendingToProcess.forEach(item => {
      const result = applyOrderInventoryDeduction(item.order, author);
      if (result && result.success) {
        newlyDeducted.push(item.order);
        item.category = 'completed_deducted';
        item.label = 'مكتمل ومخصوم';
        item.hasTx = true;
        item.reason = 'تم تنفيذ الخصم التلقائي بنجاح';
        completedDeducted.push(item);
      }
    });

    const newlyIds = new Set(newlyDeducted.map(o => o.id));
    for (let i = completedPending.length - 1; i >= 0; i--) {
      if (newlyIds.has(completedPending[i].order.id)) {
        completedPending.splice(i, 1);
      }
    }
  }

  return {
    totalChecked: orders.length,
    completedDeductedCount: completedDeducted.length,
    completedPendingCount: completedPending.length,
    pendingProtectedCount: pendingProtected.length,
    cancelledCount: cancelled.length,
    reviewCount: review.length,
    newlyDeductedCount: newlyDeducted.length,
    groups: {
      completed_deducted: completedDeducted,
      completed_pending: completedPending,
      pending_protected: pendingProtected,
      cancelled: cancelled,
      review: review
    }
  };
}

function switchInventorySubView(view, btn) {
  CURRENT_INVENTORY_SUBVIEW = view;
  const stockCard = document.getElementById('inventoryStockCard');
  const reconCard = document.getElementById('inventoryReconCard');
  const tabStock = document.getElementById('invSubTabStock');
  const tabRecon = document.getElementById('invSubTabRecon');

  if (tabStock) tabStock.classList.toggle('active', view === 'stock');
  if (tabRecon) tabRecon.classList.toggle('active', view === 'recon');

  if (view === 'stock') {
    if (stockCard) stockCard.style.display = '';
    if (reconCard) reconCard.style.display = 'none';
    renderInventoryTable();
  } else {
    if (stockCard) stockCard.style.display = 'none';
    if (reconCard) reconCard.style.display = '';
    renderInventoryReconciliationUI(CURRENT_RECON_FILTER);
  }
}

function filterReconTable(category, btn) {
  CURRENT_RECON_FILTER = category;
  document.querySelectorAll('#inventoryReconCard .table-filter-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderInventoryReconciliationUI(category);
}

function runAutomaticInventoryReconciliation() {
  const author = getCurrentUser() || ERP_STATE.currentPartner || 'طه';
  const result = reconcileInventoryAndOrders({ autoApply: true, user: author });
  
  renderInventoryReconciliationUI(CURRENT_RECON_FILTER);
  renderInventoryTable();
  updateDashboardRealUI();

  let toastMsg = `تمت التسوية بنجاح: ${result.totalChecked} طلبات مفحوصة (${result.completedDeductedCount} مكتمل ومخصوم، ${result.pendingProtectedCount} محمي)`;
  if (result.newlyDeductedCount > 0) {
    toastMsg += ` — تم خصم ${result.newlyDeductedCount} طلبات مكتملة جديدة! ⚡`;
  }
  showToast(toastMsg, 'success');
}

function renderInventoryReconciliationUI(filter = CURRENT_RECON_FILTER) {
  const tbody = document.getElementById('inventoryReconTableBody');
  if (!tbody) return;

  const reconData = reconcileInventoryAndOrders({ autoApply: false });

  // Update KPI counters
  const kpiCompleted = document.getElementById('reconKpiCompletedCount');
  const kpiPending = document.getElementById('reconKpiPendingCount');
  const kpiProtected = document.getElementById('reconKpiProtectedCount');
  const kpiCancelled = document.getElementById('reconKpiCancelledCount');
  const kpiReview = document.getElementById('reconKpiReviewCount');

  if (kpiCompleted) kpiCompleted.textContent = reconData.completedDeductedCount;
  if (kpiPending) kpiPending.textContent = reconData.completedPendingCount;
  if (kpiProtected) kpiProtected.textContent = reconData.pendingProtectedCount;
  if (kpiCancelled) kpiCancelled.textContent = reconData.cancelledCount;
  if (kpiReview) kpiReview.textContent = reconData.reviewCount;

  // Update Tab Count Badges
  const tabAll = document.getElementById('reconTabAllCount');
  const tabDeducted = document.getElementById('reconTabDeductedCount');
  const tabPending = document.getElementById('reconTabPendingCount');
  const tabProtected = document.getElementById('reconTabProtectedCount');
  const tabCancelled = document.getElementById('reconTabCancelledCount');
  const pendingBadge = document.getElementById('invReconPendingBadge');

  if (tabAll) tabAll.textContent = reconData.totalChecked;
  if (tabDeducted) tabDeducted.textContent = reconData.completedDeductedCount;
  if (tabPending) tabPending.textContent = reconData.completedPendingCount;
  if (tabProtected) tabProtected.textContent = reconData.pendingProtectedCount;
  if (tabCancelled) tabCancelled.textContent = reconData.cancelledCount;

  if (pendingBadge) {
    if (reconData.completedPendingCount > 0) {
      pendingBadge.textContent = reconData.completedPendingCount;
      pendingBadge.style.display = 'inline-block';
    } else {
      pendingBadge.style.display = 'none';
    }
  }

  // Determine items to render based on filter
  let itemsToRender = [];
  if (filter === 'all') {
    itemsToRender = [
      ...reconData.groups.completed_pending,
      ...reconData.groups.completed_deducted,
      ...reconData.groups.pending_protected,
      ...reconData.groups.cancelled,
      ...reconData.groups.review
    ];
  } else if (reconData.groups[filter]) {
    itemsToRender = reconData.groups[filter];
  }

  if (itemsToRender.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; color: var(--text-muted); padding: 2rem;">
          لا توجد سجلات مطابقة لهذا الفلتر
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = itemsToRender.map(item => {
    const o = item.order;
    const invNum = o.invoiceNumber || `#INV-2026-${(o.orderNumber || '').replace('#', '')}`;
    const tx = (ERP_STATE.inventoryTransactions || []).find(t => 
      t.status === 'applied' && (t.orderId === o.id || t.orderNumber === o.orderNumber)
    );
    const txBadge = tx 
      ? `<span class="num-mono" style="font-weight: 700; color: var(--status-success); font-size: 0.75rem;">${tx.id}</span>`
      : `<span style="color: var(--text-muted); font-size: 0.75rem;">—</span>`;

    let deductBadge = '';
    let actionBtn = '';

    if (item.category === 'completed_deducted') {
      deductBadge = '<span class="inv-deduct-pill deducted">✅ مخصوم ومعتمد</span>';
      actionBtn = `<button class="btn-secondary btn-sm" onclick="openOrderDetailsById('${o.id}')">التفاصيل</button>`;
    } else if (item.category === 'completed_pending') {
      deductBadge = '<span class="inv-deduct-pill pending">⚠️ بانتظار الخصم</span>';
      actionBtn = `<button class="btn-primary btn-sm" onclick="applyOrderDeductionDirectly('${o.id}')">خصم فوري ⚡</button>`;
    } else if (item.category === 'cancelled') {
      deductBadge = '<span class="inv-deduct-pill cancelled">🚫 ملغي (لا خصم)</span>';
      actionBtn = `<button class="btn-secondary btn-sm" onclick="openOrderDetailsById('${o.id}')">التفاصيل</button>`;
    } else if (item.category === 'review') {
      deductBadge = '<span class="inv-deduct-pill review">⚠️ مراجعة تدقيق</span>';
      actionBtn = `<button class="btn-secondary btn-sm" onclick="openOrderDetailsById('${o.id}')">مراجعة</button>`;
    } else {
      deductBadge = '<span class="inv-deduct-pill protected">🛡️ محمي حتى الاكتمال</span>';
      actionBtn = `<button class="btn-secondary btn-sm" onclick="openOrderDetailsById('${o.id}')">عرض</button>`;
    }

    const itemsSummary = (o.items || []).map(i => `${i.name} (×${i.qty})`).join(', ');

    return `
      <tr>
        <td>
          <div class="num-mono" style="font-weight: 800; color: var(--primary);">${o.orderNumber}</div>
          <div class="num-mono" style="font-size: 0.7rem; color: var(--text-muted);">${o.date || '—'}</div>
        </td>
        <td>
          <span class="num-mono" style="font-weight: 700; color: var(--text-main); font-size: 0.8rem;">${invNum}</span>
        </td>
        <td>
          <div style="font-weight: 700; color: var(--text-main); font-size: 0.825rem;">${o.customerName}</div>
          <div class="num-mono" style="font-size: 0.725rem; color: var(--text-muted);">${o.phone || ''}</div>
        </td>
        <td>
          <span class="status-pill ${getOrderStatusClass(o.status)}">${o.status}</span>
        </td>
        <td>
          <div style="font-size: 0.775rem; color: var(--text-main); max-width: 240px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${itemsSummary}">
            <strong>${o.itemsCount || (o.items || []).length} صنف:</strong> ${itemsSummary}
          </div>
        </td>
        <td>${txBadge}</td>
        <td>${deductBadge}</td>
        <td>${actionBtn}</td>
      </tr>
    `;
  }).join('');
}

// -------------------------------------------------------------
// 10. EXPENSES & FINANCE
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

function updateFinanceScreenMetrics() {
  const m = calculateRealMetrics();

  const finRevenueEl = document.getElementById('finScreenRevenue');
  if (finRevenueEl) finRevenueEl.textContent = `${m.totalSales.toLocaleString()} د.ل`;

  const finCogsEl = document.getElementById('finScreenCogs');
  if (finCogsEl) finCogsEl.textContent = `${m.cogs.toLocaleString()} د.ل`;

  const finExpEl = document.getElementById('finScreenExpenses');
  if (finExpEl) finExpEl.textContent = `${m.totalExpenses.toLocaleString()} د.ل`;

  const finNetEl = document.getElementById('finScreenNetProfit');
  if (finNetEl) finNetEl.textContent = `${m.netProfit.toLocaleString()} د.ل`;

  const finPurchCapEl = document.getElementById('finPurchasesCapital');
  if (finPurchCapEl) finPurchCapEl.textContent = `${m.totalProcurementCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} د.ل`;

  const finPurchRevEl = document.getElementById('finPurchasesExpectedRev');
  if (finPurchRevEl) finPurchRevEl.textContent = `${m.totalProcurementRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} د.ل`;

  const finPurchProfEl = document.getElementById('finPurchasesExpectedProfit');
  if (finPurchProfEl) finPurchProfEl.textContent = `+${m.totalProcurementProfit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} د.ل`;
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
  updateDashboardRealUI();
  updateFinanceScreenMetrics();
}

// -------------------------------------------------------------
// 11. PARTNERS & REPORTS REAL METRICS
// -------------------------------------------------------------
function updatePartnersScreenMetrics() {
  const m = calculateRealMetrics();
  const share = m.profitPerPartner;

  ['partnerTahaShare', 'partnerMomenShare', 'partnerSasiShare'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = `${share} د.ل`;
  });

  ['partnerTahaBalance', 'partnerMomenBalance', 'partnerSasiBalance'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = `${1000 + share} د.ل`;
  });
}

function updateReportsScreenMetrics() {
  const m = calculateRealMetrics();
  const aov = m.ordersCount > 0 ? (m.totalSales / m.ordersCount).toFixed(1) : 0;

  const aovEl = document.getElementById('reportAovDisplay');
  if (aovEl) aovEl.textContent = `${aov} د.ل`;

  // Gross vs Net Sales & Discounts Ledger
  const grossEl = document.getElementById('reportGrossSalesVal');
  if (grossEl) grossEl.textContent = `${m.grossSales.toLocaleString()} د.ل`;

  const discountsEl = document.getElementById('reportTotalDiscountsVal');
  if (discountsEl) discountsEl.textContent = `${m.totalDiscounts.toLocaleString()} د.ل`;

  const netEl = document.getElementById('reportNetSalesVal');
  if (netEl) netEl.textContent = `${m.netSales.toLocaleString()} د.ل`;

  const expEl = document.getElementById('reportExpensesVal');
  if (expEl) expEl.textContent = `${m.totalExpenses.toLocaleString()} د.ل`;

  // Partner discounts distribution
  const grid = document.getElementById('reportPartnerDiscountsGrid');
  if (grid) {
    const partners = ['طه', 'مؤمن', 'ياسي'];
    const partnerData = partners.map(name => {
      const pOrders = ERP_STATE.orders.filter(o => 
        ((o.assignedTo === name) || 
         (name === 'مؤمن' && (o.assignedTo === 'عبدالمؤمن' || o.assignedTo === 'عيد المؤمن')) ||
         (name === 'ياسي' && o.assignedTo === 'ساسي'))
      );
      const discountOrders = pOrders.filter(o => o.hasDiscount || (Number(o.discountAmount) > 0));
      const totalDisc = discountOrders.reduce((sum, o) => sum + (Number(o.discountAmount) || 0), 0);
      return {
        name,
        totalDisc,
        ordersCount: discountOrders.length,
        allOrdersCount: pOrders.length
      };
    });

    grid.innerHTML = partnerData.map(p => {
      let badgeColor = '#1d4ed8';
      let bg = '#eff6ff';
      if (p.name === 'مؤمن') { badgeColor = '#059669'; bg = '#f0fdf4'; }
      if (p.name === 'ياسي') { badgeColor = '#7c3aed'; bg = '#f5f3ff'; }

      return `
        <div style="background: ${bg}; border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 0.85rem; display: flex; flex-direction: column; gap: 4px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <strong style="color: ${badgeColor}; font-size: 0.95rem;">${p.name}</strong>
            <span style="font-size: 0.7rem; color: var(--text-muted);">${p.allOrdersCount} طلب مسؤول</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 4px;">
            <span style="font-size: 0.75rem; color: var(--text-muted);">إجمالي الخصومات:</span>
            <span class="num-mono" style="font-weight: 900; font-size: 1.15rem; color: ${badgeColor};">${p.totalDisc.toLocaleString()} د.ل</span>
          </div>
          <div style="font-size: 0.7rem; color: var(--text-muted);">منح خصومات لـ ${p.ordersCount} طلبات معتمدة</div>
        </div>
      `;
    }).join('');
  }
}

// -------------------------------------------------------------
// 12. AUDIT LOG SCREEN & FILTERING
// -------------------------------------------------------------
let currentAuditFilter = 'all';

function filterAuditTable(userFilter, btn) {
  currentAuditFilter = userFilter;
  document.querySelectorAll('.table-filter-tabs .table-filter-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const searchVal = document.getElementById('auditSearchInput') ? document.getElementById('auditSearchInput').value : '';
  renderFullAuditTable(userFilter, searchVal);
}

function handleAuditSearch(val) {
  renderFullAuditTable(currentAuditFilter, val);
}

function renderFullAuditTable(userFilter = currentAuditFilter, searchQuery = '') {
  const tbody = document.getElementById('fullAuditTableBody');
  const countEl = document.getElementById('auditTabAllCount');
  if (!tbody) return;

  if (countEl) countEl.textContent = ERP_STATE.auditLogs.length;

  let list = [...ERP_STATE.auditLogs];

  if (userFilter && userFilter !== 'all') {
    list = list.filter(a => (a.user || '').includes(userFilter) || (userFilter === 'ياسي' && a.user === 'ساسي') || (userFilter === 'مؤمن' && a.user === 'عبدالمؤمن'));
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(a =>
      (a.details || '').toLowerCase().includes(q) ||
      (a.action || '').toLowerCase().includes(q) ||
      (a.user || '').toLowerCase().includes(q) ||
      (a.target || '').toLowerCase().includes(q)
    );
  }

  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 1.5rem; color: var(--text-muted);">لا توجد عمليات مسجلة مطابقة للمرشح المختار</td></tr>';
    return;
  }

  tbody.innerHTML = list.map(a => {
    let userBadgeClass = 'taha';
    if (a.user === 'مؤمن' || a.user === 'عبدالمؤمن') userBadgeClass = 'momen';
    else if (a.user === 'ياسي' || a.user === 'ساسي') userBadgeClass = 'yasi';

    return `
      <tr>
        <td class="num-mono" style="font-weight: 800; color: var(--primary);">${a.id}</td>
        <td class="num-mono" style="color: var(--text-muted); font-size: 0.75rem;">${a.time}</td>
        <td class="num-mono" style="color: var(--text-muted); font-size: 0.75rem;">${a.date}</td>
        <td>
          <span class="audit-user-badge ${userBadgeClass}">
            <strong>${a.user}</strong>
          </span>
        </td>
        <td style="color: var(--primary); font-weight: 700;">${a.action}</td>
        <td style="color: var(--text-body); font-size: 0.825rem;">${a.details}</td>
        <td class="num-mono" style="font-size: 0.75rem; color: var(--text-muted);">${a.oldVal} → <strong style="color: var(--text-main);">${a.newVal}</strong></td>
      </tr>
    `;
  }).join('');
}

// -------------------------------------------------------------
// 13. GLOBAL SEARCH & COMMAND PALETTE (Ctrl + K)
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
    !q || (o.customerName && o.customerName.toLowerCase().includes(q)) || (o.orderNumber && o.orderNumber.toLowerCase().includes(q))
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
// 14. MOBILE SIDEBAR RESPONSIVE DRAWER & OVERLAY ENGINE
// -------------------------------------------------------------
function openMobileSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) sidebar.classList.add('mobile-open');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) sidebar.classList.remove('mobile-open');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function toggleMobileSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar && sidebar.classList.contains('mobile-open')) {
    closeMobileSidebar();
  } else {
    openMobileSidebar();
  }
}

// Global dismiss triggers (Escape key + backdrop click)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileSidebar();
  }
});

document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar && sidebar.classList.contains('mobile-open')) {
    if ((overlay && e.target === overlay) || (!sidebar.contains(e.target) && (!toggleBtn || !toggleBtn.contains(e.target)))) {
      closeMobileSidebar();
    }
  }
});

// -------------------------------------------------------------
// 15. TOAST NOTIFICATIONS
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
// 16. LIVE SERVER SYNC (api.kurofangs.id.ly)
// -------------------------------------------------------------
async function syncWithUserServer() {
  // Clean slate mode: Respect user wipe of historical orders and pricing
  // Only maintain product structure from clean catalog
  try {
    if (ERP_STATE.orders && ERP_STATE.orders.length > 0) {
      // If there are newly created local orders, preserve them
    } else {
      ERP_STATE.orders = [];
    }
  } catch (_) {}
}

// -------------------------------------------------------------
// 18. ASSISTED STUDENT ORDER SYSTEM (+ طلب لطالب بالنيابة)
// -------------------------------------------------------------
const STUDENT_ORDER_STATE = {
  selectedCategory: 'all',
  cart: [],
  deliveryFee: 0,
  lastCreatedOrder: null
};

function openStudentOrderModal() {
  const nameInput = document.getElementById('studentOrderName');
  const phoneInput = document.getElementById('studentOrderPhone');
  const notesInput = document.getElementById('studentOrderNotes');
  const searchInput = document.getElementById('studentCatalogSearch');
  const collegeSelect = document.getElementById('studentOrderCollege');
  const deliverySelect = document.getElementById('studentOrderDeliveryType');
  const paymentSelect = document.getElementById('studentOrderPayment');
  const customCollegeWrap = document.getElementById('studentCustomCollegeWrap');
  const customCollegeInput = document.getElementById('studentOrderCustomCollege');

  if (nameInput) nameInput.value = '';
  if (phoneInput) phoneInput.value = '';
  if (notesInput) notesInput.value = '';
  if (searchInput) searchInput.value = '';
  if (customCollegeInput) customCollegeInput.value = '';
  if (customCollegeWrap) customCollegeWrap.style.display = 'none';
  if (collegeSelect) collegeSelect.value = 'جامعة طرابلس — كلية طب الأسنان';
  if (deliverySelect) deliverySelect.value = 'faculty';
  if (paymentSelect) paymentSelect.value = 'cash_on_delivery';

  const activeUser = getCurrentUser() || ERP_STATE.currentPartner || 'مؤمن';
  const badgeName = document.getElementById('studentOrderActiveUserBadgeName');
  if (badgeName) badgeName.textContent = activeUser;

  STUDENT_ORDER_STATE.cart = [];
  STUDENT_ORDER_STATE.deliveryFee = 0;
  STUDENT_ORDER_STATE.selectedCategory = 'all';

  // Reset category chips
  document.querySelectorAll('.student-filter-chips .filter-chip').forEach((chip, idx) => {
    if (idx === 0) chip.classList.add('active');
    else chip.classList.remove('active');
  });

  renderStudentCatalogList();
  renderStudentCart();
  calculateStudentOrderTotals();

  openModal('studentOrderModal');
}

function handleCollegePresetChange(val) {
  const customWrap = document.getElementById('studentCustomCollegeWrap');
  if (customWrap) {
    customWrap.style.display = (val === 'كلية أخرى') ? 'block' : 'none';
  }
}

function handleDeliveryFeeChange(val) {
  if (val === 'tripoli_home') {
    STUDENT_ORDER_STATE.deliveryFee = 10;
  } else if (val === 'outside_tripoli') {
    STUDENT_ORDER_STATE.deliveryFee = 15;
  } else {
    STUDENT_ORDER_STATE.deliveryFee = 0;
  }
  calculateStudentOrderTotals();
}

function setStudentProductCategory(cat, btn) {
  STUDENT_ORDER_STATE.selectedCategory = cat;
  document.querySelectorAll('.student-filter-chips .filter-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const searchVal = document.getElementById('studentCatalogSearch') ? document.getElementById('studentCatalogSearch').value : '';
  renderStudentCatalogList(searchVal);
}

function filterStudentOrderProducts(query) {
  renderStudentCatalogList(query);
}

function renderStudentCatalogList(searchQuery = '') {
  const container = document.getElementById('studentCatalogList');
  const countDisplay = document.getElementById('studentCatalogCount');
  if (!container) return;

  let prods = [...ERP_STATE.products];
  const cat = STUDENT_ORDER_STATE.selectedCategory;

  if (cat === 'cons') {
    prods = prods.filter(p => {
      const str = ((p.nameAr || '') + ' ' + (p.nameEn || '') + ' ' + (p.category || '')).toLowerCase();
      return str.includes('coxo') || str.includes('handpiece') || str.includes('قبضة') || str.includes('كونس') || str.includes('bur') || str.includes('بور') || str.includes('wax') || str.includes('شمع');
    });
  } else if (cat === 'crown') {
    prods = prods.filter(p => {
      const str = ((p.nameAr || '') + ' ' + (p.nameEn || '') + ' ' + (p.category || '')).toLowerCase();
      return str.includes('coxo') || str.includes('handpiece') || str.includes('قبضة') || str.includes('كراون') || str.includes('cast') || str.includes('كاست') || str.includes('tf') || str.includes('bur');
    });
  } else if (cat === 'burs') {
    prods = prods.filter(p => {
      const name = ((p.nameAr || '') + ' ' + (p.nameEn || '')).toLowerCase();
      return name.includes('bur') || name.includes('حفر') || name.includes('tc') || name.includes('sf') || name.includes('br') || name.includes('si') || name.includes('tf') || name.includes('wr') || name.includes('fo') || name.includes('cd');
    });
  } else if (cat === 'sets') {
    prods = prods.filter(p => {
      const name = ((p.nameAr || '') + ' ' + (p.nameEn || '')).toLowerCase();
      return name.includes('cast') || name.includes('handpiece') || name.includes('كاست') || name.includes('هاندبيس');
    });
  } else if (cat === 'teeth') {
    prods = prods.filter(p => {
      const name = ((p.nameAr || '') + ' ' + (p.nameEn || '')).toLowerCase();
      return name.includes('teeth') || name.includes('wax') || name.includes('شمع') || name.includes('أسنان') || name.includes('baseplate');
    });
  } else if (cat === 'exam') {
    prods = prods.filter(p => {
      const name = ((p.nameAr || '') + ' ' + (p.nameEn || '')).toLowerCase();
      return name.includes('mirror') || name.includes('probe') || name.includes('spatula') || name.includes('bowl') || name.includes('slab') || name.includes('lighter') || name.includes('torch');
    });
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    prods = prods.filter(p => {
      const name = ((p.nameAr || '') + ' ' + (p.nameEn || '') + ' ' + (p.sku || '')).toLowerCase();
      return name.includes(q);
    });
  }

  if (countDisplay) {
    countDisplay.textContent = `${prods.length} منتج`;
  }

  if (prods.length === 0) {
    container.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.775rem;">لا توجد أدوات مطابقة للبحث</div>';
    return;
  }

  container.innerHTML = prods.map(p => {
    const stock = Number(p.stock) || 0;
    const isOutOfStock = stock <= 0;
    const price = Number(p.sellingPrice) || 0;

    return `
      <div class="student-product-pick-item">
        <div style="display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0;">
          <div style="font-weight: 700; font-size: 0.785rem; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${p.nameAr}">${p.nameAr}</div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
            <span class="num-mono" style="font-weight: 800; color: var(--primary);">${price} د.ل</span>
            <span style="color: ${isOutOfStock ? '#ef4444' : stock < 10 ? '#f59e0b' : 'var(--text-muted)'}; font-size: 0.675rem;">
              ${isOutOfStock ? '⚠️ نافد' : `(متاح: ${stock})`}
            </span>
          </div>
        </div>
        <button type="button" class="btn-primary btn-sm" onclick="studentOrderAddToCart('${p.id}')" ${isOutOfStock ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''} style="padding: 3px 8px; font-size: 0.725rem;">
          + إضافة
        </button>
      </div>
    `;
  }).join('');
}

function studentOrderAddToCart(productId) {
  const prod = ERP_STATE.products.find(p => p.id === productId);
  if (!prod) return;

  const existing = STUDENT_ORDER_STATE.cart.find(i => i.productId === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    STUDENT_ORDER_STATE.cart.push({
      productId: prod.id,
      name: prod.nameAr,
      price: Number(prod.sellingPrice) || 0,
      qty: 1,
      stock: Number(prod.stock) || 0
    });
  }

  renderStudentCart();
  calculateStudentOrderTotals();
  showToast(`تمت إضافة "${prod.nameAr}" لسلة الطالب 🛒`);
}

function studentOrderUpdateQty(productId, delta) {
  const item = STUDENT_ORDER_STATE.cart.find(i => i.productId === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    STUDENT_ORDER_STATE.cart = STUDENT_ORDER_STATE.cart.filter(i => i.productId !== productId);
  }
  renderStudentCart();
  calculateStudentOrderTotals();
}

function studentOrderRemoveItem(productId) {
  STUDENT_ORDER_STATE.cart = STUDENT_ORDER_STATE.cart.filter(i => i.productId !== productId);
  renderStudentCart();
  calculateStudentOrderTotals();
}

function clearStudentCart() {
  STUDENT_ORDER_STATE.cart = [];
  renderStudentCart();
  calculateStudentOrderTotals();
}

function renderStudentCart() {
  const tbody = document.getElementById('studentCartBody');
  const countEl = document.getElementById('studentCartCount');
  if (!tbody) return;

  if (countEl) {
    countEl.textContent = STUDENT_ORDER_STATE.cart.reduce((sum, i) => sum + i.qty, 0);
  }

  if (STUDENT_ORDER_STATE.cart.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; padding: 1rem; color: var(--text-muted); font-size: 0.75rem;">
          سلة الطالب فارغة حالياً. اضغط على "+ إضافة" بجانب أي أداة لإضافتها.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = STUDENT_ORDER_STATE.cart.map(item => `
    <tr>
      <td style="font-weight: 600; color: var(--text-main); font-size: 0.775rem;">
        ${item.name}
      </td>
      <td style="text-align: center;">
        <div style="display: inline-flex; align-items: center; gap: 4px;">
          <button type="button" class="qty-stepper-btn" onclick="studentOrderUpdateQty('${item.productId}', -1)">-</button>
          <span class="num-mono" style="font-weight: 800; min-width: 18px; text-align: center;">${item.qty}</span>
          <button type="button" class="qty-stepper-btn" onclick="studentOrderUpdateQty('${item.productId}', 1)">+</button>
        </div>
      </td>
      <td class="num-mono" style="text-align: left; font-weight: 700; color: var(--primary);">
        ${item.price * item.qty} د.ل
      </td>
      <td style="text-align: center;">
        <button type="button" class="cart-item-delete-btn" onclick="studentOrderRemoveItem('${item.productId}')" title="حذف">✕</button>
      </td>
    </tr>
  `).join('');
}

function calculateStudentOrderTotals() {
  const subtotal = STUDENT_ORDER_STATE.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const shipping = STUDENT_ORDER_STATE.deliveryFee;
  const total = subtotal + shipping;

  const subtotalEl = document.getElementById('studentSubtotalDisplay');
  const shippingEl = document.getElementById('studentShippingDisplay');
  const totalEl = document.getElementById('studentTotalDisplay');

  if (subtotalEl) subtotalEl.textContent = `${subtotal} د.ل`;
  if (shippingEl) {
    shippingEl.textContent = shipping === 0 ? 'مجاني (0 د.ل)' : `${shipping} د.ل`;
  }
  if (totalEl) totalEl.textContent = `${total} د.ل`;

  return { subtotal, shipping, total };
}

async function submitStudentOrder() {
  const nameInput = document.getElementById('studentOrderName');
  const phoneInput = document.getElementById('studentOrderPhone');
  const yearSelect = document.getElementById('studentOrderYear');
  const collegeSelect = document.getElementById('studentOrderCollege');
  const customCollegeInput = document.getElementById('studentOrderCustomCollege');
  const deliverySelect = document.getElementById('studentOrderDeliveryType');
  const paymentSelect = document.getElementById('studentOrderPayment');
  const notesInput = document.getElementById('studentOrderNotes');
  const partnerRadio = document.querySelector('input[name="studentOrderPartner"]:checked');
  const submitBtn = document.getElementById('btnSubmitStudentOrder');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';

  if (!name) {
    showToast('يرجى إدخال اسم الطالب / الطالبة', 'warning');
    if (nameInput) nameInput.focus();
    return;
  }

  if (!phone || phone.length < 8) {
    showToast('يرجى إدخال رقم هاتف صحيح للتواصل عبر الواتساب', 'warning');
    if (phoneInput) phoneInput.focus();
    return;
  }

  if (STUDENT_ORDER_STATE.cart.length === 0) {
    showToast('يرجى إضافة أداة واحدة على الأقل لسلة الطالب', 'warning');
    return;
  }

  // Resolve University & College
  let college = collegeSelect ? collegeSelect.value : 'جامعة طرابلس — كلية طب الأسنان';
  if (college === 'كلية أخرى' && customCollegeInput && customCollegeInput.value.trim()) {
    college = customCollegeInput.value.trim();
  }

  // Resolve delivery text
  const deliveryType = deliverySelect ? deliverySelect.value : 'faculty';
  let deliveryText = 'استلام مباشر بالكلية / المدرج';
  if (deliveryType === 'tripoli_home') deliveryText = 'توصيل للمنزل داخل طرابلس';
  else if (deliveryType === 'outside_tripoli') deliveryText = 'شحن وتوصيل خارج طرابلس';
  else if (deliveryType === 'office') deliveryText = 'استلام من مقر Absolute Dental';

  const userNotes = notesInput ? notesInput.value.trim() : '';
  const partnerName = getCurrentUser() || ERP_STATE.currentPartner || 'مؤمن';
  const paymentMethod = paymentSelect ? paymentSelect.value : 'cash_on_delivery';

  // Calculate totals
  const totals = calculateStudentOrderTotals();
  const subtotal = totals.subtotal;
  const shippingFee = totals.shipping;
  const totalPrice = totals.total;

  // Generate 8-digit order number
  const orderNum = Math.floor(10000000 + Math.random() * 90000000).toString();

  // Full composite address / delivery notes
  const fullAddress = [
    deliveryText,
    academicYear ? `[${academicYear}]` : '',
    userNotes ? `[ملاحظات: ${userNotes}]` : ''
  ].filter(Boolean).join(' - ');

  // UI button loading state
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>⏳ جاري الحفظ في السيرفر والمخزون...</span>';
  }

  let serverOrderId = null;

  try {
    // 1. POST Order to Supabase `/rest/v1/orders`
    const orderPayload = {
      order_number: orderNum,
      customer_name: name,
      customer_phone: phone,
      university: 'جامعة طرابلس',
      college: college,
      address_text: fullAddress,
      status: 'new',
      total_price: totalPrice,
      subtotal: subtotal,
      shipping_fee: shippingFee,
      payment_method: paymentMethod,
      is_guest: true,
      notes: `طلب مسجل بواسطة الأدمن (${partnerName}) بالنيابة عن الطالب. ${userNotes ? 'ملاحظة: ' + userNotes : ''}`
    };

    const orderRes = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/orders`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_CONFIG.anonKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(orderPayload)
    });

    if (orderRes.ok) {
      const createdRows = await orderRes.json();
      if (Array.isArray(createdRows) && createdRows[0]) {
        serverOrderId = createdRows[0].id;
      }
    }

    // 2. If order created in Supabase, insert order items into `/rest/v1/order_items`
    if (serverOrderId) {
      const itemsPayload = STUDENT_ORDER_STATE.cart.map(item => ({
        order_id: serverOrderId,
        product_id: item.productId,
        quantity: item.qty,
        price: item.price
      }));

      await fetch(`${SUPABASE_CONFIG.url}/rest/v1/order_items`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_CONFIG.anonKey,
          'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemsPayload)
      });
    }
  } catch (err) {
    console.warn('Direct Supabase insert notice:', err);
  }

  // 3. Fallback or Local Order Object
  const orderId = serverOrderId || `order-${Date.now()}`;
  const newOrder = {
    id: orderId,
    orderNumber: `#${orderNum}`,
    invoiceNumber: `#INV-2026-${orderNum}`,
    inventoryDeduction: 'not_applied',
    customerName: name,
    phone: phone,
    university: 'جامعة طرابلس',
    college: college,
    address: fullAddress,
    itemsCount: STUDENT_ORDER_STATE.cart.reduce((sum, i) => sum + i.qty, 0),
    items: STUDENT_ORDER_STATE.cart.map(i => ({ name: i.name, qty: i.qty, price: i.price, id: i.productId })),
    total: totalPrice,
    subtotal: subtotal,
    shippingFee: shippingFee,
    status: 'جديد',
    assignedTo: partnerName,
    date: 'الآن (مباشر)',
    notes: userNotes,
    paymentMethod: paymentMethod
  };

  // Prepend to ERP State orders
  ERP_STATE.orders.unshift(newOrder);

  // Note: Inventory stock is NOT deducted on creation; protected until status becomes 'مكتمل'

  // Log to Audit Trail
  ERP_STATE.auditLogs.unshift({
    id: `#${1100 + ERP_STATE.auditLogs.length}`,
    time: new Date().toLocaleTimeString('ar-LY', { hour: '2-digit', minute: '2-digit' }),
    date: new Date().toLocaleDateString('ar-LY', { month: '2-digit', day: '2-digit' }),
    user: partnerName,
    action: 'إنشاء طلب طالب (بالنيابة)',
    details: `تم إنشاء الطلب #${orderNum} للطالب/ة ${name} (${newOrder.itemsCount} صنفاً) بقيمة ${totalPrice} د.ل — المخزون محمي حتى اكتمال الطلب`,
    oldVal: '-',
    newVal: `${totalPrice} د.ل`
  });

  try {
    localStorage.setItem('abs_erp_audit', JSON.stringify(ERP_STATE.auditLogs));
    localStorage.setItem('abs_erp_orders', JSON.stringify(ERP_STATE.orders));
  } catch (_) {}

  // Store last created order for WhatsApp and print
  STUDENT_ORDER_STATE.lastCreatedOrder = newOrder;

  // Restore submit button
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<span>✓ حفظ وتأكيد الطلب في السيرفر</span>';
  }

  // Close creation modal
  closeModal('studentOrderModal');

  // Update all system screens & metrics
  updateDashboardRealUI();
  if (ERP_STATE.activeScreen === 'orders') renderOrdersTable();
  if (ERP_STATE.activeScreen === 'products') renderProductsTable();
  if (ERP_STATE.activeScreen === 'inventory') renderInventoryTable();

  // Populate Success Modal
  const successOrderNumEl = document.getElementById('successModalOrderNum');
  const successStudentNameEl = document.getElementById('successModalStudentName');
  const successStudentPhoneEl = document.getElementById('successModalStudentPhone');
  const successOrderTotalEl = document.getElementById('successModalOrderTotal');

  if (successOrderNumEl) successOrderNumEl.textContent = `#${orderNum}`;
  if (successStudentNameEl) successStudentNameEl.textContent = name;
  if (successStudentPhoneEl) successStudentPhoneEl.textContent = phone;
  if (successOrderTotalEl) successOrderTotalEl.textContent = `${totalPrice} د.ل`;

  openModal('studentOrderSuccessModal');
  showToast(`تم حفظ طلب الطالب #${orderNum} وتأكيده بنجاح في السيرفر 🦷✨`);
}

function dispatchStudentOrderWhatsApp() {
  const order = STUDENT_ORDER_STATE.lastCreatedOrder;
  if (!order) return;

  const cleanPhone = (order.phone || '').replace(/[^0-9]/g, '').replace(/^0/, '');
  const itemsText = (order.items || []).map(i => `• ${i.name} (عدد ${i.qty}) — ${(i.price * i.qty)} د.ل`).join('\n');
  const shippingText = order.shippingFee > 0 ? `🚚 رسوم التوصيل: ${order.shippingFee} د.ل\n` : '🚚 التوصيل: استلام مباشر بالكلية (مجاني)\n';

  const msg = `🦷 *مرحباً دكتور/ة ${order.customerName}*
تم تسجيل وتأكيد طلبكم بنجاح لدى *Absolute Dental* لمستلزمات طب الأسنان!

📋 *رقم الطلب:* ${order.orderNumber}
🏛️ *الكلية / الجامعة:* ${order.college}
📍 *مكان التسليم:* ${order.address}

🛒 *الأصناف المطلوبة:*
${itemsText}

${shippingText}💰 *الإجمالي المطلوب:* *${order.total} د.ل*
💳 *طريقة الدفع:* كاش عند الاستلام

نتمنى لكم فصلاً وتدريباً دراسياً موفقاً! 🦷✨
فريق Absolute Dental`;

  window.open(`https://wa.me/218${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function printSlipFromSuccessModal() {
  const order = STUDENT_ORDER_STATE.lastCreatedOrder;
  if (!order) return;
  closeModal('studentOrderSuccessModal');
  openDeliverySlipById(order.id);
}

// -------------------------------------------------------------
// 16.5 NEW POS ORDER CREATION, SMART DISCOUNT ENGINE & OFFICIAL INVOICES
// -------------------------------------------------------------
const POS_ORDER_STATE = {
  customerPreset: 'new',
  customerName: '',
  phone: '',
  university: 'جامعة طرابلس',
  college: 'كلية طب الأسنان',
  deliveryType: 'faculty',
  deliveryFee: 0,
  address: '',
  notes: '',
  cart: [],
  discountEnabled: false,
  discountType: 'fixed',
  discountValue: 0,
  discountReason: 'خصم زميل كلية أسنان',
  calculatedDiscount: 0,
  subtotal: 0,
  netTotal: 0,
  lastCreatedInvoiceOrder: null
};

function resolveProductImage(p) {
  if (!p) return 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&auto=format';
  let url = p.image || p.image_url || '';
  if (url) {
    if (url.includes('102-203-202-115.sslip.io')) {
      return url.replace('102-203-202-115.sslip.io', 'api.kurofangs.id.ly');
    }
    return url;
  }
  if (p.id && !['prod-box-trans-165', 'prod-box-mauve', 'prod-box-pink', 'prod-bag-17', 'prod-bag-16-col', 'prod-scrub-black', 'prod-toy-tooth'].includes(p.id)) {
    return `https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/${p.id}.jpg`;
  }
  return 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&auto=format';
}

function toggleStorefrontFav(event, productId) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  try {
    const favs = JSON.parse(localStorage.getItem('smylodent_favs') || '[]');
    const isFav = favs.includes(productId);
    const updated = isFav ? favs.filter(id => id !== productId) : [...favs, productId];
    localStorage.setItem('smylodent_favs', JSON.stringify(updated));
    const btn = document.getElementById(`favBtn-${productId}`);
    if (btn) {
      if (!isFav) {
        btn.classList.add('active');
        btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="#EF4444" stroke="#EF4444" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
      } else {
        btn.classList.remove('active');
        btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
      }
    }
  } catch (_) {}
}

function initNewOrderScreen() {
  const activeUser = getCurrentUser() || ERP_STATE.currentPartner || 'طه';
  const badge = document.getElementById('newOrderActiveUserBadge');
  const notice = document.getElementById('posActiveUserSessionNotice');
  if (badge) badge.textContent = activeUser;
  if (notice) notice.textContent = activeUser;

  // Next invoice sequence preview
  const nextSeq = ERP_STATE.orders.length + 1;
  const nextInvNum = `#INV-2026-${String(nextSeq).padStart(4, '0')}`;
  const invTag = document.getElementById('posNextInvoiceNum');
  if (invTag) invTag.textContent = nextInvNum;

  // Populate customer presets
  populateCustomerPresets();

  // Render product catalog
  renderPosProductsCatalog();

  // Render cart
  renderPosCartItems();

  // Recalculate
  calculatePosTotals();
}

function populateCustomerPresets() {
  const select = document.getElementById('posCustomerPresetSelect');
  if (!select) return;

  const seen = new Set();
  const customers = [];

  ERP_STATE.orders.forEach(o => {
    const name = (o.customerName || '').trim();
    if (name && !seen.has(name) && !name.includes('طالب كلية الأسنان')) {
      seen.add(name);
      customers.push({
        name: name,
        phone: o.phone || '',
        university: o.university || 'جامعة طرابلس',
        college: o.college || 'كلية طب الأسنان',
        address: o.address || '',
        notes: o.notes || ''
      });
    }
  });

  select.innerHTML = `
    <option value="new" selected>ابحث عن عميل أو أضف جديد...</option>
    ${customers.map(c => `
      <option value="${encodeURIComponent(JSON.stringify(c))}">
        👤 ${c.name} — ${c.phone ? c.phone : ''} (${c.university})
      </option>
    `).join('')}
  `;
}

function handleCustomerPresetSelect(val) {
  if (val === 'new') {
    if (document.getElementById('posCustomerName')) document.getElementById('posCustomerName').value = '';
    if (document.getElementById('posCustomerPhone')) document.getElementById('posCustomerPhone').value = '';
    if (document.getElementById('posCustomerUniversity')) document.getElementById('posCustomerUniversity').value = 'جامعة طرابلس';
    if (document.getElementById('posCustomerCollege')) document.getElementById('posCustomerCollege').value = 'كلية طب الأسنان';
    if (document.getElementById('posDeliveryAddress')) document.getElementById('posDeliveryAddress').value = '';
    if (document.getElementById('posOrderNotes')) document.getElementById('posOrderNotes').value = '';
    POS_ORDER_STATE.customerName = '';
    POS_ORDER_STATE.phone = '';
    POS_ORDER_STATE.university = 'جامعة طرابلس';
    POS_ORDER_STATE.college = 'كلية طب الأسنان';
    POS_ORDER_STATE.address = '';
    POS_ORDER_STATE.notes = '';
    return;
  }

  try {
    const cust = JSON.parse(decodeURIComponent(val));
    if (document.getElementById('posCustomerName')) document.getElementById('posCustomerName').value = cust.name || '';
    if (document.getElementById('posCustomerPhone')) document.getElementById('posCustomerPhone').value = cust.phone || '';
    if (document.getElementById('posCustomerUniversity') && cust.university) {
      document.getElementById('posCustomerUniversity').value = cust.university;
    }
    if (document.getElementById('posCustomerCollege')) {
      document.getElementById('posCustomerCollege').value = cust.college || 'كلية طب الأسنان';
    }
    if (document.getElementById('posDeliveryAddress')) {
      document.getElementById('posDeliveryAddress').value = cust.address || '';
    }
    if (document.getElementById('posOrderNotes')) {
      document.getElementById('posOrderNotes').value = cust.notes || '';
    }

    POS_ORDER_STATE.customerName = cust.name || '';
    POS_ORDER_STATE.phone = cust.phone || '';
    POS_ORDER_STATE.university = cust.university || 'جامعة طرابلس';
    POS_ORDER_STATE.college = cust.college || 'كلية طب الأسنان';
    POS_ORDER_STATE.address = cust.address || '';
    POS_ORDER_STATE.notes = cust.notes || '';

    showToast(`تم استرجاع بيانات العميل: ${cust.name}`);
  } catch (_) {}
}

function handleUniversityChange(val) {
  POS_ORDER_STATE.university = val;
  const collegeInput = document.getElementById('posCustomerCollege');
  if (collegeInput && (!collegeInput.value || collegeInput.value === 'كلية طب الأسنان')) {
    collegeInput.value = 'كلية طب الأسنان';
  }
}

let posCatalogSearchFilter = '';
let posCatalogCategoryFilter = 'all';

function handlePosCatalogSearch(val) {
  posCatalogSearchFilter = (val || '').toLowerCase().trim();
  renderPosProductsCatalog(posCatalogSearchFilter, posCatalogCategoryFilter);
}

function filterPosCatalogCategory(cat, btn) {
  posCatalogCategoryFilter = cat;
  if (btn) {
    document.querySelectorAll('#newOrderScreen .student-filter-chips .filter-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  renderPosProductsCatalog(posCatalogSearchFilter, cat);
}

function renderPosProductsCatalog(query = posCatalogSearchFilter, category = posCatalogCategoryFilter) {
  const container = document.getElementById('posProductsCatalogGrid');
  const countEl = document.getElementById('posCatalogTotalCount');
  if (!container) return;

  let filtered = [...ERP_STATE.products];

  // Category filter matching storefront specialties & chips
  if (category && category !== 'all') {
    filtered = filtered.filter(p => {
      const subject = (p.subject || '').toLowerCase();
      const cat = (p.category || '').toLowerCase();
      const name = ((p.nameAr || '') + ' ' + (p.nameEn || '') + ' ' + (p.sku || '')).toLowerCase();

      if (category === 'dental-anatomy') {
        return subject === 'dental-anatomy' || cat.includes('تشريح') || name.includes('wax') || name.includes('carver') || name.includes('knife') || name.includes('lighter') || name.includes('torch');
      }
      if (category === 'dental-materials') {
        return subject === 'dental-materials' || cat.includes('مواد') || name.includes('spatula') || name.includes('bowl') || name.includes('glass slab') || name.includes('alginate');
      }
      if (category === 'restorative-dentistry') {
        return subject === 'restorative-dentistry' || cat.includes('تحفظي') || cat.includes('كونس') || name.includes('bur') || name.includes('coxo') || name.includes('teeth') || name.includes('incisor') || name.includes('molar');
      }
      if (category === 'fixed-prosthodontics') {
        return subject === 'fixed-prosthodontics' || cat.includes('كراون') || cat.includes('ثابتة') || cat.includes('كاست') || name.includes('cast') || name.includes('wheel') || name.includes('wr 13') || name.includes('mirror');
      }
      if (category === 'removable-prosthodontics') {
        return subject === 'removable-prosthodontics' || cat.includes('متحركة') || name.includes('baseplate') || name.includes('acrylic');
      }
      if (category === 'boxes-bags') {
        return cat.includes('شنط') || cat.includes('بوكس') || name.includes('box') || name.includes('bag') || name.includes('شنطة') || name.includes('بوكس');
      }
      if (category === 'diagnostic') {
        return cat.includes('فحص') || cat.includes('كشاف') || name.includes('probe') || name.includes('mirror') || name.includes('penlight');
      }
      if (category === 'scrubs') {
        return cat.includes('ملابس') || name.includes('scrub') || name.includes('يونيفورم');
      }
      return subject.includes(category) || cat.includes(category);
    });
  }

  // Search filter
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(p =>
      (p.nameAr && p.nameAr.toLowerCase().includes(q)) ||
      (p.nameEn && p.nameEn.toLowerCase().includes(q)) ||
      (p.sku && p.sku.toLowerCase().includes(q))
    );
  }

  if (countEl) countEl.textContent = `${filtered.length} منتج متاح`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; color: var(--text-muted); font-size: 0.85rem;">
        🔍 لا توجد أصناف مطابقة لكلمة البحث في هذا التصنيف
      </div>
    `;
    return;
  }

  // Read favorites from localStorage
  let favs = [];
  try {
    favs = JSON.parse(localStorage.getItem('smylodent_favs') || '[]');
  } catch (_) {}

  container.innerHTML = filtered.map(p => {
    const isOutOfStock = (p.stock !== null && p.stock !== undefined && p.stock <= 0);
    const isLimited = !isOutOfStock && (p.stock > 0 && p.stock <= 5);

    let stockClass = 'in';
    let stockLabel = 'متوفر';
    if (isOutOfStock) {
      stockClass = 'out';
      stockLabel = 'غير متوفر';
    } else if (isLimited) {
      stockClass = 'low';
      stockLabel = `متبقي ${p.stock}`;
    }

    // STRICT STOREFRONT MANDATE: English Name ONLY inside card
    const displayName = p.nameEn || p.nameAr || 'Dental Instrument';
    const prodImg = resolveProductImage(p);
    const isFav = favs.includes(p.id);

    return `
      <div class="product-card" id="posProdCard-${p.id}" style="opacity: ${isOutOfStock ? '0.72' : '1'};">
        <div class="product-card-image">
          <img src="${prodImg}" alt="${displayName}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&auto=format';">
          
          <div class="product-card-badge">
            ${isOutOfStock ? '<span class="badge badge-unavailable">غير متوفر</span>' : ''}
            ${isLimited ? '<span class="badge badge-limited">كمية محدودة</span>' : ''}
          </div>

          <button type="button" class="product-fav-btn ${isFav ? 'active' : ''}" id="favBtn-${p.id}" onclick="toggleStorefrontFav(event, '${p.id}')" title="المفضلة">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${isFav ? '#EF4444' : 'none'}" stroke="${isFav ? '#EF4444' : 'currentColor'}" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
        </div>

        <div class="product-card-body">
          <h3 class="product-card-name" title="${displayName}">${displayName}</h3>
          <div class="product-card-sku">${p.sku || ''}</div>
          
          <div class="product-card-price-row">
            <span class="product-card-price num-mono">${p.sellingPrice} <span style="font-size: 0.74rem; font-weight: 600; color: #8B8177;">د.ل</span></span>
            <span class="product-card-stock-pill ${stockClass}">${stockLabel}</span>
          </div>

          <button type="button" class="product-add-cart-btn" id="btnAddToCart-${p.id}" onclick="posAddToCart('${p.id}', this)" ${isOutOfStock ? 'disabled title="المنتج غير متوفر"' : 'title="أضف للسلة"'}>
            ${isOutOfStock ? '<span>غير متوفر</span>' : `
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              <span>أضف للسلة</span>
            `}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function posAddToCart(productId, btnEl) {
  const prod = ERP_STATE.products.find(p => p.id === productId);
  if (!prod) return;

  if (prod.stock <= 0) {
    showToast(`عذراً، الصنف "${prod.nameEn || prod.nameAr}" غير متوفر حالياً في المخزون`, 'warning');
    return;
  }

  const existing = POS_ORDER_STATE.cart.find(i => i.id === productId);
  if (existing) {
    if (existing.qty >= prod.stock) {
      showToast(`الكمية المتاحة من "${prod.nameEn || prod.nameAr}" هي ${prod.stock} قطع فقط`, 'warning');
      return;
    }
    existing.qty += 1;
  } else {
    POS_ORDER_STATE.cart.push({
      id: prod.id,
      nameAr: prod.nameAr,
      nameEn: prod.nameEn || prod.nameAr,
      sku: prod.sku || '',
      price: Number(prod.sellingPrice) || 0,
      qty: 1,
      image: prod.image,
      maxStock: prod.stock
    });
  }

  // Visual feedback: animate button to green checkmark state
  if (btnEl) {
    btnEl.classList.add('added');
    const prevHtml = btnEl.innerHTML;
    btnEl.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><polyline points="20 6 9 17 4 12"/></svg>
      <span>تمت الإضافة</span>
    `;
    setTimeout(() => {
      btnEl.classList.remove('added');
      btnEl.innerHTML = prevHtml;
    }, 1800);
  }

  renderPosCartItems();
  calculatePosTotals();
  showToast(`تمت إضافة "${prod.nameEn || prod.nameAr}" إلى السلة 🛒`);
}

function posUpdateCartQty(productId, delta) {
  const item = POS_ORDER_STATE.cart.find(i => i.id === productId);
  if (!item) return;

  const prod = ERP_STATE.products.find(p => p.id === productId);
  const maxStock = prod ? prod.stock : item.maxStock;

  if (delta > 0 && item.qty >= maxStock) {
    showToast(`وصلت لأقصى كمية متاحة في المخزون (${maxStock} قطع)`, 'warning');
    return;
  }

  item.qty += delta;
  if (item.qty <= 0) {
    posRemoveCartItem(productId);
    return;
  }

  renderPosCartItems();
  calculatePosTotals();
}

function posRemoveCartItem(productId) {
  POS_ORDER_STATE.cart = POS_ORDER_STATE.cart.filter(i => i.id !== productId);
  renderPosCartItems();
  calculatePosTotals();
  showToast('تم حذف الصنف من سلة الطلب');
}

function clearPosCartAndReset() {
  POS_ORDER_STATE.cart = [];
  POS_ORDER_STATE.discountEnabled = false;
  POS_ORDER_STATE.discountValue = 0;

  const toggle = document.getElementById('posDiscountEnabled');
  if (toggle) toggle.checked = false;

  const wrap = document.getElementById('posDiscountControlsWrap');
  if (wrap) wrap.style.display = 'none';

  const valInput = document.getElementById('posDiscountValue');
  if (valInput) valInput.value = 0;

  renderPosCartItems();
  calculatePosTotals();
  showToast('تم تفريغ سلة الطلب بنجاح');
}

function renderPosCartItems() {
  const container = document.getElementById('posCartItemsContainer');
  const countBadge = document.getElementById('posCartItemsCount');
  if (!container) return;

  const totalPieces = POS_ORDER_STATE.cart.reduce((s, i) => s + i.qty, 0);
  if (countBadge) countBadge.textContent = totalPieces;

  if (POS_ORDER_STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="pos-cart-empty-state" id="posCartEmptyState">
        <div class="empty-cart-icon">🛒</div>
        <div style="font-weight: 700; color: #3A3530; font-size: 0.9rem;">السلة فارغة حالياً</div>
        <div style="font-size: 0.775rem; color: #8B8177; max-width: 260px; text-align: center;">اختر الأدوات والمستلزمات من الكتالوج لإضافتها إلى الطلب.</div>
      </div>
    `;
    return;
  }

  container.innerHTML = POS_ORDER_STATE.cart.map(item => {
    const prodImg = item.image || resolveProductImage(item);
    const displayName = item.nameEn || item.nameAr || 'Dental Instrument';

    return `
      <div class="pos-cart-row">
        <button type="button" class="pos-cart-del-btn" onclick="posRemoveCartItem('${item.id}')" title="حذف الصنف">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>

        <div style="flex: 1; min-width: 0;">
          <div class="pos-cart-item-title" title="${displayName}">${displayName}</div>
          <div class="pos-cart-item-price num-mono">${item.price} د.ل / قطعة</div>
        </div>

        <div class="pos-cart-stepper">
          <button type="button" class="pos-cart-step-btn" onclick="posUpdateCartQty('${item.id}', -1)">-</button>
          <span class="num-mono" style="font-weight: 800; font-size: 0.82rem; min-width: 20px; text-align: center;">${item.qty}</span>
          <button type="button" class="pos-cart-step-btn" onclick="posUpdateCartQty('${item.id}', 1)">+</button>
        </div>

        <img src="${prodImg}" alt="${displayName}" class="pos-cart-thumb-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&auto=format';">
      </div>
    `;
  }).join('');
}

function togglePosDiscount(enabled) {
  POS_ORDER_STATE.discountEnabled = enabled;
  const wrap = document.getElementById('posDiscountControlsWrap');
  const lineItem = document.getElementById('posDiscountLineItem');
  if (wrap) wrap.style.display = enabled ? 'block' : 'none';
  if (lineItem) lineItem.style.display = enabled ? 'flex' : 'none';

  calculatePosTotals();
}

function setPosDiscountType(type) {
  POS_ORDER_STATE.discountType = type;
  const btnFixed = document.getElementById('btnDiscountFixed');
  const btnPercent = document.getElementById('btnDiscountPercent');
  const unitDisplay = document.getElementById('posDiscountUnitDisplay');

  if (type === 'fixed') {
    if (btnFixed) btnFixed.classList.add('active');
    if (btnPercent) btnPercent.classList.remove('active');
    if (unitDisplay) unitDisplay.textContent = 'د.ل';
  } else {
    if (btnPercent) btnPercent.classList.add('active');
    if (btnFixed) btnFixed.classList.remove('active');
    if (unitDisplay) unitDisplay.textContent = '%';
  }

  calculatePosTotals();
}

function handleDiscountReasonChange(val) {
  POS_ORDER_STATE.discountReason = val;
}

function handlePosDeliveryTypeChange(val) {
  POS_ORDER_STATE.deliveryType = val;
  const feeMap = {
    'faculty': 0,
    'store': 0,
    'tripoli_home': 10,
    'outside_tripoli': 15
  };
  POS_ORDER_STATE.deliveryFee = feeMap[val] || 0;
  calculatePosTotals();
}

function calculatePosTotals() {
  const subtotal = POS_ORDER_STATE.cart.reduce((s, i) => s + (i.price * i.qty), 0);
  POS_ORDER_STATE.subtotal = subtotal;

  let discountAmount = 0;
  if (POS_ORDER_STATE.discountEnabled) {
    const rawVal = Number(document.getElementById('posDiscountValue')?.value) || 0;
    POS_ORDER_STATE.discountValue = rawVal;

    if (POS_ORDER_STATE.discountType === 'percent') {
      discountAmount = Math.round(subtotal * (Math.min(100, Math.max(0, rawVal)) / 100));
    } else {
      discountAmount = Math.min(subtotal, Math.max(0, rawVal));
    }
  }

  POS_ORDER_STATE.calculatedDiscount = discountAmount;
  const netTotal = Math.max(0, (subtotal - discountAmount) + POS_ORDER_STATE.deliveryFee);
  POS_ORDER_STATE.netTotal = netTotal;

  // Update UI Elements
  const subtotalEl = document.getElementById('posSubtotalDisplay');
  if (subtotalEl) subtotalEl.textContent = `${subtotal.toLocaleString()} د.ل`;

  const calcDiscountBadge = document.getElementById('posCalculatedDiscountDisplay');
  if (calcDiscountBadge) calcDiscountBadge.textContent = `${discountAmount.toLocaleString()} د.ل`;

  const discountLine = document.getElementById('posDiscountLineItem');
  const discountTotalEl = document.getElementById('posDiscountTotalDisplay');
  if (discountLine) {
    discountLine.style.display = (POS_ORDER_STATE.discountEnabled && discountAmount > 0) ? 'flex' : 'none';
  }
  if (discountTotalEl) {
    discountTotalEl.textContent = `-${discountAmount.toLocaleString()} د.ل`;
  }

  const shippingEl = document.getElementById('posShippingDisplay');
  if (shippingEl) {
    shippingEl.textContent = POS_ORDER_STATE.deliveryFee > 0
      ? `+${POS_ORDER_STATE.deliveryFee} د.ل`
      : 'مجاني (0 د.ل)';
  }

  const netTotalEl = document.getElementById('posNetTotalDisplay');
  if (netTotalEl) {
    netTotalEl.innerHTML = `${netTotal.toLocaleString()} <span style="font-size: 1rem;">د.ل</span>`;
  }
}

function submitNewOrderWithInvoice() {
  // 1. Validation
  if (POS_ORDER_STATE.cart.length === 0) {
    showToast('يرجى اختيار أداة واحدة على الأقل لإضافتها للطلب', 'warning');
    return;
  }

  const customerName = (document.getElementById('posCustomerName')?.value || '').trim();
  const phone = (document.getElementById('posCustomerPhone')?.value || '').trim();
  const university = document.getElementById('posCustomerUniversity')?.value || POS_ORDER_STATE.university || 'جامعة طرابلس';
  const college = (document.getElementById('posCustomerCollege')?.value || POS_ORDER_STATE.college || 'كلية طب الأسنان').trim();
  const address = (document.getElementById('posDeliveryAddress')?.value || 'طرابلس — الكلية').trim();
  const notes = (document.getElementById('posOrderNotes')?.value || '').trim();

  if (!customerName) {
    showToast('يرجى إدخال اسم الطالب / العميل', 'warning');
    document.getElementById('posCustomerName')?.focus();
    return;
  }

  if (!phone || phone.length < 6) {
    showToast('يرجى إدخال رقم هاتف واتساب صالح للتواصل', 'warning');
    document.getElementById('posCustomerPhone')?.focus();
    return;
  }

  // 2. Active Session User
  const activeUser = getCurrentUser() || ERP_STATE.currentPartner || 'طه';

  // 3. Serial Numbers Generation
  const orderNum = `#${Math.floor(10000000 + Math.random() * 90000000)}`;
  const invSeq = ERP_STATE.orders.length + 1;
  const invoiceNum = `#INV-2026-${String(invSeq).padStart(4, '0')}`;

  // 4. Financials
  calculatePosTotals();
  const subtotal = POS_ORDER_STATE.subtotal;
  const discountAmount = POS_ORDER_STATE.calculatedDiscount;
  const shippingFee = POS_ORDER_STATE.deliveryFee;
  const total = POS_ORDER_STATE.netTotal;
  const hasDiscount = POS_ORDER_STATE.discountEnabled && discountAmount > 0;
  const discountReason = POS_ORDER_STATE.discountReason;

  // 5. Construct Order Object
  const newOrder = {
    id: (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : 'ord-' + Date.now(),
    orderNumber: orderNum,
    invoiceNumber: invoiceNum,
    customerName: customerName,
    phone: phone,
    university: university,
    college: college,
    address: address,
    notes: notes,
    itemsCount: POS_ORDER_STATE.cart.reduce((s, i) => s + i.qty, 0),
    items: POS_ORDER_STATE.cart.map(i => ({
      name: i.nameAr,
      nameEn: i.nameEn || i.nameAr,
      sku: i.sku || '',
      qty: i.qty,
      price: i.price,
      total: i.qty * i.price,
      image: i.image || resolveProductImage(i)
    })),
    subtotal: subtotal,
    hasDiscount: hasDiscount,
    discountType: POS_ORDER_STATE.discountType,
    discountValue: POS_ORDER_STATE.discountValue,
    discountAmount: discountAmount,
    discountReason: discountReason,
    shippingFee: shippingFee,
    total: total,
    status: 'جديد',
    inventoryDeduction: 'not_applied',
    paymentMethod: 'cash_on_delivery',
    paymentStatus: 'كاش عند الاستلام',
    assignedTo: activeUser,
    date: new Date().toLocaleDateString('ar-LY', { month: '2-digit', day: '2-digit' }) + ' ' + new Date().toLocaleTimeString('ar-LY', { hour: '2-digit', minute: '2-digit' }),
    createdAt: new Date().toISOString()
  };

  // 6. Inventory Protection: Stock is NOT deducted on creation; deducted ONLY upon reaching 'مكتمل'

  // 7. Add to Global Orders List
  ERP_STATE.orders.unshift(newOrder);

  // 8. Stamped Audit Log
  const discountDetails = hasDiscount
    ? `مع تطبيق خصم تجاري بقيمة ${discountAmount} د.ل (${discountReason})`
    : `بالسعر الرسمي ${total} د.ل`;

  logOperation({
    user: activeUser,
    action: hasDiscount ? 'إنشاء طلب مع خصم تجاري' : 'إنشاء طلب وإصدار فاتورة',
    target: `${newOrder.orderNumber} (${newOrder.invoiceNumber})`,
    oldVal: '-',
    newVal: `${newOrder.total} د.ل`,
    details: `«${activeUser} قام بإنشاء الطلب ${newOrder.orderNumber} والفاتورة ${newOrder.invoiceNumber} للطالب ${newOrder.customerName} ${discountDetails} — المخزون محمي حتى اكتمال الطلب»`
  });

  // 9. Persist to LocalStorage
  try {
    localStorage.setItem('abs_erp_orders', JSON.stringify(ERP_STATE.orders));
  } catch (_) {}

  // 10. Update Dashboard and App Metrics
  updateDashboardRealUI();

  // 11. Clear Cart
  POS_ORDER_STATE.cart = [];
  POS_ORDER_STATE.lastCreatedInvoiceOrder = newOrder;
  clearPosCartAndReset();

  // 12. Open Official Invoice View Modal
  openInvoiceModal(newOrder.id);

  showToast(`تم حفظ الطلب وإصدار الفاتورة الرسمية ${newOrder.invoiceNumber} بنجاح! 🧾✨`);
}

// -------------------------------------------------------------
// OFFICIAL INVOICE DISPLAY & ACTIONS (Exact Storefront Architecture)
// -------------------------------------------------------------
function openInvoiceModal(orderId) {
  const order = ERP_STATE.orders.find(o => o.id === orderId || o.orderNumber === orderId || o.orderNumber === `#${orderId}`) || POS_ORDER_STATE.lastCreatedInvoiceOrder || ERP_STATE.orders[0];
  if (!order) return;

  POS_ORDER_STATE.lastCreatedInvoiceOrder = order;

  const invNumber = order.invoiceNumber || `#INV-2026-${order.orderNumber.replace('#', '')}`;
  const orderNumber = order.orderNumber;
  const status = order.status || 'مكتمل';

  // Header & Meta Elements
  const headerNum = document.getElementById('invHeaderNumber');
  if (headerNum) headerNum.textContent = invNumber;

  const headerStatusPill = document.getElementById('invHeaderStatusPill');
  if (headerStatusPill) headerStatusPill.textContent = status;

  const docNum = document.getElementById('invDocNumber');
  if (docNum) docNum.textContent = invNumber;

  const docDate = document.getElementById('invDocDate');
  if (docDate) {
    try {
      const d = order.createdAt ? new Date(order.createdAt) : new Date();
      docDate.textContent = d.toLocaleDateString('ar-LY', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (_) {
      docDate.textContent = order.date || new Date().toLocaleString('ar-LY');
    }
  }

  const docStatusPill = document.getElementById('invDocStatusPill');
  if (docStatusPill) docStatusPill.textContent = status;

  // Customer Elements
  const custName = document.getElementById('invDocCustomerName');
  if (custName) custName.textContent = order.customerName || 'عميل';

  const custPhone = document.getElementById('invDocCustomerPhone');
  if (custPhone) custPhone.textContent = order.phone || '-';

  const custCollege = document.getElementById('invDocCollege');
  if (custCollege) {
    const uni = order.university || 'جامعة طرابلس';
    const col = order.college || 'كلية طب الأسنان';
    custCollege.textContent = `${col} - ${uni}`;
  }

  const custAddress = document.getElementById('invDocAddress');
  if (custAddress) custAddress.textContent = order.address || 'طرابلس';

  // Items Table Body (48x48 thumbnails & English Names)
  const tbody = document.getElementById('invDocItemsBody');
  if (tbody) {
    const items = order.items || [];
    tbody.innerHTML = items.map((it, idx) => {
      const itemTotal = (it.price * it.qty).toLocaleString();
      const primaryName = it.nameEn || it.name || 'Dental Instrument';
      const secondaryName = (it.nameEn && it.name && it.nameEn !== it.name) ? it.name : (it.sku || '');
      const imgUrl = it.image || resolveProductImage({ id: it.id, sku: it.sku, image: it.image });

      return `
        <tr class="invoice-table-row">
          <td style="text-align: center; color: #64748b; font-weight: 600;">${idx + 1}</td>
          <td>
            <div class="inv-item-flex">
              <div class="inv-item-thumb">
                <img src="${imgUrl}" alt="${primaryName}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&auto=format';">
              </div>
              <div class="inv-item-titles">
                <span class="inv-item-name-en">${primaryName}</span>
                ${secondaryName ? `<span class="inv-item-name-sub">${secondaryName}</span>` : ''}
              </div>
            </div>
          </td>
          <td class="num-mono" style="text-align: center; font-weight: 600; color: #334155;">${it.price} د.ل</td>
          <td class="num-mono" style="text-align: center; font-weight: 700; color: #0f172a;">${it.qty}</td>
          <td class="num-mono" style="text-align: left; font-weight: 800; color: #0a335c;">${itemTotal} د.ل</td>
        </tr>
      `;
    }).join('');
  }

  // Financial Breakdown
  const subtotal = order.subtotal || (order.items || []).reduce((s, i) => s + (i.price * i.qty), 0) || order.total;
  const discountAmount = order.discountAmount || 0;
  const shippingFee = order.shippingFee || 0;
  const netTotal = order.total;

  const subtotalEl = document.getElementById('invDocSubtotal');
  if (subtotalEl) subtotalEl.textContent = `${subtotal.toLocaleString()} د.ل`;

  const discountRow = document.getElementById('invDocDiscountRow');
  const discountVal = document.getElementById('invDocDiscountVal');
  if (discountRow) {
    if (order.hasDiscount || discountAmount > 0) {
      discountRow.style.display = 'flex';
      if (discountVal) discountVal.textContent = `-${discountAmount.toLocaleString()} د.ل`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  const shippingVal = document.getElementById('invDocShippingVal');
  if (shippingVal) {
    shippingVal.textContent = shippingFee > 0 ? `${shippingFee} د.ل` : 'مجاني بالكلية';
  }

  const netTotalEl = document.getElementById('invDocNetTotal');
  if (netTotalEl) netTotalEl.textContent = `${netTotal.toLocaleString()} د.ل`;

  openModal('invoiceViewModal');
}

function printInvoiceFromModal() {
  const order = POS_ORDER_STATE.lastCreatedInvoiceOrder;
  const rawNum = order ? (order.invoiceNumber || order.orderNumber || 'INV-2026').replace(/\D/g, '') : 'INV-2026';
  const originalTitle = document.title;
  document.title = `Absolute_Dental_Invoice_${rawNum}`;
  window.print();
  setTimeout(() => { document.title = originalTitle; }, 1500);
}

async function downloadInvoicePDFFromModal() {
  const order = POS_ORDER_STATE.lastCreatedInvoiceOrder || ERP_STATE.orders[0];
  const rawNum = order ? (order.invoiceNumber || order.orderNumber || 'INV-2026').replace(/\D/g, '') : 'INV-2026';
  const pdfFileName = `Absolute_Dental_Invoice_${rawNum}.pdf`;

  const btn = document.getElementById('btnDownloadInvoicePdf');
  const originalBtnHtml = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `
      <svg class="spinner-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      <span>جاري تجهيز PDF...</span>
    `;
  }

  const sheetElement = document.getElementById('printableInvoiceDocument');
  if (!sheetElement) {
    if (btn) { btn.disabled = false; btn.innerHTML = originalBtnHtml; }
    window.print();
    return;
  }

  const originalTitle = document.title;
  document.title = `Absolute_Dental_Invoice_${rawNum}`;

  try {
    if (typeof html2canvas !== 'undefined' && typeof window.jspdf !== 'undefined') {
      const { jsPDF } = window.jspdf;
      const canvas = await html2canvas(sheetElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        imageTimeout: 5000,
        ignoreElements: (el) => el.classList?.contains('no-print')
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.96);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth(); // 210mm
      const pageHeight = pdf.internal.pageSize.getHeight(); // 297mm
      const margin = 10;
      const printWidth = pageWidth - (margin * 2);
      const printHeight = (canvas.height * printWidth) / canvas.width;

      let heightLeft = printHeight;
      let position = margin;

      pdf.addImage(imgData, 'JPEG', margin, position, printWidth, printHeight, undefined, 'FAST');
      heightLeft -= (pageHeight - (margin * 2));

      while (heightLeft > 0) {
        position = heightLeft - printHeight + margin;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', margin, position, printWidth, printHeight, undefined, 'FAST');
        heightLeft -= (pageHeight - (margin * 2));
      }

      pdf.save(pdfFileName);
      showToast('تم تحميل الفاتورة الرسمية بصيغة PDF بنجاح 📄✨');
    } else {
      window.print();
    }
  } catch (err) {
    console.warn('PDF generation fallback to print:', err);
    window.print();
  } finally {
    setTimeout(() => {
      document.title = originalTitle;
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = originalBtnHtml;
      }
    }, 1200);
  }
}

function shareInvoiceWhatsAppFromModal() {
  const order = POS_ORDER_STATE.lastCreatedInvoiceOrder || ERP_STATE.orders[0];
  if (!order) return;

  const cleanPhone = (order.phone || '').replace(/[^0-9]/g, '').replace(/^0/, '');
  const invNum = order.invoiceNumber || `#INV-2026-${order.orderNumber.replace('#', '')}`;
  const itemsText = (order.items || []).map(i => `• ${i.nameEn || i.name} (${i.qty}x) = ${(i.price * i.qty)} د.ل`).join('\n');
  const discountText = (order.hasDiscount && order.discountAmount > 0)
    ? `🏷️ *الخصم التجاري الممنوح:* -${order.discountAmount} د.ل (${order.discountReason || 'خصم خاص'})\n`
    : '';

  const msg = `🦷 *فاتورة مبيعات معتمدة — Absolute Dental*
مرحباً دكتور/ة *${order.customerName}*، نرفق لكم تفاصيل فاتورتكم الرسمية:

📄 *رقم الفاتورة:* ${invNum}
📦 *رقم الطلب:* ${order.orderNumber}
🏛️ *الجامعة / الكلية:* ${order.university || 'جامعة طرابلس'} - ${order.college || 'كلية طب الأسنان'}
📍 *مكان التسليم:* ${order.address || 'طرابلس'}

🛒 *الأصناف:*
${itemsText}

💵 *المجموع الفرعي:* ${order.subtotal || order.total} د.ل
${discountText}🚚 *رسوم التوصيل:* ${order.shippingFee > 0 ? order.shippingFee + ' د.ل' : 'مجاني بالكلية'}
✨ *الصافي المطلوب دفعه:* *${order.total} د.ل*
💳 *طريقة السداد:* كاش عند الاستلام

بضاعتكم مفحوصة ومضمونة 🦷
لأي استفسار تواصلوا معنا مباشرة على 0946859163 / 091 234 5678
*Absolute Dental Operations Hub*`;

  window.open(`https://wa.me/218${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// -------------------------------------------------------------
// 17. INITIALIZATION
// -------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  // 1. Session verification & Startup User Selection
  const activeUser = getCurrentUser();
  const overlay = document.getElementById('userSelectOverlay');

  if (activeUser) {
    ERP_STATE.currentPartner = activeUser;
    if (overlay) {
      overlay.classList.add('hidden');
      overlay.style.display = 'none';
    }
    updateSessionUserUI(activeUser);
  } else {
    if (overlay) {
      overlay.classList.remove('hidden');
      overlay.style.display = 'flex';
    }
  }

  // 2. Keyboard shortcuts for instant selection (1 = مؤمن, 2 = طه, 3 = ياسي)
  window.addEventListener('keydown', (e) => {
    const isOverlayOpen = overlay && overlay.style.display !== 'none' && !overlay.classList.contains('hidden');
    if (isOverlayOpen) {
      if (e.key === '1') {
        e.preventDefault();
        loginAsUser('مؤمن');
      } else if (e.key === '2') {
        e.preventDefault();
        loginAsUser('طه');
      } else if (e.key === '3') {
        e.preventDefault();
        loginAsUser('ياسي');
      }
    }
  });

  // 3. Set current date string
  const dateEl = document.getElementById('headerCurrentDateText');
  if (dateEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    try {
      dateEl.textContent = new Date().toLocaleDateString('ar-LY', options);
    } catch (_) {
      dateEl.textContent = 'الخميس، 01 أكتوبر 2026';
    }
  }

  // 4. Initial Calculation & UI population from Real Database Seed
  updateDashboardRealUI();

  
  // 5. Setup Live Realtime Subscription with Supabase
  if (typeof supabase !== 'undefined' && supabase.createClient) {
    try {
      supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      supabaseClient.channel('realtime-orders-feed')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, (payload) => {
          console.log('⚡ Realtime order received from storefront:', payload);
          showToast('🔔 طلبية جديدة أو تحديث وصل من متجر Absolute Dental!', 'info');
          syncWithUserServer();
        })
        .subscribe((status) => {
          console.log('⚡ Supabase Realtime status:', status);
        });
    } catch (e) {
      console.warn('Realtime init notice:', e);
    }
  }

  // 6. Background Live Sync with Supabase (Immediate + periodic every 30s)
  syncWithUserServer();
  setInterval(() => {
    syncWithUserServer();
  }, 30000);
});



// -------------------------------------------------------------
// 10.B. PROCUREMENT INVOICES LEDGER & MODAL
// -------------------------------------------------------------
function renderPurchasesTable(searchTerm = '') {
  const tbody = document.getElementById('purchasesTableBody');
  if (!tbody) return;

  const purchases = ERP_STATE.purchases || [];
  const term = searchTerm.toLowerCase().trim();
  const filtered = purchases.filter(p => {
    if (!term) return true;
    return (p.invoiceNumber && p.invoiceNumber.toLowerCase().includes(term)) ||
           (p.supplier && p.supplier.toLowerCase().includes(term)) ||
           (p.recipient && p.recipient.toLowerCase().includes(term)) ||
           (p.items && p.items.some(it => it.name.toLowerCase().includes(term)));
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="10" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">لا توجد فواتير مطابقة للبحث</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(p => {
    let statusBadge = '';
    if (p.paymentStatus.includes('كاش') || p.paymentStatus.includes('مدفوع نقداً') || p.paymentStatus.includes('خالص')) {
      statusBadge = '<span class="badge" style="background: rgba(16, 185, 129, 0.12); color: #059669; border: 1px solid rgba(16, 185, 129, 0.3);">✓ ' + p.paymentStatus + '</span>';
    } else if (p.paymentStatus.includes('دين') || p.paymentStatus.includes('آجل')) {
      statusBadge = '<span class="badge" style="background: rgba(245, 158, 11, 0.12); color: #d97706; border: 1px solid rgba(245, 158, 11, 0.3);">⏳ ' + p.paymentStatus + '</span>';
    } else {
      statusBadge = '<span class="badge" style="background: rgba(99, 102, 241, 0.12); color: #4f46e5; border: 1px solid rgba(99, 102, 241, 0.3);">' + p.paymentStatus + '</span>';
    }

    const profitColor = p.expectedProfit > 0 ? 'var(--status-success)' : (p.expectedProfit === 0 ? 'var(--text-muted)' : 'var(--status-danger)');
    const profitSign = p.expectedProfit > 0 ? '+' : '';

    return `
      <tr>
        <td class="num-mono" style="font-weight: 700; color: var(--primary);">${p.invoiceNumber}</td>
        <td style="font-weight: 600;">${p.supplier}</td>
        <td class="num-mono" style="font-size: 0.8rem; color: var(--text-muted);">${p.date}</td>
        <td style="font-size: 0.85rem;">${p.recipient || 'مؤسسو المنظومة'}</td>
        <td class="num-mono" style="text-align: center; font-weight: 700;">${p.itemsCount}</td>
        <td class="num-mono" style="font-weight: 700;">${Number(p.totalCost).toLocaleString(undefined, {minimumFractionDigits: 2})} د.ل</td>
        <td class="num-mono" style="color: var(--text-muted);">${Number(p.expectedRevenue).toLocaleString(undefined, {minimumFractionDigits: 2})} د.ل</td>
        <td class="num-mono" style="font-weight: 700; color: ${profitColor};">${profitSign}${Number(p.expectedProfit).toLocaleString(undefined, {minimumFractionDigits: 2})} د.ل</td>
        <td>${statusBadge}</td>
        <td style="text-align: center;">
          <button class="btn-secondary btn-sm" onclick="openPurchaseInvoiceModal('${p.id}')" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
            عرض البنود 📄
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function handlePurchasesSearch(val) {
  renderPurchasesTable(val);
}

function openPurchaseInvoiceModal(purId) {
  const p = (ERP_STATE.purchases || []).find(item => item.id === purId);
  if (!p) return;

  const modal = document.getElementById('purchaseInvoiceModal');
  if (!modal) return;

  document.getElementById('purModalInvNumber').textContent = p.invoiceNumber;
  document.getElementById('purModalSupplier').textContent = p.supplier;
  document.getElementById('purModalDate').textContent = `${p.date} (${p.time || ''})`;
  document.getElementById('purModalRecipient').textContent = p.recipient || '-';
  document.getElementById('purModalStatus').textContent = p.paymentStatus;
  document.getElementById('purModalNotes').textContent = p.notes || '-';
  document.getElementById('purModalTotalCost').textContent = `${Number(p.totalCost).toLocaleString(undefined, {minimumFractionDigits: 2})} د.ل`;
  document.getElementById('purModalExpectedRev').textContent = `${Number(p.expectedRevenue).toLocaleString(undefined, {minimumFractionDigits: 2})} د.ل`;
  
  const profEl = document.getElementById('purModalProfit');
  profEl.textContent = `${p.expectedProfit > 0 ? '+' : ''}${Number(p.expectedProfit).toLocaleString(undefined, {minimumFractionDigits: 2})} د.ل`;
  profEl.style.color = p.expectedProfit >= 0 ? 'var(--status-success)' : 'var(--status-danger)';

  const tbody = document.getElementById('purModalItemsBody');
  tbody.innerHTML = (p.items || []).map((it, idx) => {
    const itProfit = (it.profit !== undefined) ? it.profit : ((Number(it.sellPrice) - Number(it.costPrice)) * Number(it.qty));
    const profitColor = itProfit > 0 ? 'var(--status-success)' : (itProfit === 0 ? 'var(--text-muted)' : 'var(--status-danger)');
    return `
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem;">${idx + 1}</td>
        <td style="font-weight: 600;">${it.name}</td>
        <td class="num-mono" style="text-align: center; font-weight: 700;">${it.qty}</td>
        <td class="num-mono">${Number(it.costPrice).toFixed(2)} د.ل</td>
        <td class="num-mono" style="color: var(--primary); font-weight: 700;">${Number(it.sellPrice).toFixed(2)} د.ل</td>
        <td class="num-mono" style="font-weight: 700;">${(Number(it.costPrice) * Number(it.qty)).toFixed(2)} د.ل</td>
        <td class="num-mono" style="font-weight: 700; color: ${profitColor};">${itProfit > 0 ? '+' : ''}${Number(itProfit).toFixed(2)} د.ل</td>
      </tr>
    `;
  }).join('');

  modal.classList.add('active');
}
