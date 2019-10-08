"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const counter_1 = require("../constants/counter");
const INITIAL_STATE = {
    num: 0
};
function counter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case counter_1.ADD:
            return Object.assign({}, state, { num: state.num + 1 });
        case counter_1.MINUS:
            return Object.assign({}, state, { num: state.num - 1 });
        default:
            return state;
    }
}
exports.default = counter;
//# sourceMappingURL=counter.js.map