import { WebDriver } from "selenium-webdriver";
import BasePage from "./base.page";
import { URLS } from "../common/constants";

class TourneyPage extends BasePage {
  url: string;

  constructor(driver: WebDriver) {
    super(driver);
    this.url = URLS.TOURNEY;
  }
}

export default TourneyPage;
