import { combineReducers } from "redux";
import session from './userReducer';

const rootReducer = combineReducers({
    session
})

export default rootReducer;