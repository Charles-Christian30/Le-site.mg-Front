import { useEffect, useState } from "react";
import { leSiteAPI } from "../Url/leSipe-api";
import { setAccueil } from "../Store/accueil/accueil-slice";
import { useDispatch, useSelector } from "react-redux";
import AccueilComponent from "../Components/AccueilCompenent";

const Accueil = () => {
  //   const dispatch = useDispatch();
  const selector = useSelector((store) => store.ACCUEIL.accueilList);
  const [data, setData] = useState("");

  useEffect(() => {
    setData(selector);
  }, []);

  return (
    <div>
      {data &&
        data.map((x) => {
          let img = "";
          if (x.titre == "Bien-être") {
            img = "../Assets/AccueilImage/bien-etre.jpg";
          } else if (x.titre == "Formations") {
            img = "../Assets/AccueilImage/formations.jpg";
          } else if (x.titre == "Hôtels / Restaurants / Espaces") {
            img = "../Assets/AccueilImage/hotels-restaurants-espaces.jpg";
          } else if (x.titre == "Shopping") {
            img = "../Assets/AccueilImage/shopping.jpg";
          }
          return x.titre;
          // return <AccueilComponent accueil={x} imageAccueil={img} />;
        })}
    </div>
  );
};

export default Accueil;
