import React from 'react';
import $ from 'jquery';
import GalleryItem from '../components/galleryItem.jsx';

export default class GalleryItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { errorText: '', gallery: [] };
    }

    componentDidMount() {
        this.GalleryItemContainer();
    }

    GalleryItemContainer() {
        let gallery = [];
        let errorStr = '';

        $.ajax({
            type: 'GET',
            url: 'https://apc-home.herokuapp.com/api/flickr-photosets',
            success: function(data) {
                let response = JSON.parse(data);
                let galleryItems = [];
                $.each(response.photoset.photo, function(idx, photo) {
                    let title = photo.title;
                    let image = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                    let description = photo.description._content;
                    let galleryItem = <GalleryItem title = { title } image = { image } description = { description } />;
                    galleryItems.push({idx, galleryItem});
                });

                gallery = galleryItems.map((item) =>
                    <li key = { item.idx }>{ item.galleryItem }</li>
                );

                errorStr = '';
                if(!gallery.length > 0) {
                    errorStr = 'There are no guns currently available. Please check again soon!'
                }

                this.setState((prevState, props) => ({
                    errorText: errorStr,
                    gallery: gallery
                }));
            }.bind(this),
            error: function() {
                console.log('Request failed.')

                errorStr = 'The request failed to retrieve any guns from the armoury. Please contact the Club Secretary.'
                this.setState((prevState, props) => ({
                    errorText: errorStr,
                    gallery: gallery
                }));
            }.bind(this)
        });
    }

    render() {
        return(
            <div>
                <p className='italics'>
                    { this.state.errorText }
                </p>
                <ul id='gallery'>{ this.state.gallery }</ul>
            </div>
        );
    };
}