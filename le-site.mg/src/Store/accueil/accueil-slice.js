import { createSlice } from "@reduxjs/toolkit";

const accueilSlice = createSlice({
  name: "accueilSlice",
  initialState: {
    accueilList: [],
  },
  reducers: {
    setAccueil: (current, action) => {
      current.accueilList = action.payload;
    },
  },
});

export const acceuilReducer = accueilSlice.reducer;

export const { setAccueil } = accueilSlice.actions;
