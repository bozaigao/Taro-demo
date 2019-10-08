"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const counter_1 = require("../constants/counter");
exports.add = () => {
    return {
        type: counter_1.ADD
    };
};
exports.minus = () => {
    return {
        type: counter_1.MINUS
    };
};
// 异步的action
function asyncAdd() {
    return dispatch => {
        setTimeout(() => {
            dispatch(exports.add());
        }, 2000);
    };
}
exports.asyncAdd = asyncAdd;
//# sourceMappingURL=counter.js.map