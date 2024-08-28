import  Chrome from "selenium-webdriver/chrome";
import {Browser, Builder, WebDriver} from "selenium-webdriver";
import DriverBuilder from "../common/driver.builder";
import HomePage from "../pages/home.page";

async function init() {
    return await DriverBuilder.build();
}

init().then(async (driver) => {
    const homePage = new HomePage(driver);



});
