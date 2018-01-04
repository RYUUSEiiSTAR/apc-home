import React from 'react';

export default function GalleryItem(props) {
    return (
        <div>
            <p>
                <span className='subheading'>{ props.title }</span>
            </p>
            <br />
            <span className='left-panel'>
                <img className='sell-image' src={ props.image }/>
            </span>
            <span className='right-panel'>
                <p>{ props.description }</p>
            </span>
        </div>
    );
}