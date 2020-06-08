import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function ThsirtBox({ teeshirt }) {
    return (
        <div className="container">
        <div className="individual-tshirt">
            <p className="tee-name">{teeshirt.name}</p>
            <img className="picture-tee" src={teeshirt.picture} alt={teeshirt.name}/>
            <div className="icons-on-tee">
                <FontAwesomeIcon className="icon-on-tee" icon={faShoppingBasket} />
                <FontAwesomeIcon className="icon-on-tee" icon={faHeart} />
            </div>
            <p className="tee-price">{teeshirt.price}</p> 
       </div>
       </div>    )
}
