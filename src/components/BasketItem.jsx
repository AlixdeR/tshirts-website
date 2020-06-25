import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'


export default function BasketItem({elem, deleteElem, handleQuantityMinus, handleQuantityPlus}) {
    
    return (
        <li className="list-elem"> 
            <p className="name-list-elem">{elem.qty} {elem.name}</p>
            <p className="price-list-elem">| {elem.price*elem.qty}€</p> 
            <FontAwesomeIcon className="icon-on-list-elem" icon={faPlus} onClick={() => handleQuantityPlus(elem)}/>
            <FontAwesomeIcon className="icon-on-list-elem" icon={faMinus} onClick={() => handleQuantityMinus(elem)}/>
            <FontAwesomeIcon className="icon-on-list-elem" icon={faTrash} onClick={() => deleteElem(elem)}/>
        </li>
 
    )
}
