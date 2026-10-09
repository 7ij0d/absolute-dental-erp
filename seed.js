/* Absolute Dental Production Catalog & Historical Orders Archive */
if (typeof window !== 'undefined') {
  window.ERP_CUTOFF_DATE = '2026-10-07T01:55:00+02:00';
}
const INITIAL_PRODUCTS = [
  {
    "id": "99000000-0000-0000-0000-000000000001",
    "nameAr": "كمامات طبية جراحية MedProtect (أزرق وأسود)",
    "nameEn": "MedProtect Disposable Surgical Face Masks (Blue & Black)",
    "sku": "DEN-MASK-ALL",
    "category": "مستلزمات عامة ووقائية (جميع المواد)",
    "costPrice": 0.12,
    "sellingPrice": 0.50,
    "wholesalePrice": 0.12,
    "retailPrice": 0.50,
    "stock": 150,
    "minStock": 20,
    "supplier": "توريد معدات طب أسنان",
    "status": "متوفر",
    "image": "assets/mask-medprotect-blue.png",
    "subject": "all",
    "year": "all",
    "allSubjects": true,
    "variants": [
      {
        "key": "blue",
        "color": "Blue",
        "colorAr": "أزرق",
        "labelAr": "أزرق (Blue)",
        "labelEn": "Blue",
        "stock": 50,
        "costPrice": 0.12,
        "sellingPrice": 0.50,
        "image": "assets/mask-medprotect-blue.png"
      },
      {
        "key": "black",
        "color": "Black",
        "colorAr": "أسود",
        "labelAr": "أسود (Black)",
        "labelEn": "Black",
        "stock": 100,
        "costPrice": 0.13,
        "sellingPrice": 0.50,
        "image": "assets/mask-disposable-black.png"
      }
    ]
  },
  {
    "id": "33000000-0000-0000-0000-000000000102",
    "nameAr": "شفرات جراحية معقمة L+F Support (مقاس 22)",
    "nameEn": "L+F Support Surgical Blades (Size 22)",
    "sku": "DEN-BLADE-LF22",
    "category": "صناعة الأسنان الثابتة والمتحركة (سنة 3)",
    "costPrice": 0.20,
    "sellingPrice": 0.50,
    "wholesalePrice": 0.20,
    "retailPrice": 0.50,
    "stock": 300,
    "minStock": 20,
    "supplier": "توريد معدات طب أسنان",
    "status": "متوفر",
    "image": "assets/surgical-blades-lf-support.png",
    "subject": "removable-prosthodontics-2",
    "year": "year3"
  },
  {
    "id": "33000000-0000-0000-0000-000000000103",
    "nameAr": "مفرش عيادة أسنان طبي واقي وعازل - Cover Sheet (وردي وأزرق)",
    "nameEn": "Cover Sheet Disposable Waterproof Dental Bib (Pink & Blue)",
    "sku": "DEN-BIB-ALL",
    "category": "مستلزمات العيادة والمواد (سنة 3)",
    "costPrice": 0.11,
    "sellingPrice": 0.50,
    "wholesalePrice": 0.11,
    "retailPrice": 0.50,
    "stock": 500,
    "minStock": 30,
    "supplier": "توريد معدات طب أسنان",
    "status": "متوفر",
    "image": "assets/dental-bib-cover-sheet-pink.png",
    "subject": "year3-all",
    "year": "year3",
    "year3All": true,
    "variants": [
      {
        "key": "pink",
        "color": "Pink",
        "colorAr": "وردي",
        "labelAr": "وردي (Pink)",
        "labelEn": "Pink",
        "stock": 375,
        "costPrice": 0.11,
        "sellingPrice": 0.50,
        "image": "assets/dental-bib-cover-sheet-pink.png"
      },
      {
        "key": "blue",
        "color": "Blue",
        "colorAr": "أزرق",
        "labelAr": "أزرق (Blue)",
        "labelEn": "Blue",
        "stock": 125,
        "costPrice": 0.11,
        "sellingPrice": 0.50,
        "image": "assets/dental-bib-cover-sheet-blue.png"
      }
    ]
  },
  {
    "id": "33000000-0000-0000-0000-000000000105",
    "nameAr": "مادة طبعة الجينات زيرماك - Zhermack Alginate (50g)",
    "nameEn": "Zhermack Alginate | Impression Material (50g)",
    "sku": "DEN-ALG-ZHM50",
    "category": "صناعة الأسنان المتحركة (سنة 3)",
    "costPrice": 7.52,
    "sellingPrice": 10.00,
    "wholesalePrice": 7.52,
    "retailPrice": 10.00,
    "stock": 9,
    "minStock": 2,
    "supplier": "توريد معدات طب أسنان",
    "status": "متوفر",
    "image": "assets/zhermack-alginate-impression-material-50g.png",
    "subject": "removable-prosthodontics-2",
    "year": "year3"
  },
  {
    "id": "33000000-0000-0000-0000-000000000106",
    "nameAr": "مادة طبعة الجينات آي كيو - IQ Alginate (50g)",
    "nameEn": "IQ Alginate | Impression Material (50g)",
    "sku": "DEN-ALG-IQ50",
    "category": "صناعة الأسنان المتحركة (سنة 3)",
    "costPrice": 6.125,
    "sellingPrice": 7.00,
    "wholesalePrice": 6.125,
    "retailPrice": 7.00,
    "stock": 9,
    "minStock": 2,
    "supplier": "توريد معدات طب أسنان",
    "status": "متوفر",
    "image": "assets/iq-alginate-impression-material-50g.png",
    "subject": "removable-prosthodontics-2",
    "year": "year3"
  },
  {
    "id": "33000000-0000-0000-0000-000000000107",
    "nameAr": "مادة طبعة الجينات لاسكود آي كيو - Lascod iQ Alginate (450g)",
    "nameEn": "Lascod iQ Alginate | Impression Material (450g)",
    "sku": "DEN-ALG-LSC450",
    "category": "صناعة الأسنان الثابتة والمتحركة (سنة 3)",
    "costPrice": 45.00,
    "sellingPrice": 50.00,
    "wholesalePrice": 45.00,
    "retailPrice": 50.00,
    "stock": 1,
    "minStock": 1,
    "supplier": "توريد معدات طب أسنان",
    "status": "متوفر",
    "image": "assets/lascod-iq-alginate-impression-material-450g.png",
    "subject": "removable-prosthodontics-2",
    "year": "year3"
  },
  {
    "id": "33000000-0000-0000-0000-000000000108",
    "nameAr": "شاش طبي معقم لايف سبورت - Life Support Sterile Gauze Swab",
    "nameEn": "Life Support Sterile Gauze Swab (10cm x 10cm)",
    "sku": "DEN-GAUZE-LF10",
    "category": "طب أسنان الأطفال والوقائي (سنة 3)",
    "costPrice": 0.20,
    "sellingPrice": 0.50,
    "wholesalePrice": 0.20,
    "retailPrice": 0.50,
    "stock": 200,
    "minStock": 20,
    "supplier": "توريد معدات طب أسنان",
    "status": "متوفر",
    "image": "assets/life-support-sterile-gauze-swab.png",
    "subject": "preventive-dentistry",
    "year": "year3"
  },
  {
    "id": "33000000-0000-0000-0000-000000000109",
    "nameAr": "قفازات نايتريل طبية فاحصة OverseasGlove (غير معقمة)",
    "nameEn": "OverseasGlove Disposable Nitrile Gloves (Non-Sterile)",
    "sku": "DEN-GLV-OVG",
    "category": "مستلزمات عامة ووقائية (سنة 3 - جميع المواد)",
    "costPrice": 0.56,
    "sellingPrice": 1.00,
    "wholesalePrice": 0.56,
    "retailPrice": 1.00,
    "stock": 100,
    "minStock": 20,
    "supplier": "توريد معدات طب أسنان",
    "status": "متوفر",
    "image": "assets/overseasglove-nitrile-gloves-black-s.png",
    "subject": "year3-all",
    "year": "year3",
    "year3All": true,
    "variants": [
      {
        "key": "black-s",
        "color": "Black",
        "colorAr": "أسود",
        "size": "S",
        "sizeAr": "صغير (S)",
        "labelAr": "أسود - مقاس S",
        "labelEn": "Black - Size S",
        "stock": 50,
        "costPrice": 0.56,
        "sellingPrice": 1.00,
        "image": "assets/overseasglove-nitrile-gloves-black-s.png"
      },
      {
        "key": "blue-m",
        "color": "Blue",
        "colorAr": "أزرق",
        "size": "M",
        "sizeAr": "متوسط (M)",
        "labelAr": "أزرق - مقاس M",
        "labelEn": "Blue - Size M",
        "stock": 50,
        "costPrice": 0.56,
        "sellingPrice": 1.00,
        "image": "assets/overseasglove-nitrile-gloves-blue-m.png"
      }
    ]
  },
  {
    "id": "33000000-0000-0000-0000-000000000110",
    "nameAr": "رول شاش طبي قطني GM (وزن 500 جرام)",
    "nameEn": "GM Medical Gauze Roll (500g)",
    "sku": "DEN-GROLL-GM500",
    "category": "طب أسنان الأطفال والوقائي (سنة 3)",
    "costPrice": 22.00,
    "sellingPrice": 26.00,
    "wholesalePrice": 22.00,
    "retailPrice": 26.00,
    "stock": 2,
    "minStock": 1,
    "supplier": "توريد معدات طب أسنان",
    "status": "متوفر",
    "image": "assets/gauze-roll-500g.png",
    "subject": "preventive-dentistry",
    "year": "year3"
  },
  {
    "id": "33000000-0000-0000-0000-000000000111",
    "nameAr": "رول تغليف وعزل عيادي واقي (أزرق) - Dental Barrier Wrapping Roll",
    "nameEn": "Dental Barrier Film Wrapping Roll (Blue)",
    "sku": "DEN-WRAP-BLU",
    "category": "صناعة الأسنان المتحركة (سنة 3)",
    "costPrice": 23.00,
    "sellingPrice": 28.00,
    "wholesalePrice": 23.00,
    "retailPrice": 28.00,
    "stock": 5,
    "minStock": 1,
    "supplier": "توريد معدات طب أسنان",
    "status": "متوفر",
    "image": "assets/dental-barrier-wrapping-roll-blue.png",
    "subject": "removable-prosthodontics-2",
    "year": "year3"
  },
  {
    "id": "33000000-0000-0000-0000-000000000112",
    "nameAr": "حاجز مطاطي عيادي Rubber Dam 6×6 (موديلات وألوان متعددة)",
    "nameEn": "Dental Rubber Dam Sheets 6×6 (Multiple Models & Colors)",
    "sku": "DEN-RDAM-6X6",
    "category": "صناعة الأسنان الثابتة والمتحركة (سنة 3)",
    "costPrice": 2.285,
    "sellingPrice": 2.50,
    "wholesalePrice": 2.285,
    "retailPrice": 2.50,
    "stock": 71,
    "minStock": 10,
    "supplier": "توريد معدات طب أسنان",
    "status": "متوفر",
    "image": "assets/rubber-dam-heavy-blue.png",
    "subject": "fixed-prosthodontics-2",
    "year": "year3",
    "variants": [
      {
        "key": "heavy-blue",
        "model": "Heavy",
        "color": "Blue",
        "colorAr": "أزرق",
        "labelAr": "موديل هيفي - Heavy (أزرق)",
        "labelEn": "Heavy Model (Blue)",
        "stock": 35,
        "costPrice": 2.285,
        "sellingPrice": 2.50,
        "image": "assets/rubber-dam-heavy-blue.png"
      },
      {
        "key": "mid-green",
        "model": "Mid",
        "color": "Green",
        "colorAr": "أخضر",
        "labelAr": "موديل ميد - Mid (أخضر)",
        "labelEn": "Mid Model (Green)",
        "stock": 36,
        "costPrice": 2.285,
        "sellingPrice": 2.50,
        "image": "assets/rubber-dam-mid-green.png"
      }
    ]
  },
  {
    "id": "33000000-0000-0000-0000-000000000101",
    "nameAr": "قالب طبعة الأسنان (Dental impression tray) - أزرق",
    "nameEn": "Dental impression tray (Blue)",
    "sku": "DEN-TRAY-BLU",
    "category": "صناعة الأسنان الثابتة والمتحركة (سنة 3)",
    "costPrice": 1,
    "sellingPrice": 2,
    "wholesalePrice": 1,
    "retailPrice": 2,
    "stock": 48,
    "minStock": 5,
    "supplier": "توريد معدات طب أسنان",
    "status": "متوفر",
    "image": "assets/dental-impression-tray-blue.png",
    "subject": "fixed-prosthodontics-2",
    "year": "year3",
    "color": "Blue",
    "sizes": [
      { "size": "M", "stock": 24, "costPrice": 1, "sellingPrice": 2 },
      { "size": "L", "stock": 24, "costPrice": 1, "sellingPrice": 2 }
    ]
  },
  {
    "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
    "nameAr": "Artificial Teeth - Central Incisor",
    "nameEn": "Artificial Teeth - Central Incisor",
    "sku": "DEN-d02e",
    "category": "علاج الأسنان التحفظي (سنة 2)",
    "costPrice": 1.15,
    "sellingPrice": 2,
    "wholesalePrice": 1.15,
    "retailPrice": 2,
    "stock": 53,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg",
    "subject": "dental-anatomy"
  },
  {
    "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
    "nameAr": "Artificial Teeth - Lower First Molar",
    "nameEn": "Artificial Teeth - Lower First Molar",
    "sku": "DEN-5528",
    "category": "علاج الأسنان التحفظي (سنة 2)",
    "costPrice": 1.15,
    "sellingPrice": 2,
    "wholesalePrice": 1.15,
    "retailPrice": 2,
    "stock": 52,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg",
    "subject": "restorative-dentistry"
  },
  {
    "id": "6c359465-a522-4654-933f-a64c627c6b38",
    "nameAr": "Carving wax (Full Box) - 3 Pieces",
    "nameEn": "Carving wax (Full Box) - 3 Pieces",
    "sku": "DEN-6c35",
    "category": "تشريح الأسنان (سنة 1)",
    "costPrice": 4,
    "sellingPrice": 5,
    "wholesalePrice": 4,
    "retailPrice": 5,
    "stock": 13,
    "unit_multiplier": 3,
    "shared_inventory_product_id": "106ad65c-3074-4cfb-8643-840f36f833f5",
    "minStock": 0,
    "supplier": "شركة باب الشفاء لاستيراد المعدات",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg",
    "subject": "dental-anatomy"
  },
  {
    "id": "106ad65c-3074-4cfb-8643-840f36f833f5",
    "nameAr": "Carving wax - Single Piece",
    "nameEn": "Carving wax - Single Piece",
    "sku": "DEN-106a",
    "category": "تشريح الأسنان (سنة 1)",
    "costPrice": 1.33,
    "sellingPrice": 2,
    "wholesalePrice": 1.33,
    "retailPrice": 2,
    "stock": 39,
    "unit_multiplier": 1,
    "minStock": 0,
    "supplier": "شركة باب الشفاء لاستيراد المعدات",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/106ad65c-3074-4cfb-8643-840f36f833f5.jpg",
    "subject": "dental-anatomy"
  },
  {
    "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
    "nameAr": "Dental Mouth Mirror",
    "nameEn": "Dental Mouth Mirror",
    "sku": "DEN-5b7d",
    "category": "أدوات الفحص والعيادة",
    "costPrice": 11,
    "sellingPrice": 15,
    "wholesalePrice": 11,
    "retailPrice": 15,
    "stock": 17,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg",
    "subject": "fixed-prosthodontics"
  },
  {
    "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
    "nameAr": "Dental Spatula",
    "nameEn": "Dental Spatula",
    "sku": "DEN-ba48",
    "category": "مواد طب الأسنان (سنة 1)",
    "costPrice": 15,
    "sellingPrice": 17,
    "wholesalePrice": 15,
    "retailPrice": 17,
    "stock": 13,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg",
    "subject": "dental-materials"
  },
  {
    "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
    "nameAr": "Fissure Bur – SF 46 (Blue)",
    "nameEn": "Fissure Bur – SF 46 (Blue)",
    "sku": "DEN-8a2c",
    "category": "علاج الأسنان التحفظي (سنة 2)",
    "costPrice": 1.2,
    "sellingPrice": 2,
    "wholesalePrice": 1.2,
    "retailPrice": 2,
    "stock": 23,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg",
    "subject": "restorative-dentistry"
  },
  {
    "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
    "nameAr": "Fissure Bur – CD 52F (Red)",
    "nameEn": "Fissure Bur – CD 52F (Red)",
    "sku": "DEN-e625",
    "category": "علاج الأسنان التحفظي (سنة 2)",
    "costPrice": 1.2,
    "sellingPrice": 2,
    "wholesalePrice": 1.2,
    "retailPrice": 2,
    "stock": 10,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg",
    "subject": "restorative-dentistry"
  },
  {
    "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
    "nameAr": "Inverted Cone Bur – SI 46 (Blue)",
    "nameEn": "Inverted Cone Bur – SI 46 (Blue)",
    "sku": "DEN-2ebc",
    "category": "علاج الأسنان التحفظي (سنة 2)",
    "costPrice": 1.2,
    "sellingPrice": 2,
    "wholesalePrice": 1.2,
    "retailPrice": 2,
    "stock": 7,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg",
    "subject": "restorative-dentistry"
  },
  {
    "id": "7eaed4a6-5d82-480e-b35e-0ca2d15c90dc",
    "nameAr": "Light Curing Acrylic Resin Baseplates",
    "nameEn": "Light Curing Acrylic Resin Baseplates",
    "sku": "DEN-7eae",
    "category": "صناعة الأسنان المتحركة (سنة 2)",
    "costPrice": 0,
    "sellingPrice": 0,
    "wholesalePrice": 0,
    "retailPrice": 0,
    "stock": 0,
    "minStock": 0,
    "supplier": "",
    "status": "نافد",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/7eaed4a6-5d82-480e-b35e-0ca2d15c90dc.jpg",
    "subject": "removable-prosthodontics"
  },
  {
    "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
    "nameAr": "Long Taper with Flat End – TF12 (Blue)",
    "nameEn": "Long Taper with Flat End – TF12 (Blue)",
    "sku": "DEN-c78f",
    "category": "صناعة الأسنان الثابتة (سنة 2)",
    "costPrice": 1.2,
    "sellingPrice": 2,
    "wholesalePrice": 1.2,
    "retailPrice": 2,
    "stock": 17,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg",
    "subject": "fixed-prosthodontics"
  },
  {
    "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
    "nameAr": "Long Taper with Flat End – TF12 (Yellow)",
    "nameEn": "Long Taper with Flat End – TF12 (Yellow)",
    "sku": "DEN-36e0",
    "category": "صناعة الأسنان الثابتة (سنة 2)",
    "costPrice": 1.2,
    "sellingPrice": 2,
    "wholesalePrice": 1.2,
    "retailPrice": 2,
    "stock": 34,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg",
    "subject": "fixed-prosthodontics"
  },
  {
    "id": "ad31f7c7-d710-4622-8e3f-377b9c657818",
    "nameAr": "NSK High speed handpiece",
    "nameEn": "NSK High speed handpiece",
    "sku": "DEN-ad31",
    "category": "كونس وكراون (سنة 2)",
    "costPrice": 115,
    "sellingPrice": 135,
    "wholesalePrice": 115,
    "retailPrice": 135,
    "stock": 18,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/ad31f7c7-d710-4622-8e3f-377b9c657818.jpg",
    "subject": "restorative-dentistry"
  },
  {
    "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
    "nameAr": "Periodontal Probe",
    "nameEn": "Periodontal Probe",
    "sku": "DEN-af6c",
    "category": "أدوات الفحص واللثة",
    "costPrice": 12,
    "sellingPrice": 15,
    "wholesalePrice": 12,
    "retailPrice": 15,
    "stock": 16,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg",
    "subject": "periodontics"
  },
  {
    "id": "76f62cd7-df40-4e85-97d1-6fb63b09e2f1",
    "nameAr": "Round bur - BR 49",
    "nameEn": "Round bur - BR 49",
    "sku": "DEN-76f6",
    "category": "علاج الأسنان التحفظي (سنة 2)",
    "costPrice": 0,
    "sellingPrice": 0,
    "wholesalePrice": 0,
    "retailPrice": 0,
    "stock": 0,
    "minStock": 0,
    "supplier": "",
    "status": "نافد",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/76f62cd7-df40-4e85-97d1-6fb63b09e2f1.jpg",
    "subject": "restorative-dentistry"
  },
  {
    "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
    "nameAr": "Round Bur – BR 46",
    "nameEn": "Round Bur – BR 46",
    "sku": "DEN-4caa",
    "category": "علاج الأسنان التحفظي (سنة 2)",
    "costPrice": 1.2,
    "sellingPrice": 2,
    "wholesalePrice": 1.2,
    "retailPrice": 2,
    "stock": 67,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg",
    "subject": "restorative-dentistry"
  },
  {
    "id": "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab",
    "nameAr": "طقم رابر بول + بلاستيك سباتيولا",
    "nameEn": "Rubber bowl + plastic spatula",
    "sku": "DEN-75fb",
    "category": "مواد طب الأسنان (سنة 1)",
    "costPrice": 11,
    "sellingPrice": 15,
    "wholesalePrice": 11,
    "retailPrice": 15,
    "stock": 21,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/75fb4e12-d06f-4a0e-b7ac-d571b9e996ab.jpg",
    "subject": "dental-materials",
    "notes": "21 طقم: 15 بودري + أبيض، 5 أزرق + أبيض، 1 أخضر + أبيض"
  },
  {
    "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
    "nameAr": "Student Glass Slab (Mixing Glass Slab)",
    "nameEn": "Student Glass Slab (Mixing Glass Slab)",
    "sku": "DEN-0c18",
    "category": "مواد طب الأسنان (سنة 1)",
    "costPrice": 1,
    "sellingPrice": 3,
    "wholesalePrice": 1,
    "retailPrice": 3,
    "stock": 5,
    "minStock": 0,
    "supplier": "",
    "status": "منخفض",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg",
    "subject": "dental-materials"
  },
  {
    "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
    "nameAr": "Study cast + high-speed NSK hand piece",
    "nameEn": "Study cast + high-speed NSK hand piece",
    "sku": "DEN-fa04",
    "category": "كاستات وقبضات (سنة 2)",
    "costPrice": 200,
    "sellingPrice": 250,
    "wholesalePrice": 200,
    "retailPrice": 250,
    "stock": 0,
    "isBundle": true,
    "minStock": 0,
    "supplier": "باقة عروض أصلية",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg",
    "subject": "fixed-prosthodontics"
  },
  {
    "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
    "nameAr": "Torch 261 Jet Lighter",
    "nameEn": "Torch 261 Jet Lighter",
    "sku": "DEN-c944",
    "category": "صناعة الأسنان المتحركة (سنة 2)",
    "costPrice": 55,
    "sellingPrice": 60,
    "wholesalePrice": 55,
    "retailPrice": 60,
    "stock": 3,
    "minStock": 0,
    "supplier": "شركة سندس لمعدات طب الأسنان",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg",
    "subject": "removable-prosthodontics",
    "price": 60
  },
  {
    "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
    "nameAr": "Wax carver",
    "nameEn": "Wax carver",
    "sku": "DEN-e009",
    "category": "تشريح الأسنان (سنة 1)",
    "costPrice": 12,
    "sellingPrice": 15,
    "wholesalePrice": 12,
    "retailPrice": 15,
    "stock": 10,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg",
    "subject": "dental-anatomy"
  },
  {
    "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
    "nameAr": "Wax knife",
    "nameEn": "Wax knife",
    "sku": "DEN-c554",
    "category": "تشريح الأسنان (سنة 1)",
    "costPrice": 12,
    "sellingPrice": 15,
    "wholesalePrice": 12,
    "retailPrice": 15,
    "stock": 12,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg",
    "subject": "dental-anatomy"
  },
  {
    "id": "72e1069c-4319-42ff-a38c-2af8f8e4e546",
    "nameAr": "Wax sheet",
    "nameEn": "Wax sheet",
    "sku": "DEN-72e1",
    "category": "صناعة الأسنان المتحركة (سنة 2)",
    "costPrice": 0,
    "sellingPrice": 0,
    "wholesalePrice": 0,
    "retailPrice": 0,
    "stock": 0,
    "minStock": 0,
    "supplier": "",
    "status": "نافد",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/72e1069c-4319-42ff-a38c-2af8f8e4e546.jpg",
    "subject": "removable-prosthodontics"
  },
  {
    "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
    "nameAr": "Wheel Round Bur – WR 13",
    "nameEn": "Wheel Round Bur – WR 13",
    "sku": "DEN-d2a5",
    "category": "صناعة الأسنان الثابتة (سنة 2)",
    "costPrice": 1.2,
    "sellingPrice": 2,
    "wholesalePrice": 1.2,
    "retailPrice": 2,
    "stock": 20,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg",
    "subject": "fixed-prosthodontics"
  },
  {
    "id": "2a8f9bde-fb3f-485d-a1bd-d62aa0b83556",
    "nameAr": "Wide spatula",
    "nameEn": "Wide spatula",
    "sku": "DEN-2a8f",
    "category": "صناعة الأسنان المتحركة (سنة 2)",
    "costPrice": 0,
    "sellingPrice": 0,
    "wholesalePrice": 0,
    "retailPrice": 0,
    "stock": 0,
    "minStock": 0,
    "supplier": "",
    "status": "نافد",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/2a8f9bde-fb3f-485d-a1bd-d62aa0b83556.jpg",
    "subject": "removable-prosthodontics"
  },
  {
    "id": "8f344bd9-91ec-4787-8371-f489cccf635e",
    "nameAr": "dental cast",
    "nameEn": "dental cast",
    "sku": "DEN-8f34",
    "category": "كاستات تعليمية (سنة 2)",
    "costPrice": 105,
    "sellingPrice": 125,
    "wholesalePrice": 105,
    "retailPrice": 125,
    "stock": 10,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/8f344bd9-91ec-4787-8371-f489cccf635e.jpg",
    "subject": "fixed-prosthodontics"
  },
  {
    "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
    "nameAr": "Diamond Flame Bur – FO 32 (Yellow)",
    "nameEn": "Diamond Flame Bur – FO 32 (Yellow)",
    "sku": "DEN-187f",
    "category": "صناعة الأسنان الثابتة (سنة 2)",
    "costPrice": 1.2,
    "sellingPrice": 2,
    "wholesalePrice": 1.2,
    "retailPrice": 2,
    "stock": 10,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg",
    "subject": "fixed-prosthodontics"
  },
  {
    "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
    "nameAr": "Needle Bur – TC 10 (Blue)",
    "nameEn": "Needle Bur – TC 10 (Blue)",
    "sku": "DEN-627b",
    "category": "صناعة الأسنان الثابتة (سنة 2)",
    "costPrice": 1.2,
    "sellingPrice": 2,
    "wholesalePrice": 1.2,
    "retailPrice": 2,
    "stock": 29,
    "minStock": 0,
    "supplier": "",
    "status": "متوفر",
    "image": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg",
    "subject": "fixed-prosthodontics"
  },
  {
    "id": "8806943f-d3bf-443b-b623-7002b354a355",
    "nameAr": "قبضة توربين أصلية COXO C207 (بنفسجي)",
    "nameEn": "COXO High-Speed Handpiece C207 (Purple)",
    "sku": "DEN-8806",
    "category": "كونس وكراون (سنة 2)",
    "costPrice": 215,
    "sellingPrice": 225,
    "wholesalePrice": 215,
    "retailPrice": 225,
    "stock": 6,
    "minStock": 0,
    "supplier": "",
    "status": "منخفض",
    "image": "https://7ij0d.github.io/absolute-dental/coxo-handpiece-c207.png",
    "subject": "fixed-prosthodontics"
  },
  {
    "id": "7e990001-0000-4000-8000-000000000001",
    "nameAr": "مفك فحص شفاف (قلم فحص قياسي)",
    "nameEn": "Transparent Examination Penlight",
    "sku": "DEN-MFK-01",
    "category": "أدوات الفحص والعيادة",
    "costPrice": 1.75,
    "sellingPrice": 4,
    "wholesalePrice": 1.75,
    "retailPrice": 4,
    "stock": 3,
    "minStock": 5,
    "supplier": "",
    "status": "منخفض",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    "subject": "fixed-prosthodontics"
  },
  {
    "id": "7e990002-0000-4000-8000-000000000002",
    "nameAr": "مفك فحص مع ضوء (Medical LED)",
    "nameEn": "Medical LED Penlight",
    "sku": "DEN-MFK-02",
    "category": "أدوات الفحص والعيادة",
    "costPrice": 2.5,
    "sellingPrice": 5,
    "wholesalePrice": 2.5,
    "retailPrice": 5,
    "stock": 9,
    "minStock": 5,
    "supplier": "",
    "status": "منخفض",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    "subject": "fixed-prosthodontics"
  }
];
const INITIAL_ORDERS = [
  {
    "id": "992983be-c15a-49ff-bb6c-872c61662af2",
    "orderNumber": "#29556216",
    "rawOrderNumber": "29556216",
    "invoiceNumber": "#INV-2026-29556216",
    "orderType": "new",
    "isHistorical": false,
    "inventoryDeduction": "applied",
    "customerName": "ريان الهاشمي ",
    "phone": "0943616883",
    "secondaryPhone": "0916018598",
    "email": "akrain50@gmail.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 2,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "6249dd01-8b62-4dfa-a043-b619c30df688-2f48740c-426a-4560-96f5-9647223d7738",
        "name": "16.5\" Organizer Box (16.5 inch) — بنفسجي",
        "nameEn": "16.5\" Organizer Box (16.5 inch) — Purple",
        "qty": 1,
        "price": 75,
        "imageUrl": "/absolute-dental/accessories/box16_5-purple.jpg"
      }
    ],
    "total": 325,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "pending_review",
    "originalStatus": "pending_review",
    "date": "08‏/10‏/2026 11:19 م",
    "created_at": "2026-10-08T21:19:01.182+00:00",
    "notes": null,
    "system_scope": "NEW",
    "orderSource": "website",
    "source": "متجر Absolute Dental",
    "statusHistory": []
  },
  {
    "id": "13173f19-30e6-4d82-8d36-85267e37cc3d",
    "orderNumber": "#24336856",
    "rawOrderNumber": "24336856",
    "invoiceNumber": "#INV-2026-24336856",
    "orderType": "new",
    "isHistorical": false,
    "inventoryDeduction": "applied",
    "customerName": "ريان الهاشمي",
    "phone": "0943616883",
    "secondaryPhone": "0916018598",
    "email": "akrain50@gmail.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 2,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "d521fc29-f29c-472f-ad22-1a94cd985cd1-67ac35fd-81ed-40ed-8b07-a9a25c02717b",
        "name": "16\" Dental Tool Box (16 inch) — بنفسجي",
        "nameEn": "16\" Dental Tool Box (16 inch) — Purple",
        "qty": 1,
        "price": 65,
        "imageUrl": "/absolute-dental/accessories/box16-purple.jpg"
      }
    ],
    "total": 315,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "cancelled",
    "originalStatus": "cancelled",
    "date": "08‏/10‏/2026 10:55 م",
    "created_at": "2026-10-08T20:55:35.659+00:00",
    "notes": "مدرج 1",
    "system_scope": "NEW",
    "orderSource": "website",
    "source": "متجر Absolute Dental",
    "statusHistory": [
      {
        "id": "audit-1791493334100-zi7c",
        "from": "طلب تعديل قيد المراجعة",
        "to": "جاري التجهيز",
        "author": "الأدمن",
        "notes": null,
        "timestamp": "2026-10-08T21:02:14.100Z",
        "date_formatted": "8‏/10‏/2026 11:02 م"
      },
      {
        "from": "جاري التجهيز",
        "to": "ملغى",
        "from_key": "preparing",
        "to_key": "cancelled",
        "date": "08‏/10‏/2026 11:04 م",
        "user": "طه",
        "timestamp": "2026-10-08T21:04:08.946Z"
      }
    ]
  },
  {
    "id": "c33e9265-961f-4809-b6c0-0b31db0290f4",
    "orderNumber": "#65004781",
    "rawOrderNumber": "65004781",
    "invoiceNumber": "#INV-2026-65004781",
    "orderType": "new",
    "isHistorical": false,
    "inventoryDeduction": "applied",
    "customerName": "زينب",
    "phone": "0920735419",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 24,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 4,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 6,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "box-17-purple",
        "name": "17\" Professional Box — GT-MAX (17 inch) — بنفسجي",
        "nameEn": "17\" Professional Box — GT-MAX (17 inch) — Purple",
        "qty": 1,
        "price": 95,
        "imageUrl": "/absolute-dental/accessories/box17-purple.jpg"
      }
    ],
    "total": 473,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "pending_review",
    "originalStatus": "pending_review",
    "date": "08‏/10‏/2026 07:19 م",
    "created_at": "2026-10-08T17:19:07.366+00:00",
    "notes": null,
    "system_scope": "NEW",
    "orderSource": "website",
    "source": "متجر Absolute Dental",
    "statusHistory": []
  },
  {
    "id": "9053898f-305a-4912-a204-b0a6293baf30",
    "orderNumber": "#40515629",
    "rawOrderNumber": "40515629",
    "invoiceNumber": "#INV-2026-40515629",
    "orderType": "new",
    "isHistorical": false,
    "inventoryDeduction": "applied",
    "customerName": "فاطمة عمر بشير العاشق ",
    "phone": "0930377901",
    "secondaryPhone": "0914848224",
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 16,
    "items": [
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "8f344bd9-91ec-4787-8371-f489cccf635e",
        "name": "dental cast",
        "nameEn": "dental cast",
        "qty": 1,
        "price": 125,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8f344bd9-91ec-4787-8371-f489cccf635e.jpg"
      },
      {
        "id": "ad31f7c7-d710-4622-8e3f-377b9c657818",
        "name": "NSK High speed handpiece",
        "nameEn": "NSK High speed handpiece",
        "qty": 1,
        "price": 135,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ad31f7c7-d710-4622-8e3f-377b9c657818.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      }
    ],
    "total": 314,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "accepted",
    "originalStatus": "accepted",
    "date": "07‏/10‏/2026 11:51 م",
    "created_at": "2026-10-07T21:51:27.335+00:00",
    "notes": null,
    "system_scope": "NEW",
    "orderSource": "website",
    "source": "متجر Absolute Dental",
    "statusHistory": [
      {
        "id": "audit-1791460612506-n3x8",
        "from": "جاري التجهيز",
        "to": "تم قبول الطلب",
        "author": "الأدمن",
        "notes": null,
        "timestamp": "2026-10-08T11:56:52.506Z",
        "date_formatted": "8‏/10‏/2026 01:56 م"
      }
    ]
  },
  {
    "id": "c5350275-d361-4b65-8b7c-f227abd4787c",
    "orderNumber": "#69968112",
    "rawOrderNumber": "69968112",
    "invoiceNumber": "#INV-2026-69968112",
    "orderType": "new",
    "isHistorical": false,
    "inventoryDeduction": "applied",
    "customerName": "سمر نادر الصادق ",
    "phone": "0918424268",
    "secondaryPhone": "0926945245",
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 23,
    "items": [
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR45",
        "nameEn": "Round burr - BR45",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8f344bd9-91ec-4787-8371-f489cccf635e",
        "name": "dental cast",
        "nameEn": "dental cast",
        "qty": 1,
        "price": 125,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8f344bd9-91ec-4787-8371-f489cccf635e.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "76f62cd7-df40-4e85-97d1-6fb63b09e2f1",
        "name": "Round bur - BR 49",
        "nameEn": "Round bur - BR 49",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/76f62cd7-df40-4e85-97d1-6fb63b09e2f1.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      }
    ],
    "total": 240,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "accepted",
    "originalStatus": "accepted",
    "date": "07‏/10‏/2026 07:06 م",
    "created_at": "2026-10-07T17:06:44.834+00:00",
    "notes": "سنه تانيه منظور  الاستلام الاحد",
    "system_scope": "NEW",
    "orderSource": "website",
    "source": "متجر Absolute Dental",
    "statusHistory": []
  },
  {
    "id": "3275e880-5259-4414-ab0d-8f2cc36156c1",
    "orderNumber": "#63101511",
    "rawOrderNumber": "63101511",
    "invoiceNumber": "#INV-2026-63101511",
    "orderType": "new",
    "isHistorical": false,
    "inventoryDeduction": "applied",
    "customerName": "المهدي عثمان سالم ",
    "phone": "0910780785",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 8,
    "items": [
      {
        "id": "ad31f7c7-d710-4622-8e3f-377b9c657818",
        "name": "NSK High speed handpiece",
        "nameEn": "NSK High speed handpiece",
        "qty": 1,
        "price": 135,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ad31f7c7-d710-4622-8e3f-377b9c657818.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      }
    ],
    "total": 162,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "accepted",
    "originalStatus": "accepted",
    "date": "07‏/10‏/2026 06:25 م",
    "created_at": "2026-10-07T16:25:32.209+00:00",
    "notes": null,
    "system_scope": "NEW",
    "orderSource": "website",
    "source": "متجر Absolute Dental",
    "statusHistory": [
      {
        "id": "audit-1791460616068-jr1e",
        "from": "جاري التجهيز",
        "to": "تم قبول الطلب",
        "author": "الأدمن",
        "notes": null,
        "timestamp": "2026-10-08T11:56:56.068Z",
        "date_formatted": "8‏/10‏/2026 01:56 م"
      },
      {
        "id": "edit-1791403925843-q3a1i",
        "editor": "Customer",
        "timestamp": "2026-10-07T20:12:05.843Z",
        "previous_total": 160,
        "new_total": 162,
        "difference": 2,
        "changes": {
          "added": [
            {
              "id": "ad31f7c7-d710-4622-8e3f-377b9c657818",
              "name_ar": "NSK High speed handpiece",
              "name_en": "NSK High speed handpiece",
              "quantity": 1,
              "price": 135,
              "image_url": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ad31f7c7-d710-4622-8e3f-377b9c657818.jpg"
            },
            {
              "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
              "name_ar": "Dental Mouth Mirror",
              "name_en": "Dental Mouth Mirror",
              "quantity": 1,
              "price": 15,
              "image_url": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
            },
            {
              "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
              "name_ar": "Long taper with flat end - TF12 (yellow)",
              "name_en": "Long taper with flat end - TF12 (yellow)",
              "quantity": 2,
              "price": 2,
              "image_url": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
            },
            {
              "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
              "name_ar": "Long taper with flat end - TF12 (blue)",
              "name_en": "Long taper with flat end - TF12 (blue)",
              "quantity": 1,
              "price": 2,
              "image_url": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
            },
            {
              "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
              "name_ar": "diamond flame bur - FO 32 (yellow)",
              "name_en": "diamond flame bur - FO 32 (yellow)",
              "quantity": 1,
              "price": 2,
              "image_url": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
            },
            {
              "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
              "name_ar": "Artificial Teeth - Central Incisor",
              "name_en": "Artificial Teeth - Central Incisor",
              "quantity": 1,
              "price": 2,
              "image_url": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
            },
            {
              "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
              "name_ar": "Artificial Teeth - Lower First Molar",
              "name_en": "Artificial Teeth - Lower First Molar",
              "quantity": 1,
              "price": 2,
              "image_url": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
            }
          ],
          "removed": [],
          "modified": []
        },
        "notes": null,
        "order_status_at_edit": "edited_pending"
      }
    ]
  },
  {
    "id": "767b40ef-14fb-4905-aa5f-aca9a987c46a",
    "orderNumber": "#84871680",
    "rawOrderNumber": "84871680",
    "invoiceNumber": "#INV-2026-84871680",
    "orderType": "new",
    "isHistorical": false,
    "inventoryDeduction": "applied",
    "customerName": "ابتهال البرعيشي",
    "phone": "0943483892",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "6249dd01-8b62-4dfa-a043-b619c30df688-2f48740c-426a-4560-96f5-9647223d7738",
        "name": "16.5\" Organizer Box (16.5 inch) — بنفسجي",
        "nameEn": "16.5\" Organizer Box (16.5 inch) — Purple",
        "qty": 1,
        "price": 75,
        "imageUrl": "/absolute-dental/accessories/box16_5-purple.jpg"
      }
    ],
    "total": 75,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "accepted",
    "originalStatus": "accepted",
    "date": "07‏/10‏/2026 11:47 ص",
    "created_at": "2026-10-07T09:47:29.227+00:00",
    "notes": null,
    "system_scope": "NEW",
    "orderSource": "website",
    "source": "متجر Absolute Dental",
    "statusHistory": [
      {
        "id": "audit-1791460639826-v5k6",
        "from": "جاري التجهيز",
        "to": "تم قبول الطلب",
        "author": "الأدمن",
        "notes": null,
        "timestamp": "2026-10-08T11:57:19.826Z",
        "date_formatted": "8‏/10‏/2026 01:57 م"
      }
    ]
  },
  {
    "id": "82ffe49b-489d-421d-ab22-576974e090f4",
    "orderNumber": "#90558069",
    "rawOrderNumber": "90558069",
    "invoiceNumber": "#INV-HIST-90558069",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "حربي",
    "phone": "000000",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      }
    ],
    "total": 250,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "07‏/10‏/2026 01:48 ص",
    "created_at": "2026-10-06T23:48:14.396+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "fe94040b-13d5-4839-8da9-800456c4e122",
    "orderNumber": "#81046301",
    "rawOrderNumber": "81046301",
    "invoiceNumber": "#INV-HIST-81046301",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "وليد ماهر ",
    "phone": "0920722126",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 44,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 10,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR45",
        "nameEn": "Round burr - BR45",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 10,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "76f62cd7-df40-4e85-97d1-6fb63b09e2f1",
        "name": "Round bur - BR 49",
        "nameEn": "Round bur - BR 49",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/76f62cd7-df40-4e85-97d1-6fb63b09e2f1.jpg"
      },
      {
        "id": "box-16-blue",
        "name": "16\" Dental Tool Box (16 inch) — أزرق",
        "nameEn": "16\" Dental Tool Box (16 inch) — Blue",
        "qty": 1,
        "price": 65,
        "imageUrl": "/absolute-dental/accessories/box16-blue.jpg"
      }
    ],
    "total": 470,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "accepted",
    "originalStatus": "accepted",
    "date": "07‏/10‏/2026 12:17 ص",
    "created_at": "2026-10-06T22:17:03.413+00:00",
    "notes": "في الكليه الساعه 10",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": [
      {
        "id": "audit-1791479770830-r93f",
        "from": "جاري التجهيز",
        "to": "تم قبول الطلب",
        "author": "الأدمن",
        "notes": null,
        "timestamp": "2026-10-08T17:16:10.830Z",
        "date_formatted": "8‏/10‏/2026 07:16 م"
      }
    ]
  },
  {
    "id": "17692a27-f4db-4baf-bb35-a10e23903a76",
    "orderNumber": "#15123876",
    "rawOrderNumber": "15123876",
    "invoiceNumber": "#INV-HIST-15123876",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "محمد صلاح ",
    "phone": "0920722126",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 42,
    "items": [
      {
        "id": "box-16-blue",
        "name": "16\" Dental Tool Box (16 inch) — أزرق",
        "nameEn": "16\" Dental Tool Box (16 inch) — Blue",
        "qty": 1,
        "price": 65,
        "imageUrl": "/absolute-dental/accessories/box16-blue.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 10,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR45",
        "nameEn": "Round burr - BR45",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 10,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "76f62cd7-df40-4e85-97d1-6fb63b09e2f1",
        "name": "Round bur - BR 49",
        "nameEn": "Round bur - BR 49",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/76f62cd7-df40-4e85-97d1-6fb63b09e2f1.jpg"
      }
    ],
    "total": 205,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "06‏/10‏/2026 10:38 م",
    "created_at": "2026-10-06T20:38:52.753+00:00",
    "notes": "في الكليه الساعه 10",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": [
      {
        "id": "audit-1791479753424-1rst",
        "from": "جاري التجهيز",
        "to": "تم التسليم",
        "author": "الأدمن",
        "notes": null,
        "timestamp": "2026-10-08T17:15:53.424Z",
        "date_formatted": "8‏/10‏/2026 07:15 م"
      }
    ]
  },
  {
    "id": "988cfbdd-0a01-48b1-85b8-531e81fdfc96",
    "orderNumber": "#68183543",
    "rawOrderNumber": "68183543",
    "invoiceNumber": "#INV-HIST-68183543",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "عبد الرحمن عراب ",
    "phone": "0920722126",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 47,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 10,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 10,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "76f62cd7-df40-4e85-97d1-6fb63b09e2f1",
        "name": "Round bur - BR 49",
        "nameEn": "Round bur - BR 49",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/76f62cd7-df40-4e85-97d1-6fb63b09e2f1.jpg"
      },
      {
        "id": "6249dd01-8b62-4dfa-a043-b619c30df688-9002b1a7-8086-43a7-955d-c56ecca4e09c",
        "name": "16.5\" Organizer Box (16.5 inch) — أزرق فاتح",
        "nameEn": "16.5\" Organizer Box (16.5 inch) — Light Blue",
        "qty": 1,
        "price": 75,
        "imageUrl": "/absolute-dental/accessories/box16_5-blue.png"
      }
    ],
    "total": 512,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "06‏/10‏/2026 10:26 م",
    "created_at": "2026-10-06T20:26:30.771+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": [
      {
        "id": "audit-1791479755122-1uyk",
        "from": "جاري التجهيز",
        "to": "تم التسليم",
        "author": "الأدمن",
        "notes": null,
        "timestamp": "2026-10-08T17:15:55.122Z",
        "date_formatted": "8‏/10‏/2026 07:15 م"
      }
    ]
  },
  {
    "id": "0bea565a-49d5-4395-93b8-5efc37692b5b",
    "orderNumber": "#12307487",
    "rawOrderNumber": "12307487",
    "invoiceNumber": "#INV-HIST-12307487",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "ندى فتحي ",
    "phone": "0926619222",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 6,
    "items": [
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 1,
        "price": 5,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab",
        "name": "Rubber bowl + plastic spatula",
        "nameEn": "Rubber bowl + plastic spatula",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/75fb4e12-d06f-4a0e-b7ac-d571b9e996ab.jpg"
      },
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 1,
        "price": 17,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 1,
        "price": 3,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      }
    ],
    "total": 70,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "06‏/10‏/2026 09:46 م",
    "created_at": "2026-10-06T19:46:41.098+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": [
      {
        "id": "audit-1791479757503-f1di",
        "from": "جاري التجهيز",
        "to": "تم التسليم",
        "author": "الأدمن",
        "notes": null,
        "timestamp": "2026-10-08T17:15:57.503Z",
        "date_formatted": "8‏/10‏/2026 07:15 م"
      }
    ]
  },
  {
    "id": "42ef9a61-bf00-4976-9563-561956f3b4e3",
    "orderNumber": "#13788292",
    "rawOrderNumber": "13788292",
    "invoiceNumber": "#INV-HIST-13788292",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "تسنيم أبوبكر يونس",
    "phone": "0929325929",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 3,
    "items": [
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "box-16-purple",
        "name": "16\" Dental Tool Box (16 inch) — بنفسجي",
        "nameEn": "16\" Dental Tool Box (16 inch) — Purple",
        "qty": 1,
        "price": 65,
        "imageUrl": "/absolute-dental/accessories/box16-purple.jpg"
      }
    ],
    "total": 95,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "06‏/10‏/2026 06:36 م",
    "created_at": "2026-10-06T16:36:12.891+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": [
      {
        "id": "audit-1791479760480-vad6",
        "from": "جاري التجهيز",
        "to": "تم التسليم",
        "author": "الأدمن",
        "notes": null,
        "timestamp": "2026-10-08T17:16:00.480Z",
        "date_formatted": "8‏/10‏/2026 07:16 م"
      },
      {
        "id": "edit-1791407982045-9ggu1",
        "editor": "Customer",
        "timestamp": "2026-10-07T21:19:42.045Z",
        "previous_total": 30,
        "new_total": 95,
        "difference": 65,
        "changes": {
          "added": [
            {
              "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
              "name_ar": "Dental Mouth Mirror",
              "name_en": "Dental Mouth Mirror",
              "quantity": 1,
              "price": 15,
              "image_url": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
            },
            {
              "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
              "name_ar": "Periodontal Probe",
              "name_en": "Periodontal Probe",
              "quantity": 1,
              "price": 15,
              "image_url": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
            },
            {
              "id": "box-16-purple",
              "name_ar": "16\" Dental Tool Box (16 inch) — بنفسجي",
              "name_en": "16\" Dental Tool Box (16 inch) — Purple",
              "quantity": 1,
              "price": 65,
              "image_url": "/absolute-dental/accessories/box16-purple.jpg"
            }
          ],
          "removed": [],
          "modified": []
        },
        "notes": null,
        "order_status_at_edit": "edited_pending"
      },
      {
        "id": "edit-1791407933277-ui0mk",
        "editor": "Admin",
        "timestamp": "2026-10-07T21:18:53.277Z",
        "previous_total": 95,
        "new_total": 30,
        "difference": -65,
        "changes": {
          "added": [],
          "removed": [
            {
              "id": "box-16-red",
              "name_ar": "16\" Dental Tool Box (16 inch) — أحمر",
              "name_en": "16\" Dental Tool Box (16 inch) — Red",
              "quantity": 1,
              "price": 65,
              "image_url": "/absolute-dental/accessories/box16-red.jpg"
            }
          ],
          "modified": []
        },
        "notes": null,
        "order_status_at_edit": "accepted"
      }
    ]
  },
  {
    "id": "225ff4a3-fd89-4e3d-81e6-68237d69de0b",
    "orderNumber": "#90439970",
    "rawOrderNumber": "90439970",
    "invoiceNumber": "#INV-HIST-90439970",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "رواسي حافظ محمد ",
    "phone": "0930231262",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 17,
    "items": [
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "76f62cd7-df40-4e85-97d1-6fb63b09e2f1",
        "name": "Round bur - BR 49",
        "nameEn": "Round bur - BR 49",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/76f62cd7-df40-4e85-97d1-6fb63b09e2f1.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "6249dd01-8b62-4dfa-a043-b619c30df688-21184272-2478-4e2b-8a52-7612a1233616",
        "name": "16.5\" Organizer Box (16.5 inch) — أحمر",
        "nameEn": "16.5\" Organizer Box (16.5 inch) — Red",
        "qty": 1,
        "price": 75,
        "imageUrl": "/absolute-dental/accessories/box16_5-red.jpg"
      }
    ],
    "total": 439,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "06‏/10‏/2026 02:57 م",
    "created_at": "2026-10-06T12:57:52.405+00:00",
    "notes": "مجموعة A مكان الاستلام أمام الواجهة ",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": [
      {
        "id": "audit-1791479763382-n8gx",
        "from": "جاري التجهيز",
        "to": "تم التسليم",
        "author": "الأدمن",
        "notes": null,
        "timestamp": "2026-10-08T17:16:03.382Z",
        "date_formatted": "8‏/10‏/2026 07:16 م"
      }
    ]
  },
  {
    "id": "3923c272-2aaa-4b58-b0be-db9307d7ef69",
    "orderNumber": "#94946101",
    "rawOrderNumber": "94946101",
    "invoiceNumber": "#INV-HIST-94946101",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "نبيله الخير ",
    "phone": "0929007341",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 3,
    "items": [
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 1,
        "price": 3,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      }
    ],
    "total": 33,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "06‏/10‏/2026 11:38 ص",
    "created_at": "2026-10-06T09:38:00.69+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "fa6d3f6a-a675-42ba-9480-abbb706faa49",
    "orderNumber": "#96055340",
    "rawOrderNumber": "96055340",
    "invoiceNumber": "#INV-HIST-96055340",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "بشرى بورو",
    "phone": "0930157721",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "ef85fc7a-c8bd-4fb3-9b5a-a2449bf891a2-4368c087-8b03-4ced-a7bc-033608370261",
        "name": "17\" Professional Box — GT-MAX (17 inch) — بنفسجي",
        "nameEn": "17\" Professional Box — GT-MAX (17 inch) — Purple",
        "qty": 1,
        "price": 95,
        "imageUrl": "/absolute-dental/accessories/box17-purple.jpg"
      }
    ],
    "total": 95,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "05‏/10‏/2026 10:57 م",
    "created_at": "2026-10-05T20:57:39.146+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "2662b41a-c32c-4e4f-a2cd-444776731c1f",
    "orderNumber": "#42351493",
    "rawOrderNumber": "42351493",
    "invoiceNumber": "#INV-HIST-42351493",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "سريج خالد خليل",
    "phone": "0930348671",
    "secondaryPhone": "0930387465",
    "email": "sarij2017@gmail.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "box-16-5-red",
        "name": "16.5\" Organizer Box (16.5 inch) — أحمر",
        "nameEn": "16.5\" Organizer Box (16.5 inch) — Red",
        "qty": 1,
        "price": 75,
        "imageUrl": "/absolute-dental/accessories/box16_5-red.jpg"
      }
    ],
    "total": 75,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "05‏/10‏/2026 08:24 م",
    "created_at": "2026-10-05T18:24:38.551+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "a8c98dbb-f60f-4d43-bb64-41f22ca27d06",
    "orderNumber": "#32085048",
    "rawOrderNumber": "32085048",
    "invoiceNumber": "#INV-HIST-32085048",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "مودة إبراهيم",
    "phone": "0910891947",
    "secondaryPhone": "0928586462",
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "ef85fc7a-c8bd-4fb3-9b5a-a2449bf891a2-4368c087-8b03-4ced-a7bc-033608370261",
        "name": "17\" Professional Box — GT-MAX (17 inch) — بنفسجي",
        "nameEn": "17\" Professional Box — GT-MAX (17 inch) — Purple",
        "qty": 1,
        "price": 95,
        "imageUrl": "/absolute-dental/accessories/box17-purple.jpg"
      }
    ],
    "total": 95,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "05‏/10‏/2026 04:49 م",
    "created_at": "2026-10-05T14:49:15.296+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "436ea0c6-329b-483c-b207-991f2be48e23",
    "orderNumber": "#90656550",
    "rawOrderNumber": "90656550",
    "invoiceNumber": "#INV-HIST-90656550",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "تغريد حسام ادريبي",
    "phone": "0920174154",
    "secondaryPhone": "0920174154",
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "6249dd01-8b62-4dfa-a043-b619c30df688-2f48740c-426a-4560-96f5-9647223d7738",
        "name": "16.5\" Organizer Box (16.5 inch) — بنفسجي",
        "nameEn": "16.5\" Organizer Box (16.5 inch) — Purple",
        "qty": 1,
        "price": 75,
        "imageUrl": "/absolute-dental/accessories/box16_5-purple.jpg"
      }
    ],
    "total": 75,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "pending_review",
    "originalStatus": "pending_review",
    "date": "05‏/10‏/2026 04:48 م",
    "created_at": "2026-10-05T14:48:48.964+00:00",
    "notes": "حاليا غير متوفر بتوفر نتواصلوا معاك",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "f23685a4-97b8-41d9-a872-0abb26960c34",
    "orderNumber": "#62960319",
    "rawOrderNumber": "62960319",
    "invoiceNumber": "#INV-HIST-62960319",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "شيماء",
    "phone": "0922570806",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 19,
    "items": [
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      }
    ],
    "total": 370,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "05‏/10‏/2026 01:40 م",
    "created_at": "2026-10-05T11:40:26.217+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "2b2dc4bc-365d-4ebe-b3ba-40670119466a",
    "orderNumber": "#27592884",
    "rawOrderNumber": "27592884",
    "invoiceNumber": "#INV-HIST-27592884",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "ولاء المسلاتي ",
    "phone": "0943756433",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 23,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "box-17-black",
        "name": "17\" Professional Box — GT-MAX (17 inch) — أسود",
        "nameEn": "17\" Professional Box — GT-MAX (17 inch) — Black",
        "qty": 1,
        "price": 95,
        "imageUrl": "/absolute-dental/accessories/box17-black.jpg"
      }
    ],
    "total": 471,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "05‏/10‏/2026 08:38 ص",
    "created_at": "2026-10-05T06:38:36.773+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "30676b98-6b0f-4945-9650-504d4d7a5c9e",
    "orderNumber": "#59381087",
    "rawOrderNumber": "59381087",
    "invoiceNumber": "#INV-HIST-59381087",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "انور",
    "phone": "+218 92-4625166",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 17,
    "items": [
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      }
    ],
    "total": 366,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "05‏/10‏/2026 07:52 ص",
    "created_at": "2026-10-05T05:52:56.936+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "2a672633-b2f8-4e51-a825-7158a460e100",
    "orderNumber": "#91667202",
    "rawOrderNumber": "91667202",
    "invoiceNumber": "#INV-HIST-91667202",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "سند سلامة",
    "phone": "0922845832",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 17,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "box-17-black",
        "name": "17\" Professional Box — GT-MAX (17 inch) — أسود",
        "nameEn": "17\" Professional Box — GT-MAX (17 inch) — Black",
        "qty": 1,
        "price": 95,
        "imageUrl": "/absolute-dental/accessories/box17-black.jpg"
      }
    ],
    "total": 401,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "05‏/10‏/2026 07:45 ص",
    "created_at": "2026-10-05T05:45:27.2+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "497c699b-2f17-42f3-9b11-d50fe367e40d",
    "orderNumber": "#98307472",
    "rawOrderNumber": "98307472",
    "invoiceNumber": "#INV-HIST-98307472",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "رصوان",
    "phone": "00000000",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 21,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 4,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 4,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      }
    ],
    "total": 374,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "05‏/10‏/2026 07:41 ص",
    "created_at": "2026-10-05T05:41:12.475+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "2b32fb65-3910-4fa3-941c-d99eca8b9e6d",
    "orderNumber": "#23987899",
    "rawOrderNumber": "23987899",
    "invoiceNumber": "#INV-HIST-23987899",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "ساجدة ماضي ",
    "phone": "0930528488",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 24,
    "items": [
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "box-16-5-red",
        "name": "16.5\" Organizer Box (16.5 inch) — أحمر",
        "nameEn": "16.5\" Organizer Box (16.5 inch) — Red",
        "qty": 1,
        "price": 75,
        "imageUrl": "/absolute-dental/accessories/box16_5-red.jpg"
      }
    ],
    "total": 453,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "accepted",
    "originalStatus": "accepted",
    "date": "05‏/10‏/2026 07:33 ص",
    "created_at": "2026-10-05T05:33:12.359+00:00",
    "notes": "تسليم الساعة 12",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "db6488a0-b5f8-43f8-af73-7b06e591a047",
    "orderNumber": "#84968005",
    "rawOrderNumber": "84968005",
    "invoiceNumber": "#INV-HIST-84968005",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "ريان النعاس",
    "phone": "0916730983",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 7,
    "items": [
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "106ad65c-3074-4cfb-8643-840f36f833f5",
        "name": "Carving wax - Single Piece",
        "nameEn": "Carving wax - Single Piece",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/106ad65c-3074-4cfb-8643-840f36f833f5.jpg"
      },
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 1,
        "price": 5,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab",
        "name": "Rubber bowl + plastic spatula",
        "nameEn": "Rubber bowl + plastic spatula",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/75fb4e12-d06f-4a0e-b7ac-d571b9e996ab.jpg"
      },
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 1,
        "price": 17,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 1,
        "price": 3,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      }
    ],
    "total": 72,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "04‏/10‏/2026 08:58 م",
    "created_at": "2026-10-04T18:58:24.174+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "d0687c4a-453e-427f-b2cb-97d179cf247c",
    "orderNumber": "#85747107",
    "rawOrderNumber": "85747107",
    "invoiceNumber": "#INV-HIST-85747107",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "ابتهال البوعيشي",
    "phone": "0943483892",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "box-16-5-purple",
        "name": "16.5\" Organizer Box (16.5 inch) — بنفسجي",
        "nameEn": "16.5\" Organizer Box (16.5 inch) — Purple",
        "qty": 1,
        "price": 75,
        "imageUrl": "/absolute-dental/accessories/box16_5-purple.jpg"
      }
    ],
    "total": 75,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "04‏/10‏/2026 08:25 م",
    "created_at": "2026-10-04T18:25:36.917+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "a5fa2b9c-6bec-4c2c-80bc-10238a93f435",
    "orderNumber": "#73674071",
    "rawOrderNumber": "73674071",
    "invoiceNumber": "#INV-HIST-73674071",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "محمك المسعودي",
    "phone": "0917078404",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 18,
    "items": [
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "box-17-purple",
        "name": "17\" Professional Box — GT-MAX (17 inch) — بنفسجي",
        "nameEn": "17\" Professional Box — GT-MAX (17 inch) — Purple",
        "qty": 1,
        "price": 95,
        "imageUrl": "/absolute-dental/accessories/box17-purple.jpg"
      }
    ],
    "total": 461,
    "discountAmount": 1,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "04‏/10‏/2026 05:55 م",
    "created_at": "2026-10-04T15:55:48.894+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "d63b2f65-dd4d-499c-bc17-e921354ada77",
    "orderNumber": "#85144634",
    "rawOrderNumber": "85144634",
    "invoiceNumber": "#INV-HIST-85144634",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "غفران علي كرشبة",
    "phone": "0930565927",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      }
    ],
    "total": 250,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "04‏/10‏/2026 07:08 ص",
    "created_at": "2026-10-04T05:08:34.09+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "9dd939e1-e9fa-4d3e-aa61-deecdc0ecb4c",
    "orderNumber": "#29139006",
    "rawOrderNumber": "29139006",
    "invoiceNumber": "#INV-HIST-29139006",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "أميره الدقيق",
    "phone": "0930285205",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 28,
    "items": [
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8f344bd9-91ec-4787-8371-f489cccf635e",
        "name": "dental cast",
        "nameEn": "dental cast",
        "qty": 1,
        "price": 125,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8f344bd9-91ec-4787-8371-f489cccf635e.jpg"
      }
    ],
    "total": 205,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "04‏/10‏/2026 02:14 ص",
    "created_at": "2026-10-04T00:14:01.574+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "0f537dd3-2c81-417b-9d35-29dcc840c663",
    "orderNumber": "#98779642",
    "rawOrderNumber": "98779642",
    "invoiceNumber": "#INV-HIST-98779642",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "سيف الاسلام ",
    "phone": "0944083724",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 15,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      }
    ],
    "total": 362,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "04‏/10‏/2026 01:44 ص",
    "created_at": "2026-10-03T23:44:11.253+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "a897fdb8-53f2-4938-b5be-b7031aaf5ee1",
    "orderNumber": "#22303602",
    "rawOrderNumber": "22303602",
    "invoiceNumber": "#INV-HIST-22303602",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "ردينة علي الزير ",
    "phone": "0920714626",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 12,
    "items": [
      {
        "id": "box-17-purple",
        "name": "17\" Professional Box — GT-MAX (17 inch) — بنفسجي",
        "nameEn": "17\" Professional Box — GT-MAX (17 inch) — Purple",
        "qty": 1,
        "price": 95,
        "imageUrl": "/absolute-dental/accessories/box17-purple.jpg"
      },
      {
        "id": "8806943f-d3bf-443b-b623-7002b354a355",
        "name": "COXO High-Speed Handpiece C207 (Purple)",
        "nameEn": "COXO High-Speed Handpiece C207 (Purple)",
        "qty": 1,
        "price": 225,
        "imageUrl": "https://7ij0d.github.io/absolute-dental/coxo-handpiece-c207.png"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 2,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "8f344bd9-91ec-4787-8371-f489cccf635e",
        "name": "dental cast",
        "nameEn": "dental cast",
        "qty": 1,
        "price": 125,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8f344bd9-91ec-4787-8371-f489cccf635e.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      }
    ],
    "total": 547,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "03‏/10‏/2026 06:58 م",
    "created_at": "2026-10-03T16:58:49.014+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "0142ed65-470b-4db0-bd83-0b98fc5ff7e9",
    "orderNumber": "#24913917",
    "rawOrderNumber": "24913917",
    "invoiceNumber": "#INV-HIST-24913917",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "مودة إبراهيم",
    "phone": "0910891947",
    "secondaryPhone": "0928586462",
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 17,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "76f62cd7-df40-4e85-97d1-6fb63b09e2f1",
        "name": "Round bur - BR 49",
        "nameEn": "Round bur - BR 49",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/76f62cd7-df40-4e85-97d1-6fb63b09e2f1.jpg"
      }
    ],
    "total": 366,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "03‏/10‏/2026 02:15 م",
    "created_at": "2026-10-03T12:15:53.323+00:00",
    "notes": "يوم الاستلام الاحد او الاتنين حنتواصل معاكم بخصوص اليوم\n",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "a64faff6-c5a4-4bb2-a317-1a417791d7f0",
    "orderNumber": "#26251019",
    "rawOrderNumber": "26251019",
    "invoiceNumber": "#INV-HIST-26251019",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "شيماء إبراهيم الكشيك",
    "phone": "0931845797 ",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 44,
    "items": [
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 10,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "76f62cd7-df40-4e85-97d1-6fb63b09e2f1",
        "name": "Round bur - BR 49",
        "nameEn": "Round bur - BR 49",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/76f62cd7-df40-4e85-97d1-6fb63b09e2f1.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "8f344bd9-91ec-4787-8371-f489cccf635e",
        "name": "dental cast",
        "nameEn": "dental cast",
        "qty": 1,
        "price": 125,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8f344bd9-91ec-4787-8371-f489cccf635e.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 10,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      }
    ],
    "total": 295,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "03‏/10‏/2026 01:37 ص",
    "created_at": "2026-10-02T23:37:27.08+00:00",
    "notes": "الاستلام الساعة 10صباحا يوم الأحد كلية طب وجراحة الفم والأسنان جامعة طرابلس ",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "f195124c-f076-41d4-9b2f-44da30f430a4",
    "orderNumber": "#40889192",
    "rawOrderNumber": "40889192",
    "invoiceNumber": "#INV-HIST-40889192",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "محمد حمدان",
    "phone": "0917411383",
    "secondaryPhone": "0917411383",
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 35,
    "items": [
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 10,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "8f344bd9-91ec-4787-8371-f489cccf635e",
        "name": "dental cast",
        "nameEn": "dental cast",
        "qty": 1,
        "price": 125,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8f344bd9-91ec-4787-8371-f489cccf635e.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "76f62cd7-df40-4e85-97d1-6fb63b09e2f1",
        "name": "Round bur - BR 49",
        "nameEn": "Round bur - BR 49",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/76f62cd7-df40-4e85-97d1-6fb63b09e2f1.jpg"
      },
      {
        "id": "d521fc29-f29c-472f-ad22-1a94cd985cd1-ca9d9e03-34b5-40b7-b2c0-f4436a6c83d6",
        "name": "16\" Dental Tool Box (16 inch) — أزرق",
        "nameEn": "16\" Dental Tool Box (16 inch) — Blue",
        "qty": 1,
        "price": 65,
        "imageUrl": "/absolute-dental/accessories/box16-blue.jpg"
      }
    ],
    "total": 340,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "03‏/10‏/2026 12:29 ص",
    "created_at": "2026-10-02T22:29:57.826+00:00",
    "notes": "الاستلام الساعه 10صباحا يوم الاحد \nفي كلية طب وجراحه الفم والاسنان ",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "fd7591d7-d481-44cb-b009-aa67698c23d0",
    "orderNumber": "#66592197",
    "rawOrderNumber": "66592197",
    "invoiceNumber": "#INV-HIST-66592197",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "اسراء عادل الخريف ",
    "phone": "0919230438",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "الهاني, الهنشير, الهاني, طرابلس, ليبيا",
    "latitude": 32.880795,
    "longitude": 13.23241,
    "itemsCount": 17,
    "items": [
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "data:image/jpeg;base64,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"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "data:image/jpeg;base64,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"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "data:image/jpeg;base64,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"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "data:image/jpeg;base64,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"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "data:image/jpeg;base64,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"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "data:image/jpeg;base64,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"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 2,
        "price": 2,
        "imageUrl": "data:image/jpeg;base64,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"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "8f344bd9-91ec-4787-8371-f489cccf635e",
        "name": "dental cast",
        "nameEn": "dental cast",
        "qty": 1,
        "price": 125,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/8f344bd9-91ec-4787-8371-f489cccf635e.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8806943f-d3bf-443b-b623-7002b354a355",
        "name": "COXO High-Speed Handpiece C207 (Purple)",
        "nameEn": "COXO High-Speed Handpiece C207 (Purple)",
        "qty": 1,
        "price": 225,
        "imageUrl": "https://7ij0d.github.io/absolute-dental/coxo-handpiece-c207.png"
      }
    ],
    "total": 464,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "02‏/10‏/2026 09:40 م",
    "created_at": "2026-10-02T19:40:08.986+00:00",
    "notes": "[الشارع/المنطقة: الهاني, الهنشير, الهاني, طرابلس, ليبيا] [خرائط جوجل: https://www.google.com/maps?q=32.880795,13.23241]",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "a8091bac-2191-441a-b6e2-a833b6320b70",
    "orderNumber": "#88185778",
    "rawOrderNumber": "88185778",
    "invoiceNumber": "#INV-HIST-88185778",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "هاجر عمران حسين ",
    "phone": "0930606196",
    "secondaryPhone": "0930064854",
    "email": "0917755650h@gmail.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 7,
    "items": [
      {
        "id": "106ad65c-3074-4cfb-8643-840f36f833f5",
        "name": "Carving wax - Single Piece",
        "nameEn": "Carving wax - Single Piece",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/106ad65c-3074-4cfb-8643-840f36f833f5.jpg"
      },
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 1,
        "price": 5,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab",
        "name": "Rubber bowl + plastic spatula",
        "nameEn": "Rubber bowl + plastic spatula",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/75fb4e12-d06f-4a0e-b7ac-d571b9e996ab.jpg"
      },
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 1,
        "price": 17,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 1,
        "price": 3,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      }
    ],
    "total": 72,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "cancelled",
    "originalStatus": "cancelled",
    "date": "02‏/10‏/2026 09:25 م",
    "created_at": "2026-10-02T19:25:32.722+00:00",
    "notes": "كليه الأسنان ابن المنظور ",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "a59e4da5-8474-48fb-978c-39c3de52a0a8",
    "orderNumber": "#77635640",
    "rawOrderNumber": "77635640",
    "invoiceNumber": "#INV-HIST-77635640",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "فاطمه احمد محمد ",
    "phone": "0919390928",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 10,
    "items": [
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 2,
        "price": 15,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 2,
        "price": 5,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 2,
        "price": 15,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 2,
        "price": 17,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 2,
        "price": 3,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      }
    ],
    "total": 110,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "02‏/10‏/2026 09:17 م",
    "created_at": "2026-10-02T19:17:08.286+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "036c1499-7e48-4b1e-bee7-55eb65eb1898",
    "orderNumber": "#86727631",
    "rawOrderNumber": "86727631",
    "invoiceNumber": "#INV-HIST-86727631",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "احمد امحمد شو ",
    "phone": "0926919100",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 27,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 4,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 4,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      }
    ],
    "total": 386,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "02‏/10‏/2026 09:13 م",
    "created_at": "2026-10-02T19:13:36.527+00:00",
    "notes": "يوم الاحد في الكلية قدام المدرجات ",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "26350463-2a56-47f6-bd79-61d84c02f5a1",
    "orderNumber": "#20084336",
    "rawOrderNumber": "20084336",
    "invoiceNumber": "#INV-HIST-20084336",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "إبراهيم أحمد الطبيب",
    "phone": "0912144337",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 6,
    "items": [
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 1,
        "price": 5,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab",
        "name": "Rubber bowl + plastic spatula",
        "nameEn": "Rubber bowl + plastic spatula",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/75fb4e12-d06f-4a0e-b7ac-d571b9e996ab.jpg"
      },
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 1,
        "price": 17,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 1,
        "price": 3,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      }
    ],
    "total": 70,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "02‏/10‏/2026 07:10 م",
    "created_at": "2026-10-02T17:10:46.038+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "3e16f1a0-31ff-413c-850f-0129cebce79a",
    "orderNumber": "#77089181",
    "rawOrderNumber": "77089181",
    "invoiceNumber": "#INV-HIST-77089181",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "شهد عبد اللطيف ",
    "phone": "0930456938",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 24,
    "items": [
      {
        "id": "8806943f-d3bf-443b-b623-7002b354a355",
        "name": "COXO High-Speed Handpiece C207 (Purple)",
        "nameEn": "COXO High-Speed Handpiece C207 (Purple)",
        "qty": 1,
        "price": 225,
        "imageUrl": "https://7ij0d.github.io/absolute-dental/coxo-handpiece-c207.png"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "8f344bd9-91ec-4787-8371-f489cccf635e",
        "name": "dental cast",
        "nameEn": "dental cast",
        "qty": 1,
        "price": 125,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8f344bd9-91ec-4787-8371-f489cccf635e.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      }
    ],
    "total": 478,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "02‏/10‏/2026 05:01 م",
    "created_at": "2026-10-02T15:01:54.769+00:00",
    "notes": "+ بوكس لون وردي 75 الاجمالي 553",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "f2a9d748-4d33-42e2-bc39-c85a8a65fc8a",
    "orderNumber": "#56191275",
    "rawOrderNumber": "56191275",
    "invoiceNumber": "#INV-HIST-56191275",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "مبار",
    "phone": "0930679661",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 24,
    "items": [
      {
        "id": "8806943f-d3bf-443b-b623-7002b354a355",
        "name": "COXO High-Speed Handpiece C207 (Purple)",
        "nameEn": "COXO High-Speed Handpiece C207 (Purple)",
        "qty": 1,
        "price": 225,
        "imageUrl": "https://7ij0d.github.io/absolute-dental/coxo-handpiece-c207.png"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "8f344bd9-91ec-4787-8371-f489cccf635e",
        "name": "dental cast",
        "nameEn": "dental cast",
        "qty": 1,
        "price": 125,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8f344bd9-91ec-4787-8371-f489cccf635e.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      }
    ],
    "total": 478,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "accepted",
    "originalStatus": "accepted",
    "date": "02‏/10‏/2026 04:00 م",
    "created_at": "2026-10-02T14:00:50.74+00:00",
    "notes": "الاستلام يوم الثلاثاء ",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "ad346160-9beb-4196-8ecb-fe25773910f6",
    "orderNumber": "#81350340",
    "rawOrderNumber": "81350340",
    "invoiceNumber": "#INV-HIST-81350340",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "روان فائز",
    "phone": "+218 93-5981868",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 33,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 10,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 10,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      }
    ],
    "total": 398,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "02‏/10‏/2026 09:18 ص",
    "created_at": "2026-10-02T07:18:36.386+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "88de2f8b-42bc-47de-9f96-6b22b8bba52c",
    "orderNumber": "#66643704",
    "rawOrderNumber": "66643704",
    "invoiceNumber": "#INV-HIST-66643704",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "محمد صلاح الدين",
    "phone": "0946962298",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "السراج, الجفارة, ليبيا",
    "latitude": 32.834095,
    "longitude": 13.070485,
    "itemsCount": 6,
    "items": [
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 1,
        "price": 5,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab",
        "name": "Rubber bowl + plastic spatula",
        "nameEn": "Rubber bowl + plastic spatula",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/75fb4e12-d06f-4a0e-b7ac-d571b9e996ab.jpg"
      },
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 1,
        "price": 17,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 1,
        "price": 3,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      }
    ],
    "total": 70,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "02‏/10‏/2026 08:42 ص",
    "created_at": "2026-10-02T06:42:53.198+00:00",
    "notes": "[الشارع/المنطقة: السراج, الجفارة, ليبيا] [خرائط جوجل: https://www.google.com/maps?q=32.834095,13.070485]",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "fcf67969-0909-4b43-a60a-663107d78850",
    "orderNumber": "#64964784",
    "rawOrderNumber": "64964784",
    "invoiceNumber": "#INV-HIST-64964784",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "عبدالله القمودي ",
    "phone": "0920722126",
    "secondaryPhone": "0913291382",
    "email": "sosome668@gmail.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 33,
    "items": [
      {
        "id": "d521fc29-f29c-472f-ad22-1a94cd985cd1-ca9d9e03-34b5-40b7-b2c0-f4436a6c83d6",
        "name": "16\" Dental Tool Box (16 inch) — Blue",
        "nameEn": "16\" Dental Tool Box (16 inch) — Blue",
        "qty": 1,
        "price": 65,
        "imageUrl": "/absolute-dental/accessories/box16-blue.jpg"
      },
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "data:image/jpeg;base64,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"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAMgAyADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAECAwQFBgf/xABCEAEAAgIBAwIDBQUGBQIFBQAAAQIDEQQFITESQRNRYQYUIjJxgZGxwdEHFSNCYqEzUnJz4SRjNEOC8PElU5Kisv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACYRAQEAAwACAQQCAwEBAAAAAAABAgMRITEEEhNBUSIyFGFxI0L/2gAMAwEAAhEDEQA/APugHqfDAAAAFQAABAAEUATuqAKgoqaFBBUABBDQAUAEQAABRBUEEAAAAkBEAFAQAAEFBEBBFRQEAEppFRQAQSRUVAAEAQAGoIAqCCggAhoABFQE0KgAAiCpIggCiKCJ4BVRAkBBRBEUURQBAk2BKAD1yQcXsAAAAABBAFAAARUAABUFFQECSUVQAAAZptAQAARUFFTYggAABsBFQAAEAAAEAAGK7QRQTYEhslQRfZERFQABFRQQBFQFAFQBplFEQARUVFQQAFEXSAACCSIIAChICIoigIoyAiKAKAJIG9oAAAPXAcXsAAAQRRAAAUAUEVABQAAECUUAAABCRJEQAUAAENgCKggAACAAAAgAAAAgioCSKCCKkgnuqKFEJQQAUJRQQABNkooABFRFGkQABAGVQAAAQAAARJRZQAAABUQkPcABEQVFAABJViAAACz4Er1gHF7AABFQAAAAAQVVEUADYCbJlFAAAAACRKgAgAAioAACACAACKCIAAioAAKACCSqCIoAJJMgIokyIIAoSCsgAAgAgAoCwQEUAAQFGUFQAEAAEAASUWUAAAlAVABEAAQJFAAE8osoAAAbASvXAcXsAAEVAAQDYAACgqAq7QmUUAAAAAJEE91mUEAAAANoABIgCKgigAIAAEiEoAoAIAAgAgACbRUBUBQQVEEBUAQFQQAAFBAQBoABAARA3IAgAADJtFSRUAAAEQCVABGRAVQAAAElAAAAAEeuCOL2KIoICfoAAAAKoJKhvRslFAAAAABAJk+iDIIqgAACSAAAmwEBAFlAEABRFQAAAEAAEABBNhIIAKBKKgKkoyICgCSCygAAAAKIAoSioIqAIIApIAgAIMVQAABFRUAlBKAIACgAAk+FTYIAAABKKIy9YBye0NkoAAAAoACgIoAAAAAqJ1EWZQQAURQQAQDYCiCoAigiAAACAAJIAoAAigIAIIoIn7EAACQNoKAkiKgCiIeQBBUAAAQGoAIAAMkoKCCoAAAkkggioAEpIACggCAAgAACAEiCgAgAICAPXQHF7AAAEBRBVVAUAAAAUQROhMiCAAACgIAAAAgLtAAAEEAAAAkSRAAUEUBFQQAEEVAQAFQAoCCACoAgAigIqAAAgqNISgAACAACAAAIm0AAFBEBQAARUEABAEBU8AAdgQQlUlQRZQQAB6wDi9gCAu0BVAFABAAE6ACKiSAbAAAATZtAUQUUEA9gAABDaAAAACCGwBRBQAQQBBBUNgIAAAGxFBAQRQFEABFEBUEEUQagEgCACAAgCSAAAkhIiKgAG0UAAABEVABFQRUVAAEATZtQ2ioAAIJtdoD1xBxe1UBQAUAEToAJ0A2BtJEBRFAAAQlAAUEFRQAAAEEAAAACQEABABRAFQ2CCAAbJQQAARQEUQQlAANhMqggooioAgLIgAoIAgiggCAAChMiSMm0VAAQABQBAVBURARUAAAEBFlFBFQAAQAARUB6wDm9oAAG0RlTabAUQA2ACKAAACAAiiiAAAAAAAAgAgAgIIooigIqAASAAMoBIIAAACCglRF2gKIAqAoAgiyghwAGg2ICAAgAAgAAB0SVnsgiAAgAACgCIgKgIp8/oKgkqgGgQAAA0AIKCIEgCKmhHrAjk9ypsBkAAAAAAENgqbNgAAAAIAoAAAICAqAAACASgoAAAAIbJkQkRQoCCG0AAAUQBKAggAAAAAAhsVBAWAiptQARkDsm1FEAJRdgCAIbRdoACAAbAAAQFQJm1fxUnVq94/UVKuN5esefX4H2jyWr2wdRwU5NI+V4/DeP/wDMqx6xl9PQ+Dz9d+ncr4OX6Y8nbf8AvH7mTGu+OPR8nH+Uyn5J8IDbyiAoAAAABtJAA32GabQAeqA5PaIoIAACGwAQF2gAobTYKhsVQBEAAAAEAQAABNgqAoAgKAAIAShICiAhKAAAJRFQOqipsQlAAAAAABBAEWACNCoCIIqKAABIAi+yAlCQEQCQQAAABFBGIKqCoSK38bj06jx+odLv45nGtER/qjxP/wB/J5PSuVbk9Nw3v+eK+m8fK0dp/wB4ehw+RPF6jgz77UvG/wBJ7S4eRxZ6V9p+qcGO2LLeOVh/6b/m/wD7RLlPGf8A17LPr0d/Tr2NUWZxLq8TIAAABNkoCiAlABAEB6qork9gIAqAAigICggAAAAAAACCggCiACAAAAAIBsAAAEXaAioACAAAIAggqKCJKygAAAAAeyLwAQQAVRFQQAkRAFAEBRFARUGSUAFQAQVAAAAAQUE4ICjVkjtK/au+8XQ+uV/LbfEzz9J8b/8AqgyR2dFON/fH2T6r0rzkpX4uH6WjvH+8f7uOzxyvb8W97hfy4Ky2xLg6dyY5XBw5/e9I39J9/wDd21l172PFlOXjbEiQqobJAU8gojEUEqACCKkg9UByewAUAEAEBRAAAAAQAFARRUklBBQBFEAAAEAUEEAQVUAAAQRUEVA2igCsoogKmyUAAAAAAkRJAVRAUABAARAJURUUENBsBAEVisoICpIAACKgAAAIIBo1AACjG8fhdP2ez/dut46z+TPE47fy/wB3PMdmuk2x8nFevmt4mP3sZzuPHXTl9OyV5/3b+6+udT6Z4riz/ExR/ov3j+bqpLD7YZq4/wC0HFWn5svBj4mvnE9jHP1TXe4t/Lx+nbXRDKGFWTo8qqiinuqKiVASVQAARUB6qQDm9iiCCgkgqAAAAAAAAi7RQQBBUAUQBUkAEAAAANoAKggAICAACKBtFTgqAgkkyCgAgAAAAE9kEBBYoAqAIIqAAkyqAAKAIgAKgigiAgKgAAABvcxWImZnxERuZaOdzuH0ym+fy8XHt7Y5n1ZJ/wDpjx+1m5Se3XDTns/rG6U2+ez/AGmvl7cDp/NzV9rfDisT/FyW6t13JP4el+iP/dz6/nDH3Y9E+Fn+a+t2eqvvaP2y+Rjkddt+bL0/j7+czef5k/3haP8AF65jr/2sMR/RPuX8Rf8AFxn9sn1s5Mf/AO5X97XblYaebTP6Vl8rHDtkn8XVudl/7ca/qyjoWHJ3njdQ5E/68sxH8l+rO/hPtaJ7yfQ5OqcSkTN81Kx/qvFf4y5KfabhV5VY4mO/UORWd0xYYn079ptbxpw4fs3jid16Tx6fXNlm385ehTpWXHj9E5aYcfvTj09O/wBqWZ5eFmfx9d7PNefHHz5esZepc7PGbm5Y/wASa/lx/Ksfo9PFLTkxUwx6aV1EMsVnbHH6Zx4tuy7M/qrtrLOJaaT2boVzZQqKCoEoiBAoAAJIA9QByew2AHQAKAAAmwVBFFQBAAAAAAAAAEAAANkygBKoIAIGxBUABQAEAE6JskEAAAAAAAlPICKjQACAIAAIAAhpUFEVBABUABAAVEVNAB7M8OPJyJn4NYmtfzXmdVr+spbJ7awwyzvMYwmYiNzOo+csc18fH408rl5q8XjR5y5Pf/pj3eZ1X7VdN6Tb4HDrHU+fM6rFY3jrP0j3eLn4HM6jl/vP7Vcm19RvHxInUVj6/Jwy2W+MX0NfxMcJ9Wyu2/2h5vVrXw9ApPC4fjL1DN+e0f6fl+kMeDxOHx8lvuPGtzeTv8fJzfinf6z2h0YODm50U+NSeNxKx+DDX8MzH8oexhxY8GOuPFWKUrHasRqIax1fnJz2/L5/HW8+eB1DkRvkcuuP/TSJt/RI6Dhn/icjNf8ASYh6c3iPdhbNWHaYyPFlsyy91x06H06necM3n/XeZ/m6sfD4uL/h8fFT9KQxtyax7tc8uvzVi12RER4Xbz55sR7sJ5v1OJ16Xqhry5Iirz55dp8NWTNkt4leJ1OVmib9jDMy0Rhm1t2deLHr2EdGNvq00hthFbIEhQAARQAEBAAHqAOT2AAAJsFTYKhtFAQAAAAAAAAQBQAEVAAQFEBAVJQEAAAAEVAUBNosoAAIAAACAJ4ARRYqCooACIAIACiKACGwEAQFNAgyiszOojc/Rlmw5OPTJfLEVjHWLW3PzLlJ7axwyy9RgwvkpTzPf5Q5c/KyxlrgpSfXkrF61jzNZ9/0dHH4Fcf+NzskajvFI8f+XPLZI9Or4uWXvwvHpn5ttYomK/8AN7NnU6Yel8OM9uVW81/NSfP6w8zrX2x4/BxTg4fp3Ea3Hs/Pep9c5XUc8+q9r2tPhx+5X0P8XX9POPvOd9oeldOxRl5GevJvMbrhxT2/bL5vL1zr32uz/dOFH3fhx5in4aVj6z7uLp32azcv4XI6n6sXH33+c/KJ+j6G/NjHWnTuk8eK77VrWNdvnPyhJMs6XLXoxZcLgcD7PUiMNfvXPv2+Jrc7+UQ9bi9Nt8T71zp+Jm81pPeKf1lOm9NpwKzly2jLybfmyT7fSPlDoy8mIjy9OGExfJ3fIy2X/Tbe9a93Jl5MR7uXPzO3aXHa9skury2uu/Ln2a5zXlrrjmW6uM6jDd7J6LS6a4/oyjGdOOWMU7ZxidUY1jH3DjnjEyjF9G+KMvSDRGL6NtaaZxVlEIMYqzgiFBYVAVRFBABAEBUUB6hKDk9YCKqoAgoAIAAICgAACAiigigCH7QEUEQAA2CCKaAQBQPYBAEA2IAKgAAIACAIBPkBVAFgJoBBFRQCY7CIACooggAoCsqY7ZLRTHWbWnxERuUXnfTBuxcbLmj1Uruvqiu9+7dTiVrgrfLb8eafTjrG+0792rl9VrivnyUyUw4eJX4caifxXnep328d/wCrlls56e3T8S5ec3VOXi9PtfLX1WnjR3vEfntPtO/Dz+ZOblU4/HjiZvicu05b3jHWvprEx2mZn2/T9O7jyciM33Hg/E5Vb8m8ZM/pxxTz379p8a32/WWj79w8nVuX1PJ98vXi4vTS2rbid+mNfLfeY3+suFtvt9PHHHGchebX5PU+dk6blmnGxzSlPiRERaI/ZETrvvvr9Xyv2h6n1fi8PjZc1slcHIputrdp7dp/Z8vo9f8A/TsXScWDHysuLPzMvrvHxN+qN6ibfON94jzM906pj4nO5PK489Wtk4uLizimb1rasenWqUjtuZmN7j32nDvHwnHry+q54w8elrzM959ofd9B+yXH4ERn5MRkzedz4h0dB43T+D0ul8MVjt+KYnff37nO6vGpitvTT+Jjhcqxt3Y652uzqHLw1418FIiYtXUz8mvp/E4/TuP6sc+vJliLXyW82/8AD5m/Oyc/N8LBP4In8d/asf1ejn6nEU9NZ7VjUPbhr+mPh7992Zdr1ORzojepedl502nUS8y3JvmtqJdWDFPu6PP7b6Ra87l1Y8aYcenVSiUkY0xttaM61bIqisIoyirPS6Bj6T0sl0DH0mmRoE0aUETSxACgoAACACCKgAqCPUQHN7AAAAFQAAAAQFAAAFEAFRFE6AiIG0AVABQAEBQBAVAEAAQAAAKACCbADYCgAcCUBRFEVDYe4CKACe6oAKaAWIWtZtaIiNzPh3YuNj4uWuTkWrelY3bU7iJ9o+rGWUxdderLZfDn4vGnk5JrForFY9Vp+UOi+XDw8NcNZx1zZ5mJ+LMTNaz48T3/AGNGXm5M9cfGx5aVyci83nd4/DX2jWu8fSfk4b9QjF9950cngRXDHwsVpta36R29u09ojv39nnyzuT6ur4+Ov/rDk9Wx0jlcieXx4xcWPhYoiJtE31qJ1E6mfPj/AGeXl5O+H07p+LqfptybfEtWME1mItP4dx7R/HzLo5F80dP4XArz+HGTlXi9qxTU+mfyxrfif3z+jC+fmZOscvlRbg5sfBxWjHWbfhideZ7d53uP9oYd2E9TjJ13l82vWcVcXHxTEXtTevbVY8W/F7+8ueuTmx0SmOnVsd8nUMs2vX1btePE/imdRHq+ndz5p5WLo28nB4szzs0+vLbzaI7/AJY7xG9+P3d3N1Ll8GvMw8fNwK4fudInJWJ9Nrx53addo37eVZtezmzdQr1iuLJXicnFwMXasTqlZiseZn33r+HZ4GbqWK3HzTl4tZycq+otXF+KveZn067R+rhnl+qMvweTWtuRb8G436a+/n+MujFW94rb77i9FKxqb17x372leOeWUTF1DFxONlp8W94x67z+XfjUfueFyuo5udf801xfTzLr6zas5aYI5E5YpubR6dRE+369nmS9GM8Pm7LLla78POnHijHX8NY9odGHJbNbzLyK73p7XTsUzES6zKvLnrnevT4uCPOnqYcWtdmjjY9RD0MdNQrkyx0b6wxpDbEdkFiGWiIUUiF0KAAIAAIAKIoAAAgCoAgAAgA9MBzesABUAAAAQBRFABBQ2AACMiEgAAIAAqSAqIKKgCBsAAABAAAAAQRUkAEBQGgTYAIqeFQAAA0AiyoIaVaUvedVrNp89o2nSS30kR3b8XFvk7zqseY9Xabfo3142DFiic94mcke098f1n/f9zVyOqzbDk5GGM0xMfCxTirE+r98R8v03Ljlt/EfQ0/E75zb78jj8Kb3w0tlx0x6rNY72vM/s7fteRyLcjLyeHws2LHNsszlvGXLHj5aiI9Xb+P0ORgvyORxeHbhcrLjmPi8mLZZms/PtH5tePaHm33b+8+fk6PaJmPg44i8zas/ln1THasRGo7fo4d6+jJMZyOj73nj+8uoRxuDl+HvDjiMkemO+p3O/l+kz4jtDly15VemcHh16Zx5y8i83m3prHvHprEb348z8u3zcPKx4I6Z0/gZun8nD8XJOW80iYxxuYjxPmYjX6bZRyumx13NzPvHJwV4tJx4vVEzf1RHpiK7/L57QqWu7JktfrObk5+kbx8LHb8Na/itaO25mO3mf2RDyL5uFTpWSs8K1c/Iy7x+i+qxWJ32j3860xpzMuDpmSONz8k5c94jLS3qiZrHzt+sz2jy4+TyeTmy46cimTLTiV/wvxeJ13isKxcmXLtjjlYq8bNaMOHHHq9Ud9+fH+Xu4KTzM9cnqnDecm/XO9/h+e58/r7OqnBnPjtkycPJrNHryX9WvrEbnz+jn5/L4vAraPuOP4ltVtWcvq3rzHbx8v3tSOOWbo+FHHn8duJHoiKRM99dt28edR+x5nN+0Ga+8XH+BFJjvamL9kR379o/i8nk8nJy8k2vFaRMzOqxrz/FhWunSYvPln1v9dr/AIrTMzPmZnysbmdRDXWJmdQ9DicWbTEzDpPLyZWROLw5taJmH0PC43prHZr4nEisR2ergxaiNQ3zjz3K1twU1p10q10pqG+sDLOsNkQxrDOIFWIWEWBVCASgAggAKigAAAAIAhs2IC7EAAJB6ewHN6wAAABBQATYqps8ggAiAEgIAAAAgCoAAgqAqAAAAAIbAABAAQBPApsVCAA0ISqAACIECgQqIKeA0oixDOmK1/y13rzPydmPHj4VbZb+nLkrP4IrbtPz/RjLOR21aMtl8NXG4N81fiWmKY9T+KdezO/L4/HrXjevHitavry+qd+mIje51/X3acnKm2aaTkw1pxqTa/xckT+yfPbfvv8Ai8nP1L4XSMmeeo8bHfk3iKemszPbfq153395jUezzZZ3J9XVox1/9bOV1XHXhZOdPKyRfLM48Xow+mbRHnX4f2fT9WGfk8XPzeP07J1Hkxj49fXnt+WI1Hqn1T7+0e+vDXljL/efB4EdZxz90p68kVxxX8vefVaO0dtdu2o+rj++86KdR6lXqHEyza0Ycc6iY8/5Y+kT7/rLPHa1tjn8Wfv3PnqnLrkyf4PHtr8U77zqP0+ka383Hkw4P7v4XEx9S9P3i85MuOa+isb/ACzafPtvv53tnnnn4uBwenzi4t5zzOSaV16rTM/hidd/f2/f2c/K6vjnqmTkZuBgrXhx6ZrETWka7RP+r3leMWtmfLmp1XkcinVcOSvCpPwr39MU1EeIr7zv5fq8PLz+R90yRnr8W3Nn8U9ptPvv1e0bacl8WTj+imTJXLk1Nb636I/T2j9WNcMWmbzzbTWlZ9Na03u3zn5/T9F4xcuMLWryMkb416xT/DxxFdRM/OI/nLtxY+Nx8UTlryrV9UzMx7++9/LX8XJyuo4uDXVOVntaK/g1Xtedd5/3/wBnh8nncrmZLTlzXtWZ3EWl0mLz5bHp9Q67GePTxoy13Pqm1sni36fT2eRO7Wm1pmZnvMz7pFWcdnSTjzZZWsfTplWs2nUQ2Y8Nsk+HpcXgd4mYbkccs5GjicKbWibQ9zi8T0xHZs43EisR2ejiw69mucefLK1MOLUeHZjpEJjxt9ajLKlWyIY1jTZECrEM4YwygVYWEUSkACAAAAAACABtUBAQAAAAABAeoA5vWACggIe6ogCoCCoIAAAAAICiAEiCgAAbRRAAAABADoAIAAEoATISKACgCAACAAAAGgbMeO+W8UpWbWnxB1ZLfEYadWHhWtT4uTdMca763v8AoznHx+HF5z2/FjmNzMaiu/nE+XPyuVfLnpj+DmjJyLRe3opEemvz7/v9/aHDLZ+I+hp+J+c3VmzWxzWvE4+SJyTqtYmKxqPeZ8uC98tuXnt9yxWx8Ok+ms5vzW12me2v2z4clcsRzORzZ6ZzpxcPH6MFrXn1zb/TE+PnuZ93l58dOP0OlZ6Nl+Pzcnq1N7TGo/Judbme+/T9dy4+30JJJyOnNfl4+ixavE4VsnNzajV41Ee0R9d78do/VuvbmT1ni8WnA4c14uOJmKaj1aiN+fHeO0Tv5y87k/3XbrWHj5MHJw4OBi/HF6716Y9Wq1nxG58677edjt02cPP5NsvKjNyt48Vdx8Sa2nczNte/v/NYza77ZuRk4vUOZyOjYstc8/C9dY/BS0z318495n3nTzuZl4PH4nD49+HenIvPxL3m0TN/V27bjU9tfSGOfLXH03g8Xj8i+WLTa+elZ9NKb18/MxHbfj5Ofk9Q6hy+oX5M4JyTip8PH6tR9PwxEdo8rxm1hyORx/vefLgyWx46Vj4VbXibbiNfm9u7mx3z2p6Yrhj4kerLM33E/KIif4s8PTrZImbcKk0ifXe1r63b+fnX7Wrl87HwKa+HxvjeqbW/FN92jtH8/wBzUjjlnz07v8HFE2zc3jRH4e3o9Wq+Zjx8td/rp5PUftBmybx8bLqsxO7VxxXz7fsjs8zk8/PzJiLz6aRvVK+PO/2tMVdJi82WxJi1rTa0zMz7zK1rplpsx4bZJ7Q3xxuTCImZ1Dr4/DteYmYdPF4HvMPX4/EiI8NyPPls/Tl4vC1EdnqYeNrXZuxcfUeHXTFppxa8WHXs6aY2VcbbWqCVq2VqVqziBSI0yiCIXXcGWlhIUVQBOAAAAgCggmyQFTYACCKgAAIAIoAA9RAc3rAANmwBAPABsEQAAAASTaKAKCCgIAAgAogAGwAAQAEASe4KhICAqqAKgigJtFQQBQA0oIsQzxYMmabeiu/TG5n5Q7YxYuLSZ9UTkjUza9fwx48SxlnMXfVoy2Xx6acfDn01vmmKUmfnETH678JyuoV42HJTHkw4YxxFYta+62mY7zEb867tfP5F549s8xx4+NfUTe8zrXz157+f0cme97dVw8SM3Axxhj4k4/T6remNTMz/AMu/9oefLK5Pq6tOOueFz8vF95wcO3PvfJeYvmjFGvRGt+fbt857blw36pgz8jlc+/UOXipSIpitWnoibW8RWsz3mI95j32U6jyb4uo9QjqXBn/5VZikxSs+Z1Mxu0+3vvy5eV/ekcHh8CcuG2XmzOSdWr8TvMaidx2jXff9EdbXJn5HEp0fDx8HO5McnmZPXfHExa099V9c77RHy+e3XjvN+vUx4Os1yY+Fj3W+SNY6RWNTHn8U71ud9/2JycvKr1rJOTi4MnH4FJmMcd61pEdp7Rvz9Hzt+o8e3B5WXJXDW+e34MtJmvpmZ3Oq/P8AgrHXrYuf1Di9L5fL+84cluReMdrV1GS+53Pp33/Xf7Hk8zl2yY8HA5PEpMYbTlmtI1rfmbT7z2j9jmma+rFTHzp9cxN8trRG57fp2/8ALdjrNt2y86sfE3aNV/LWPbX9V455ZOX105Ga+fFbPu8einpjUREe8R7REfP5urHjwYcEXy4ORlim59W+1pntE/tlp5fUcPExWpHMyzaa+mYrXUzvvP7vDwOXzuRzclrZL29Ntdt+deNtzFwyzej1DrGK3+DxMMVrX8MzefV6oj3/AH9/3PImJtO5nclas4dJOPPllWMVZxEzOoZ48VsltRD0eNwe8TMNSdccs5HLx+Ha87mHr8bgxER2dPH4cREdno4ePqPDfOPPlla58HFiPZ3Y8OvZtpiiI8N9cf0GGuuPXs3VpplWrZFewMa1ZxCxHdlECpDKINMgRloNCrCooAICmwEAAA2CIogAbBCUAABAJEkABQAB6YDm9YABsQRAAADYCbNoC7QAAFDZsAJAQQVFFQ2bQAFAAQA3oQEAXaIoIKLwAFBJXYCAaBBdLoEUbuPxsnIt+CszWPzWiN6S3ntccbleRpdWHi19NcuaZikz+WI7/RsiMHGxUpOviZ43F7RGojz4/ZLly9Urkx5eVPJyWx0tNccYq2/FaY7THb2j27/q45bf0+hp+J+c3Tlz2x0rjxY5mmKv48lI9PjvMfWZnUdvr3eXyp5P3eK24fry8zJ+C+bPqYiPG9eO8z7+3f2hyc3Lh+6cfi/D6hkz8u8WtT1TGoncRNt712jcR+2XNfmdKr1qk/duXTicHFuMl4msRFO0emNb/N++fLj7e/xJyPRyUyZuqY+JHT+JevCpFr7mPVeI+Vd9t2+f6y8z7zlrw+fz79Ex/wCLeMUWrHqpERH4pt9O3tHeXHj5fTsfA5uec3JwZeVacWKs3i+W9d7tM9txE77/AD1pjya8avA4XCwdTrE5LTe9Ij0Y62tqYm1t+Yjt9NLxLU5XwJ4/T+JPTL4JtEZb5PxRM+qZjVZnz5+X0jwwy8/pVusZcuLJyMWOuP8ADX1z65msenvbczX9/wBGPN6l1GOr5uRj5ePPHHiZw5MlIrFtR4pTv37z3/a8a3JzxxJpPGm1uTP459XfX1t/JXO10WvfHwZ+HlrbNkv6Z3Hb0fO077z3a7xnyXrjy4cc0xais9o9Vvp8u/8AMxcKbWrMcO8xhjVImdbmflHiPef2MeTzeJ07HOOvHr64iLY5m0X3P1/g1MXLLNupSvHpObPbiRfU+Z/Nbevn3157vL53X8lonFxZx1pOo3XHEaiPGv4vM5fLycu0eqtKUjxWlde+/wBrVWunSYvNlmyta+W83yWm95nczadzJFVhspjtee0NuNya4r37OvBxLXmJmHTxeBuYmYetx+HqI7NyOGWz9ObjcKIiPwvUwcWIiOzfi4+ojs66YtezTj1qx4dRDopjbK0+jbWiDCtGyIZRDKKgkVZRCxCgaXQugNKAEd1AFABFBEA8Ap7BIqAIgu0BUQAABAAUEUAQUE8p7LtFHqIDi9RsAAD2ARUEAAABRDZsAAAE2CiAACpQAUAEBNmxFPZADYd0AUGoAAAAICgiosQAtazaYrWJmZ8RDZi4+TN6ppWfTWN2n5Q6q1pgrkrTFOa1tRjnXpv9fPj9XPLOYvRq0ZbP+MMHFrWZtnmI1FvwTMxO4/gX5NZzY+PW/HpalZm28tdREeYnXnt5nt5a8l82XlXrfj1y0wV9V5vl16piN9vn31G5jTz7Xy06XyuVk4fT5nPf01i2SIrERuZ3Mz3761EacMsrl7fU16sdc8ML9Rvj6fn5n37h1i9vg19FZtWZ8zER5mdeI768y0cjlci08HptOsYoy55icla45tMevv314jXtP6ynKxdQmeB0+eHwfi2iLZLR6Ztbc7tEV32jUa37uPNzM1efzObyOiY5x4aW1ix4onU+rUTe0T37b9vHhnjpa68fP5XI6tyuTHVcE4uBS01/N8KN/hr+s+/nvLinl9Vp0rNyqcrHltzMk09c5Zte1Iid+mPERvz+sQ4rcrjYujTjzcHHHIzZPVXLNrRSkV1rXtvzGvq5eZk6bmrxMOK+bDGPFHxZyX/FO+/av+X3/erHXV1DkdTx14vT83HxxbHFbTix0jvafzTa29xb5/J5nJ6nxM3Oy8rJjjHGHVK4sVfTWJjtERry03yWnNfkcbl7pNpjFWbx5n5z/uYaTWMfxM2DHji34/TXe+/b9I9mpHPLKRqpjpevornzVtkt67213t76/wBP/wCHVEcfHW+TLnzxFpiI1Gvhx5mO/wCkblo5XVq8GPRTl7tWbWr6MWov7R/9/R4XL5/I5t5tkyWivfVfVOo33luYuGWx2dQ61OaJph+Ju2/XM5JmNzPtH6PLmbXvN7Tu1u8zPuRVlEOknHnyy6RDKI9ohnjxWvOoh6HF4MzMTMNSdccs5HLg4lsk94etxuDEa7Ovj8OI1+F6GLjxHs3Jx58srWjBxdezux4Ihsx4oj2b64/oMsKY4bq0Z1oziv0BK1ZRCxDKIBIhYhlEGgIhRYA0LAAAACigCIBAAAJ0BAFRQE2T2NqiAIAABs2KAgoAAbTYA9MEcXqUQAAUAlNohsAUAABADZIobAAAE6AAAgKiKAAvAAEQNqcAQUVBQRQANEN+HjZM0eqI1WJiJm3aO6Wye28cbleRpiPk68fHxYItk5V6x6Naj1RMTPyllfNi4eLPOLLTHFZ9M3vaN7j2/RyZ+ZX75j4ubqfFxaicmataxMV13nvM/L6fycMtnfEfR0/FmPnJ05ebW18WLFjvF8vfeLF4rPaJ8aiIiPO9vNtnrkzZs8cXnZ8fFrrDEbj8e9donW58zud6j5NcdTranL51utxj1vFi1g3uZncems+dR4/XcuDlZMVOn4cNOs5smTmTGS+OK2tbv+GsTO91j6e8+zk9viNOfJGHo8TbpPK+PyckzFrZbTFqx2pFp1udzMzrXfynIjp0dV4vDvxM+DHgiK5bZbWmNRHqvNazEzaZn392/LbLbrmHicXq+HJXg44n1W3FcUVj8U2mO0zM6/g87Bzur4MPN6tlzYJtf/D+LN6+qe/f0bjtqPb2Vi1sx87gZeTzubj6jyaTOO0Yt+n41pvPtb27R3+UOHJN+N0e+PjdQ+Lkz5otfBTcdojUTe0+/beo7ObN1P0dJpxcvDmkcq+4tFYm1teI3PaNee3zcefJw82Wk1peacWPTMRG/Vbx595XjFydXK5nPy5uNw8t4y4cFI1bH+Ssx41XXeff9rmxzyeV6s2ThxOTkT6LTedfh8d5/oyw8Gnqmcl89pyW9WT011Edt+n6f/iGnm87jcSI3gmZiuopknVom3ntHyj+LUjlln+nVWuHj0j4sYKRjiYibW3Na+InUfOfd5XUOuZLbw8b0Viuo9WOv4ZiPlvvLz+V1DNy/wAMxWmPtEVrER2jxv5tEQ6TF5ss0mb3nd7TafG5lnEGmymO151ENuNyYxHft3dODiXyTG47OnjcCZmJmHr8fhxGuzUxcMtn6cvG4GtdnqYOLqI7OjFx4iPDrpiiPZpx9tOPDr2dNMbOtG2tYBjWn0bIqsVZxUEiGUQsQyiBUiF0poAVREUABUAABRFQABAEBRFAAEASfAEoCgAgAiioG1AABNrtAAAekA4vUBtNiKngBQABFQFTYKAAIoAACCG0EVFAQAFAWKJJPhFFABF2IIvkRQFABlWk3tFaxuZ7RDdx+LOaY3atImdd2/JyOJxsNrY4mJiPh6j8UWt57zHj97nlskerV8bLPzfTHHxseGbX5Eeqta7tqdem3tX9TNnzxfHFOPNpyV71tft6taj37dv5dnncjJGbNhwRHMy2yWi+XcfD1WY9/E6iO+o/m4rZuLfl5eVl6fyZxcakVw1m0zNbdorEU/y+fVuZ7eXnuVyfT168dc5Ho+jJfqkYa8Pha4lYvOOb1m25jczHf8O5iIjceHl/eeVTp/UOpXp0rWW3ot+Otq03Mzfczb8ftGu23FbmcPi9GyUv07lRfk5J/LlvMXrH/NfXf1Tvt7seZXpWfk8Pp9cvIw4sMRGa83j4cTbvaYiY7z2mNwjdrZ1COfHD4fFrwONkyZ/8X1xSk2vaZ7VisTGoiNbn+jDJnvbrM3zdGpTjcSlomlcUxe/p959Pbvaf2Q5p5HFzdYz9Qw9VzcelaWmk5KxbLPbUVruP1/R5H33m8Hg5s2DlRa+aYi2PHWfVfW+8z5jzMqxa6687p33Dm3y4MVL3trH8LJNMePe5nX1jt2efy8eKcWHFg5Exny1tbLe14tFo7a1H0hLZct/g8GeNa+LHHxIjzFZ+nzn+rbj4eTJM58nBrW+SszeJvEarHt9J9mpHPLLjnm2W+ectuVitWPwY5tETv6zr9/7nRjviwUiZ5lbXndbfDr33r+Eef3tHL52Hp9Zr6cNb212pX16iPNe/by8Hl8/k863+LbtveojW5+c/VuYuGWb0OodcvnrbHgyZZrasVmb2+X0j+P6vIt6sl5ve02tPmZncysVZadJHnuVSKsoj5Mq47XnUQ7+LwZmYmYak645ZyObDxbZJ7w9bi8CI12dfG4UR7PSw8aI9m5JHnyztc+DiRGuzuxYIj2baYoh0VoMtdMem6tGUV02RUGMVZRVlEMogVIhlELpdAimlENCgARCgigiiKKIKgigIgigoiptUIUEBAVDaLtAAEABRAFBAAVAF2gCAAPRAcXrAAAlAAFAAAAToAHUXaAgAAAAA0AgCoAoigIoSICKAKCjVnyWx1r6NeqZjz8mV8npjVe8vU6Z0G+a0Z+bExXzGOfM/r/RzyzkejVoyzvWrB9/zcC+aKWyW1Fa+q0xGvftEx+9x5PjxlpwY6lxcGLBWLZbUjcxMbmY3aZjtD6/JlwcLBN8k1pSsd99o0/KftB9pcPH6zy68PFx82LPHpmc9PV6Y95h5bevr4z6Zx7OXn2v97539/wCOlomceKa4rTSJtHaIrr8Wo79onv5l4/K+Jg6XSlOsV3zrfEvW0Xrkyx4jv3mNz+keFz582bp3TuNXpOL/ANRHr+LWPVbJb/lp5tHaY3Pb/Zp5efp9+uTTJ023HpgpMWpiyf4mWK+JmfERv6+IaiWujk15l+q8Ppledx82Ph1pM4ovatYtHmbzP5v3+/h539+cqvN5PUeTi9U4fwxkmu6RETPaup9/Dz8mbj/D5fKx5b0i15+FStonHSd9tzPmPp9HHE8rHirhx3w2tM+vJkmO8R58fL+iudrdk5eK/BtjyYclMvLtM716r2je5mI9vOmFcPHy5ZtScsY8FfTPoidWt+vv8v2NuG3IvN833jjxEU3j99RH+b5/+U5fV8PHprHyb2mZjUUp6d+0z+ny/RqRyyz4znD91w2+LGfJb0b/ABXisTNp7ftiP3PM5nWsMzbHw8ERqYiL2tM7iPp+vd53K5WXl5Lza0xW1vV6PVMw1Vpp0kefLNe9p3aZmZ95WKrEaZ0xzedRDbjawiJ32dGHi2yTG47OrjcCZ1Mw9fjcKI12akcMtn6cnF4Eduz1cHEisR2dGHjRGuzsx4oiPDThb1qxYIj2dNMf0Z0o21poGNafRsiv0WKtlYFYxVnELpYgEiGRpREFUE0ougRVSUFQBQAAAQAERQAABBRQDaIhslAAAAk2TICAoIooIqAACAJ5BUAHpAjk9ZIAAAAAAbQRdpISIG0UAAAQBRAABeAAqiAIqAAAAqAL4Z4cGbl5YxYKTa09/wBn8nn9UnJHGr8Pe5vETpn0rrnM+z8+rl4b34mSNzGu/wCtZ93PO2Tw9GjHHLL+T7DpvQ8PDmuXLrJmj39q/p/Ves9b4XRuNOTk5Ii2u1YnvLweu/2gdP4vDien5a58mSu4n2r+v1flHWeucrqnIm+XLfJe09oeW19mSSeHsfar7b8rq17Y63nHgie1Iny+QwYub1LPNePS15+b2+mfZXldQmufl7x4vPp95fW8fh8TpmCK46VpEElpbJPL5PonUeRH/wAVzM+DJw6zWuptM/Svae0d/DfHUOo4cFr3x3nLnmKW15iPbc+36R83T1PDx5yZs2OPhzeNzaO3dwcaaWtW08nNMUmKRWtJ8z/m1P8AP6O308jxzbMreJHBpm1jjp2S1MG5nUaibT7fX5b/AFbcnDx8SmTPn4tMfqvrJFsmo19NezHk9R4nGxxFp5FvxTX0Wvqe09rT8/4PA5XNzcu/qvadTX0zEzvfv3+bUxc8tjq53WJ+J6ONjwxFYisXrT/LG+3f97zZtkyXm+S9r2nzNp2RRlENSccMsupEMtd1pSbzqHfxuDNu8w3J1yyykcuHjWyTG47PW4vB1rs6+NwoiI7PSw8aI9m5OPPlna0YOJEa7O7Fg17NuPFp0VoMNdMevZvrRlWjOIBK1ZxVYqyiBSKsogiGWgQVYBFPAIAqKKkGxFQBQAAAAASgAgAABsQEQFlAUAEBUPAEpsFABQNgAgbAT3AQkAABR6SA4vUACgIIqAIAAIqAogAAAAqgCoAAgCgAgAAAAEz6Y3K0ra94pSs2vbtFY8y9rDwuH0fiz1Dq2XHT0xuItPav9Zc8s5i9GnRlsv8Apz9N6LOeY5XOj04696459/rL5r+0T7ZdK/uzL0jjenPk7f4lZ7Y5j5PG+139oHN63mt07o9MlMEzr8P5r/r8oeLwvspE65PWMvee8Yqz/F5rlcq+rjhhrx48HDy7cyKRW+rWtFbTPjczrb73o/2b4vTqRlz6yZve1vEPmuXxen8XN6cFa1i9/wAkfKe0vXzdXmvDxfFy9q0iP1dPtW+XmvyscbZHvcjn4sVZjHqde757qXWsWGLWtfcvC532ivktOPBH7Xj5LZM1ptltMzLrMZj6eXPPPZf5enTzOu5+ReYr2q3cjrWaMWLHx895mtNXmI1WZ+fiNvO9HyhfTo5321MpjPCbve3qvabT85lsiGOmdK2vOohqOeVNN2HjWyT47OnjcKbamYevxuFEa7NSOGWz9OTi8DWuz1cHEiNdnRh40R7OzHiiPZpxt61YsGvZ1Ux6Z0o3VoIwrTu21qyirOKisYhlELEMogXiRCxCqCQyDSIaA8KCooACAAACKKAgAAAglFRRBABTwgCTICgAiBsFBAUEAFBAVAnsAmwEABQBQRURHpSCOL1KioAAqAgCiAAqLwAQ4qiKAbBUQAABQRRAAEEUFRu4vEz83L8PBTevNp8V/V0cbp3qwzy+ZlrxuJTva951uP2vm+tfbzNyrT0f7J4LRHi3I1rt84+X6y457OeI9un4ty/ln6fQdX+0XRvsXgtWbxyeoWr+SJ7/ALflD4TlX679ss0cvqOaeNw471ie0RH+mP5tGLgcLpl55fU80c3mTO/xTutZ/nL0ceDq/WIi2vufHnxfJX8WvpX+rnjryy816tnyMNU5Gv43SugYfRxa1i8+clu9rPP5Veqc+JyRWeNit39eT80x9IfR4OldP6dHrpj+Lm982WfVb/x+x5vU+XuJjb04a5Hyd/yssnyfI4lOPebRNslve9p7vO5GXNntEZLz6I8Q9blz6pl5WWvdvKQ052ztaorFe0Qyjui1iZntDm72roisy6cXEtfzD0cHTvo1xxuyR5eLiXyT3js9Ti9P1rdXo4ODEf5Xfi42vZZJHLLO1y4OJEa7O/FgiPZux4Yj2dFcasNdMcR7N1aM61+jZFRWEVbIhYqyiASIZRC6UVIZGgRdAoACAAAAAe4AAiigiCgAIoM9BNgKACIAgKgBIgq+AFQEFCUAAXaAe4vsgEyioIAAAKoCIgAI9JF2kztyeoiTaAAAAC8ADa8URUAAEUABFmWynG5GX/h4Mlv0rKWyNTG31GodtekdQv441o/6piP5rbpWbHH+Nn4uH/uZtM/Xj+3SaNl/DhG7JHTMH/xHXuDj/S8T/NzX6x9lcH/F+0GO3/bpM/1T7mLc+Ltv4ZmnFk+2X2L4/nm8vPMf8mPX8dOXJ/aP9lMX/B6Zyc0/+5k1/OU+7G58PP8ANetM6In1TqsTM/SNvn8n9q/Bp24v2f48T7Te+5/g4s/9qvXska4XTsGL5ejDNv4p92/iNf4cnvJ9tg6dzM8x6cFq197X/DEfvaeodd6B9m4/9RyK8/m/5OPh7xE/X/z+5+a8/wC0P2v65Pp5fKy48U+azeMdf3Q9TovBvipE8LhVyZ7fm5F/EfpM/wAoZv15Ok+xp897Xd1TmdV+01vvPWc88HgV74+LSdTMfX+sseNxs/Jx/d+lcavF4nvmtHa387PV4/RaTkrn52T7zljvFZ/JE/p7/tena1a1+UQ6Y65PbzbflZZ+J4jy+B0PicGfi2ic+f3y5O8x+kezqz8iKRMbYcjkxWJ08jl8udT3dpHgyyXmc3z3eBzOT67T3beRntktqHLHGvktuYlv04+3Dk9V/Dntxb3l7tOD/pb6cCu+9Wb5dccrPT5yvTrW8w7MHTZjW4e9ThVj/K6K8WI9k5GrnlXl4ODEa7O/Fxdezspx4j2bq4hHPjwa9m+uLs21x6bIoDXWjZFWUVZxArGKs4qsQugTSxCgppSIUQNKaQABQFEQUAAEQAUBAXwCbBQBARREUAE2bARUBADaiSAoKgBIAIogAAAgIAIACqAmwVAEABHogOb1IAAAqggIqAABsAAFb+Jw78vJMRaKY6R6smSfFYc8zFYmZ8R3a/tfzJ6V9k+JwKWmuXqmSIyWjzFPMx/CHPZlZPD1fH1TO9vqPP6p9tPucZKfZrpscqMU+m3OzRuJn/S+W5P2w+2vLtr7/wDAifalor/CH0PD6VXnYaXy7x8Okaw8es63HztPu9XBw+Pxo1hw0x/9NWZr77bz+V9N5hPD4H4P2r6jG8/UeVkif+5dlX7IdTy98mXkzP8A24j+Mv0JYlv7eLhfk7b+XwVfsLybR+L48/rlrDKv9n9t96V/+rPP8ofebSZX6Mf0xd2y/wD0+Mx/YHFH5q8aP19Vnbh+xfGx63bjx/08aP5y+lm0fNj64a5P0xc877rysX2a4+OP+PeP+ila/wAm+Og8P/PfNf8AW+v4O74kfMnNWPcZ65cXR+n4LRenFxzaP81o9U/7uyNQ1Wz1iGjLy4jxKpa6b5Ip7uLkcuI3qXLn5m48uK+W+SdeyyMXJnyeXMzMRLhtS+XvLqrg3O26mBrvGOdcFOJ84dFOLEeztrgbYxaTrX0uSvH17NlcMfJ0xj+jKKIvGiMWvZnGL6N0UX0i8aoxsoo2RVYqDCKsohlpdAxiGUQsQuhUXS6NAimlQIgUAEXyIIqCioCKAICAAAoBsAEE6ACKCbFJQBkAADyiioCqAAAAgAgABsEEABQADZs2gAAnQAQBAeltNiMPUptAAAAEBRAF2gAKgI1cq3p4uSf9MuL+0yY30D5an+FXZzY3w8uv+SXB/aT+Lpf2e5HtuO/61q47PcfQ+L/TJ6uKlceKlK9q1rEQlrxDmjk/4NJ+dYn/AGc+TkzM9pdo+dcnbbPWGueTEPPnLaWE2tLXGLk9GeVDCeXHzcH4p9z0ycT6q7J5f1YW5f1c3pk+HsO1tnlzrywnlT82Pwj4InlJ5Fp92q172b4wsoxfQOVyfCmZ7922mH6OmMUfJnXHAvGquKG2uP6NkUZxUVrimmUV+TP0r6RWHpWKs9LoGGl0y0aBjo0y0AmhlpNAi6XQgaBQTSgAgoEBBsDyEggAIIAAEgASKACCBIAG1RZYgIAIAE9wQBpQAAQBUNiIAKAhsQAFANqCAiEgAACAgCoAPQAYeoAAAAQBAAAAUBBGjn1vk4HIpjv6L2x2ittb1OvOnyH2q6PwOP8AZ7pWfF1zkcjqNvT8WuTm+u1fw+1N9o+mn2XIxxl4+THaZiLUmJmJ17PiusZvsjH2K4fE4uHF99x5v8bNXj27953vJrUz493Hb7j3/Ev8co9zDkvPEweqd2+HXc/XTKsbly8G1Z6fxfRO6/Crqd79vm7cdXePmX3VrRl6GytWcVU40+iD4bo9J6Q40xjX4bd6T0wDTGOD0N/pPTv2Bp9H0ZRRs9JFQYRVl6WWmWkVhpfSy0ugY6XSgIaZRBoE0AAAogoCKGhQBEAADZIAAIIqAAAACAACKAIoCGw2B5QBAAQAUQBVAAAJQEAQBAVNgoAAASCKgIACAAGwAQAARQeh4gBh6gEABREA2AG0BUADYAJaImsxMbiY7vkep9enP9gPuPF6FzZ4nH5M75UUrXHv1T2iN7ny+umdPP6jX1f2edUxx/8AK5W4/wD5Vctr2/Evmx4nR8lcvS+LalZrX4caiY1p6+PxDzOmx/6Djz/7cPUxO09PBl/at1YbIhKx2ZxGhDRpdMtbFY6NQul0Iw18l0y0mhU0aZaAQ0oIaAAAAAAAAAFNAAIqCdAAEABQEAQFQNgAACAioCCiG1FBJkAQVIAIAChKKigAACAu0BEAQ4GwFQAFA90BUAQAEANgAgKgAAgKCA9EQYepUNgiogCoAAJIKIoCB7iJZ5HK6d1DkfZzr956nbDgpki1ePix1mLR272mY3vt7aevLm5HP4PE6H13By+ZgwWzYqzjrlyRWbzqe0RPlz2enr+Jf5vB6VW9emcaL3i8+iO+tPVw+zyulXpfpnHtS0Wr6fMTt62Hw6z08eX9q6K+GyPDCvhsgRdKiigGgANAgugEFQAAQAAAFUQFABAEEAQRUAFAABAVAAQURBUAAAA2AbQVAAAEBU2AAAACgIIKgCAIou0AABQAQQAQAEED2AAABAUQU6ACBsAegCOb1AAAICiAAAACiBAiDy8/L4HFzdVx26bn5nLz8Lzg4/xJxxG+8zPasPUlxxyudj5/L4vB6fHJnNwb+u+TL8OlIifnqZmfpEMbP6vV8W/+kfOdAyY8nS8XwqeiImYmPT6e+3vYXz/2dvlydMr8XFOK1bTGvVE7+sS+gw+G8f6vNt8bK6q+GcMK+GyFZUCBVAEABQQ2gGkVRBUEABAAUAE6BoC1ABEFRAUAAFBDwAIoABPYQEmUlRZ7oAi7QEAAABQTYAAAqAoAgACICAACgCAogCoAgAIIqAACgIABtUFRUQAVEkVJFd8CDm9SiAKgAAAB7AAgIAAkuXL1Kelcv484JzVyYL4piJ15138fR1y05fElks5VxyuF7HzfScVsHD+HO51aZiZjW9vYweHPmneRvweIa5yOdyuWVtdlfDOGFfDOEaZBAiqAoAkgGxBBRAVFQANgAAAgMqgAbAAARABVEAAAQBJA8GxBAAAAFT9oKAJAKIAAdgAUREVAAkAJJQAABFFABBAFSggIoigCKCAKogSICLAgQQeAA2AbQAd4Dm9QCAoIAAIAAACAIKstOXxLa13jcKjy8lJm/Z0YazERttnFEzvTKKaVmRnXwzjwxiGUI0qooBMiAAAAoIBsAQAAEoAISCIKgAoAAIoACgAyShIB4JlBUAEACVAE2Cn7U8IDLaIoAAAgIogCoqbAAkBAAAAAUQAAARFQ2IAAAgKgKBIIAgICoobAAAB3Kg5vT0AEAAAAAQFQAAAGNoZJMKMPSaZ6QEiFAQVAAAUBBFNoCrKAAAMgCAgAAAKhKiogCoAAGxDek2CobAAAQANKHhCQBFQAABQABAA8kAGzaCAAAAAIAKiioAAIIqICKACKgAAACAoCogqAACAAogA7wGHoASUFEAN9zYAAAAAAAAmw6aRRRBUEAADYCiKgAbNiACISAAioAB5ANiKKgACoIBMoHSAVUQAABAAFEBUEVAFRQRQADwIIbPCe6gu0ABUEAQVRAQBQEDagCDIaBAAUEJAAFABEAAARUAAABSEXaAAe4O7YDm9AAAAAAAGwAQANgAKmlBFNgIAAIAQvv5QDwAJ1FBEAJEBCVXhIGgAA6AeRBCUBdgKACIIoCAAAAAn7VUBBAUARQBNm0BfJtCAPdUUEVAANgiAqiKIgGxFQAQABAAA2gvAAAAEAFAEAAARUAAADYAADuAc3oBAFBAVAUABAQBUAFQBQEVBUEUgBAEBKAogIASAAgqgAJQQAAUAECAAAQF2kgAG02obDYASgAB5EVN6SQGSbQBQAQAFQAEBUAAAAAQQAQoAIEhICAoAAACAIoqAAIAoIAAAACCoCoAO9Ngw7gAAAAIC7QAAAAAEAUAABBOqgIgAAABIAAaNKAIIqAAAAAAAACAEiKAAAAiAAAgKgoIoAIKggCgAICCgAAAAgCACIAAAgEgKAAAoIgACKigGiAEAAAAADQAIqAAAO4QYd12bQBUAAAAAAAEVAUAE6AIggAAAAAAKgIAqAAAAAAAASbSQXSCAqAoAbAAEEJkARQABABAVAAAVAJRQAAAAAABBABEAAPYkRQAAAEAAAAEWUA2gKAAAAEioAAAACAAAA7QGHcBAUQFAAAAAAAABASgCIAAogqCAAAAAAAAAAIAqAASIoAAKgAGzYJIAAAiKEgCALtAQAFQAARQEAUAQFEEToAIAAAiqAbEAFQBEFE2oEosoACKAAoAISAAgAKICiAAAAAOwBh6AAAAAABABUUGeoKgdAA6CsRFQ2SAAAAABsANoCoAAAACggAAAAACKACIioApPY2bRUXYgAAAAAAIAkgongkFQFBARAJF4B3A4IqKJ0QBE2Lo0CKaUGJ5XRoVDZMAgAoIoKgSbARQRFAEFAEUBAAABBREHYCsvT1ABOmwTsHQURAAAQUJ7AAEgCGlAQAAAAAQRUFA7gACgACCgiCpsAT9VFAEEVFEQPAASb2ihIAgAAAAAIAgqoAiKAAG+4iKCiAAAAACIKggqbBTZsAAAEAAQUVBUEkAAVJBBZRUF2ACAAAgAKgAK//9k="
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 10,
        "price": 2,
        "imageUrl": "data:image/jpeg;base64,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"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "data:image/jpeg;base64,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"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR45",
        "nameEn": "Round burr - BR45",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      }
    ],
    "total": 461,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "01‏/10‏/2026 09:08 م",
    "created_at": "2026-10-01T19:08:04.213+00:00",
    "notes": "الاستلام يوم الاحد في الكليه الساعه 12",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "1870cad0-534a-44e7-a4b7-18cce0db5054",
    "orderNumber": "#41143472",
    "rawOrderNumber": "41143472",
    "invoiceNumber": "#INV-HIST-41143472",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "مفتاح فرج أبوعنيزة ",
    "phone": "0910429049",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 6,
    "items": [
      {
        "id": "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab",
        "name": "Rubber bowl + plastic spatula",
        "nameEn": "Rubber bowl + plastic spatula",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/75fb4e12-d06f-4a0e-b7ac-d571b9e996ab.jpg"
      },
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 1,
        "price": 17,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 1,
        "price": 3,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      },
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 1,
        "price": 5,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      }
    ],
    "total": 70,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "01‏/10‏/2026 07:46 م",
    "created_at": "2026-10-01T17:46:36.901+00:00",
    "notes": "الاستلام يوم الاحد الساعة 12\n",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "37425cc6-35ba-4521-af2f-b301a1c0889d",
    "orderNumber": "#18160951",
    "rawOrderNumber": "18160951",
    "invoiceNumber": "#INV-HIST-18160951",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "محمد ابراهيم",
    "phone": "0919452544",
    "secondaryPhone": "0930003695",
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "Suq Al-Jumla, شرفة الملاحة, طرابلس, ليبيا",
    "latitude": 32.880156,
    "longitude": 13.278825,
    "itemsCount": 7,
    "items": [
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "106ad65c-3074-4cfb-8643-840f36f833f5",
        "name": "Carving wax - Single Piece",
        "nameEn": "Carving wax - Single Piece",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/106ad65c-3074-4cfb-8643-840f36f833f5.jpg"
      },
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 1,
        "price": 5,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab",
        "name": "Rubber bowl + plastic spatula",
        "nameEn": "Rubber bowl + plastic spatula",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/75fb4e12-d06f-4a0e-b7ac-d571b9e996ab.jpg"
      },
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 1,
        "price": 17,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 1,
        "price": 3,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      }
    ],
    "total": 72,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "01‏/10‏/2026 04:12 م",
    "created_at": "2026-10-01T14:12:53.135+00:00",
    "notes": "[الشارع/المنطقة: Suq Al-Jumla, شرفة الملاحة, طرابلس, ليبيا] [خرائط جوجل: https://www.google.com/maps?q=32.880156,13.278825]",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "430b5e0d-f0b9-48b2-a6e3-7712466345ea",
    "orderNumber": "#69400269",
    "rawOrderNumber": "69400269",
    "invoiceNumber": "#INV-HIST-69400269",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "الورفلي ورفلي",
    "phone": "0944640712",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 33,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 2,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 2,
        "price": 15,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 4,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 4,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 2,
        "price": 15,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      }
    ],
    "total": 614,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "01‏/10‏/2026 12:29 م",
    "created_at": "2026-10-01T10:29:29.03+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "26e895e2-901c-41a5-8159-b87408b39b4d",
    "orderNumber": "#23670940",
    "rawOrderNumber": "23670940",
    "invoiceNumber": "#INV-HIST-23670940",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "مؤمن",
    "phone": "000000000",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 5,
    "items": [
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 1,
        "price": 5,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 1,
        "price": 17,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 1,
        "price": 3,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      }
    ],
    "total": 55,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "01‏/10‏/2026 10:58 ص",
    "created_at": "2026-10-01T08:58:57.523+00:00",
    "notes": "بدون rubber ",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "b4ecee79-0321-4b1e-a56a-2d7e80b40569",
    "orderNumber": "#86119194",
    "rawOrderNumber": "86119194",
    "invoiceNumber": "#INV-HIST-86119194",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "مرام",
    "phone": "0916077601",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 6,
    "items": [
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 1,
        "price": 5,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab",
        "name": "Rubber bowl + plastic spatula",
        "nameEn": "Rubber bowl + plastic spatula",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/75fb4e12-d06f-4a0e-b7ac-d571b9e996ab.jpg"
      },
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 1,
        "price": 17,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 1,
        "price": 3,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      }
    ],
    "total": 70,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "01‏/10‏/2026 10:53 ص",
    "created_at": "2026-10-01T08:53:25.048+00:00",
    "notes": "يوم الأحد الساعة 10",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "cad2f971-7cd6-4e75-9f4b-71b0c6208126",
    "orderNumber": "#56463025",
    "rawOrderNumber": "56463025",
    "invoiceNumber": "#INV-HIST-56463025",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "مؤمن",
    "phone": "0000000000",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "box-17-purple",
        "name": "17\" Professional Box — GT-MAX (17 inch) — بنفسجي",
        "nameEn": "17\" Professional Box — GT-MAX (17 inch) — Purple",
        "qty": 1,
        "price": 95,
        "imageUrl": "/absolute-dental/accessories/box17-purple.jpg"
      }
    ],
    "total": 95,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "01‏/10‏/2026 10:49 ص",
    "created_at": "2026-10-01T08:49:10.099+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "f0aae1f0-0fe3-4e8d-a281-c0ec78d20b98",
    "orderNumber": "#18384029",
    "rawOrderNumber": "18384029",
    "invoiceNumber": "#INV-HIST-18384029",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "عقبة",
    "phone": "000000000",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 15,
    "items": [
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 2,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      }
    ],
    "total": 362,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "01‏/10‏/2026 10:48 ص",
    "created_at": "2026-10-01T08:48:11.443+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "86e624cd-4896-4ce4-a235-9ac626ecb0e2",
    "orderNumber": "#19944146",
    "rawOrderNumber": "19944146",
    "invoiceNumber": "#INV-HIST-19944146",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "ايوب",
    "phone": "000000000",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 3,
    "items": [
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://api.kurofangs.id.ly/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      }
    ],
    "total": 280,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "01‏/10‏/2026 10:46 ص",
    "created_at": "2026-10-01T08:46:15.274+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "a94c9a07-9e86-4ffc-af3d-0a94fd0c985b",
    "orderNumber": "#75735422",
    "rawOrderNumber": "75735422",
    "invoiceNumber": "#INV-HIST-75735422",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "هديل النفاتي",
    "phone": "0912801073",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 23,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      }
    ],
    "total": 378,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "30‏/09‏/2026 10:04 ص",
    "created_at": "2026-09-30T08:04:52.539+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "b56fe05a-7402-48a9-8935-dda89e3836bc",
    "orderNumber": "#98426493",
    "rawOrderNumber": "98426493",
    "invoiceNumber": "#INV-HIST-98426493",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "ملاك فرحات",
    "phone": "0915502237",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "6249dd01-8b62-4dfa-a043-b619c30df688-3df3932e-6aaf-40be-b1d5-9d0469a9767f",
        "name": "16.5\" Organizer Box (16.5 inch) — Dark Navy Blue",
        "nameEn": "16.5\" Organizer Box (16.5 inch) — Dark Navy Blue",
        "qty": 1,
        "price": 75,
        "imageUrl": "/absolute-dental/accessories/box16_5-blue.jpg"
      }
    ],
    "total": 75,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "29‏/09‏/2026 08:25 ص",
    "created_at": "2026-09-29T06:25:34.937+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "05931b46-d235-481c-9f87-c4e7fe2eb31a",
    "orderNumber": "#68767212",
    "rawOrderNumber": "68767212",
    "invoiceNumber": "#INV-HIST-68767212",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "الهام عامر علي المجدوب ",
    "phone": "0930387048",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 21,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      }
    ],
    "total": 316,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "28‏/09‏/2026 06:14 م",
    "created_at": "2026-09-28T16:14:15.549+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "75e62757-807a-42e6-9188-c108c87c647c",
    "orderNumber": "#72319817",
    "rawOrderNumber": "72319817",
    "invoiceNumber": "#INV-HIST-72319817",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "ساسي",
    "phone": "**0000000",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      }
    ],
    "total": 15,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "28‏/09‏/2026 10:23 ص",
    "created_at": "2026-09-28T08:23:33.676+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "13f784bf-3548-4a4f-935b-31c978796dd1",
    "orderNumber": "#95616654",
    "rawOrderNumber": "95616654",
    "invoiceNumber": "#INV-HIST-95616654",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "ساسي",
    "phone": "0922634570",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 5,
    "items": [
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 1,
        "price": 5,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab",
        "name": "Rubber bowl + plastic spatula",
        "nameEn": "Rubber bowl + plastic spatula",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/75fb4e12-d06f-4a0e-b7ac-d571b9e996ab.jpg"
      },
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 1,
        "price": 17,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      }
    ],
    "total": 67,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "28‏/09‏/2026 10:22 ص",
    "created_at": "2026-09-28T08:22:37.252+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "fcd63be4-8878-46a1-8c0c-eda07264f482",
    "orderNumber": "#10233976",
    "rawOrderNumber": "10233976",
    "invoiceNumber": "#INV-HIST-10233976",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "مشكال",
    "phone": "+218945398064",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 23,
    "items": [
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": null,
        "name": "منتج طبي",
        "qty": 1,
        "price": 2,
        "imageUrl": null
      }
    ],
    "total": 130,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "28‏/09‏/2026 10:15 ص",
    "created_at": "2026-09-28T08:15:56.647+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "88c6a6b1-b54f-4619-85ea-c16004ecdd01",
    "orderNumber": "#55001870",
    "rawOrderNumber": "55001870",
    "invoiceNumber": "#INV-HIST-55001870",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "سمية حاتم التركي",
    "phone": "0942298675",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 22,
    "items": [
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      }
    ],
    "total": 376,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "28‏/09‏/2026 09:50 ص",
    "created_at": "2026-09-28T07:50:08.419+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "58bc7f92-bd4c-4bea-943d-0aa01251d5e5",
    "orderNumber": "#53371836",
    "rawOrderNumber": "53371836",
    "invoiceNumber": "#INV-HIST-53371836",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "عبد الرؤوف السيفاو",
    "phone": "+218 91-7923310",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 22,
    "items": [
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 5,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      }
    ],
    "total": 318,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "28‏/09‏/2026 09:44 ص",
    "created_at": "2026-09-28T07:44:42.403+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "de4fc5f2-e11c-4b27-81a3-85e1970ae0cb",
    "orderNumber": "#39634816",
    "rawOrderNumber": "39634816",
    "invoiceNumber": "#INV-HIST-39634816",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "رنا ناصر ",
    "phone": "0913675602",
    "secondaryPhone": "0913675602",
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 6,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 2,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      }
    ],
    "total": 260,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "28‏/09‏/2026 06:12 ص",
    "created_at": "2026-09-28T04:12:10.206+00:00",
    "notes": "نبيه يوم الثلاثاء الساعه 10 صباحاً ",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "73307d5b-2244-4aba-93c7-a881ee00d899",
    "orderNumber": "#47090658",
    "rawOrderNumber": "47090658",
    "invoiceNumber": "#INV-HIST-47090658",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "رغدة عبدالرحمن الدالي ",
    "phone": "0921483659",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 74,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 20,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "4caab5ef-1c9c-411e-8b6e-76781a07fd97",
        "name": "Round burr - BR46",
        "nameEn": "Round burr - BR46",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/4caab5ef-1c9c-411e-8b6e-76781a07fd97.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 3,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 20,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": null,
        "name": "منتج طبي",
        "qty": 3,
        "price": 2,
        "imageUrl": null
      }
    ],
    "total": 480,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "28‏/09‏/2026 12:11 ص",
    "created_at": "2026-09-27T22:11:29.015+00:00",
    "notes": "مجموعة A\nالاستلام يوم الأحد 3 - 10 \n أمام مدرج 1\nالساعة 12 ",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "aa0c075f-9531-4eb3-882a-7ac84ca31d46",
    "orderNumber": "#51350119",
    "rawOrderNumber": "51350119",
    "invoiceNumber": "#INV-HIST-51350119",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "عبد السلام علي غازي ",
    "phone": "0924776175",
    "secondaryPhone": "0944891065",
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "السراج, الجفارة, ليبيا",
    "latitude": 32.83403,
    "longitude": 13.075493,
    "itemsCount": 7,
    "items": [
      {
        "id": "106ad65c-3074-4cfb-8643-840f36f833f5",
        "name": "Carving wax - Single Piece",
        "nameEn": "Carving wax - Single Piece",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/106ad65c-3074-4cfb-8643-840f36f833f5.jpg"
      },
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 1,
        "price": 5,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab",
        "name": "Rubber bowl + plastic spatula",
        "nameEn": "Rubber bowl + plastic spatula",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/75fb4e12-d06f-4a0e-b7ac-d571b9e996ab.jpg"
      },
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 1,
        "price": 17,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 1,
        "price": 3,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      }
    ],
    "total": 72,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "27‏/09‏/2026 06:53 م",
    "created_at": "2026-09-27T16:53:46.488+00:00",
    "notes": "[الشارع/المنطقة: السراج, الجفارة, ليبيا] [خرائط جوجل: https://www.google.com/maps?q=32.83403,13.075493]",
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "bb56a7ed-beef-4ac8-93e4-029af2edf35a",
    "orderNumber": "#37344874",
    "rawOrderNumber": "37344874",
    "invoiceNumber": "#INV-HIST-37344874",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "ابتهال صلاح الكويل",
    "phone": "0943483892",
    "secondaryPhone": null,
    "email": null,
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      }
    ],
    "total": 250,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "26‏/09‏/2026 04:26 م",
    "created_at": "2026-09-26T14:26:07.003+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "12a624e6-a84b-49f5-8d84-68672b02b699",
    "orderNumber": "#19614135",
    "rawOrderNumber": "19614135",
    "invoiceNumber": "#INV-HIST-19614135",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "عيد المؤمن",
    "phone": "00000000",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 1,
    "items": [
      {
        "id": "ad31f7c7-d710-4622-8e3f-377b9c657818",
        "name": "NSK High speed handpiece",
        "nameEn": "NSK High speed handpiece",
        "qty": 1,
        "price": 135,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ad31f7c7-d710-4622-8e3f-377b9c657818.jpg"
      }
    ],
    "total": 135,
    "discountAmount": 5,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "23‏/09‏/2026 09:41 ص",
    "created_at": "2026-09-23T07:41:20.312+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "1f96ef0d-b798-45d2-9763-c77f10290548",
    "orderNumber": "#41066677",
    "rawOrderNumber": "41066677",
    "invoiceNumber": "#INV-HIST-41066677",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "محمود",
    "phone": "0943412125",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "العزيزية",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 8,
    "items": [
      {
        "id": "ba48f5b5-38c2-4571-94f5-67be7d38aab3",
        "name": "Dental Spatula",
        "nameEn": "Dental Spatula",
        "qty": 1,
        "price": 17,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/ba48f5b5-38c2-4571-94f5-67be7d38aab3.jpg"
      },
      {
        "id": "75fb4e12-d06f-4a0e-b7ac-d571b9e996ab",
        "name": "Rubber bowl + plastic spatula",
        "nameEn": "Rubber bowl + plastic spatula",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/75fb4e12-d06f-4a0e-b7ac-d571b9e996ab.jpg"
      },
      {
        "id": "0c18deeb-a571-419b-adf2-8060db42d8cf",
        "name": "Student Glass Slab (Mixing Glass Slab)",
        "nameEn": "Student Glass Slab (Mixing Glass Slab)",
        "qty": 1,
        "price": 3,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/0c18deeb-a571-419b-adf2-8060db42d8cf.jpg"
      },
      {
        "id": "6c359465-a522-4654-933f-a64c627c6b38",
        "name": "Carving wax (Full Box) - 3 Pieces",
        "nameEn": "Carving wax (Full Box) - 3 Pieces",
        "qty": 3,
        "price": 5,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/6c359465-a522-4654-933f-a64c627c6b38.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "e009eaf4-f041-4706-b27d-daa394e512d3",
        "name": "Wax carver",
        "nameEn": "Wax carver",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e009eaf4-f041-4706-b27d-daa394e512d3.jpg"
      }
    ],
    "total": 80,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "23‏/09‏/2026 09:26 ص",
    "created_at": "2026-09-23T07:26:28.026+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  },
  {
    "id": "5cb3aba7-a3ff-4ce0-bad6-a1d352d6951f",
    "orderNumber": "#51750208",
    "rawOrderNumber": "51750208",
    "invoiceNumber": "#INV-HIST-51750208",
    "orderType": "historical",
    "isHistorical": true,
    "inventoryDeduction": "historical_exempt",
    "customerName": "المقدمي",
    "phone": "000000000",
    "secondaryPhone": null,
    "email": "admin@smylodent.com",
    "university": "جامعة طرابلس",
    "college": "كلية طب الأسنان",
    "address": "طرابلس",
    "latitude": null,
    "longitude": null,
    "itemsCount": 16,
    "items": [
      {
        "id": "fa042791-6d8d-48c1-8f60-f1a103162a1e",
        "name": "Study cast + high-speed NSK hand piece",
        "nameEn": "Study cast + high-speed NSK hand piece",
        "qty": 1,
        "price": 250,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/fa042791-6d8d-48c1-8f60-f1a103162a1e.jpg"
      },
      {
        "id": "e625888c-c1b0-4479-9117-76a1215a75f4",
        "name": "Fissure bur - CD 52F (red)",
        "nameEn": "Fissure bur - CD 52F (red)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/e625888c-c1b0-4479-9117-76a1215a75f4.jpg"
      },
      {
        "id": "af6c097d-6f53-4ce3-8d52-f9b9fc095295",
        "name": "Periodontal Probe",
        "nameEn": "Periodontal Probe",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/af6c097d-6f53-4ce3-8d52-f9b9fc095295.jpg"
      },
      {
        "id": "8a2c351d-359c-4f5e-8c37-3d4ecb1eba19",
        "name": "Fissure Bur - SF 46",
        "nameEn": "Fissure Bur - SF 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/8a2c351d-359c-4f5e-8c37-3d4ecb1eba19.jpg"
      },
      {
        "id": "5528000b-cde4-4b27-8745-7956dc0e4b78",
        "name": "Artificial Teeth - Lower First Molar",
        "nameEn": "Artificial Teeth - Lower First Molar",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5528000b-cde4-4b27-8745-7956dc0e4b78.jpg"
      },
      {
        "id": "2ebc663e-0967-4d6a-b8be-b07b9e84659c",
        "name": "Inverted cone bur - SI 46",
        "nameEn": "Inverted cone bur - SI 46",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/2ebc663e-0967-4d6a-b8be-b07b9e84659c.jpg"
      },
      {
        "id": "c9442057-a22f-4ce8-a237-d37f2024146f",
        "name": "Torch 261 Jet Lighter",
        "nameEn": "Torch 261 Jet Lighter",
        "qty": 1,
        "price": 60,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c9442057-a22f-4ce8-a237-d37f2024146f.jpg"
      },
      {
        "id": "c554e6ff-3a55-4e36-aed6-562f70601342",
        "name": "Wax knife",
        "nameEn": "Wax knife",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c554e6ff-3a55-4e36-aed6-562f70601342.jpg"
      },
      {
        "id": "d02e821e-91e3-4ed4-869e-f636142d8247",
        "name": "Artificial Teeth - Central Incisor",
        "nameEn": "Artificial Teeth - Central Incisor",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d02e821e-91e3-4ed4-869e-f636142d8247.jpg"
      },
      {
        "id": "627bdb62-3364-497b-8aa6-3b911ad78f26",
        "name": "niddle bur - TC 10 (Blue)",
        "nameEn": "niddle bur - TC 10 (Blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/627bdb62-3364-497b-8aa6-3b911ad78f26.jpg"
      },
      {
        "id": "187f6429-fee1-4f50-8edc-2a18bac1de35",
        "name": "diamond flame bur - FO 32 (yellow)",
        "nameEn": "diamond flame bur - FO 32 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/187f6429-fee1-4f50-8edc-2a18bac1de35.jpg"
      },
      {
        "id": "36e0d204-3613-44b0-b74e-0ba7869420c4",
        "name": "Long taper with flat end - TF12 (yellow)",
        "nameEn": "Long taper with flat end - TF12 (yellow)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/36e0d204-3613-44b0-b74e-0ba7869420c4.jpg"
      },
      {
        "id": "c78f57a0-54d0-4602-aa05-d92a82398a2f",
        "name": "Long taper with flat end - TF12 (blue)",
        "nameEn": "Long taper with flat end - TF12 (blue)",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/c78f57a0-54d0-4602-aa05-d92a82398a2f.jpg"
      },
      {
        "id": "5b7d387c-f150-4e64-90fe-b21ac1249ebc",
        "name": "Dental Mouth Mirror",
        "nameEn": "Dental Mouth Mirror",
        "qty": 1,
        "price": 15,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/5b7d387c-f150-4e64-90fe-b21ac1249ebc.jpg"
      },
      {
        "id": "d2a56c58-bf46-47aa-b803-6546aa7491c5",
        "name": "Wheel Round Bur - WR 13",
        "nameEn": "Wheel Round Bur - WR 13",
        "qty": 1,
        "price": 2,
        "imageUrl": "https://102-203-202-115.sslip.io/storage/v1/object/public/pdf-sheets/smylodent-products/d2a56c58-bf46-47aa-b803-6546aa7491c5.jpg"
      },
      {
        "id": null,
        "name": "منتج طبي",
        "qty": 1,
        "price": 2,
        "imageUrl": null
      }
    ],
    "total": 377,
    "discountAmount": 0,
    "shippingFee": 0,
    "status": "delivered",
    "originalStatus": "delivered",
    "date": "23‏/09‏/2026 09:19 ص",
    "created_at": "2026-09-23T07:19:06.228+00:00",
    "notes": null,
    "system_scope": "LEGACY",
    "orderSource": "website",
    "source": "Admin الأرشيف التاريخي (جرد قديم)",
    "statusHistory": []
  }
];
const INITIAL_PURCHASES = [];
const INITIAL_EXPENSES = [];
const INITIAL_ACTIVITY = [];
if (typeof window !== 'undefined') {
  window.ERP_CUTOFF_DATE = window.ERP_CUTOFF_DATE || '2026-10-07T01:55:00+02:00';
  window.ERP_SEEDED_PRODUCTS = INITIAL_PRODUCTS;
  window.ERP_SEEDED_ORDERS = INITIAL_ORDERS;
  window.ERP_SEEDED_PURCHASES = INITIAL_PURCHASES;
}
