import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface loggedInState {
  isLoggedIn: boolean;
}

const initialState: loggedInState = {
  isLoggedIn: false,
};

export const logginSlice = createSlice({
  name: "loginFlag",
  initialState,
  reducers: {
    isLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { isLogin } = logginSlice.actions;

export default logginSlice.reducer;
