import React from 'react';

import Nav from './nav.jsx'
import GalleryItemContainer from './components/galleryItemContainer.jsx'

export default function Armoury() {
    return(
        <div>
            <Nav />

            <div id='body'>
                <h1>Guns for Purchase</h1>
                <div>
                    <p>
                        The club and its members will periodically have guns available for purchase.
                    </p>
                    <p>
                        This gallery will be updated as often as possible but no guarantees will be made to the availability of the guns.
                    </p>
                </div>
                <br />
                <div>
                    <GalleryItemContainer />
                </div>
            </div>
        </div>
    );
} 