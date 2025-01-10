# Example project for using ArConnect with Botega with Playwright and TS.

## Prerequisites

[Documentation for Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- Node.js 20+
- npm 9+
- TypeScript 5.0+ (installed as project dependency)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

This will automatically:

- Install all project dependencies
- Install Chromium browser for Playwright

## Project Structure

- data - folder which contains data ArConnect extensions and user data directory which is used for testing
- fixtures - folder which contains fixtures where you could setup your which extensions you want to use for testing and which test data you want to use for
- tests - folder which contains test files
- playwright.config.ts - Playwright configuration file

## Running the test

```bash
npm run test
```

## How to reproduce the issue

- Open the file [./fixtures/testFixture.ts](./fixtures/testFixture.ts) and set the `arConnectExtensionVersion` to the version you want to test on line 6. The default version is `1.20.5`.
- Run the test with `npm run test`.
- The timeout for the test is **3 minutes**. Could be configured in the [./tests/example-test.spec.ts](./tests/example-test.spec.ts) on line 4.
- Test will open the Botega interface, ArConnect extension page, and wait for almost 3 minutes.
- For this time you could you could import the existing wallet from the [./data/test-wallet.json](./data/test-wallet.json) file and connect it to the Botega interface.
- After 3 minutes the test will close the browser context, save data to the user data folder and the test will be finished.
- Run tests again with the different extensions versions.

### Issue

- The problem is that after we have already created a wallet and connected it to the Botega, and we try to run the tests again using data from `./data/user-data` directory, new versions of the plugin do not load this data, but the the plugin[`1.20.5`](./data/extensions/ar-connect/1.20.5) does.

### Notes:

- My recommendation is to use the `1.20.5` version for the fist run, save data, run tests again and make sure that the data is loaded.
- After you saved data in user data folder, you do not need to wait even 3 minutes, and interrupt the test whenever you want.
- You could put your extenstion into the `./data/extensions/ar-connect` folder, change the `arConnectExtensionVersion` in the [./fixtures/testFixture.ts](./fixtures/testFixture.ts) to the version you want to test on line 6 and it will be used for the test.
- If you did not have a folder with user data (`./data/user-data`) Playwright will create one for you after the first run.
- You could have as much user data folders as you want.
- You could delete user data folders.
- Note: test should be running till the end and save context.
