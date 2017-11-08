import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import index from './index.html';
import style from './css/styles.scss';
import feather from 'feather-icons';

import Header from './js/header.jsx';
import Body from './js/body.jsx';

export default class APC extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}

ReactDOM.render(<APC />, document.getElementById('apc'));