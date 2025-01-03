import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSliice";
import apiSlce from "../Redux/apiSlice";

export const store = configureStore({
  reducer: {
    form: formSlice,
    api: apiSlce,
  },
});
