import {
  LoginInputValues,
  type RegisterInputValues,
} from "./../../components/Auth/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type UserData } from "./types";
import { registerUser, loginUser, logoutUser } from "./operations";

const initialState: UserData = {
  user: {
    name: "",
    email: "",
    userId: "",
  },
  isLoggedIn: false,
  error: null,
  isLoading: "",
};

export const handleError = (state: UserData, action: PayloadAction<any>) => {
  state.isLoading = "";
  state.error = action.payload?.message || action.payload || null;
};

type RegisterPayload = RegisterInputValues & {
  userId: string;
};

type LoginPayload = Pick<RegisterInputValues, "name" | "email"> & {
  userId: string;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = "registration-in-progress";
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<RegisterPayload>) => {
          state.isLoggedIn = true;
          state.isLoading = "";
          state.error = null;
          state.user.userId = action.payload.userId;
        }
      )
      .addCase(registerUser.rejected, handleError)
      .addCase(loginUser.pending, (state) => {
        state.isLoading = "logining-in-progress";
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoggedIn = true;
        state.isLoading = "";
        state.error = null;
      })
      .addCase(loginUser.rejected, handleError)
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = "logout-in-progress";
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = {
          name: "",
          email: "",
          userId: "",
        };
        state.isLoading = "";
        state.error = null;
      })
      .addCase(logoutUser.rejected, handleError);
  },
  reducers: {
    refreshUser: (state, action: PayloadAction<LoginPayload>) => {
      state.isLoggedIn = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.userId = action.payload.userId;
    },
  },
});

export default userSlice.reducer;
export const { refreshUser } = userSlice.actions;
