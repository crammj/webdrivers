"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const driver_builder_1 = __importDefault(require("../common/driver.builder"));
const home_page_1 = __importDefault(require("../pages/home.page"));
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield driver_builder_1.default.build();
    });
}
init().then((driver) => __awaiter(void 0, void 0, void 0, function* () {
    const homePage = new home_page_1.default(driver);
}));
