import React, { Component } from 'react'
import CCCProposedLIDMap from '../Images/CCC-Proposed-LID-Map-08-01-2018.pdf'
import './SignupPathText.css'


export default class SignupPathText extends Component {
    render() {
        return (
            <section class='signup-view'>
                <section class='lightestgray'>
                    <h2 class='signup-subhead'>Explanation of Signup Options</h2>
                    <p>If you've requested service, a member of the CCB team will contact you within 48 hours to say hello and personally answer any questions you may have.  
                        We will keep you updated on the status of the network build and schedule your equipment installation once service is available in your area.</p>
                    <p>If you are unsure whether your home will be serviced by the new network, please refer to the service area map: <a href={CCCProposedLIDMap} target='_blank'>Proposed Broadband Service Area Map</a></p>
                    <p>If you have subscribed to our mailing list, thank you and welcome!  We promise to limit our communication to important updates.  
                        All are invited and encouraged to join our mailing list whether or not you are currently eligible for service.</p>
                </section>
                <section class='lightestgray'>
                    <h2 class='signup-subhead'>CCB Service Highlights</h2>
                    <ul> 
                        <li>High-Speed Internet Connection</li>
                        <li>Easy Installation</li>
                        <li>No Long-Term Contracts</li>
                        <li>Excellent Customer Service</li>
                    </ul>
                </section>
            </section>
        )
    }
}