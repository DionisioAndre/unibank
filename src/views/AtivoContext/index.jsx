import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AtivoContext = createContext();

export const AtivoProvider = ({ children }) => {
    const [ativos, setAtivos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAtivos = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://unibank1.onrender.com/api/routerativos/');
                setAtivos(response.data);
            } catch (err) {
                setError('Erro ao buscar produtos.');
            } finally {
                setLoading(false);
            }
        };

        fetchAtivos();
    }, []); // O array vazio garante que o efeito só seja chamado uma vez após a montagem

    return (
        <AtivoContext.Provider value={{ ativos, loading, error }}>
            {children}
        </AtivoContext.Provider>
    );
};
