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
const express_1 = __importDefault(require("express"));
const conversion_js_1 = __importDefault(require("../src/controllers/conversion.js"));
const PORT = 5001;
class Application {
    constructor() {
        this.app = (0, express_1.default)();
    }
    useMiddleware() {
        this.app.use(express_1.default.json());
        this.app.use('/conversion', conversion_js_1.default);
    }
    listen() {
        this.app.listen(PORT, () => {
            console.log(`app listening on port ${PORT}`);
        });
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            this.useMiddleware();
            this.listen();
        });
    }
}
exports.default = Application;
