import { WebDriver } from "selenium-webdriver";

interface Constructible<T> {
  new (driver: WebDriver): T;
}

interface Page {
  url: string;
  driver: WebDriver;
  navigateTo<T>(url: string, construct: Constructible<T>): Promise<T>;
  init(): Promise<void>;
}

class BasePage implements Page {
  url: string = "";

  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async navigateTo<T>(url: string, Construct: Constructible<T>): Promise<T> {
    await this.driver.get(url);
    return new Construct(this.driver);
  }

  // interface Constructable<T> {
  //   new (...args: any[]): T;
  // }
  // function createInstance<T>(ctor: Constructable<T>, ...args: any[]): T {
  //   return new ctor(...args);
  // }

  async init(): Promise<void> {
    // if url is not empty go there
    if (this.url) {
      await this.driver.get(this.url);
      // if url is empty us current url
    } else {
      this.url = await this.driver.getCurrentUrl();
    }
  }
}

export default BasePage;
