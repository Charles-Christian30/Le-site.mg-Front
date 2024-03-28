import { createSlice } from "@reduxjs/toolkit";

const BienEtreSlice = createSlice({
  name: "Bien-etre",
  initialState: {
    BienEtreList: [],
  },

  reducers: {
    setBienEtre: (current, action) => {
      current.BienEtreList = action.payload;
    },
  },
});

export const BienEtreReducer = BienEtreSlice.reducer;

export const { setBienEtre } = BienEtreSlice.actions;
