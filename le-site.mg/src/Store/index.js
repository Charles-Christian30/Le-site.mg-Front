import { configureStore } from "@reduxjs/toolkit";
import { acceuilReducer } from "./accueil/accueil-slice";
import { formationsReducer } from "./accueil/formation-slice";
import { BienEtreReducer } from "./accueil/bienEtre-slice";
import { hreReducer } from "./accueil/hre-slice";
import { shoppingReducer } from "./accueil/shopping";

export const store = configureStore({
  reducer: {
    ACCUEIL: acceuilReducer,
    FORMATIONS: formationsReducer,
    BIENETRES: BienEtreReducer,
    HOTELSRESTAURANTSESPACES: hreReducer,
    SHOPPINGS: shoppingReducer,
  },
});
