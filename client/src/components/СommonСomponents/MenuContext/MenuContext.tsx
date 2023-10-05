import { FC } from "react";
import MenuUnLog from "components/СommonСomponents/MenuUnLog/Menu";
import MenuLog from 'components/СommonСomponents/MenuLog/Menu'
import { useAuth } from "hooks/use-auth";



const MenuCont: FC = () => {
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
        <MenuLog />
    ) : (
        <MenuUnLog />
    )
}

export default MenuCont;