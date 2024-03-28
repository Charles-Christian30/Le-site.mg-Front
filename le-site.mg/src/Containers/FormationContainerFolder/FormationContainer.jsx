import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function FormationContainer(){
    var selector = useSelector((store) => store.FORMATIONS.formationsList)
    const [dataFormation, setDataFormation] = useState();

    useEffect(() =>{
        setDataFormation(selector);
    })

    console.log("dataFormation",dataFormation)
    return(
        <div>
            page Formation
        </div>
    )
}