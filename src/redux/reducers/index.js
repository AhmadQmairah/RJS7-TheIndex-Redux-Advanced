import { combineReducers } from "redux";

import authorReducer from "./authors";
import booksReducer from "./books";
import { universal } from "postcss-selector-parser";
const rootReducer = combineReducers({
  authorState: authorReducer,
  bookState: booksReducer
});

export default rootReducer;
