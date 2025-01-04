import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSliice";
import apiSlce from "../Redux/apiSlice";
import userSlice from "../Redux/UserSlice";
import userInput from "../Redux/UserSlice";

export const store = configureStore({
  reducer: {
    form: formSlice,
    api: apiSlce,
    users: userSlice,
    userInput: userInput,
  },
});
