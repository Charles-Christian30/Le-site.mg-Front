import { configureStore } from "@reduxjs/toolkit";
import { acceuilReducer } from "./accueil/accueil-slice";

export const store = configureStore({
  reducer: {
    ACCUEIL: acceuilReducer,
  },
});
