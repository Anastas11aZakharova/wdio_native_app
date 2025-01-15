import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/loginPage.js";
import * as testData from "../../fixtures/testData.json";
import { generateRandomString } from "../../fixtures/random";

describe("Login page tests", () => {
  describe("Sign Up tab tests", () => {
    beforeEach(async () => {
      await loginPage.loginPageButton.click();
      await loginPage.signUpTabButton.click();
    });

    it("WD_027 should check the sign up form content", async () => {
      await expect(loginPage.mailIcon).toBeDisplayed();
      await expect(loginPage.passwordIcon).toBeDisplayed();
      await expect(loginPage.confirmPasswordIcon).toBeDisplayed();

      expect(await loginPage.getTextFromLoginField()).toBe("Email");
      expect(await loginPage.getTextFromPasswordField()).toBe("Password");
      expect(await loginPage.getTextFromConfirmPasswordField()).toBe(
        "Confirm password"
      );
    });

    it("WD_032 should check sign up empty fields", async () => {
      await loginPage.enterLogin("");
      await loginPage.enterPassword("");
      await loginPage.enterConfirmPassword("");
      await loginPage.signUpButton.click();
      await expect(loginPage.emailEnterValidError).toBeDisplayed();
      await expect(loginPage.passwordAtLeastCharachtersError).toBeDisplayed();
      await expect(loginPage.passwordConfirmError).toBeDisplayed();
    });

    it("WD_030, WD_031, WD_033, WD_034, WD_035, WD_037 should show error for invalid email formats", async () => {
      for (const email of testData.invalidEmails) {
        await loginPage.enterLogin(email);
        await loginPage.signUpButton.click();
        await expect(loginPage.emailEnterValidError).toBeDisplayed();
      }
    });

    it("WD_28, WD_29, WD_036 should sign up with special symbols in email and password", async () => {
      const randomEmail = generateRandomString(8) + "!@test.com";
      const randomPassword = generateRandomString(8) + "!@#";

      await loginPage.enterLogin(randomEmail);
      await loginPage.enterPassword(randomPassword);
      await loginPage.enterConfirmPassword(randomPassword);
      await loginPage.signUpButton.click();

      const alertText = await loginPage.getAlertTitleText();
      expect(alertText).toBe("Signed Up!");
    });
  });
});
