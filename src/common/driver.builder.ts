import Chrome from "selenium-webdriver/chrome";
import { Browser, Builder, WebDriver } from "selenium-webdriver";

class DriverBuilder {
  static async build(): Promise<WebDriver> {
    const Options = new Chrome.Options();
    // Options.binary_location = 'C:/chromium-48/chrome.exe'
    return new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeOptions(Options)
      .build();
  }
}

export default DriverBuilder;
