"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const utils_1 = require("./utils");
class RefreshProvider extends react_1.default.Component {
    constructor(props) {
        super(props);
        /**
         * duration 参数无效
         * @param options
         * @returns {*}
         */
        this.pageScrollTo = (options = {}) => {
            // options must be an Object
            const isObject = utils_1.shouleBeObject(options);
            if (!isObject.res) {
                const res = { errMsg: `pageScrollTo${isObject.msg}` };
                console.warn(res.errMsg);
                return Promise.reject(res);
            }
            const res = { errMsg: 'navigateTo:ok' };
            let { scrollTop, success, fail, complete } = options;
            if (typeof Number(scrollTop) !== 'number') {
                const res = { errMsg: 'pageScrollTo params scrollTop is not number' };
                console.warn(res.errMsg);
                return Promise.reject(res);
            }
            try {
                console.log(this._scrollView);
                this._scrollView.current.scrollTo({ x: 0, y: Number(scrollTop), animated: true });
            }
            catch (e) {
                return utils_1.errorHandler(fail, complete)({ errMsg: e });
            }
            return utils_1.successHandler(success, complete)(res);
        };
        this.onScroll = (e) => {
            this.props.onScroll && this.props.onScroll(e.nativeEvent.contentOffset.y);
        };
        // TODO 滚动到底部事件
        this.handleReachBottom = () => {
            this.props.onReachBottom && this.props.onReachBottom();
        };
        this.handlePullDownRefresh = (callback) => {
            this.setState({ refreshing: true }, callback);
            try {
                // TODO 处理异步的情况
                this.props.onPullDownRefresh && this.props.onPullDownRefresh();
            }
            catch (e) {
                throw new Error(e);
            }
            finally {
                this.setState({ refreshing: false });
            }
        };
        this.stopPullDownRefresh = (callback) => {
            this.setState({ refreshing: false }, callback);
        };
        this._scrollView = react_1.default.createRef();
        this.state = {
            refreshing: false
        };
    }
    render() {
        const { enablePullDownRefresh, disableScroll } = this.props;
        if (disableScroll) {
            return this.props.children;
        }
        else {
            return (react_1.default.createElement(react_native_1.ScrollView, { style: { flex: 1 }, ref: this._scrollView, contentContainerStyle: { minHeight: '100%' }, scrollEventThrottle: 5, alwaysBounceVertical: true, onScroll: this.onScroll, refreshControl: enablePullDownRefresh
                    ? react_1.default.createElement(react_native_1.RefreshControl, { refreshing: this.state.refreshing, onRefresh: this.handlePullDownRefresh })
                    : null }, this.props.children && this.props.children));
        }
    }
}
exports.default = RefreshProvider;
