import React from 'react';

export default function GalleryItem(props) {
    return (
        <div>
            <div className='left-panel'>
                <img className='sell-image' src={ props.image } alt={ props.title }/>
            </div>
            <div className='right-panel'>
                <p className='sell-text'>
                    <span className='subheading'>{ props.title }</span>
                    <br />
                    <br />
                    { props.description }
                </p>
            </div>
        </div>
    );
}