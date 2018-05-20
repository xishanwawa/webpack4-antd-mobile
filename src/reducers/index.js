
import { combineReducers } from 'redux'

import home from "./home"

let rootReducer =  combineReducers({
	home,
});

export {
	rootReducer,
}