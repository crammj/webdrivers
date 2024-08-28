import {Driver} from "selenium-webdriver/chrome";
import {WebDriver} from "selenium-webdriver";

interface Page {
    url: string;
    driver: WebDriver
    navigateTo<Page>(url:string): Promise<BasePage>
}


class BasePage implements Page {
    url: string = "";
    driver: WebDriver;

    constructor(driver:WebDriver) {
        this.driver = driver;
    }

    private async init(): Promise<void>{
        //if url is not empty go there
        if (this.url){
            await this.driver.get(this.url);
        //if url is empty us current url
        } else{
            this.url = await this.driver.getCurrentUrl();
        }
    }

    async navigateTo<Page>(url: string): Promise<BasePage> {
        await this.driver.get(url)
        return new BasePage(this.driver);
    }
}

export default BasePage