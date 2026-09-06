import type { KmerLocale } from "./index.js";

export type CommonMessages = {
  language: string; open: string; close: string; save: string; cancel: string;
  loading: string; signIn: string; createAccount: string; support: string;
  home: string; services: string; products: string; contact: string;
};

const en: CommonMessages = { language: "Language", open: "Open", close: "Close", save: "Save", cancel: "Cancel", loading: "Loading", signIn: "Sign in", createAccount: "Create account", support: "Support", home: "Home", services: "Services", products: "Products", contact: "Contact us" };

export const COMMON_MESSAGES: Record<KmerLocale, CommonMessages> = {
  en,
  fr: { language: "Langue", open: "Ouvrir", close: "Fermer", save: "Enregistrer", cancel: "Annuler", loading: "Chargement", signIn: "Se connecter", createAccount: "Créer un compte", support: "Support", home: "Accueil", services: "Services", products: "Produits", contact: "Nous contacter" },
  es: { language: "Idioma", open: "Abrir", close: "Cerrar", save: "Guardar", cancel: "Cancelar", loading: "Cargando", signIn: "Iniciar sesión", createAccount: "Crear cuenta", support: "Soporte", home: "Inicio", services: "Servicios", products: "Productos", contact: "Contáctanos" },
  pt: { language: "Idioma", open: "Abrir", close: "Fechar", save: "Guardar", cancel: "Cancelar", loading: "A carregar", signIn: "Iniciar sessão", createAccount: "Criar conta", support: "Suporte", home: "Início", services: "Serviços", products: "Produtos", contact: "Contacte-nos" },
  de: { language: "Sprache", open: "Öffnen", close: "Schließen", save: "Speichern", cancel: "Abbrechen", loading: "Wird geladen", signIn: "Anmelden", createAccount: "Konto erstellen", support: "Support", home: "Startseite", services: "Dienste", products: "Produkte", contact: "Kontakt" },
  "zh-Hans": { language: "语言", open: "打开", close: "关闭", save: "保存", cancel: "取消", loading: "加载中", signIn: "登录", createAccount: "创建账户", support: "支持", home: "首页", services: "服务", products: "产品", contact: "联系我们" },
  ar: { language: "اللغة", open: "فتح", close: "إغلاق", save: "حفظ", cancel: "إلغاء", loading: "جار التحميل", signIn: "تسجيل الدخول", createAccount: "إنشاء حساب", support: "الدعم", home: "الرئيسية", services: "الخدمات", products: "المنتجات", contact: "اتصل بنا" },
  hi: { language: "भाषा", open: "खोलें", close: "बंद करें", save: "सहेजें", cancel: "रद्द करें", loading: "लोड हो रहा है", signIn: "साइन इन", createAccount: "खाता बनाएं", support: "सहायता", home: "होम", services: "सेवाएं", products: "उत्पाद", contact: "संपर्क करें" },
  bn: { language: "ভাষা", open: "খুলুন", close: "বন্ধ করুন", save: "সংরক্ষণ", cancel: "বাতিল", loading: "লোড হচ্ছে", signIn: "সাইন ইন", createAccount: "অ্যাকাউন্ট তৈরি করুন", support: "সহায়তা", home: "হোম", services: "সেবা", products: "পণ্য", contact: "যোগাযোগ করুন" },
  id: { language: "Bahasa", open: "Buka", close: "Tutup", save: "Simpan", cancel: "Batal", loading: "Memuat", signIn: "Masuk", createAccount: "Buat akun", support: "Dukungan", home: "Beranda", services: "Layanan", products: "Produk", contact: "Hubungi kami" },
  ja: { language: "言語", open: "開く", close: "閉じる", save: "保存", cancel: "キャンセル", loading: "読み込み中", signIn: "サインイン", createAccount: "アカウントを作成", support: "サポート", home: "ホーム", services: "サービス", products: "製品", contact: "お問い合わせ" },
  ru: { language: "Язык", open: "Открыть", close: "Закрыть", save: "Сохранить", cancel: "Отмена", loading: "Загрузка", signIn: "Войти", createAccount: "Создать аккаунт", support: "Поддержка", home: "Главная", services: "Сервисы", products: "Продукты", contact: "Связаться с нами" },
  it: { language: "Lingua", open: "Apri", close: "Chiudi", save: "Salva", cancel: "Annulla", loading: "Caricamento", signIn: "Accedi", createAccount: "Crea account", support: "Supporto", home: "Home", services: "Servizi", products: "Prodotti", contact: "Contattaci" },
  ko: { language: "언어", open: "열기", close: "닫기", save: "저장", cancel: "취소", loading: "로드 중", signIn: "로그인", createAccount: "계정 만들기", support: "지원", home: "홈", services: "서비스", products: "제품", contact: "문의하기" },
  tr: { language: "Dil", open: "Aç", close: "Kapat", save: "Kaydet", cancel: "İptal", loading: "Yükleniyor", signIn: "Giriş yap", createAccount: "Hesap oluştur", support: "Destek", home: "Ana sayfa", services: "Hizmetler", products: "Ürünler", contact: "Bize ulaşın" },
  vi: { language: "Ngôn ngữ", open: "Mở", close: "Đóng", save: "Lưu", cancel: "Hủy", loading: "Đang tải", signIn: "Đăng nhập", createAccount: "Tạo tài khoản", support: "Hỗ trợ", home: "Trang chủ", services: "Dịch vụ", products: "Sản phẩm", contact: "Liên hệ" },
  ur: { language: "زبان", open: "کھولیں", close: "بند کریں", save: "محفوظ کریں", cancel: "منسوخ", loading: "لوڈ ہو رہا ہے", signIn: "سائن اِن", createAccount: "اکاؤنٹ بنائیں", support: "مدد", home: "ہوم", services: "خدمات", products: "مصنوعات", contact: "رابطہ کریں" },
  nl: { language: "Taal", open: "Openen", close: "Sluiten", save: "Opslaan", cancel: "Annuleren", loading: "Laden", signIn: "Inloggen", createAccount: "Account maken", support: "Ondersteuning", home: "Home", services: "Diensten", products: "Producten", contact: "Neem contact op" },
  pl: { language: "Język", open: "Otwórz", close: "Zamknij", save: "Zapisz", cancel: "Anuluj", loading: "Ładowanie", signIn: "Zaloguj się", createAccount: "Utwórz konto", support: "Pomoc", home: "Strona główna", services: "Usługi", products: "Produkty", contact: "Skontaktuj się" },
  fa: { language: "زبان", open: "باز کردن", close: "بستن", save: "ذخیره", cancel: "لغو", loading: "در حال بارگذاری", signIn: "ورود", createAccount: "ایجاد حساب", support: "پشتیبانی", home: "خانه", services: "خدمات", products: "محصولات", contact: "تماس با ما" },
};
