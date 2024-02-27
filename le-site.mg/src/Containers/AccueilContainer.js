import { useEffect,useState } from "react";
import axios from "axios";

const url = "https://localhost:44334/api/LeSite";

const Accueil = () => {
    const [data, setData] = useState('')
    
    
    useEffect(() =>{
        axios.get(url).then(response => {
            console.log(response)
            setData(response.data)
        });
    },[]);

    return(
        <div>
            <ul>
            {
                data.map(x =>{
                    return(
                        <li>
                             {x.titre}
                                <br/><br/>  
                            <image src={"D://Le-site.mg//Images//Accueil//formations.jpg"} />
                               
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Accueil