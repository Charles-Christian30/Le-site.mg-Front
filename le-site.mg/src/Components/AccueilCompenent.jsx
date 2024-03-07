
const AccueilComponent = ({accueil, imageAccueil}) =>{
    console.log(accueil)
    return(
        <div>
            <p>Accueil</p>
            <h3>{accueil.titre}</h3>
            {/* <image src="../Assets/AccueilImage/formations.jpg"/> */}
        </div>
    )
}

export default AccueilComponent;