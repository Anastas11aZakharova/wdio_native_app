import { $ } from "@wdio/globals";

class WebVievPage {
  public get webViewPageRobotPicture() {
    return $('//android.view.View[@text="WebdriverIO"]');
  }

  public get webViewPageTitle() {
    return $('//android.widget.TextView[@text="Next-gen browser and mobile automation test framework for Node.js"]');
  }

  public get burgerButton() {
    return $('//android.widget.Button[@text="Toggle navigation bar"]');
  }

  public get wdioLogo() {
    return $('//android.widget.Image[@text="WebdriverIO"]');
  }

  public get searchBar() {
    return $('//android.widget.Button[@text="Search (Ctrl+K)"]');
  }

  public get burgerMenuElements() {
    return $$('//android.widget.ListView/android.view.View//android.widget.TextView');
  }

  public get languagesDropdown() {
    return $('//android.widget.Button[@text="Languages"]');
  }

  public get gitHubLink() {
    return $('//android.view.View[@content-desc="GitHub repository"]');
  }

  public get twitterLink() {
    return $('//android.view.View[@content-desc="@webdriverio on Twitter"]');
  }

  public get youTubeLink() {
    return $('//android.view.View[@content-desc="@webdriverio on YouTube"]');
  }

  public get discordLink() {
    return $('//android.view.View[@content-desc="Support Chat on Discord"]');
  }

  public get lightSwitchElement() {
    return $('//android.widget.ToggleButton[@text="Switch between dark and light mode (currently light mode)"]/android.widget.Image');
  }

  public get webViewMainButtons() {
    return $$('//android.view.View[@resource-id="__docusaurus_skipToContent_fallback"]/android.view.View/*[@content-desc]');
  }
}

export default new WebVievPage();
