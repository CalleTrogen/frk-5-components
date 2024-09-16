import { React, useState } from "react";
import User from './User';
import Password from "./Password";

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    retrun(
        <div>
            <User onUserChange={setUser} />
            <Password />
        </div>
    )
}

export default Login;