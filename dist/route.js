"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const utils_1 = require("./utils");
exports.route = [
    {
        path: '/',
        method: "GET",
        handler: utils_1.showUpData
    },
    {
        path: "/add",
        method: "POST",
        handler: utils_1.addUpData
    }
];
