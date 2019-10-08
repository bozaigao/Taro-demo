import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "../reducers/index";
const composeEnhancers = typeof window === 'object' &&
//@ts-ignore
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//@ts-ignore
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;
const middlewares = [thunkMiddleware];
//@ts-ignore
if (true && true) {
  middlewares.push(require('redux-logger').createLogger());
}
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
export default function configStore() {
  const store = createStore(rootReducer, enhancer);
  return store;
}