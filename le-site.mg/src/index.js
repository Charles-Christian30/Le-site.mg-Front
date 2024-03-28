import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Store";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Containers/HomeContainerFolder/AccueilContainer";
import { Login } from "./Components/LoginFolder/LoginComponet";
import { AlaUne } from "./Containers/AlaUneContainerFolder/AlaUneContainer";
import { FormationContainer } from "./Containers/FormationContainerFolder/FormationContainer";
import { ShoppingContainer } from "./Containers/ShoppingContainerFolder/ShoppingContainer";
import { BienEtreContainer } from "./Containers/BienEtreContainerFolder/BienEtreContainer";
import { HREContainer } from "./Containers/HotelsRestaurantsEspacesContainerFolder/HREContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Accueil />} />
            <Route path="/ALaUne" element={<AlaUne />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Formations" element={<FormationContainer />} />
            <Route path="/Shopping" element={<ShoppingContainer />} />
            <Route path="/Bien-être" element={<BienEtreContainer />} />
            <Route
              path="/Hôtels-Restaurants-Espaces"
              element={<HREContainer />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
