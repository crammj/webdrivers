import { WebDriver } from "selenium-webdriver";
import dotenv from "dotenv";
import DriverBuilder from "../common/driver.builder";
import HomePage from "../pages/home.page";

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

test("Navigate to HomePage", async () => {
  const homePage = new HomePage(driver);
  await homePage.init();
  await homePage.login(user, pw);
  expect(homePage.url).toBe("https://system.81dojo.com/en/");
});
