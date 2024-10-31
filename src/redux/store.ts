import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./auth/slice.ts";
import teachersReducer from "./teachers/slice.ts";
import { favoritesReducer } from "./favorites/slice.ts";
import { filtersReducer } from "./filters/slice.ts";
import favoriteTeachersReaducer from "./favoriteTeachers/slice.ts";

const persistConfiguration = {
  key: "favorites",
  storage,
  whitelist: ["favoriteTeachersIds"],
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    teachers: teachersReducer,
    favorites: favoritesReducer,
    favoriteTeachers: favoriteTeachersReaducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
