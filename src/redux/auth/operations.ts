import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../config/firebase.js";
import {
  type RegisterInputValues,
  type LoginInputValues,
} from "../../components/Auth/types.js";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: RegisterInputValues, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(auth.currentUser, { displayName: data.name });
      return data;
    } catch (error: any) {
      const errorMessage =
        error.message || "Registration failed. Please try again.";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginInputValues, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      return data;
    } catch (error: any) {
      const errorMessage =
        error.message || "Registration failed. Please try again.";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (data, thunkAPI) => {
    try {
      signOut(auth);
    } catch (error) {
      let errorMessage;
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = "Logout failed. Please try again.";
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
