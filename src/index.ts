export const SUPPORTED_LOCALES = [
  "en", "fr", "es", "pt", "de", "zh-Hans", "ar", "hi", "bn", "id",
  "ja", "ru", "it", "ko", "tr", "vi", "ur", "nl", "pl", "fa",
] as const;

export type KmerLocale = typeof SUPPORTED_LOCALES[number];

export const DEFAULT_LOCALE: KmerLocale = "en";
export const LOCALE_COOKIE = "kh_locale";
export const RTL_LOCALES = new Set<KmerLocale>(["ar", "fa", "ur"]);

export const LOCALES: ReadonlyArray<{ code: KmerLocale; flag: string; label: string; nativeLabel: string }> = [
  { code: "en", flag: "🇬🇧", label: "English", nativeLabel: "English" },
  { code: "fr", flag: "🇫🇷", label: "French", nativeLabel: "Français" },
  { code: "es", flag: "🇪🇸", label: "Spanish", nativeLabel: "Español" },
  { code: "pt", flag: "🇵🇹", label: "Portuguese", nativeLabel: "Português" },
  { code: "de", flag: "🇩🇪", label: "German", nativeLabel: "Deutsch" },
  { code: "zh-Hans", flag: "🇨🇳", label: "Chinese Simplified", nativeLabel: "简体中文" },
  { code: "ar", flag: "🇸🇦", label: "Arabic", nativeLabel: "العربية" },
  { code: "hi", flag: "🇮🇳", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "bn", flag: "🇧🇩", label: "Bengali", nativeLabel: "বাংলা" },
  { code: "id", flag: "🇮🇩", label: "Indonesian", nativeLabel: "Bahasa Indonesia" },
  { code: "ja", flag: "🇯🇵", label: "Japanese", nativeLabel: "日本語" },
  { code: "ru", flag: "🇷🇺", label: "Russian", nativeLabel: "Русский" },
  { code: "it", flag: "🇮🇹", label: "Italian", nativeLabel: "Italiano" },
  { code: "ko", flag: "🇰🇷", label: "Korean", nativeLabel: "한국어" },
  { code: "tr", flag: "🇹🇷", label: "Turkish", nativeLabel: "Türkçe" },
  { code: "vi", flag: "🇻🇳", label: "Vietnamese", nativeLabel: "Tiếng Việt" },
  { code: "ur", flag: "🇵🇰", label: "Urdu", nativeLabel: "اردو" },
  { code: "nl", flag: "🇳🇱", label: "Dutch", nativeLabel: "Nederlands" },
  { code: "pl", flag: "🇵🇱", label: "Polish", nativeLabel: "Polski" },
  { code: "fa", flag: "🇮🇷", label: "Persian / Farsi", nativeLabel: "فارسی" },
];

const supported = new Set<string>(SUPPORTED_LOCALES);
const legacyAliases: Record<string, KmerLocale> = { zh: "zh-Hans", "zh-cn": "zh-Hans", "zh-sg": "zh-Hans" };

export function normalizeLocale(value: unknown): KmerLocale | null {
  const raw = String(value || "").trim();
  if (supported.has(raw)) return raw as KmerLocale;
  const lower = raw.toLowerCase();
  if (legacyAliases[lower]) return legacyAliases[lower];
  const language = lower.split(/[-_]/)[0];
  return supported.has(language) ? language as KmerLocale : null;
}

export function resolveLocale(...candidates: unknown[]): KmerLocale {
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      const resolved = resolveLocale(...candidate);
      if (resolved !== DEFAULT_LOCALE) return resolved;
      continue;
    }
    const resolved = normalizeLocale(candidate);
    if (resolved) return resolved;
  }
  return DEFAULT_LOCALE;
}

export function isRtl(locale: unknown) {
  const normalized = normalizeLocale(locale);
  return normalized ? RTL_LOCALES.has(normalized) : false;
}

export function localeCookie(locale: KmerLocale, domain?: string) {
  const scope = domain ? `; Domain=${domain}` : "";
  return `${LOCALE_COOKIE}=${encodeURIComponent(locale)}; Path=/; Max-Age=31536000; SameSite=Lax; Secure${scope}`;
}

export { COMMON_MESSAGES } from "./messages.js";
export type { CommonMessages } from "./messages.js";
