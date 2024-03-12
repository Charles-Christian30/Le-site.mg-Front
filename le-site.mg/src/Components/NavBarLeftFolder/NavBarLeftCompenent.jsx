import { useNavigate } from "react-router-dom"
import s from "./style.module.css"
import { useState } from "react";

export function NavBarLeft(){
    const navigate = useNavigate();

    const[isHomeCliqued, setIsHomeCliqued] = useState("");
    const[isAlaUneCliqued, setIsAlaUneCliqued] = useState("");

    function HomehandleClique(){
        setIsHomeCliqued("active")
        setIsAlaUneCliqued("")
        navigate("/")
    };

    function AlaUneHandleClique(){
        setIsAlaUneCliqued("active")
        setIsHomeCliqued("")
        navigate("/ALaUne")
    }

    return(
        <div className={s.container}>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a className={`nav-link ${isHomeCliqued}`}  aria-current="page" href="#" onClick={() => HomehandleClique()}>Accueil</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${isAlaUneCliqued}`} href="#" onClick={() => AlaUneHandleClique()}>A la une</a>
                </li>
            </ul>
        </div>
    )
}