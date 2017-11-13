import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import index from './index.html';
import jquery from 'jquery';
import style from './css/styles.scss';
import feather from 'feather-icons';

import Nav from './js/nav.jsx'
import LandingPage from './js/landingPage.jsx';
import Armoury from './js/armoury.jsx';

export default class APC extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Nav />
                        <Route path="/" component={ LandingPage } />
                        <Route path="/armoury" component={ Armoury } />
                    </div>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<APC />, document.getElementById('apc'));