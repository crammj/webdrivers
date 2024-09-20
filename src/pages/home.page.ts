import { By, WebDriver } from "selenium-webdriver";
import LandingPage from "./landing.page";
import BasePage from "./base.page";
import { URLS } from "../common/constants";

class HomePage extends BasePage {
  url: string;

  constructor(driver: WebDriver) {
    super(driver);
    this.url = URLS.HOME;
  }

  async login(user: string, pw: string): Promise<LandingPage> {
    await this.driver.findElement(By.id("player_name")).sendKeys(user);
    await this.driver.findElement(By.id("player_password")).sendKeys(pw);
    await this.driver.findElement(By.name("commit")).click();
    return new LandingPage(this.driver);
  }
}

export default HomePage;
