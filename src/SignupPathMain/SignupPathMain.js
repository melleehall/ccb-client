import React from 'react'
import { withRouter } from 'react-router-dom'
import SignupForm from '../SignupForm/SignupForm'
import ChildWithTablet from '../Images/childwithtablet.jpg'
import './SignupPathMain.css'

function RenderHomePathMain(props) {

    return (
        <section>
            <SignupForm />
            <img src={ChildWithTablet} alt='Child holding tablet' class='child_tablet_img'/>
        </section>
    )

}

export default withRouter(RenderHomePathMain)