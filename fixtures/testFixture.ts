import { test as base, chromium, type BrowserContext, Page } from "@playwright/test"
import fs from "fs"
import path from "path"

const userDataDir = "./data/user-data"
const arConnectExtensionVersion = "1.20.5"
let persistentContext: BrowserContext | null = null

type TestFixtures = {
  page: Page
  context: BrowserContext
  extensionId: string
}

class CustomTest {
  page!: Page
  context!: BrowserContext
  extensionId!: string

  async beforeEach(testInfo: any) {
    const lockFile = path.join(userDataDir, "SingletonLock")
    if (fs.existsSync(lockFile)) {
      fs.unlinkSync(lockFile)
    }

    // Reuse existing persistent context if available
    if (!persistentContext) {
      persistentContext = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        args: [
          `--load-extension=./data/extensions/ar-connect/${arConnectExtensionVersion}`,
          `--disable-extensions-except=./data/extensions/ar-connect/${arConnectExtensionVersion}`,
        ],
        recordVideo: { dir: testInfo.outputPath("videos") },
      })
    }

    this.context = persistentContext

    for (const page of this.context.pages()) {
      if (page.url() === "about:blank") {
        await page.close()
      }
    }

    this.page = await this.context.newPage()

    // Wait for the extension's service worker
    let [background] = this.context.serviceWorkers()
    if (!background) background = await this.context.waitForEvent("serviceworker")

    this.extensionId = background.url().split("/")[2]
  }

  async afterEach(testInfo: any) {
    if (testInfo.status === "failed") {
      const videoPath = testInfo.outputPath(`videos/${testInfo.title.replace(/\s+/g, "_")}.webm`)

      await this.page.video()?.saveAs(videoPath)
      await this.page.close()

      testInfo.attachments.push({
        name: "video",
        path: videoPath,
        contentType: "video/webm",
      })
    }
  }
}

export const test = base.extend<TestFixtures>({
  page: async ({}, use, testInfo) => {
    const customTest = new CustomTest()
    await customTest.beforeEach(testInfo)
    await use(customTest.page)
    await customTest.afterEach(testInfo)
  },
  context: async ({}, use) => {
    // Reuse persistent context across tests
    if (!persistentContext) {
      const lockFile = path.join(userDataDir, "SingletonLock")
      if (fs.existsSync(lockFile)) {
        fs.unlinkSync(lockFile)
      }

      persistentContext = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        args: [
          `--load-extension=./data/extensions/ar-connect/${arConnectExtensionVersion}`,
          `--disable-extensions-except=./data/extensions/ar-connect/${arConnectExtensionVersion}`,
        ],
      })
    }

    await use(persistentContext)

    // Clean up context after tests (optional, remove if persistence across test runs is needed)
    await persistentContext?.close()
    persistentContext = null
  },
  extensionId: async ({ context }, use) => {
    let [background] = context.serviceWorkers()
    if (!background) background = await context.waitForEvent("serviceworker")
    const extensionId = background.url().split("/")[2]
    await use(extensionId)
  },
})

export const expect = test.expect
