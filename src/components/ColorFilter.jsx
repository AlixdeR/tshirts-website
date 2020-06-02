import React from 'react'

export default function ColorFilter( { color, filterColor } ) {
    
    return (
        <div>
            <div className="input-color" name="color" style={{backgroundColor: color}} onClick={() => filterColor(color)}></div>
        </div>
    )
}
