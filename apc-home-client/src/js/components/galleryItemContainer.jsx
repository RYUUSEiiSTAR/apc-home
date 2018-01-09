import React from 'react';
import $ from 'jquery';
import GalleryItem from '../components/galleryItem.jsx';

export default class GalleryItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gallery: [] };
    }

    componentDidMount() {
        this.Gallery();
    }

    Gallery() {
        $.ajax({
            type: 'GET',
            url: 'https://api.flickr.com/services/rest/',
            data: {
                api_key: '',
                method: 'flickr.photosets.getPhotos',
                photoset_id: '72157689007399362',
                user_id: '137676527@N05',
                extras: 'description',
                format: 'json',
                jsoncallback: '1'
            },
            success: function(data) {
                data = data.substr(2).slice(0, -1);
                let response = JSON.parse(data);
                let galleryItems = [];
                $.each(response.photoset.photo, function(idx, photo) {
                    let title = photo.title;
                    let image = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                    let description = photo.description._content;
                    let galleryItem = <GalleryItem title = { title } image = { image } description = { description } />;
                    galleryItems.push({idx, galleryItem});
                })

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
                alert(response.message)
            }
        })
    }

    render() {
        return(
            <ul>{ this.state.gallery }</ul>
        );
    };
}