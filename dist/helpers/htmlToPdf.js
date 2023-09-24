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
exports.defaultOptions = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
exports.defaultOptions = {
    format: 'A4',
    printBackground: true,
};
function htmlToPdf(html, kartof) {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer_1.default.launch({ headless: 'new' }); // Launching a new browser
        const page = yield browser.newPage(); // Creating a new page 
        yield page.setContent(html, { waitUntil: 'domcontentloaded' }); // Setting content
        const pdfBuffer = yield page.pdf(kartof); // Starting content in the buffer with options
        return pdfBuffer;
    });
}
exports.default = htmlToPdf;
