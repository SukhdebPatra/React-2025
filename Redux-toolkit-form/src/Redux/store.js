import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSliice";

export const store = configureStore({
  reducer: {
    form: formSlice,
  },
});
