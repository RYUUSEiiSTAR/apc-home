import React from 'react';

import { Phone, AtSign, Mail } from 'react-feather';

export default function Contact() {
    return (
        <div id='contact'>
            <h1>Contact</h1>
            <p>
                <span className='subheading'>Eric Ryan</span>
                <br />
                <span className='subtitle'>Club Secretary</span>
            </p>
            <p>
                <Phone className='contact-icon' />+61 410 620 428
            </p>
            <p>
                <AtSign className='contact-icon' />secretary@airportpistolclub.com.au
            </p>
            <p>
                <Mail className='contact-icon' />Airport Pistol Club
                <br />
                PO Box 57
                <br />
                Minto 
                <br />
                NSW 2566
            </p>
        </div>
    );
}