import { useNavigate } from "react-router-dom";
import { NavBarLeft } from "../../Components/NavBarLeftFolder/NavBarLeftCompenent";
import { SearchBar } from "../../Components/SearchBarFolder/SearchBarComponent";
import s from "./style.module.css"

export function Header (){
    const navigate = useNavigate();
    return(
        <div className={`row ${s.container}`}>
            <div className="col-md-3 col-lg-3">
                <NavBarLeft/> 
            </div>
            <div className="col-md-6 col-lg-6">
                <SearchBar/>
            </div>
                <div className="col-md-3 col-lg-3">
                    <a onClick={() => navigate("/login")}>Se connecter  | </a>
                    <a href="#">S'inscrire </a>
                </div>
        </div>
    )
}
