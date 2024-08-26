"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chrome_1 = __importDefault(require("selenium-webdriver/chrome"));
function setup() {
    const service = new chrome_1.default.ServiceBuilder()
        .loggingTo('/my/log/file.txt')
        .enableVerboseLogging()
        .build();
    const options = new chrome_1.default.Options();
    // configure browser options ...
    const driver = chrome_1.default.Driver.createSession(options, service);
    return driver;
}
const driver = setup();
driver.get("81dojo.com");
