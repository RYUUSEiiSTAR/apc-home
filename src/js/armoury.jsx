import React from 'react';

import Nav from './nav.jsx'
import GalleryItem from './components/galleryItem.jsx'

export default class Armoury extends React.Component {
  render() {
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
                    <div>

                    </div>
                </div>
            </div>
        );
    }
} 