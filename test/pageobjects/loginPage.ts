import { $ } from "@wdio/globals";

class LoginPage {
  public get loginPageButton() {
    return $('//android.view.View[@content-desc="Login"]');
  }

  public get loginField() {
    return $('//android.widget.EditText[@content-desc="input-email"]');
  }

  public get passwordField() {
    return $('//android.widget.EditText[@content-desc="input-password"]');
  }

  public get confirmPasswordField() {
    return $(
      '//android.widget.EditText[@content-desc="input-repeat-password"]'
    );
  }

  public get loginButton() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup'
    );
  }

  public get signUpTabButton() {
    return $('//android.widget.TextView[@text="Sign up"]');
  }

  public get signUpButton() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup'
    );
  }

  public get emailEnterValidError() {
    return $(
      '//android.widget.TextView[@text="Please enter a valid email address"]'
    );
  }

  public get passwordConfirmError() {
    return $(
      '//android.widget.TextView[@text="Please enter the same password"]'
    );
  }

  public get loginTabButton() {
    return $('(//android.widget.TextView[@text="Login"])[1]');
  }

  public get mailIcon() {
    return $('//android.widget.TextView[@text="󰇰"]');
  }

  public get passwordIcon() {
    return $('(//android.widget.TextView[@text="󰍁"])[1]');
  }

  public get confirmPasswordIcon() {
    return $('(//android.widget.TextView[@text="󰍁"])[2]');
  }

  public get passwordAtLeastCharachtersError() {
    return $(
      '//android.widget.TextView[@text="Please enter at least 8 characters"]'
    );
  }

  public async enterLogin(text: string): Promise<void> {
    await this.loginField.clearValue();
    await this.loginField.setValue(text);
  }

  public async enterPassword(text: string): Promise<void> {
    await this.passwordField.clearValue();
    await this.passwordField.setValue(text);
  }

  public async enterConfirmPassword(text: string): Promise<void> {
    await this.confirmPasswordField.clearValue();
    await this.confirmPasswordField.setValue(text);
  }

  public async getTextFromLoginField(): Promise<string> {
    return await this.loginField.getText();
  }

  public async getTextFromPasswordField(): Promise<string> {
    return await this.passwordField.getText();
  }

  public async getTextFromConfirmPasswordField(): Promise<string> {
    return await this.confirmPasswordField.getText();
  }

  public get alertSuccessTitle(){
    return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]')
  }
  
  public async getAlertTitleText(){
    return await this.alertSuccessTitle.getText();
  }
}

export default new LoginPage();
