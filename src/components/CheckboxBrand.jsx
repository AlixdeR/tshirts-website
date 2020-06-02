import React from 'react'

export default function checkboxBrand( { brand, filterBrand } ) {
    return (
        <div>
            <input type="checkbox" name="brand" onClick={() => filterBrand(brand)}></input>
            <label htmlFor="brand">{brand}</label>
        </div>
    )
}
