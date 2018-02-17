import React from 'react';

import Nav from './components/nav.jsx'
import GalleryItemContainer from './components/galleryItemContainer.jsx';
import Contact from './components/contact.jsx';

export default function Armoury() {
    return(
        <div>
            <Nav />

            <div id='body'>
                <h1>Guns for Purchase</h1>
                <div>
                    <p>
                        The club and its members will periodically have guns available for purchase. Please contact the club secretary for all enquiries.
                    </p>
                    <p>
                        All transactions of firearms or parts of are bound by federal and state laws.  
                    </p>
                    <p>
                        This gallery will be updated as often as possible but no guarantees will be made to the availability of the guns.
                    </p>
                </div>
                <br />
                <GalleryItemContainer />
                <Contact />
            </div>
        </div>
    );
} 