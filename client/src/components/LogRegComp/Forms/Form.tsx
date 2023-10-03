import React, { FC, useState } from "react";
import { Button } from "react-bootstrap";

interface IFormProps {
    title: string,
    handleClick: (email: string, pass: string) => void
}
const Form:FC<IFormProps> = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div>
            <form>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                />
                <Button
                onClick={() => handleClick(email, pass)}
                >
                    {title}
                </Button>
            </form>
        </div>
    )
}



export { Form };