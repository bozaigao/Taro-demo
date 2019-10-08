import {combineReducers} from 'redux'
import login from "../actions/login";
import home from "../actions/home";

export default combineReducers({
  login,
  home
})
