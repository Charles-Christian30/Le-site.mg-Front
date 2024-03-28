
const AccueilComponent = ({accueil, imageAccueil,onClickItem}) =>{
   
    return(
        <div onClick={() =>onClickItem(accueil.titre)}>
            <h3>{accueil.titre}</h3>
            <img src={imageAccueil} alt="logo" />
        </div>
    )
}

export default AccueilComponent;