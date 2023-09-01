import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import projectReducer from "./reducers/projectReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
  },
  middleware: [thunk],
});
