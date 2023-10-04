import React, { FC, useState } from "react";
import styles from './Form.module.css';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


interface IFormProps {
    title: string,
    handleClick: (email: string, pass: string) => void
}
const Forms: FC<IFormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        // <div>
        //     <form>

        //         <input
        //             type="email"
        //             placeholder="Email"
        //             style={{width: '100%',height:'38px', marginBottom: '30px'}}
        //             onChange={(e) => setEmail(e.target.value)}
        //         />
        //         <input
        //         style={{width: '100%',height:'38px', marginBottom: '30px'}}
        //         type="password"
        //             placeholder="Password"
        //         />
        //         <Button
        //         style={{width: '100%', height: '56px'}}
        //         onClick={() => handleClick(email, pass)}
        //         >
        //             {title}
        //         </Button>
        //     </form>
        // </div>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label
                    className="text-white"
                >
                    Email address
                </Form.Label>
                <Form.Control
                    className={styles.formControl}
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', height: '38px', marginBottom: '30px', background:'#131517' }}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label
                    className="text-white"
                >
                    Password
                </Form.Label>
                <Form.Control
                    className={styles.formControl}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                    style={{ width: '100%', height: '38px', marginBottom: '40px', background:'#131517' }}
                />
            </Form.Group>

            <Button
                style={{ width: '100%', height: '56px' }}
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </Button>
        </Form>

    )
}



export { Forms };