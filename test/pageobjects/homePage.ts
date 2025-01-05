import { $ } from "@wdio/globals";

class HomePage {
  public get robotImage() {
    return $("(//android.view.ViewGroup/android.widget.ImageView)[1]");
  }
  public get mainTitle() {
    return $('//android.widget.TextView[@text="WEBDRIVER"]');
  }
  public get informationLine() {
    return $(
      '//android.widget.TextView[@text="Demo app for the appium-boilerplate"]'
    );
  }
  public get iOSLogo() {
    return $("(//android.widget.TextView)[3]");
  }
  public get androidLogo() {
    return $("(//android.widget.TextView)[4]");
  }
  public get supportLine() {
    return $('//android.widget.TextView[@text="Support"]');
  }
}

export default new HomePage();
