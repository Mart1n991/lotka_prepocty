import { createStore } from "redux";
import data from "../reducers/data";

const store = createStore(data, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
