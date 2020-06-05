import React from 'react'

export default function checkboxBrand( { brand } ) {
    return (
        <div>
            <input className="input-brand" type="checkbox" name="brand"></input>
            <label htmlFor="brand">{brand}</label>
        </div>
    )
}
