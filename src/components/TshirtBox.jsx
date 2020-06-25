import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons'


export default function TshirtBox ({teeshirt, handleBasketClick, handleFavClick}) {
        const [checkedBasket, setCheckedBasket] = useState(true)
        const [checkedFav, setCheckedFav] = useState(true)

        const handleIconCheckedBasket = () => {
            setCheckedBasket(false)
            setTimeout(() => setCheckedBasket(true), 2000)
        }

        const handleIconCheckedFav = () => {
            setCheckedFav(false)
            setTimeout(() => setCheckedFav(true), 2000)
        }

        return (
            <div className="container">
                <div className="individual-tshirt">
                    <p className="tee-name">{teeshirt.name}</p>
                    <img className="picture-tee" src={teeshirt.picture} alt={teeshirt.name}/>
                    <div className= {checkedBasket? "icon-check" : "icon-check-visible"}>
                        <FontAwesomeIcon className="fa-2x" icon={faCheck}/>
                        <p className="added">Ajouté au panier!</p>
                    </div>
                    <div className= {checkedFav? "icon-check" : "icon-check-visible"}>
                        <FontAwesomeIcon className="fa-2x" icon={faCheck}/>
                        <p className="added">Ajouté aux favoris!</p>
                    </div>
                    <div className="icons-on-tee">
                        <FontAwesomeIcon className="icon-on-tee" icon={faShoppingBasket} onClick={() => {
                            handleBasketClick(teeshirt);
                            handleIconCheckedBasket()
                        }}/>
                        <FontAwesomeIcon className="icon-on-tee" icon={faHeart} onClick={() => {
                            handleFavClick(teeshirt);
                            handleIconCheckedFav()
                        }}/>
                    </div>
                    <p className="tee-price">{teeshirt.price}€</p> 
                </div>
            </div>    
       )
}
