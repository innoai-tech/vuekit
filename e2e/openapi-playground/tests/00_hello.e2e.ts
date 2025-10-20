import { expect, test } from "@playwright/test";

test("openapi playground", async ({ page }) => {
  await test.step("when nav to home page, page should be loaded", async () => {
    await page.goto("/api/example/_view");
    await expect(page.locator(".OperationListItem").first()).toHaveAttribute(
      "href",
    );

    await test.step("when click some operation, operation page should be naved", async () => {
      await page.locator(".OperationListItem").first().click();
      await expect(page.locator(".OperationHeading")).toContainText("/");

      await test.step("when click request, api should requested then show http response", async () => {
        await page.locator('[type="submit"]').first().click();
        await expect(page.locator(".ResponseSection pre")).toContainText(
          "content-type",
        );
      });
    });
  });
});
