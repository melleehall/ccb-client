import React from 'react'
import { withRouter } from 'react-router-dom'
import SignupForm from '../SignupForm/SignupForm'
import SignupPathText from '../SignupPathText/SignupPathText'
import ChildWithTablet from '../Images/childwithtablet.jpg'
import './SignupPathMain.css'

function RenderHomePathMain(props) {

    return (
        <section className='signup_main'>
            <h1 class='black-font'>Hi, Clear Creek Resident! Ready for faster internet?</h1>
            <SignupForm />
            <SignupPathText />
            <img src={ChildWithTablet} alt='Child holding tablet' class='child_tablet_img'/>
        </section>
    )

}

export default withRouter(RenderHomePathMain)