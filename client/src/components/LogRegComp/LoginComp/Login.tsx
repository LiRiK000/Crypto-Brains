import { Form } from "../Forms/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";
import { useNavigate } from "react-router";
import { useAuth } from "hooks/use-auth";
import { stringify } from "querystring";

const Log = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth, token } = useAuth();





    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.refreshToken,
                    id: user.uid,
                    emailVerified: user.emailVerified
                }));
                if (user.refreshToken){
                    localStorage.setItem('token', user.refreshToken);
                }
                if (user.email){
                    localStorage.setItem('email', user.email);
                }
                if (user.uid){
                    localStorage.setItem('id', user.uid);
                }
                navigate('/')
            })
            .catch(console.error);

    }
    localStorage.setItem('currentUser', JSON.stringify(setUser));
    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    )
}


export { Log };