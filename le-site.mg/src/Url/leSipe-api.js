import axios from "axios";
const BASE_URL = "https://localhost:44334";

export class leSiteAPI {
  static async GetAllAccueil() {
    var result = await axios.get(`${BASE_URL}/Accueil`);
    return result.data;
  }

  static async GetAllFomations(categoryName) {
    var result = await axios.get(
      `${BASE_URL}/Category?categoryName=${categoryName}`
    );
    return result.data;
  }

  static async GetAllBienEtre(categoryName) {
    var result = await axios.get(
      `${BASE_URL}/Category?categoryName=${categoryName}`
    );
    return result.data;
  }

  static async GetAllHotelsRestaurantsEspaces(categoryName) {
    var result = await axios.get(
      `${BASE_URL}/Category?categoryName=${categoryName}`
    );
    return result.data;
  }
  static async GetAllShopping(categoryName) {
    var result = await axios.get(
      `${BASE_URL}/Category?categoryName=${categoryName}`
    );
    return result.data;
  }
}
