
const AccueilComponent = ({accueil, imageAccueil}) =>{
    console.log(accueil)
    return(
        <div>
            <h3>{accueil.titre}</h3>
            <img src={imageAccueil} alt="logo" />
        </div>
    )
}

export default AccueilComponent;