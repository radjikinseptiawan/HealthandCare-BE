"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
exports.route = [
    {
        path: '/',
        method: "GET",
        handler: () => {
            return { message: "Welcome test" };
        }
    }
];
