import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function TshirtBox ({teeshirt, handleBasketClick}) {
        const [checked, setChecked] = useState(true)

        const handleIconChecked = () => {
            console.log("coucou")
            setChecked(false)
            setTimeout(() => setChecked(true), 2000)
        }

        return (
            <div className="container">
                <div className="individual-tshirt">
                    <p className="tee-name">{teeshirt.name}</p>
                    <img className="picture-tee" src={teeshirt.picture} alt={teeshirt.name}/>
                    <div className= {checked? "icon-check" : "icon-check-visible"}>
                        <FontAwesomeIcon className="fa-2x" icon={faCheck}/>
                        <p className="added">Ajouté au panier!</p>
                    </div>
                    
                    <div className="icons-on-tee">
                        <FontAwesomeIcon className="icon-on-tee" icon={faShoppingBasket} onClick={() => {
                            handleBasketClick(teeshirt);
                            handleIconChecked()
                        }}/>
                        <FontAwesomeIcon className="icon-on-tee" icon={faHeart} />
                    </div>
                    <p className="tee-price">{teeshirt.price}€</p> 
                </div>
            </div>    
       )
}
