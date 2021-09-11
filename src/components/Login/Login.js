import { Button } from '@material-ui/core'
import React from 'react'
// Image
import { SLACK_IMAGE } from '../../config'
// Styles
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <div className="login__container">
                <img src={SLACK_IMAGE} alt="" />
                <h1>Sign in to "The slack workspace"</h1>
                <p>"workspace".slack.com</p>
                <Button>Sign in with Google</Button>
            </div>
            
        </div>
    )
}

export default Login
