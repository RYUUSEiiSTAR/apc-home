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
            url: 'http://localhost:3002/api/flickr-photosets',
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
            error: function(data) {
                data = data.substr(2).slice(0, -1);
                let response = JSON.parse(data);
                alert(response.message);
            }
        });
    }

    render() {
        return(
            <ul>{ this.state.gallery }</ul>
        );
    };
}