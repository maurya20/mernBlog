"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// import {ProductRoutes} from './routes/Products';
// import {UserRoutes} from './routes/Users';
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.allRoutes();
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use('/uploads', express_1.default.static('uploads'));
    }
    allRoutes() {
    }
}
exports.default = new App().app;
