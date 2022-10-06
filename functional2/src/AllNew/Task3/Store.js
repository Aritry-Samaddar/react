import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import taskReducer from "./Reducer";
import { initialState } from "./Reducer";
const Store=createStore(taskReducer,initialState,applyMiddleware(thunk))
export default Store