import React from 'react';

import Nav from './components/nav.jsx';

export default function Events() {
    let dates2018 = [
        { date: new Date('February 07 2018'), event: 'Rim Fire Single Handed', upcoming: false },
        { date: new Date('February 21 2018'), event: 'Rim Fire Double Handed', upcoming: false },
        { date: new Date('March 07 2018'), event: 'Center Fire Single Handed', upcoming: false },
        { date: new Date('March 21 2018'), event: 'Center Fire Double Handed', upcoming: false },
        { date: new Date('April 04 2018'), event: 'Rim Fire Single Handed', upcoming: false },
        { date: new Date('April 18 2018'), event: 'Rim Fire Double Handed', upcoming: false },
        { date: new Date('May 02 2018'), event: 'Center Fire Single Handed', upcoming: false },
        { date: new Date('May 16 2018'), event: 'Center Fire Double Handed', upcoming: false },
        { date: new Date('June 06 2018'), event: 'Rim Fire Single Handed', upcoming: false },
        { date: new Date('June 20 2018'), event: 'Rim Fire Double Handed', upcoming: false },
        { date: new Date('July 04 2018'), event: 'Center Fire Single Handed', upcoming: false },
        { date: new Date('July 18 2018'), event: 'Center Fire Double Handed', upcoming: false },
        { date: new Date('August 01 2018'), event: 'Rim Fire Single Handed', upcoming: false },
        { date: new Date('August 15 2018'), event: 'Rim Fire Double Handed', upcoming: false },
        { date: new Date('September 05 2018'), event: 'Center Fire Single Handed', upcoming: false },
        { date: new Date('September 19 2018'), event: 'Center Fire Double Handed', upcoming: false },
        { date: new Date('October 03 2018'), event: 'Rim Fire Single Handed', upcoming: false },
        { date: new Date('October 17 2018'), event: 'Rim Fire Double Handed', upcoming: false },
        { date: new Date('November 07 2018'), event: 'Annual General Meeting', upcoming: false },
        { date: new Date('November 21 2018'), event: 'Club Christmas Party', upcoming: false },
    ]
    
    let today = Date.now();
    for (let el of dates2018) {
        if (el.date > today) {
            el.upcoming = true;
            break;
        }
    }

    return(
        <div>
            <Nav />

            <div id='body'>
                <h1>Events for 2018</h1>
                <div>
                    <p>
                        Important dates for the year:
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Event</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
} 