import React from 'react';

export default function GalleryItem(props) {
    return (
        <p>
            <div className='subheading'>{ props.title }</div>
            <br />
            <span className='left-panel'><img className='sell-image' src={ props.image }/></span>
            <span className='right-panel'>{ props.description }</span>
        </p>
    );
}