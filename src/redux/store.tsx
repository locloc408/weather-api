import { configureStore } from "@reduxjs/toolkit";
// ...
import { combineReducers } from "redux";
import StoreReducer from "./slice/Store";
const reducers = combineReducers({
  StoreReducer,
});

const store = configureStore({
  reducer: reducers,
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
