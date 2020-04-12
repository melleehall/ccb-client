import React from 'react'
import { withRouter } from 'react-router-dom'
import SignupForm from '../SignupForm/SignupForm'

function RenderHomePathMain(props) {


    return (
        <section>
            <SignupForm />
        </section>
    )

}

export default withRouter(RenderHomePathMain)