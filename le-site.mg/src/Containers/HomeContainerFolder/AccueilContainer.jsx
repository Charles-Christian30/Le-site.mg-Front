import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AccueilComponent from "../../Components/AccueilFolder/AccueilCompenent";
import logoFormation from "../../Assets/AccueilImage/formations.jpg";
import logoBienEtre from "../../Assets/AccueilImage/bien-etre.png";
import logoHotelRestEspace from "../../Assets/AccueilImage/hotels-restaurants-espaces.jpg";
import logoShopping from "../../Assets/AccueilImage/shopping.jpg";
import s from "./style.module.css";
import { Formations, BienEtre, Shopping, HotelRestaurantEspace } from "../../Constantes/AccueilImagesConstantes";



const Accueil = () => {
  const selector = useSelector((store) => store.ACCUEIL.accueilList);
  const [accueilData, setAccueilData] = useState("");

  useEffect(() => {
    setAccueilData(selector);
  }, []);


  return (
    <div className={s.container}>
      {accueilData &&
        accueilData.map((data) => {
          let imageUrl;
          if (data.titre == Formations) {
            imageUrl = logoFormation;
          } else if (data.titre == BienEtre) {
            imageUrl = logoBienEtre;
          } else if (data.titre == HotelRestaurantEspace) {
            imageUrl = logoHotelRestEspace;
          } else if (data.titre == Shopping) {
            imageUrl = logoShopping;
          }

          return <AccueilComponent accueil={data} imageAccueil={imageUrl} />;
        })}
    </div>
  );
};

export default Accueil;
