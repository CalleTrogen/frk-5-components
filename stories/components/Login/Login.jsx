import User from './User'
import Password from './Password'
import { useState } from 'react'
import React from 'react'

const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    return (
        <><h1>Log in</h1>
            <div>
                <User onUserChange={setUser} />
                <Password onPasswordChange={setPassword} />
            </div>
        </>
    )
}

export default Login;