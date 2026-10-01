-- ==============================================================================
-- ABSOLUTE DENTAL — ENTERPRISE ERP & OPERATIONS HUB SCHEMA MIGRATION
-- Project Backend: https://api.kurofangs.id.ly
-- Target: Standalone Management System for Taha, Moamen, Sasi, & 4th Partner
-- ==============================================================================

-- 1. PARTNERS & EQUITY GOVERNANCE TABLE
CREATE TABLE IF NOT EXISTS public.partners (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    name TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'شريك مؤسس',
    ownership_percentage NUMERIC(5,2) NOT NULL DEFAULT 33.33,
    capital_contribution NUMERIC(12,2) NOT NULL DEFAULT 20000.00,
    current_balance NUMERIC(12,2) NOT NULL DEFAULT 20000.00,
    phone TEXT,
    avatar TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed Initial Partners Data
INSERT INTO public.partners (name, full_name, role, ownership_percentage, capital_contribution, current_balance, phone, avatar)
VALUES
  ('طه', 'طه محمد', 'شريك مؤسس ومدير العمليات', 33.33, 20000.00, 23200.00, '0925813109', 'طه'),
  ('عبدالمؤمن', 'عبدالمؤمن البشير', 'شريك ومدير المشتريات والمخزون', 33.33, 20000.00, 25200.00, '0912345678', 'مؤمن'),
  ('ساسي', 'ساسي الهادي', 'شريك ومسؤول المالية والتوصيل', 33.33, 20000.00, 23700.00, '0949876543', 'ساسي'),
  ('الشريك الرابع', 'الشريك الإداري / المستثمر', 'شريك استثماري', 0.01, 10000.00, 11200.00, '0921112233', 'ش4')
ON CONFLICT (name) DO UPDATE SET
  full_name = EXCLUDED.full_name,
  role = EXCLUDED.role;

-- 2. PARTNER TRANSACTIONS (Capital additions, personal drawings, profit payouts)
CREATE TABLE IF NOT EXISTS public.partner_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partner_id UUID REFERENCES public.partners(id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('capital_add', 'drawing', 'profit_payout', 'expense_reimburse')),
    amount NUMERIC(12,2) NOT NULL,
    description TEXT NOT NULL,
    recorded_by TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. EXPENSES & OPERATING EXPENDITURES
CREATE TABLE IF NOT EXISTS public.expenses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    amount NUMERIC(10,2) NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('إعلانات', 'شحن', 'تغليف', 'تشغيل', 'كهرباء', 'استضافة', 'بنزين', 'رواتب', 'أخرى')),
    description TEXT NOT NULL,
    paid_by TEXT NOT NULL,
    payment_method TEXT DEFAULT 'كاش',
    receipt_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed Sample Operating Expenses
INSERT INTO public.expenses (amount, category, description, paid_by, payment_method)
VALUES
  (500.00, 'إعلانات', 'حملة فيسبوك وإنستغرام - بداية السيميستر', 'طه', 'كاش'),
  (1200.00, 'شحن', 'شحن جوي توريدات من المورد في إسطنبول', 'عبدالمؤمن', 'تحويل بنكي'),
  (300.00, 'تغليف', 'كراتين وأكياس فقاعية وستيكرات اللوجو', 'ساسي', 'كاش'),
  (250.00, 'تشغيل', 'صيانة مولد كهرباء ومستلزمات مكتب التجهيز', 'طه', 'كاش'),
  (100.00, 'استضافة', 'تجديد دومين وسيرفر السحاب', 'عبدالمؤمن', 'بطاقة فيزا'),
  (150.00, 'بنزين', 'بنزين وضيافة سيارة توصيل طلبيات الكلية', 'ساسي', 'كاش');

-- 4. IMMUTABLE AUDIT LOG TABLE
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_name TEXT NOT NULL,
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id TEXT,
    details TEXT NOT NULL,
    prev_value TEXT,
    new_value TEXT,
    ip_address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. KITS & BUNDLES COMPONENTS TABLE (Shared inventory deduction)
CREATE TABLE IF NOT EXISTS public.kit_components (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    bundle_product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    component_product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    quantity_required INT NOT NULL DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. ENSURE COST_PRICE & ASSIGNED_PARTNER EXIST IN EXISTING TABLES
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS cost_price NUMERIC(10,2) DEFAULT 0.00;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS min_stock_threshold INT DEFAULT 5;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS supplier_name TEXT DEFAULT NULL;

ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS assigned_partner TEXT DEFAULT 'طه';
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS courier_id TEXT DEFAULT NULL;
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS courier_status TEXT DEFAULT 'pending';

-- 7. ENABLE ROW-LEVEL PERMISSIONS (Full Access for Operational Admin)
ALTER TABLE public.partners DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.partner_transactions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.expenses DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.kit_components DISABLE ROW LEVEL SECURITY;

GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;

-- Output confirmation
SELECT 'ABSOLUTE DENTAL ERP SCHEMA APPLIED SUCCESSFULLY!' AS status;
