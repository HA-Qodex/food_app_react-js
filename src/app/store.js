import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/user/UserSlice";

export const store = configureStore({
  reducer: {
    userReducer: UserReducer,
  },
});
