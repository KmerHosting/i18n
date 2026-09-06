// src/index.ts
var SUPPORTED_LOCALES = [
  "en",
  "fr",
  "es",
  "pt",
  "de",
  "zh-Hans",
  "ar",
  "hi",
  "bn",
  "id",
  "ja",
  "ru",
  "it",
  "ko",
  "tr",
  "vi",
  "ur",
  "nl",
  "pl",
  "fa"
];
var DEFAULT_LOCALE = "en";
var LOCALE_COOKIE = "kh_locale";
var RTL_LOCALES = new Set(["ar", "fa", "ur"]);
var LOCALES = [
  { code: "en", flag: "\uD83C\uDDEC\uD83C\uDDE7", label: "English", nativeLabel: "English" },
  { code: "fr", flag: "\uD83C\uDDEB\uD83C\uDDF7", label: "French", nativeLabel: "Français" },
  { code: "es", flag: "\uD83C\uDDEA\uD83C\uDDF8", label: "Spanish", nativeLabel: "Español" },
  { code: "pt", flag: "\uD83C\uDDF5\uD83C\uDDF9", label: "Portuguese", nativeLabel: "Português" },
  { code: "de", flag: "\uD83C\uDDE9\uD83C\uDDEA", label: "German", nativeLabel: "Deutsch" },
  { code: "zh-Hans", flag: "\uD83C\uDDE8\uD83C\uDDF3", label: "Chinese Simplified", nativeLabel: "简体中文" },
  { code: "ar", flag: "\uD83C\uDDF8\uD83C\uDDE6", label: "Arabic", nativeLabel: "العربية" },
  { code: "hi", flag: "\uD83C\uDDEE\uD83C\uDDF3", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "bn", flag: "\uD83C\uDDE7\uD83C\uDDE9", label: "Bengali", nativeLabel: "বাংলা" },
  { code: "id", flag: "\uD83C\uDDEE\uD83C\uDDE9", label: "Indonesian", nativeLabel: "Bahasa Indonesia" },
  { code: "ja", flag: "\uD83C\uDDEF\uD83C\uDDF5", label: "Japanese", nativeLabel: "日本語" },
  { code: "ru", flag: "\uD83C\uDDF7\uD83C\uDDFA", label: "Russian", nativeLabel: "Русский" },
  { code: "it", flag: "\uD83C\uDDEE\uD83C\uDDF9", label: "Italian", nativeLabel: "Italiano" },
  { code: "ko", flag: "\uD83C\uDDF0\uD83C\uDDF7", label: "Korean", nativeLabel: "한국어" },
  { code: "tr", flag: "\uD83C\uDDF9\uD83C\uDDF7", label: "Turkish", nativeLabel: "Türkçe" },
  { code: "vi", flag: "\uD83C\uDDFB\uD83C\uDDF3", label: "Vietnamese", nativeLabel: "Tiếng Việt" },
  { code: "ur", flag: "\uD83C\uDDF5\uD83C\uDDF0", label: "Urdu", nativeLabel: "اردو" },
  { code: "nl", flag: "\uD83C\uDDF3\uD83C\uDDF1", label: "Dutch", nativeLabel: "Nederlands" },
  { code: "pl", flag: "\uD83C\uDDF5\uD83C\uDDF1", label: "Polish", nativeLabel: "Polski" },
  { code: "fa", flag: "\uD83C\uDDEE\uD83C\uDDF7", label: "Persian / Farsi", nativeLabel: "فارسی" }
];
var supported = new Set(SUPPORTED_LOCALES);
var legacyAliases = { zh: "zh-Hans", "zh-cn": "zh-Hans", "zh-sg": "zh-Hans" };
function normalizeLocale(value) {
  const raw = String(value || "").trim();
  if (supported.has(raw))
    return raw;
  const lower = raw.toLowerCase();
  if (legacyAliases[lower])
    return legacyAliases[lower];
  const language = lower.split(/[-_]/)[0];
  return supported.has(language) ? language : null;
}
function resolveLocale(...candidates) {
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      const resolved2 = resolveLocale(...candidate);
      if (resolved2 !== DEFAULT_LOCALE)
        return resolved2;
      continue;
    }
    const resolved = normalizeLocale(candidate);
    if (resolved)
      return resolved;
  }
  return DEFAULT_LOCALE;
}
function isRtl(locale) {
  const normalized = normalizeLocale(locale);
  return normalized ? RTL_LOCALES.has(normalized) : false;
}
function localeCookie(locale, domain) {
  const scope = domain ? `; Domain=${domain}` : "";
  return `${LOCALE_COOKIE}=${encodeURIComponent(locale)}; Path=/; Max-Age=31536000; SameSite=Lax; Secure${scope}`;
}
export {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_COOKIE,
  RTL_LOCALES,
  SUPPORTED_LOCALES,
  isRtl,
  localeCookie,
  normalizeLocale,
  resolveLocale
};
