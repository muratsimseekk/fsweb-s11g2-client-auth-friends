import {
    applyMiddleware,
    legacy_createStore as createStore,
  } from "redux";
  import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./reducer";
  export const store = createStore(
    reducer,
    applyMiddleware(logger, thunk)
  );
  