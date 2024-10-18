import { type RegisterInputValues } from "./../../components/Auth/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type UserData } from "./types";
import { registerUser, logoutUser } from "./operations";

const initialState: UserData = {
  user: {
    name: "",
    email: "",
  },
  isLoggedIn: false,
  error: null,
  isLoading: "",
};

const handleError = (state: UserData, action: PayloadAction<any>) => {
  state.isLoading = "";
  state.error = action.payload?.message || action.payload || null;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = "button-loader";
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<RegisterInputValues>) => {
          state.isLoggedIn = true;
          state.user = {
            name: action.payload.name,
            email: action.payload.email,
          };
          state.isLoading = "";
          state.error = null;
        }
      )
      .addCase(registerUser.rejected, handleError)
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = "overlay-loader";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = {
          name: "",
          email: "",
        };
        state.isLoading = "";
        state.error = null;
      })
      .addCase(logoutUser.rejected, handleError);
  },
  reducers: {
    refreshUser: (
      state,
      action: PayloadAction<Pick<RegisterInputValues, "name" | "email">>
    ) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    },
  },
});

export default userSlice.reducer;
export const { refreshUser } = userSlice.actions;
