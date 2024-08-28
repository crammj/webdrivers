import DriverBuilder from "../common/driver.builder";
import HomePage from "../pages/home.page";
import {WebDriver} from "selenium-webdriver";
let driver: WebDriver;

async function init() {
  driver = await DriverBuilder.build();
}


test("Navigate to 81dojo", () => {
  init()
  const homePage =  new HomePage(driver);
  expect(homePage.url).toBe("https://system.81dojo.com/en/");
});

test("Simple test examples", () => {
  expect(1 + 2).toBe(3);
});

