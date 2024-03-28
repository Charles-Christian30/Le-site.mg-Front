import { createSlice } from "@reduxjs/toolkit";

const formationsSlice = createSlice({
  name: "formationSlice",
  initialState: {
    formationsList: [],
  },
  reducers: {
    setFormation: (current, action) => {
      current.formationsList = action.payload;
    },
  },
});

export const formationsReducer = formationsSlice.reducer;

export const { setFormation } = formationsSlice.actions;
