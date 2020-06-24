import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default function BasketItem({elem, deleteElem}) {
    
    return (
        <li className="list-elem"> 
            <p className="name-list-elem">{elem.qty} {elem.name}</p>
            <p className="price-list-elem">| {elem.price*elem.qty}€</p> 
            <FontAwesomeIcon className="icon-on-list-elem" icon={faTrash} onClick={() => deleteElem(elem)}/>
        </li>
 
    )
}