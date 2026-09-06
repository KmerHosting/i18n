import { expect, test } from "bun:test";
import { COMMON_MESSAGES, DEFAULT_LOCALE, isRtl, localeCookie, normalizeLocale, resolveLocale, SUPPORTED_LOCALES } from "../src/index";

test("exposes exactly the KmerHosting phase-one locales", () => {
  expect(SUPPORTED_LOCALES).toHaveLength(20);
  expect(SUPPORTED_LOCALES).toContain("zh-Hans");
});

test("normalizes browser and legacy Chinese values without accepting unsupported locales", () => {
  expect(normalizeLocale("fr-CM")).toBe("fr");
  expect(normalizeLocale("zh-CN")).toBe("zh-Hans");
  expect(normalizeLocale("cs")).toBeNull();
  expect(resolveLocale("cs", "xx")).toBe(DEFAULT_LOCALE);
});

test("marks the three RTL locales", () => {
  expect(isRtl("ar")).toBe(true);
  expect(isRtl("fa")).toBe(true);
  expect(isRtl("ur")).toBe(true);
  expect(isRtl("fr")).toBe(false);
});

test("keeps cookie and shared catalogue contracts stable", () => {
  expect(localeCookie("fr", ".kmerhosting.com")).toContain("kh_locale=fr");
  expect(localeCookie("fr", ".kmerhosting.com")).toContain("Domain=.kmerhosting.com");
  for (const locale of SUPPORTED_LOCALES) {
    expect(COMMON_MESSAGES[locale].signIn.length).toBeGreaterThan(0);
    expect(COMMON_MESSAGES[locale].language.length).toBeGreaterThan(0);
  }
});
