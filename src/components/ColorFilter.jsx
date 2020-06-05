import React from 'react'

export default function ColorFilter( { color } ) {
    
    
    return (
        <div>
            <div className="input-color" name="color" style={{backgroundColor: color}}></div>
        </div>
    )
}
