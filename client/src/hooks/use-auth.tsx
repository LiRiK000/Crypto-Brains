import { useSelector } from "react-redux";






export const useAuth = () => {
    const { email, token, id, username } = useSelector((state: any) => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
        username
    };
}