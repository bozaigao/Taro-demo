"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const mockjs_1 = require("mockjs");
//@ts-ignore
exports.default = {
    // 使用 mockjs 等三方库
    'GET /login/token': mockjs_1.default.mock({
        'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
    }),
};
//# sourceMappingURL=login.js.map