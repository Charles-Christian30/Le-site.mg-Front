import { Outlet } from "react-router-dom";
import "./App.css";
import Accueil from "./Containers/AccueilContainer";
import { useDispatch, useSelector } from "react-redux";
import { leSiteAPI } from "./Url/leSipe-api";
import { setAccueil } from "./Store/accueil/accueil-slice";
import { useEffect } from "react";
import logoBe from "../src/Assets/AccueilImage/bien-etre.png";
import logo from "../src/Assets/AccueilImage/formations.jpg";

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
    <div className="App">
      {/* <Outlet /> */}
      <img src={logo} />
    </div>
  );
}

export default App;
