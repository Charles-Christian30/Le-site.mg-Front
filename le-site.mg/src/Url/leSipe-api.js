import axios from "axios";
const BASE_URL = "https://localhost:44334/api/LeSite";

export class leSiteAPI {
  static async GetAllAccueil() {
    var result = await axios.get(BASE_URL);
    return result.data;
  }
}
