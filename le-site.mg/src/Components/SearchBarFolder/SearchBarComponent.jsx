import s from "./style.module.css"
import { Search as SearchIcon } from "react-bootstrap-icons"

export function SearchBar (props){
    return(
        <div className="col-md-12 col-lg-8">
            <div className={s.container}>
                <SearchIcon className={s.icon}/>
                <input 
                    type="text" 
                    className={s.input} 
                    onChange={(e) =>alert(e.target.value)}
                    placeholder="Rechercher"
                    />
            </div>
        </div>
    )
}