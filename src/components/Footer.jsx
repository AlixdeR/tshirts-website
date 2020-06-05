import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer><p>Made by Xe</p><FontAwesomeIcon className="icon-footer" icon={faLightbulb} /></footer>
    )
}
