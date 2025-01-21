import { expect } from "@wdio/globals";
import homePage from "../pageobjects/homePage.ts";
import webViewPage from "../pageobjects/webViewPage.ts";
import testData from "../../fixtures/testData.json"

describe("Home page tests", () => {
  it("WD_005 - Check the Webview main page title and main image", async () => {
    await homePage.vebViewPageIcon.click()
    await expect(webViewPage.webViewPageRobotPicture).toBeDisplayed()
    await expect(webViewPage.webViewPageTitle).toHaveText("Next-gen browser and mobile automation test framework for Node.js")
  });

  it("WD_006 - Check the header content", async () => {
    await homePage.vebViewPageIcon.click()
    await expect(webViewPage.webViewPageTitle).toBeDisplayed()
    await expect(webViewPage.burgerButton).toBeDisplayed()
    await expect(webViewPage.wdioLogo).toBeDisplayed()
    await expect(webViewPage.searchBar).toBeDisplayed()
  });

  it("WD_007 - Check the burger button content", async () => {
    await homePage.vebViewPageIcon.click()
    await expect(webViewPage.webViewPageTitle).toBeDisplayed()
    await webViewPage.burgerButton.click()
    for(let i = 0; i <= await webViewPage.burgerMenuElements.length - 1; i++){
      await expect(webViewPage.burgerMenuElements[i]).toBeDisplayed()
      await expect(webViewPage.burgerMenuElements[i]).toHaveText(testData.webViewBurgerMenuElements[i])
    }
    await expect(webViewPage.languagesDropdown).toHaveText("Languages")
    await expect(webViewPage.gitHubLink).toBeDisplayed()
    await expect(webViewPage.twitterLink).toBeDisplayed()
    await expect(webViewPage.youTubeLink).toBeDisplayed()
    await expect(webViewPage.discordLink).toBeDisplayed()
    await expect(webViewPage.lightSwitchElement).toBeDisplayed()
  });

  it("WD_008 - Check the links section", async () => {
    await homePage.vebViewPageIcon.click()
    await expect(webViewPage.webViewPageTitle).toBeDisplayed()
    for(let i = 0; i <= await webViewPage.webViewMainButtons.length - 1; i++){
      await expect(webViewPage.webViewMainButtons[i]).toBeDisplayed()
      await expect(webViewPage.webViewMainButtons[i]).toHaveText(testData.webViewMainButtons[i])
    }
  });
});
