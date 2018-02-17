import React from 'react';

export default function EventDate(props) {
    var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return (
        <tr className={ props.upcoming }>
            <td>
                { monthNames[props.date.getMonth()] } { props.date.getDate() }
            </td>
            <td>
                { props.event }
            </td>
        </tr>
    );
}