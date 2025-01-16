import { $ } from "@wdio/globals";

class LoginPage {
  public get loginPageTitle() {
    return $('//android.widget.TextView[@text="Login / Sign up Form"]');
  }

  public get loginSignUpForm() {
    return $(
      '//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]'
    );
  }

  public get emailField() {
    return $('//android.widget.EditText[@content-desc="input-email"]');
  }

  public get passwordField() {
    return $('//android.widget.EditText[@content-desc="input-password"]');
  }

  public get bottomLoginButton() {
    return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]');
  }

  public get successMessage() {
    return $('//android.widget.TextView[@resource-id="android:id/message"]');
  }

  public get biometricsMessage() {
    return $(
      '//android.widget.TextView[@text="When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login."]'
    );
  }

  public get topLoginButton() {
    return $('(//android.widget.TextView[@text="Login"])[1]');
  }

  public get okButton() {
    return $('//android.widget.Button[@resource-id="android:id/button1"]');
  }

  public get emailErrorMessage() {
    return $(
      '//android.widget.TextView[@text="Please enter a valid email address"]'
    );
  }

  public get passwordErrorMessage() {
    return $(
      '//android.widget.TextView[@text="Please enter at least 8 characters"]'
    );
  }
}

export default new LoginPage();
