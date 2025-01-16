import { expect } from "@wdio/globals";
import homePage from "../pageobjects/homePage.js";
import loginPage from "../pageobjects/loginPage.js";
import testData from "../../fixtures/testData.json";

describe("Login page tests", () => {
  beforeEach(async () => {
    await homePage.loginPageIcon.click();
  });

  it("WD_014 - Check login page content", async () => {
    await expect(loginPage.loginPageTitle).toBeDisplayed();
    await expect(loginPage.loginSignUpForm).toBeDisplayed();
  });

  it("WD_015 - Login with valid email and password", async () => {
    await loginPage.emailField.setValue("qwerty@gmail.com");
    await loginPage.passwordField.setValue("asd123k!");
    await loginPage.bottomLoginButton.click();
    await expect(loginPage.successMessage).toBeDisplayed();
    await expect(loginPage.successMessage).toHaveText("You are logged in!");
    await loginPage.okButton.click();
    await loginPage.emailField.clearValue();
    await loginPage.passwordField.clearValue();
  });

  it("WD_016 - Enter special symbols in password", async () => {
    await loginPage.biometricsMessage.click();
    await expect(loginPage.loginPageTitle).toBeDisplayed();
    await loginPage.emailField.setValue("qwerty@gmail.com");
    await loginPage.passwordField.setValue("123!@#%a");
    await loginPage.bottomLoginButton.click();
    await expect(loginPage.successMessage).toBeDisplayed();
    await expect(loginPage.successMessage).toHaveText("You are logged in!");
    await loginPage.okButton.click();
    await loginPage.emailField.clearValue();
    await loginPage.passwordField.clearValue();
  });

  it("WD_017 - Check the login form content", async () => {
    await expect(loginPage.loginSignUpForm).toBeDisplayed();
    await expect(loginPage.topLoginButton).toBeDisplayed();
    await expect(loginPage.emailField).toHaveText("Email");
    await expect(loginPage.passwordField).toHaveText("Password");
    await expect(loginPage.biometricsMessage).toBeDisplayed();
    await expect(loginPage.biometricsMessage).toHaveText(
      "When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login."
    );
    await expect(loginPage.bottomLoginButton).toBeDisplayed();
  });

  it("WD_018 -Login with invalid email ", async () => {
    await loginPage.biometricsMessage.click();
    await expect(loginPage.loginPageTitle).toBeDisplayed();
    await loginPage.emailField.setValue("qwerty");
    await loginPage.bottomLoginButton.click();
    await expect(loginPage.emailErrorMessage).toBeDisplayed();
    await expect(loginPage.emailErrorMessage).toHaveText(
      "Please enter a valid email address"
    );
    await expect(loginPage.passwordErrorMessage).toBeDisplayed();
    await expect(loginPage.passwordErrorMessage).toHaveText(
      "Please enter at least 8 characters"
    );
  });

  it("WD_019 -Login with invalid password ", async () => {
    await loginPage.biometricsMessage.click();
    await expect(loginPage.loginPageTitle).toBeDisplayed();
    await loginPage.emailField.setValue("qwerty@gmail.com");
    await loginPage.passwordField.setValue("qwertyu");
    await loginPage.bottomLoginButton.click();
    await expect(loginPage.passwordErrorMessage).toBeDisplayed();
    await expect(loginPage.passwordErrorMessage).toHaveText(
      "Please enter at least 8 characters"
    );
    await loginPage.emailField.clearValue();
    await loginPage.passwordField.clearValue();
  });

  it("WD_020 -Enter data in Password field", async () => {
    await loginPage.biometricsMessage.click();
    await expect(loginPage.loginPageTitle).toBeDisplayed();
    await loginPage.passwordField.setValue("qwerty");
    await loginPage.bottomLoginButton.click();
    await expect(loginPage.emailErrorMessage).toBeDisplayed();
    await expect(loginPage.emailErrorMessage).toHaveText(
      "Please enter a valid email address"
    );
    await loginPage.emailField.clearValue();
    await loginPage.passwordField.clearValue();
  });

  it("WD_021 - Login with empty fields", async () => {
    await loginPage.biometricsMessage.click();
    await expect(loginPage.loginPageTitle).toBeDisplayed();
    await loginPage.bottomLoginButton.click();
    await expect(loginPage.emailErrorMessage).toBeDisplayed();
    await expect(loginPage.emailErrorMessage).toHaveText(
      "Please enter a valid email address"
    );
    await expect(loginPage.passwordErrorMessage).toBeDisplayed();
    await expect(loginPage.passwordErrorMessage).toHaveText(
      "Please enter at least 8 characters"
    );
  });

  it("WD_022 - Login with invalid email(without @)", async () => {
    await loginPage.biometricsMessage.click();
    await expect(loginPage.loginPageTitle).toBeDisplayed();
    await loginPage.emailField.setValue("qwertygmail.com");
    await loginPage.passwordField.setValue("qwertyuyh");
    await loginPage.bottomLoginButton.click();
    await expect(loginPage.emailErrorMessage).toBeDisplayed();
    await expect(loginPage.emailErrorMessage).toHaveText(
      "Please enter a valid email address"
    );
  });

  it("WD_023 - Login with invalid email (without com)", async () => {
    await loginPage.biometricsMessage.click();
    await expect(loginPage.loginPageTitle).toBeDisplayed();
    await loginPage.emailField.setValue("qwerty@gmail.");
    await loginPage.passwordField.setValue("qwertyuyh");
    await loginPage.bottomLoginButton.click();
    await expect(loginPage.emailErrorMessage).toBeDisplayed();
    await expect(loginPage.emailErrorMessage).toHaveText(
      "Please enter a valid email address"
    );
  });

  it("WD_024 -Login with invalid email (without .)", async () => {
    await loginPage.biometricsMessage.click();
    await expect(loginPage.loginPageTitle).toBeDisplayed();
    await loginPage.emailField.setValue("qwerty@gmailcom");
    await loginPage.passwordField.setValue("qwertyuyh");
    await loginPage.bottomLoginButton.click();
    await expect(loginPage.emailErrorMessage).toBeDisplayed();
    await expect(loginPage.emailErrorMessage).toHaveText(
      "Please enter a valid email address"
    );
  });

  it("WD_025 - Login with allowed special symbols in email", async () => {
    await loginPage.biometricsMessage.click();
    await expect(loginPage.loginPageTitle).toBeDisplayed();
    await loginPage.emailField.setValue("qwerty!#$%^&*@gmail.com");
    await loginPage.passwordField.setValue("qwertyuyh");
    await loginPage.bottomLoginButton.click();
    await expect(loginPage.successMessage).toBeDisplayed();
    await expect(loginPage.successMessage).toHaveText("You are logged in!");
    await loginPage.okButton.click()
  });

  it("WD_026 - Login with non-allowed special symbols in email", async () => {
    await loginPage.biometricsMessage.click();
    await expect(loginPage.loginPageTitle).toBeDisplayed();
    for (const email of testData.emailsWithInvalidSpecialSymbols) {
      await loginPage.emailField.setValue(email);
      await loginPage.passwordField.setValue("qwertyui")
      await loginPage.bottomLoginButton.click();
      await expect(loginPage.emailErrorMessage).toBeDisplayed();
    }
  });
});
