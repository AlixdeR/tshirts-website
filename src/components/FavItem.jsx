import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faShoppingBasket, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function FavItem({teeshirt, deleteElem, handleBasketClick}) {
    const [checkedBasket, setCheckedBasket] = useState(true)

    const handleIconCheckedBasket = () => {
        setCheckedBasket(false)
        setTimeout(() => setCheckedBasket(true), 2000)
    }

    return (

        <div className="container container-fav">
                <div className="individual-fav">
                    <p className="tee-name">{teeshirt.name}</p>
                    <img className="picture-tee" src={teeshirt.picture} alt={teeshirt.name}/>
                    <div className= {checkedBasket? "icon-check icon-check-fav" : "icon-check-visible icon-check-fav"}>
                        <FontAwesomeIcon className="basket-check-fav fa-2x" icon={faCheck}/>
                        <p className="added added-fav">Ajouté au panier!</p>
                    </div>
                    <div className="icons-on-tee">
                        <FontAwesomeIcon className="icon-on-fav" icon={faShoppingBasket} onClick={() => {
                            handleBasketClick(teeshirt);
                            handleIconCheckedBasket()
                        }}/>
                        <FontAwesomeIcon className="icon-on-fav fa-lg" icon={faTimes} onClick={() => deleteElem(teeshirt)}/>
                    </div>
                    <p className="tee-price">{teeshirt.price}€</p> 
                </div>    
        </div>
    )
}
