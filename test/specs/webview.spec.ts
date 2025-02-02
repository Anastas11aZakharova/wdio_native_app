import { expect } from "@wdio/globals";
import webviewPage from "../pageobjects/webviewPage.js";

describe("Webview page tests", () => {
  beforeEach(async () => {
    await webviewPage.webviewButton.click();
    await expect(webviewPage.mainText).toHaveText(
      "Next-gen browser and mobile automation test framework for Node.js"
    );
  });

  it("WD_009 - Check that the home page is displayed by default", async () => {
    await webviewPage.burgerButton.click();
    await expect(webviewPage.apiButton).toBeDisplayed();
    await webviewPage.apiButton.click();
    await expect(webviewPage.apiText).toBeDisplayed();
    await webviewPage.logoButton.click();
    await expect(webviewPage.mainText).toBeDisplayed();
  });

  it("WD_010 - Verify search results contain the text 'api'", async () => {
    await webviewPage.searchButton.click();
    await webviewPage.enterTextInSearchField("api");
    await webviewPage.verifySearchResultsContain("api");
  });
});
