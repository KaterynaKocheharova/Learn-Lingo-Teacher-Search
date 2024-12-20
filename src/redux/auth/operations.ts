import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, firestore } from "../../config/firebase.ts";
import { doc, setDoc } from "firebase/firestore";
import {
  type RegisterInputValues,
  type LoginInputValues,
} from "../../components/Auth/types.js";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: RegisterInputValues, thunkAPI) => {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const userRef = doc(firestore, "users", credentials.user.uid);

      await setDoc(userRef, {
        favorites: [],
      });

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: data.name });
      }
      return {
        ...data,
        userId: credentials.user.uid,
      };
      
    } catch (error: unknown) {
      let errorMessage;
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = "Registration failed";
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginInputValues, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      return;
    } catch (error: unknown) {
      let errorMessage;
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = "Login failed";
      }
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
