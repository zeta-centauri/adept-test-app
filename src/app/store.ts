import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from "../features/companies/model/companiesSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
