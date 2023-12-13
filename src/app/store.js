import { configureStore } from "@reduxjs/toolkit";
import reportReducer from "../slices/reportSlice";

export const store = configureStore({
  reducer: {
    report: reportReducer,
  },
});