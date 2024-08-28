import { WebDriver } from "selenium-webdriver";
import BasePage from "./base.page";
import { URLS } from "../common/constants";

class ClubPage extends BasePage {
  url: string;

  constructor(driver: WebDriver) {
    super(driver);
    this.url = URLS.CLUB;
  }
}

export default ClubPage;
