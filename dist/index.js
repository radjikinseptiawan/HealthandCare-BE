"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = __importDefault(require("@hapi/hapi"));
const route_1 = require("./route");
async function init() {
    const server = hapi_1.default.server({
        port: 3000,
        host: 'localhost'
    });
    server.route(route_1.route);
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
}
init();
