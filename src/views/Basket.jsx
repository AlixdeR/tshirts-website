import React from 'react'

export default function Basket() {
    return (
        <div className="basket-page">
            <h3 className="page-title">Mes articles</h3>
            <ul></ul>
            <hr className="total-hr"/>
            <p>Total = </p>
            <button className="btn">Je passe commande!</button>
        </div>
    )
}
