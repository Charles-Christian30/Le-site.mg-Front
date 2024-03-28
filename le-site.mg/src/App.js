import { Outlet } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { leSiteAPI } from "./Url/leSipe-api";
import { setAccueil } from "./Store/accueil/accueil-slice";
import { useEffect } from "react";
import { Header } from "./Containers/HeaderContainerFolder/HeaderContainer";
import s from "./app.module.css";
import { Footer } from "./Containers/FooterContainerFolder/FooterContainer";
import {
  Formations,
  BienEtre,
  HotelRestaurantEspace,
  Shopping,
} from "./Constantes/AccueilImagesConstantes";
import { setFormation } from "./Store/accueil/formation-slice";
import { setBienEtre } from "./Store/accueil/bienEtre-slice";
import { setHre } from "./Store/accueil/hre-slice";
import { setShopping } from "./Store/accueil/shopping";

function App() {
  var dispatch = useDispatch();

  async function GetListAccueil() {
    var result = await leSiteAPI.GetAllAccueil();
    dispatch(setAccueil(result));
  }
  async function GetAllFormations() {
    var FormationsResult = await leSiteAPI.GetAllFomations(Formations);
    dispatch(setFormation(FormationsResult));
  }

  async function GetAllBienEtre() {
    var BienEtreResult = await leSiteAPI.GetAllBienEtre(BienEtre);
    dispatch(setBienEtre(BienEtreResult));
  }

  async function GetAllHre() {
    var HreResult = await leSiteAPI.GetAllHotelsRestaurantsEspaces(
      HotelRestaurantEspace
    );
    dispatch(setHre(HreResult));
  }

  async function GetAllShopping() {
    var ShoppingResult = await leSiteAPI.GetAllShopping(Shopping);
    dispatch(setShopping(ShoppingResult));
  }

  useEffect(() => {
    GetListAccueil();
    GetAllFormations();
    GetAllBienEtre();
    GetAllHre();
    GetAllShopping();
  }, []);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Header />
      </div>
      <div className={s.bodyContainer}>
        <Outlet />
      </div>
      <div className={s.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
