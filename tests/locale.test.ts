import { expect, test } from "bun:test";
import { DEFAULT_LOCALE, isRtl, normalizeLocale, resolveLocale, SUPPORTED_LOCALES } from "../src/index";

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
