import { config as dotenvConfig } from "dotenv";
import video from "wdio-video-reporter";

dotenvConfig();

export const config: WebdriverIO.Config = {
  runner: "local",
  tsConfigPath: "./tsconfig.json",
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  specs: ["./test/specs/**/*.ts"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      project: "WDIO native app testing",
      build: "WDIO native Android",
      name: "wdio tests",
      device: "Google Pixel 3",
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID,
      "browserstack.debug": true,
      video: true,
    },
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["browserstack"],
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
    [
      video,
      {
        saveAllVideos: false,
        videoSlowdownMultiplier: 3,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
