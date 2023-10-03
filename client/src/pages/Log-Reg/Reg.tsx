import React, { FC } from "react";
import { SignUp } from "components/LogRegComp/RegComp/Reg";




const Reg: FC = () => {
    return (
        <div>
            <h1>
                Reg Test
            </h1>



            <SignUp />

            <p>
                Alredy have an account?
                <a href="/login">
                    Login
                </a>
            </p>
        </div>
    )
};

export default Reg;