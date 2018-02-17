import React from 'react';
import EventDate from '../components/eventDate.jsx';

export default class EventDateContainer extends React.Component {
    constructor(props) {
        super(props);
        let eventDateStrings = [
            { date: new Date('February 07 2018'), event: 'Rim Fire Single Handed', upcoming: null },
            { date: new Date('February 21 2018'), event: 'Rim Fire Double Handed', upcoming: null },
            { date: new Date('March 07 2018'), event: 'Center Fire Single Handed', upcoming: null },
            { date: new Date('March 21 2018'), event: 'Center Fire Double Handed', upcoming: null },
            { date: new Date('April 04 2018'), event: 'Rim Fire Single Handed', upcoming: null },
            { date: new Date('April 18 2018'), event: 'Rim Fire Double Handed', upcoming: null },
            { date: new Date('May 02 2018'), event: 'Center Fire Single Handed', upcoming: null },
            { date: new Date('May 16 2018'), event: 'Center Fire Double Handed', upcoming: null },
            { date: new Date('June 06 2018'), event: 'Rim Fire Single Handed', upcoming: null },
            { date: new Date('June 20 2018'), event: 'Rim Fire Double Handed', upcoming: null },
            { date: new Date('July 04 2018'), event: 'Center Fire Single Handed', upcoming: null },
            { date: new Date('July 18 2018'), event: 'Center Fire Double Handed', upcoming: null },
            { date: new Date('August 01 2018'), event: 'Rim Fire Single Handed', upcoming: null },
            { date: new Date('August 15 2018'), event: 'Rim Fire Double Handed', upcoming: null },
            { date: new Date('September 05 2018'), event: 'Center Fire Single Handed', upcoming: null },
            { date: new Date('September 19 2018'), event: 'Center Fire Double Handed', upcoming: null },
            { date: new Date('October 03 2018'), event: 'Rim Fire Single Handed', upcoming: null },
            { date: new Date('October 17 2018'), event: 'Rim Fire Double Handed', upcoming: null },
            { date: new Date('November 07 2018'), event: 'Annual General Meeting', upcoming: null },
            { date: new Date('November 21 2018'), event: 'Club Christmas Party', upcoming: null },
        ];

        let today = Date.now();
        let upcomingSet = false;
        let dateItems = [];
        for (let idx = 0; idx < eventDateStrings.length; idx++) {
            if (!upcomingSet) {
                if (eventDateStrings[idx].date > today) {
                    eventDateStrings[idx].upcoming = 'upcoming'
                    upcomingSet = true;
                }
            }
            let dateItem = <EventDate date={ eventDateStrings[idx].date } event={ eventDateStrings[idx].event} upcoming={ eventDateStrings[idx].upcoming } />
            dateItems.push({idx, dateItem});
        }

        let dates = dateItems.map((item) =>
            <tbody key={ item.idx }>{ item.dateItem }</tbody>
        );

        this.state = { dates: dates }
    }

    render() {
        return(this.state.dates);
    }
}