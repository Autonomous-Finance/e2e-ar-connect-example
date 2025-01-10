import { test } from "../fixtures/testFixture"

test("Open Swap page", async ({ page, context }) => {
  const timeout = 180_000 // 3 minutes
  test.setTimeout(timeout)
  await page.goto("https://botega.defi.ao/#/swap")
  await page.waitForTimeout(timeout - 3000)
  await context.close()
})
