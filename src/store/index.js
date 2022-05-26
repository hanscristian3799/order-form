import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./reducers/formSlice";

export const store = configureStore({
  reducer: {
    form: formSlice,
  },
});
