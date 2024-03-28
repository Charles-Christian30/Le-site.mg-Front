import { createSlice } from "@reduxjs/toolkit";

const hotelsRestaurantsEspaceSlice = createSlice({
  name: "hotels-restaurants-espace",
  initialState: {
    hreList: [],
  },

  reducers: {
    setHre: (current, action) => {
      current.hreList = action.payload;
    },
  },
});

export const hreReducer = hotelsRestaurantsEspaceSlice.reducer;
export const { setHre } = hotelsRestaurantsEspaceSlice.actions;
