import { Locator, WebDriver } from "selenium-webdriver";
import { elementLocated } from "selenium-webdriver/lib/until";

interface PageConstruct<T> {
  new (driver: WebDriver): T;
}

interface Page {
  url: string;
  driver: WebDriver;
  navigateTo<T>(url: string, construct: PageConstruct<T>): Promise<T>;
  init(): Promise<void>;
}

class BasePage implements Page {
  url: string = "";

  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async navigateTo<T>(url: string, Construct: PageConstruct<T>): Promise<T> {
    await this.driver.get(url);
    return new Construct(this.driver);
  }

  async init(): Promise<void> {
    // if url is not empty go there
    if (this.url) {
      await this.driver.get(this.url);
      // if url is empty us current url
    } else {
      this.url = await this.driver.getCurrentUrl();
    }
  }

  waitUntilElementLocated(locator: Locator) {
    const untilElementLocated = elementLocated(locator);
    return this.driver.wait(untilElementLocated, 30000);
  }

  async browserName() {
    const capabilities = await this.driver.getCapabilities();
    return capabilities.getBrowserName();
  }

  async title() {
    return await this.driver.getTitle();
  }

  async refresh(){
    return await this.driver.navigate().refresh();
  }

  find(locator: Locator) {
    // this.waitUntilElementLocated(locator);
    return this.driver.findElement(locator);
  }

  async finds(locator: Locator) {
    return await this.driver.findElements(locator);
  }

  async type(
    locator: Locator,
    inputText: string | number | Promise<string | number>,
  ) {
    return await this.find(locator).sendKeys(inputText);
  }

  async click(locator: Locator) {
    return await this.find(locator).click();
  }

  async isVisible(locator: Locator) {
    return await this.find(locator).isDisplayed();
  }

  async text(locator: Locator) {
    return await this.find(locator).getText();
  }

  async class(locator: Locator) {
    return await this.find(locator).getAttribute("class");
  }

  async attribute(locator: Locator, attribute: string) {
    return await this.find(locator).getAttribute(attribute);
  }

  async tag(locator: Locator) {
    return await this.find(locator).getTagName();
  }
}

export default BasePage;
