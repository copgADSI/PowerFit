import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ExcercisesContext } from "../../context/ExcercisesProvider";
import { login } from "../../utils/FetchData/User";

export const useInializeUser = () => {

    const { setUserLogged } = useContext(ExcercisesContext)
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')
        const password = data.get('password')
        const response = await login(email, password);
        if (response.status) {
            setUserLogged({
                data: response.user,
                access_token: response.access_token
            })
            localStorage.setItem('access_token', response.access_token);
            navigate('/')

        } else {
            setUserLogged({ errors: true, message: response.message })
        }
    };

    return {
        handleSubmit
    }
}

export default useInializeUser