import React from 'react'

export default function ThsirtBox({ teeshirt }) {
    return (
        <div className="individual-tshirt">
            <p className="tee-name">{teeshirt.name}</p>
            <img className="picture-tee" src={teeshirt.picture} alt={teeshirt.name}/>
            <p className="tee-price">{teeshirt.price}</p> 
       </div>
    )
}
