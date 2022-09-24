import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";

const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

const initialState = {
  isLoading: false,
  user: JSON.parse(localStorage.getItem("user")),
  error: null,
};

export const getUserData = createAsyncThunk("user/getData", async () => {
  const response = await signInWithPopup(firebaseAuth, provider);
  return response.user.providerData[0];
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      localStorage.setItem("user",JSON.stringify(action.payload));
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.user = state;
      state.error = action.error.message;
    });
  },
});

export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;
