import React from 'react';

export default function EventDates(props) {
    return (
        <tr className={ props.upcoming }>
            <td>
                { props.date }
            </td>
            <td>
                { props.event }
            </td>
        </tr>
    );
}