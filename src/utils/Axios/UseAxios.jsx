import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

const baseURL = "http://127.0.0.1:8000/api";

const useAxios = () => {
    const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

    const axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: `Bearer ${authTokens?.access}` },
    });

    axiosInstance.interceptors.request.use(async (req) => {
        if (!authTokens) {
            return req; // Retorne a requisição sem adicionar token se authTokens não estiver presente
        }

        const user = jwtDecode(authTokens.access);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if (isExpired) {
            try {
                const response = await axios.post(`${baseURL}/token/refresh/`, {
                    refresh: authTokens.refresh,
                });

                localStorage.setItem("authTokens", JSON.stringify(response.data));
                setAuthTokens(response.data);
                setUser(jwtDecode(response.data.access));
                req.headers.Authorization = `Bearer ${response.data.access}`;
            } catch (error) {
                console.error("Erro ao atualizar token:", error);
                // Aqui você pode redirecionar o usuário para login ou fazer outro tratamento
            }
        } else {
            req.headers.Authorization = `Bearer ${authTokens.access}`;
        }

        return req;
    });

    return axiosInstance;
};

export default useAxios;
