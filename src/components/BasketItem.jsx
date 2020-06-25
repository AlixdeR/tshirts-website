import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'


export default function BasketItem({elem, deleteElem, handleQuantityMinus, handleQuantityPlus}) {
    
    return (
        <li className="list-elem">
            <div className="name-list-elem">
                {elem.qty} {elem.name}
                <FontAwesomeIcon className="icon-on-list-elem fa-xs" icon={faPlus} onClick={() => handleQuantityPlus(elem)}/>
                <FontAwesomeIcon className="icon-on-list-elem fa-xs" icon={faMinus} onClick={() => handleQuantityMinus(elem)}/>
            </div>
            <div className="price-list-elem">
                | {elem.price*elem.qty}€
                <FontAwesomeIcon className="icon-on-list-elem fa-xs" icon={faTrash} onClick={() => deleteElem(elem)}/>
            </div> 
        </li>
 
    )
}
