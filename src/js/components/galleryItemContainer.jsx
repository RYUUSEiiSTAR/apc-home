import React from 'react';
import GalleryItem from '../components/galleryItem.jsx';
import pic from '../../armoury/171228 Hammerli xesse IPSC/20171105_133222.jpg';

export default class GalleryItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.newItem = this.newItem.bind(this);
        this.requireAll = this.requireAll.bind(this);
        this.requireAll(require.context('../../armoury/', true, /\.jpg|txt$/));
        const gallery = [];
        gallery.push(this.newItem('Hammerli xesse IPSC', pic, 'Hello World'));
        this.state = { gallery: gallery};
    }

    requireAll(r) {
        r.keys().forEach(r);
    }

    newItem(name, image, description) {
        return <GalleryItem title = { name } image = { image } description = { description } />;
    }

    render() {
        return(
            <ul>{ this.state.gallery }</ul>
        );
    };
}