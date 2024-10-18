import { type RegisterInputValues } from "./../../components/Auth/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type UserData } from "./types";
import { registerUser } from "./operations";

const initialState: UserData = {
  user: {
    name: "",
    email: "",
  },
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const handleError = (state: UserData, action: PayloadAction<any>) => {
  state.isLoading = false;
  state.error = action.payload?.message || action.payload || null;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<RegisterInputValues>) => {
          state.isLoggedIn = true;
          state.user = {
            name: action.payload.name,
            email: action.payload.email,
          };
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(registerUser.rejected, handleError);
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
