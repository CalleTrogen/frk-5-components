import { React, useState } from "react";
import User from './User';
import Password from "./Password";
import Button from "./Button";

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    retrun(
        <div className={styles.loginContainer}>
            <User onUserChange={setUser} />
            <Password onUserChange={setPassword} />
            <Button />
        </div>
    )
}

export default Login;