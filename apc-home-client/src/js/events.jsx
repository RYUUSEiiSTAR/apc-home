import React from 'react';

import Nav from './components/nav.jsx';
import EventDateContainer from './components/eventDateContainer.jsx';

export default function Events() {
    return(
        <div>
            <Nav />

            <div id='body'>
                <h1>Events for 2018</h1>
                <div>
                    <p>
                        Important dates for the year:
                    </p>
                    <br />
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Event</th>
                            </tr>
                        </thead>
                        <EventDateContainer />
                    </table>
                    <br />
                </div>
            </div>
        </div>
    );
} 