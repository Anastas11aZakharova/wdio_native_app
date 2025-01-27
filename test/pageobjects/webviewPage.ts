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
    return $('//android.widget.TextView[@text="Introduction"]');
  }

  public get searchButton() {
    return $('//android.widget.Button[@text="Search (Ctrl+K)"]');
  }

  public get searchField() {
    return $('//android.widget.EditText[@resource-id="docsearch-input"]');
  }

  public get searchResults() {
    return $$(
      '//android.view.View[starts-with(@resource-id, "docsearch-hits")]'
    );
  }

  public async enterTextInSearchField(text: string): Promise<void> {
    await this.searchField.setValue(text);
  }

  public async verifySearchResultsContain(text: string): Promise<void> {
    const searchResults = await this.searchResults;
    for (const result of searchResults) {
      await result.waitForDisplayed({ timeout: 5000 });
      const resultText = await result.getText();
      await expect(resultText.toLowerCase()).toContain(text.toLowerCase());
    }
  }
}
export default new WebviewPage();
