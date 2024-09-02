import {By, WebDriver} from "selenium-webdriver";
import BasePage from "./base.page";
import { URLS } from "../common/constants";

class ClubPage extends BasePage {
  url: string;

  constructor(driver: WebDriver) {
    super(driver);
    this.url = URLS.CLUB;
  }


  async acceptMemberRequest(){
    const acceptButtons = await this.driver.findElements(By.id("acceptbutton"));
    acceptButtons.forEach(button=>{
      button.click();
      this.driver.sleep(2000);
    })
  }

  async getInviteCount(): Promise<number>{
    const acceptButtons = await this.driver.findElements(By.id("acceptbutton"));
    return acceptButtons.length
  }


}

export default ClubPage;
