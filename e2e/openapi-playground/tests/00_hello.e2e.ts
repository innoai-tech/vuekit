import { expect, test } from "@playwright/test";

test("openapi playground loaded and nav page", async ({ page }) => {
  await page.goto("/api/example/_view");

  await expect(page.locator(".OperationListItem").first()).toHaveAttribute(
    "href",
  );

  await page.locator(".OperationListItem").first().click();

  await expect(page.locator(".OperationHeading")).toContainText("/");
});
