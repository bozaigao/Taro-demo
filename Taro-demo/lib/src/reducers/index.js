"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const login_1 = require("../actions/login");
const home_1 = require("../actions/home");
exports.default = redux_1.combineReducers({
    login: login_1.default,
    home: home_1.default
});
//# sourceMappingURL=index.js.map