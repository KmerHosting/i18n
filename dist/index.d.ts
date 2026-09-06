export declare const SUPPORTED_LOCALES: readonly ["en", "fr", "es", "pt", "de", "zh-Hans", "ar", "hi", "bn", "id", "ja", "ru", "it", "ko", "tr", "vi", "ur", "nl", "pl", "fa"];
export type KmerLocale = typeof SUPPORTED_LOCALES[number];
export declare const DEFAULT_LOCALE: KmerLocale;
export declare const LOCALE_COOKIE = "kh_locale";
export declare const RTL_LOCALES: Set<"en" | "fr" | "es" | "pt" | "de" | "zh-Hans" | "ar" | "hi" | "bn" | "id" | "ja" | "ru" | "it" | "ko" | "tr" | "vi" | "ur" | "nl" | "pl" | "fa">;
export declare const LOCALES: ReadonlyArray<{
    code: KmerLocale;
    flag: string;
    label: string;
    nativeLabel: string;
}>;
export declare function normalizeLocale(value: unknown): KmerLocale | null;
export declare function resolveLocale(...candidates: unknown[]): KmerLocale;
export declare function isRtl(locale: unknown): boolean;
export declare function localeCookie(locale: KmerLocale, domain?: string): string;
export { COMMON_MESSAGES } from "./messages.js";
export type { CommonMessages } from "./messages.js";
