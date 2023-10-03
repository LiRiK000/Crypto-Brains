import React, { FC } from "react";
import { Log } from '../../components/LogRegComp/LoginComp/Login';





const Login: FC = () => {
    return (
        <div>
            <h1>
                Login Test
            </h1>
            <Log />


            <p>
                Or
                <a href="/register">
                    Register
                </a>
            </p>
        </div>
    )
};

export default Login;