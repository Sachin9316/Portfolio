import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "./slices/homeSlice";

const rootReducer = combineSlices({
  home: homeSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
