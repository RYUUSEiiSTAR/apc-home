import React from 'react';
import { ChevronsDown } from 'react-feather';

import header_image from './../images/header.jpg';

function Header() {
    return(
        <div id='header'>
            <img id='header-image' src={ header_image } />

            <div id='header-text'>
                <div id='header-title'>
                    Airport
                    <br />
                    Pistol Club
                </div>
                <div id='header-subtitle'>
                    Wednesday 7PM-9PM
                    <br />
                    2/28 Harley Crescent
                    <br />
                    Condell Park, NSW 2200
                </div>
            </div>
            
            <ChevronsDown id='chevrons-down' />
        </div>
    );
}

export default Header;