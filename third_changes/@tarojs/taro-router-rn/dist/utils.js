"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEADER_CONFIG_MAP = {
    navigationBarTitleText: 'title',
    navigationBarTextStyle: 'headerTintColor',
    navigationBarBackgroundColor: 'backgroundColor',
    enablePullDownRefresh: 'enablePullDownRefresh',
    navigationStyle: 'navigationStyle',
    disableScroll: 'disableScroll' // 设置为 true 则页面整体不能上下滚动；只在页面配置中有效，无法在 app.json 中设置该项
};
function getNavigationOptions(config = {}) {
    if (typeof config !== 'object') {
        throw new Error('window 必须是对象');
    }
    let navigationOptions = {};
    Object.keys(config).forEach(function (key) {
        if (key in exports.HEADER_CONFIG_MAP) {
            navigationOptions[exports.HEADER_CONFIG_MAP[key]] = config[key];
        }
    });
    return navigationOptions;
}
exports.getNavigationOptions = getNavigationOptions;
// import { findDOMNode } from 'nervjs'
function shouleBeObject(target) {
    if (target && typeof target === 'object')
        return { res: true };
    return {
        res: false,
        msg: getParameterError({
            correct: 'Object',
            wrong: target
        })
    };
}
exports.shouleBeObject = shouleBeObject;
function getParameterError({ name = '', para, correct, wrong }) {
    const parameter = para ? `parameter.${para}` : 'parameter';
    const errorType = upperCaseFirstLetter(wrong === null ? 'Null' : typeof wrong);
    return `${name}:fail parameter error: ${parameter} should be ${correct} instead of ${errorType}`;
}
exports.getParameterError = getParameterError;
function upperCaseFirstLetter(string) {
    if (typeof string !== 'string')
        return string;
    string = string.replace(/^./, match => match.toUpperCase());
    return string;
}
exports.upperCaseFirstLetter = upperCaseFirstLetter;
function isFunction(obj) {
    return typeof obj === 'function';
}
exports.isFunction = isFunction;
function successHandler(success, complete) {
    return function (res) {
        isFunction(success) && success(res);
        isFunction(complete) && complete(res);
        return Promise.resolve(res);
    };
}
exports.successHandler = successHandler;
function errorHandler(fail, complete) {
    return function (res) {
        isFunction(fail) && fail(res);
        isFunction(complete) && complete(res);
        return Promise.reject(res);
    };
}
exports.errorHandler = errorHandler;
function serializeParams(params) {
    if (!params) {
        return '';
    }
    return Object.keys(params)
        .map(key => (`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)).join('&');
}
exports.serializeParams = serializeParams;
function temporarilyNotSupport(apiName) {
    return () => console.error(`暂时不支持 API ${apiName}`);
}
exports.temporarilyNotSupport = temporarilyNotSupport;
function permanentlyNotSupport(apiName) {
    return () => console.error(`不支持 API ${apiName}`);
}
exports.permanentlyNotSupport = permanentlyNotSupport;
const VALID_COLOR_REG = /^#\d{6}$/;
exports.isValidColor = (color) => {
    return VALID_COLOR_REG.test(color);
};
exports.createCallbackManager = () => {
    const callbacks = [];
    const add = (opt) => {
        callbacks.push(opt);
    };
    const remove = (opt) => {
        const pos = callbacks.findIndex(({ callback }) => {
            return callback === opt.callback;
        });
        if (pos > -1) {
            callbacks.splice(pos, 1);
        }
    };
    const count = () => callbacks.length;
    const trigger = (...args) => {
        callbacks.forEach(({ callback, ctx }) => {
            callback.call(ctx, ...args);
        });
    };
    return {
        add,
        remove,
        count,
        trigger
    };
};
/**
 * Loosely validate a URL `string`.
 *
 * @param {String} string
 * @return {Boolean}
 */
function isUrl(string) {
    const protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
    const localhostDomainRE = /^localhost[:?\d]*(?:[^:?\d]\S*)?$/;
    const nonLocalhostDomainRE = /^[^\s.]+\.\S{2,}$/;
    if (typeof string !== 'string') {
        return false;
    }
    let match = string.match(protocolAndDomainRE);
    if (!match) {
        return false;
    }
    let everythingAfterProtocol = match[1];
    if (!everythingAfterProtocol) {
        return false;
    }
    if (localhostDomainRE.test(everythingAfterProtocol) ||
        nonLocalhostDomainRE.test(everythingAfterProtocol)) {
        return true;
    }
    return false;
}
exports.isUrl = isUrl;
