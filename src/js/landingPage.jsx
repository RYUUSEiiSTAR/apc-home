import React from 'react';

import HeaderImage from '../images/header.jpg';
import Weapon from '../images/weapon.svg';
import { ChevronsDown, Target, Crosshair, Phone, AtSign, Mail } from 'react-feather';

export default class LandingPage extends React.Component {
    componentDidMount() {
        var scrollHeight = ($('#header')[0].clientHeight - $('#nav')[0].clientHeight);
        $('#chev-icon').click(function() {
            $('html,body').animate({ scrollTop: $('#header').offset().bottom }, 'slow');
            document.getElementById('nav').classList.add('solid-nav');  
        });
    }

    render() {
        return (
            <div>
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
                
                <div id='chevrons-down'>
                    <ChevronsDown id='chev-icon'/>
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
                    <div id='contact'>
                        <h1>Contact</h1>
                        <p>
                            <span id='contact-person'>Eric Ryan</span>
                            <br />
                            <span id='contact-subtitle'>Club Secretary</span>
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
                </div>
            </div>
        );
    }
}