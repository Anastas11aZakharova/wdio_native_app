import { $, $$ } from "@wdio/globals";

class WebviewPage {
  public get webviewButton() {
    return $('//android.view.View[@content-desc="Webview"]');
  }

  public get burgerButton() {
    return $('//android.widget.Button[@text="Toggle navigation bar"]');
  }

  public get logoButton() {
    return $('//android.widget.Image[@text="WebdriverIO"]');
  }

  public get docsButton() {
    return $('//android.widget.TextView[@text="Docs"]');
  }

  public get apiButton() {
    return $('//android.widget.TextView[@text="API"]');
  }

  public get mainText() {
    return $(
      '//android.widget.TextView[@text="Next-gen browser and mobile automation test framework for Node.js"]'
    );
  }

  public get apiText() {
    return $(
      '//android.widget.TextView[@text="Welcome to the WebdriverIO API docs. These pages contain reference materials for all implemented protocol bindings and convenience commands. Protocol commands, including "]'
    );
  }

  public get searchButton() {
    return $('//android.widget.Button[@text="Search (Ctrl+K)"]');
  }

  public get searchField() {
    return $('//android.widget.EditText[@resource-id="docsearch-input"]');
  }

  public get searchResults() {
    return $$('//android.view.View[starts-with(@resource-id, "docsearch-hits")]');
  }

  public async enterTextInSearchField(text: string): Promise<void> {
    await this.searchField.setValue(text);
  }

  public async verifySearchResultsContain(text: string): Promise<void> {
    const searchResults = await this.searchResults;
    for (let i = 0; i < (await searchResults.length); i++) {
      const result = searchResults[i];
      await result.waitForDisplayed({ timeout: 5000 });
      const resultText = await result.getText();
      console.log("Result:", resultText);
      if (!resultText.toLowerCase().includes(text.toLowerCase())) {
        throw new Error(
          `Search result does not contain "${text}": ${resultText}`
        );
      }
    }
  }

}

export default new WebviewPage();
