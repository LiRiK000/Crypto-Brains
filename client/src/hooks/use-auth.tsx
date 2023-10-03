import { useSelector } from "react-redux";






export const useAuth = () => {
    const { email, token, id, emailVerified } = useSelector((state: any) => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
        emailVerified
    };
}