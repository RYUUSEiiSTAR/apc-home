import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import index from './index.html';
import style from './css/styles.scss';

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
                        <Switch>
                            <Route exact path="/" component={ LandingPage } />
                            <Route path="/armoury" component={ Armoury } />
                            <Route component={ LandingPage } />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<APC />, document.getElementById('apc'));