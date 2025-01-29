import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MinhaConta() {
    const [ordens, setOrdens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        if (!token) {
            navigate('/loginpage');  // Redireciona para a página de login se não estiver autenticado
            return;
        }

        const fetchOrdens = async () => {
            try {
                const response = await fetch('https://unibank1.onrender.com/api/minhas-ordens/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Erro ao buscar ordens');
                }

                const data = await response.json();
                console.log(data); // Verificando a resposta da API
                setOrdens(data);
                setLoading(false); // Atualizando o estado de loading
            } catch (err) {
                setError(err.message);
                setLoading(false); // Atualizando o estado de loading em caso de erro
            }
        };

        fetchOrdens();
    }, [token, navigate]);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div className="minha-conta" style={{ marginTop: '80px' }} >
                       <h3 style={{ marginTop: '80px' }}>Minhas Ordens</h3>
            {ordens.length === 0 ? (
                <div>Você ainda não tem ordens.</div>
            ) : (
                <ul>
                    {ordens.map((ordem) => (
                        <li key={ordem.id}>
                            <div><strong>ID da Ordem:</strong> {ordem.id}</div>
                            <div><strong>Ativo:</strong> {ordem.ativo}</div>
                            <div><strong>Quantidade:</strong> {ordem.quantidade}</div>
                            <div><strong>Preço:</strong> {ordem.preco}</div>
                            <div><strong>Data da Ordem:</strong> {new Date(ordem.data_ordem).toLocaleDateString()}</div>
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MinhaConta;
