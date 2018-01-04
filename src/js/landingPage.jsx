import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './nav.jsx'
import Contact from './components/contact.jsx';
import HeaderImage from '../images/header.jpg';
import Weapon from '../images/weapon.svg';
import { Target, Crosshair } from 'react-feather';

export default function LandingPage() {
    return (
        <div>
            <Nav />
            
            <div id='header'>
                <img id='header-image' src={ HeaderImage } />

                <div id='header-text'>
                    <div id='header-title'>
                        Airport
                        <br />
                        Pistol Club
                    </div>
                    <div id='header-subtitle'>
                        Wednesday 7PM-9PM
                        <br />
                        2/28 Harley Crescent
                        <br />
                        Condell Park, NSW 2200
                    </div>
                </div>
            </div>
            
            <div id='body'>
                <div id='intro'>
                    <h1>Welcome to the Airport Pistol Club</h1>
                    <div>
                        <div className='point'>
                            <Target className='point-icon target-icon'/>
                            <p>
                                Condell Park Indoor Firing Range consists of 12 bays of up to 25 meters
                                <br />
                                <br />
                                The armoury is available throughout the night to purchase supplies and targets
                            </p>
                        </div>
                        <div className='point'>
                            <img src={ Weapon } className='point-icon gun-icon'/>
                            <p>
                                The club and facility caters for all popular pistols; including air, rimfire .22, center fire 9mm and .38, and .357 magnum
                                <br />
                                <br />
                                .22LR rifles are also welcome
                            </p>
                        </div>
                        <div className='point'>
                            <Crosshair className='point-icon crosshair-icon'/>
                            <p>
                                We meet every Wednesday night between 7PM - 9PM and hold competitive shoots every other Wednesday
                            </p>
                        </div>
                    </div>
                    <div>
                        The club and its members will occasionally have firearms for sale. They can be viewed <a>here</a>. Please contact the club secretary for all enquiries.
                    </div>
                </div>
                <br />
                <div id='membership'>
                    <h1>Membership</h1>
                    <p>
                        APC is a small club of around 70 members which provides a friendly and welcoming atmosphere for shooters of all ages and experiences to enjoy our sport. All new and transferring members are required to undergo the club’s induction and safety course.
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
                <div>
                    <Contact />
                </div>
            </div>
        </div>
    );
}