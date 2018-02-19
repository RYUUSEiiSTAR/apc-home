import React from 'react';

export default function GalleryItem(props) {
    return (
        <div className='flex'>
            <div className='left-panel flex-50'>
                <img className='sell-image' src={ props.image } alt={ props.title }/>
            </div>
            <div className='right-panel flex-50'>
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