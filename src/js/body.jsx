import React from 'react';

import { Target } from 'react-feather';
import { Crosshair } from 'react-feather';
import Weapon from './../images/weapon.svg';
import { Phone } from 'react-feather';
import { Mail } from 'react-feather';

function Body() {
    return (
        <div id='body'>
            <div id='intro'>
                <h1>Welcome to the Airport Pistol Club</h1>
                <div>
                    <div class='point'>
                        <Target class='point-icon target-icon'/>
                        <p>
                            Condell Park Indoor Firing Range consists of 12 bays of up to 25 meters
                            <br />
                            <br />
                            The armoury is available throughout the night to purchase supplies and targets
                        </p>
                    </div>
                    <div class='point'>
                        <img src={ Weapon } class='point-icon gun-icon'/>
                        <p>
                            The club and facility caters for all popular pistols; including air, rimfire .22, center fire 9mm and .38, and .357 magnum
                            <br />
                            <br />
                            .22LR rifles are also welcome
                        </p>
                    </div>
                    <div class='point'>
                        <Crosshair class='point-icon crosshair-icon'/>
                        <p>
                            We meet every Wednesday night between 7PM - 9PM and hold competitive shoots every other Wednesday
                        </p>
                    </div>
                </div>
                <div>
                    <p>
                        The club and its members will periodically have guns available for purchase
                        <br />
                        They can be viewed here
                    </p>
                </div>
            </div>
            <br />
            <div id='membership'>
                <h1>Membership</h1>
                <p>
                    APC is a small club of around 50 members which provides a friendly and welcoming atmosphere for shooters of all ages and experiences to enjoy our sport. All new and transferring members are required to undergo the club’s induction and safety course.
                    <br />
                    <br />
                    Fees are currently as follows:
                    <br />
                    $230 p/a - Full Members
                    <br />
                    $130 p/a - Junior Members
                </p>
            </div>
            <br />
            <div id='contact'>
                <h1>Contact</h1>
                <p>
                    <span id='contact-person'>Eric</span>
                    <br />
                    <span id='contact-subtitle'>Club Secretary</span>
                </p>
                <p>
                    <Phone class='contact-icon' />+61 410 620 428
                </p>
                <p>
                    <Mail class='contact-icon' />Airport Pistol Club
                    <br />
                    PO Box 41
                    <br />
                    Bardwell Park 
                    <br />
                    NSW 2207
                </p>
            </div>
        </div>
    )
}

export default Body;