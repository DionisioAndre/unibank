import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [ativos, setAtivos] = useState([]);

    useEffect(() => {
        const fetchAtivos = async () => {
            const response = await axios.get('http://localhost:8000/api/ativos/');
            setAtivos(response.data);
        };
        fetchAtivos();
    }, []);

    return (
        <div>
            <h1>Ativos da Bodiva</h1>
            <ul>
                {ativos.map(ativo => (
                    <li key={ativo.ticker}>{ativo.nome} ({ativo.ticker})</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
