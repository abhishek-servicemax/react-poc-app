import {createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reducers/mathReducer";
import userStore from "./reducers/userReducer";
import barReducer from "./reducers/barchartReducer";


export default createStore(
		combineReducers({math, userStore, barReducer}),
		{},
		applyMiddleware(logger, thunk, promise())
);