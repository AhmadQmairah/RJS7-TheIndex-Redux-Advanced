import { combineReducers } from "redux";

import authorReducer from "./authors";
import booksReducer from "./books";
const rootReducer = combineReducers({
  authorState: authorReducer,
  bookState: booksReducer
});

export default rootReducer;
