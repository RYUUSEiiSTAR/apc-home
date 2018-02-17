import React from 'react';
import $ from 'jquery';
import GalleryItem from '../components/galleryItem.jsx';

export default class GalleryItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gallery: [] };
    }

    componentDidMount() {
        this.GalleryItemContainer();
    }

    GalleryItemContainer() {
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

                let gallery = galleryItems.map((item) =>
                    <li key = { item.idx }>{ item.galleryItem }</li>
                );

                this.setState((prevState, props) => ({
                    gallery: gallery
                }));
            }.bind(this),
            error: function() {
                console.log('Request failed.')
            }
        });

        // let response;
        // let xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://apc-home.herokuapp.com/api/flickr-photosets');
        // xhr.onload = () => {
        //     if (xhr.status === 200) {
        //         response = JSON.parse(xhr.responseText);
        //         let galleryItems = [];
        //         for (idx = 0; idx < response.photoset.photo.length; idx++) {
        //             let title = photo.title;
        //             let image = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        //             let description = photo.description._content;
        //             let galleryItem = <GalleryItem title = { title } image = { image } description = { description } />;
        //             galleryItems.push({idx, galleryItem});
        //         };

        //         let gallery = galleryItems.map((item) =>
        //             <li key = { item.idx }>{ item.galleryItem }</li>
        //         );

        //         this.setState((prevState, props) => ({
        //             gallery: gallery
        //         }));
        //     } else {
        //         response = "Request failed. Status code: " + xhr.status;
        //     }
        // }
    }

    render() {
        return(
            <ul>{ this.state.gallery }</ul>
        );
    };
}