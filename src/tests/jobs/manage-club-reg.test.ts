// initial commit

import { WebDriver } from "selenium-webdriver";
import dotenv from "dotenv";
import DriverBuilder from "../../common/driver.builder";
import HomePage from "../../pages/home.page";
import ClubPage from "../../pages/club.page";
import { URLS } from "../../common/constants";

dotenv.config();

let driver: WebDriver;
const user: string = process.env.USERNAME ?? "default_user";
const pw: string = process.env.PW ?? "default_pw";

beforeEach(async () => {
  driver = await DriverBuilder.build();
});
afterEach(async () => {
  await driver.quit();
});

test("Navigate to club page and accept pending requests", async () => {
  const homePage = new HomePage(driver);
  await homePage.init();
  const landing = await homePage.login(user, pw);
  const clubPage = await landing.navigateTo<ClubPage>(URLS.CLUB, ClubPage);
  await clubPage.acceptMemberRequest();
  await clubPage.refresh();
  const members = await clubPage.getInviteCount();
  expect(members).toBe(0);

});
