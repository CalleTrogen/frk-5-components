import User from './User'
import Password from './Password'
import styles from './Button.module.css'
import { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.loginHeader}>Log in</h1>
            <div>
                <User onUserChange={setUser} />
                <Password onPasswordChange={setPassword} />
            </div>
            <button className={styles.loginButton}></button>
        </div>
    )
}

export default Login;