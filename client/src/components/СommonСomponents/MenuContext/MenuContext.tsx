import React from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/use-auth";
import Menu from "components/СommonСomponents/Menu/Menu";
import { removeUser } from 'store/slices/userSlice';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'



const MenuCont = () => {
    const dispatch = useDispatch();
    let { isAuth, token, email, id } = useAuth();
    const storedToken = localStorage.getItem('token');
    const storedEmail = localStorage.getItem('email');
    const storedId = localStorage.getItem('id');
    if (storedEmail && storedToken && storedId) {
        email = storedEmail
        id = storedId
        token = storedToken
        isAuth = true;
        console.log(email)
        console.log(token)
        console.log(id)
        console.log(isAuth)
    }

    return isAuth ? (
        <>
            <Menu />
            <h1 className="text-white">Hello {email}
            </h1>
            <Button
                variant="danger"
                onClick={() => {
                    window.location.reload();
                    dispatch(removeUser());
                    isAuth = false;
                    localStorage.removeItem('token');
                    localStorage.removeItem('email');
                    localStorage.removeItem('id');
                }
                }
            >
                Log out from {email}
            </Button>
        </>
    ) : (
        <Menu />
    )
}

export default MenuCont;