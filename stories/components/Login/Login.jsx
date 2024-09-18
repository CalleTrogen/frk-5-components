import User from './User'
import Password from './Password'
import { useState } from 'react'
import React from 'react'
import styles from 'Login.module.css'

const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.loginHeader}>Log in</h1>
            <button className={styles.loginButton}>Login</button>
            <div>
                <User onUserChange={setUser} />
                <Password onPasswordChange={setPassword} />
            </div>
        </div>
    )
}

export default Login;