import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import userReducer from "./auth/slice.ts";
import teachersReducer from "./teachers/slice.ts";
import { favoritesReducer } from "./favorites/slice.ts";
import { filtersReducer } from "./filters/slice.ts";
import favoriteTeachersReaducer from "./favoriteTeachers/slice.ts";

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
