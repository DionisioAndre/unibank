import React, { createContext, useReducer, useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const authContext = createContext();

const initialState = {
    user: null,
    error: null,
    refreshTimeoutId: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload, error: null };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'CLEAR_USER':
            return { ...state, user: null, error: null };
        case 'SET_REFRESH_TIMEOUT':
            return { ...state, refreshTimeoutId: action.payload };
        case 'CLEAR_REFRESH_TIMEOUT':
            return { ...state, refreshTimeoutId: null };
        default:
            return state;
    }
};

const setLocalStorageItem = (key, value) => {
    localStorage.setItem(key, value);
};

const getLocalStorageItem = (key) => {
    return localStorage.getItem(key);
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const navigate = useNavigate();
    const [isRegistering, setIsRegistering] = useState(false);

    const handleApiError = async (response) => {
        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData)
            throw new Error(errorData.error || 'Erro ao processar a solicitação');
        }
        return response.json();
    };

    const logoutUser = useCallback(() => {
        localStorage.clear();
        dispatch({ type: 'CLEAR_USER' });
        clearTimeout(state.refreshTimeoutId);
        navigate('/loginpage');
    }, [state.refreshTimeoutId, navigate]);

    const refreshToken = useCallback(async () => {
        const refreshTokenValue = getLocalStorageItem('refreshToken');
        if (!refreshTokenValue) {
            logoutUser();
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/refresh-token/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ refresh: refreshTokenValue }),
            });
            const data = await handleApiError(response);
            alert(data)
            setLocalStorageItem('authToken', data.access);
            dispatch({ type: 'SET_USER', payload: { id: state.user?.id, token: data.access } });
            scheduleTokenRefresh(data.expiresIn);
        } catch (error) {
            logoutUser();
        }
    }, [logoutUser, state.user?.id]);

    const scheduleTokenRefresh = useCallback((expiresIn) => {
        clearTimeout(state.refreshTimeoutId);
        const timeoutId = setTimeout(refreshToken, expiresIn * 1000 - 60000);
        dispatch({ type: 'SET_REFRESH_TIMEOUT', payload: timeoutId });
    }, [refreshToken, state.refreshTimeoutId]);

    const registerUser = useCallback(async (email, username, telefone,password, password2) => {
        if (isRegistering) return;

        setIsRegistering(true);
        try {
            if (!email || !username || !telefone || !password || !password2) {
                throw new Error("Todos os campos são obrigatórios.");
            }

            const response = await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, username, telefone, password, password2 }),
            });
            const data = await handleApiError(response);
            setLocalStorageItem('authToken', data.access);
            dispatch({ type: 'SET_USER', payload: { id: data.id, token: data.access } });
            scheduleTokenRefresh(data.expiresIn);
            navigate('/loginpage');
            alert("Registro bem-sucedido!");
        } catch (error) {
            alert("Erro ao registrar. Tente novamente.",error);
            console.log(error)
            dispatch({ type: 'SET_ERROR', payload: error.message });
        } finally {
            setIsRegistering(false);
        }
    }, [scheduleTokenRefresh, navigate, isRegistering]);

    const loginUser = useCallback(async (email, password) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/token/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            
            const data = await handleApiError(response);
            setLocalStorageItem('authToken', data.access);

            const decodedToken = jwtDecode(data.access);
            dispatch({ type: 'SET_USER', payload: { id: decodedToken.id, token: data.access } });
            scheduleTokenRefresh(data.expiresIn);
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error.message });
        }
    }, [scheduleTokenRefresh]);

    const isTokenExpired = useCallback((token) => {
        if (!token) return true;
        const { exp } = jwtDecode(token);
        return exp * 1000 < Date.now();
    }, []);

    useEffect(() => {
        const token = getLocalStorageItem('authToken');
        const expiration = getLocalStorageItem('tokenExpiration');
        const userId = getLocalStorageItem('userId');

        if (token && expiration) {
            const parsedExpiration = new Date(expiration);
            if (!isTokenExpired(token) && parsedExpiration > new Date()) {
                dispatch({ type: 'SET_USER', payload: { id: userId, token } });
                scheduleTokenRefresh((parsedExpiration - new Date()) / 1000);
            } else {
                logoutUser();
                navigate('/loginpage');
            }
        }
    }, [logoutUser, navigate, isTokenExpired, scheduleTokenRefresh]);

    useEffect(() => {
        return () => {
            clearTimeout(state.refreshTimeoutId);
        };
    }, [state.refreshTimeoutId]);

    const isAuthenticated = () => state.user !== null;

    return (
        <authContext.Provider value={{ user: state.user, registerUser, loginUser, logoutUser, error: state.error, isAuthenticated }}>
            {children}
        </authContext.Provider>
    );
};

export default authContext;
