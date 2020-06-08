import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faHeart,faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    return (
            <ul className="nav-bar">
                <li className="nav-bar-el">
                    <a href="/"><FontAwesomeIcon className="icon-nav-bar" icon={faHome} /> </a>
                    <a className="mobile-hidden" href="/">Home</a>
                </li>
                <li className="nav-bar-el">
                    <a href="/mon-compte"><FontAwesomeIcon className="icon-nav-bar" icon={faUserCircle} /> </a>
                    <a className="mobile-hidden" href="/mon-compte">Mon compte</a>
                </li>
                <li className="nav-bar-el">
                    <a href="/mes-favoris"><FontAwesomeIcon className="icon-nav-bar" icon={faHeart} /> </a>
                    <a className="mobile-hidden" href="/mes-favoris">Mes favoris</a>
                </li>
                <li className="nav-bar-el">
                    <a href="/mon-panier"><FontAwesomeIcon className="icon-nav-bar" icon={faShoppingBasket} /> </a>
                    <a className="mobile-hidden" href="/mon-panier">Mon panier</a>
                </li>
            </ul>
    )
}
