import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
  pin: "",
};

const userInput = createSlice({
  name: "userForm",
  initialState,
  reducers: {
    setUserForm: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    resetUserForm: () => initialState,
  },
});
export const { setUserForm, resetUserForm } = userInput.actions;
export default userInput.reducer;
