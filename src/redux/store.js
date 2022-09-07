import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit'

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = configureStore({ reducer: rootReducer, middleware: middleware, });