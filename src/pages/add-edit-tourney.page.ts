import { WebDriver } from "selenium-webdriver";
import BasePage from "./base.page";
import { URLS } from "../common/constants";

class AddEditTourney extends BasePage {
  url: string;

  constructor(driver: WebDriver) {
    super(driver);
    this.url = URLS.ADD_EDIT_TOURNEY;
  }
}

export default AddEditTourney;
