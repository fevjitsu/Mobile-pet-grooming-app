import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/forms/contactSlice";

export default configureStore({
  reducer: {
    contact: contactReducer,
  },
});
