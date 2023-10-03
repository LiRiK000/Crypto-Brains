import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "../Forms/Form";
import { setUser } from "../../../store/slices/userSlice";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.refreshToken,
                    id: user.uid,
                    emailVerified: user.emailVerified
                }));
                navigate('/login')
            })
            .catch (console.error);
    }

return (
    <Form
        title="Register"
        handleClick={handleRegister}
    />
)
}


export { SignUp };