"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const utils_1 = require("./utils");
exports.route = [
    {
        path: '/task',
        method: "GET",
        handler: utils_1.showUpData
    },
    {
        path: "/task",
        method: "POST",
        handler: utils_1.addUpData
    },
    {
        path: "/task/{id}",
        method: "DELETE",
        handler: utils_1.deleteData
    }, {
        path: "/task/{id}",
        method: "PUT",
        handler: utils_1.editData
    }
];
