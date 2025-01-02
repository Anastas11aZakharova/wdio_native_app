import { $ } from "@wdio/globals";

class HomePage {
  public get loginButton() {
    return $("~Login");
  }
}

export default new HomePage();
