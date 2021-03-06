import React, { Component } from 'react';
import FDMLogo from '../../Media/FDM-Logo.png';
import IoCLogo from '../../Media/IoC-LOGO.png';
import TierController from '../TierController';
import KoderlyLogo from '../../Media/Koderly-logo.png';
import JetBrainsLogo from '../../Media/jetbrains-logo.png';
import LevitationEventsLogo from '../../Media/levitation-events.png';
import GitHubLogo from '../../Media/github-logo.png';
import StickerMuleLogo from '../../Media/2020Stickermuel.png';
import TwilioLogo from '../../Media/twilio-logo.png';
import BuddyLogo from '../../Media/buddy-logo.png';

export default class Sponsors extends Component {

    state = {
        tiers:[
            {
                tierID: 0,
                name: "Platinum",
                sponsors:[
                   
                ],
            },
            {
                tierID: 1,
                name: "Gold",
                sponsors:[
                    {
                        id:0,
                        companyName: "Koder.ly",
                        image: KoderlyLogo,
                        url:"https://www.koder.ly/",
                        size: "70%",
                    }
                ],
            },
            {
                tierID: 2,
                name: "Silver",
                sponsors:[
                   {
                       id:0,
                       companyName: "FDM group",
                       image: FDMLogo,
                       url:"https://www.fdmgroup.com/careers/graduates",
                       size: "35%",
                    },
                    
                    {
                       id:1,
                       companyName: "GitHub",
                       image: GitHubLogo,
                       url:"https://education.github.com/",
                       size: "35%"
                    }
                ],
            },
            {
                tierID: 3,
                name: "Bronze",
                sponsors:[
                    {
                        id:0,
                        companyName: "Twilio",
                        image: TwilioLogo,
                        url:"https://www.twilio.com/company",
                        size: "35%",
                    },
                   
                ],
            },
            {
                tierID: 4,
                name: "Community Partners",
                sponsors:[
                    {
                        id:0,
                        companyName: "Institute of Coding",
                        image: IoCLogo,
                        url:"https://www2.mmu.ac.uk/institute-of-coding/",
                        size: "25%",
                    }, 
                    
                    {
                        id:1,
                        companyName: "JetBrains",
                        image: JetBrainsLogo,
                        url:"https://www.jetbrains.com/student/",
                        size: "25%",
                    },
                    {
                        id:2,
                        companyName: "Levitation Events",
                        image: LevitationEventsLogo,
                        url:"https://levitationevents.co.uk/",
                        size: "25%",

                    },
                    {
                        id:3,
                        companyName: "Sticker Mule",
                        image: StickerMuleLogo,
                        url:"http://hackp.ac/mlh-stickermule-hackathons",
                        size: "25%",

                    },
                    {
                        id:4,
                        companyName: "Buddy",
                        image: BuddyLogo,
                        url:"https://buddy.works/?utm_source=event&utm_medium=referral&utm_campaign=manmethacks20",
                        size: "40%",

                    }
                ],
            },
        ]
    }

    render() {
        return (
            <section>
                <h2>This years sponsors</h2>
                <br/>
                {
                    this.state.tiers.map((tier)=>
                        <TierController key={tier.tierID} currentTier={tier}/>
                    )
                }

            </section>
        )
    }
}
