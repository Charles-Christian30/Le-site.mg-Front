import { Outlet } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { leSiteAPI } from "./Url/leSipe-api";
import { setAccueil } from "./Store/accueil/accueil-slice";
import { useEffect } from "react";
import { Header } from "./Containers/HeaderContainerFolder/HeaderContainer";
import s from "./app.module.css";
import { Footer } from "./Containers/FooterContainerFolder/FooterContainer";

function App() {
  var dispatch = useDispatch();

  async function GetListAccueil() {
    var result = await leSiteAPI.GetAllAccueil();
    dispatch(setAccueil(result));
  }

  useEffect(() => {
    GetListAccueil();
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
