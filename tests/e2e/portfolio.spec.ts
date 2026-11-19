import { expect, test, type Page } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import { profile } from "../../src/content/profile";

const consoleErrors = new WeakMap<Page, string[]>();
test.beforeEach(({ page }) => {
  const errors: string[] = [];
  consoleErrors.set(page, errors);
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
});
test.afterEach(({ page }) => {
  expect(consoleErrors.get(page)).toEqual([]);
});

for (const width of [1440, 1280, 768, 430, 390]) {
  test(`homepage and section navigation at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.setViewportSize({ width, height: 960 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      profile.headline.join(" "),
    );
    const ids = [
      "about",
      "projects",
     "experience",
      "certifications",
      "activities",
      "toolkit",
    ];
    const labels = [
      "About",
      "Projects",
     "Work Experience",
      "Achievement",
      "Activities",
      "Toolkit",
    ];
    for (let i = 0; i < ids.length; i++) {
      if (width < 1024)
        await page.getByRole("button", { name: "Open navigation" }).click();
      await page
        .getByRole("navigation", { name: "Main navigation" })
        .getByRole("link", { name: labels[i], exact: true })
        .click();
      await expect(page).toHaveURL(new RegExp(`#${ids[i]}$`));
      await expect
        .poll(() =>
          page.locator(`#${ids[i]}`).evaluate((element) => {
            const padding = parseFloat(
              getComputedStyle(document.documentElement).scrollPaddingTop,
            );
            const documentTop =
              element.getBoundingClientRect().top + window.scrollY;
            return Math.abs(
              element.getBoundingClientRect().top -
                Math.min(padding, documentTop),
            );
          }),
        )
        .toBeLessThan(12);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBeTruthy();
      if (width < 1024)
        await expect(
          page.getByRole("button", { name: "Open navigation" }),
        ).toHaveAttribute("aria-expanded", "false");
    }
    await page.getByRole("link", { name: "Back to top" }).click();
    await expect(page.locator("#hero-title")).toBeInViewport();
    expect(errors).toEqual([]);
  });
}

test("all project routes, deep reload, history and cross-route anchor navigation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const [slug, name] of [
    ["safevoice", "SafeVoice"],
    ["vdaagent", "VDaAgent"],
    ["non-invasive", "Non-Invasive"],
  ]) {
    await page
      .getByRole("link", { name: `Explore ${name}`, exact: true })
      .click();
    await expect(page).toHaveURL(`/projects/${slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);
    await expect(page.getByRole("heading", { level: 1 })).toBeFocused();
    await page.reload();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);
    await page
      .getByRole("navigation", { name: "Case study sections" })
      .getByRole("link", { name: "Results & Evidence" })
      .click();
    await expect(page.locator("#results")).toBeInViewport();
    await page.getByRole("link", { name: "All projects" }).click();
    await expect(page).toHaveURL("/#projects");
  }
  await page
    .getByRole("link", { name: "Explore SafeVoice", exact: true })
    .click();
  await page.goBack();
  await expect(page).toHaveURL("/#projects");
  await page.goForward();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("SafeVoice");
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Toolkit" })
    .click();
  await expect(page.locator("#toolkit")).toBeInViewport();
});

test("keyboard menu, skip link and optional actions", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
  await expect(
    page.getByRole("navigation", { name: "Main navigation" }),
  ).toBeHidden();
  await page.getByRole("link", { name: "Skip to content" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await expect(page.getByRole("link", { name: /resume/i })).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Live demo", exact: true }),
  ).toHaveCount(0);
});

test("reduced motion stays readable and supports changing the preference", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("h1")).toHaveCSS("opacity", "1");
  expect(
    await page
      .locator("html")
      .evaluate((el) => getComputedStyle(el).scrollBehavior),
  ).toBe("auto");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("h1")).toHaveCSS("opacity", "1");
  await page
    .getByRole("link", { name: "Explore Projects", exact: true })
    .click();
  await expect(page.locator("#projects")).toBeInViewport();
});

test("unknown routes recover to homepage", async ({ page }) => {
  for (const path of ["/not-a-route", "/projects/not-a-project"]) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "A path yet to be built.",
    );
    await page.getByRole("link", { name: "Back to home" }).click();
    await expect(page.locator("#hero-title")).toBeVisible();
  }
});

test("case studies adapt without overflow and tolerate malformed anchors", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 960 });
    for (const slug of [
      "safevoice",
      "vdaagent",
      "non-invasive",
    ]) {
      await page.goto(`/projects/${slug}`);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBeTruthy();
    }
  }
  await page.goto("/#%");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    profile.headline.join(" "),
  );
});

test("hash hosting works under a subpath including internal anchors and skip link", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("http://127.0.0.1:4174/demo/#/projects/safevoice");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("SafeVoice");
  await page
    .getByRole("navigation", { name: "Case study sections" })
    .getByRole("link", { name: "Results & Evidence" })
    .click();
  await expect(page).toHaveURL(/#\/projects\/safevoice#results$/);
  await expect(page.locator("#results")).toBeInViewport();
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("SafeVoice");
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Toolkit" })
    .click();
  await expect(page).toHaveURL(/#\/#toolkit$/);
  await expect(page.locator("#toolkit")).toBeInViewport();
  await page.getByRole("link", { name: "Skip to content" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.getByRole("link", { name: `${profile.name} — home` }).click();
  await expect(page).toHaveURL("http://127.0.0.1:4174/demo/#/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    profile.headline.join(" "),
  );
  await page.goto("http://127.0.0.1:4174/demo/#/projects/missing");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "A path yet to be built.",
  );
});

test("capture responsive layouts for visual review", async ({ page }) => {
  await mkdir("artifacts/screenshots", { recursive: true });
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 960 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => document.fonts.ready);
    for (const cover of await page.locator(".project-cover").all()) {
      await cover.scrollIntoViewIfNeeded();
      await expect.poll(() => cover.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: `artifacts/screenshots/home-${width}.png`,
      fullPage: true,
    });
  }
  await page.setViewportSize({ width: 1440, height: 960 });
  await page.goto("/projects/safevoice");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("SafeVoice");
  await page.waitForLoadState("networkidle");
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: "artifacts/screenshots/safevoice-1440.png",
    fullPage: true,
  });
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 960 });
    await page.goto("/projects/non-invasive");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Non-Invasive");
    await expect(page.getByRole("link", { name: "Source code", exact: true })).toHaveAttribute("href", "https://github.com/mhiu05/Non-Invasive");
    const cover = page.getByAltText(/Non-Invasive repository demo/);
    await cover.scrollIntoViewIfNeeded();
    await expect.poll(() => cover.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `artifacts/screenshots/non-invasive-${width}.png`, fullPage: true });
  }
});
