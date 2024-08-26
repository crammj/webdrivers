import Chrome, {Driver} from "selenium-webdriver/chrome"



function setup(): Driver {
        const service = new Chrome.ServiceBuilder()
        .loggingTo('/my/log/file.txt')
        .enableVerboseLogging()
        .build();

    const options = new Chrome.Options();
// configure browser options ...

    const driver = Chrome.Driver.createSession(options, service);

    return driver
    }


const driver: Driver = setup();
driver.get("81dojo.com");


