import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AccountPage() {
    const { user_id } = useParams(); // Recupera o user_id da URL
    const [userData, setUserData] = useState(null);
    const [ordens, setOrdens] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Função para buscar os dados do usuário
        const fetchUserData = async () => {
            try {
                const response = await fetch(`/api/users/${user_id}`);
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Erro ao buscar os dados do usuário:", error);
            }
        };

        // Função para buscar as ordens do usuário
        const fetchOrdens = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/routerOrdems/", {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("authToken")}`
                    }
                });
                const data = await response.json();
                setOrdens(data);
            } catch (error) {
                console.error("Erro ao buscar as ordens:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
        fetchOrdens();
    }, [user_id]); // Dependência para refazer quando user_id mudar

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>Minha Conta</h1>
            {userData && (
                <>
                    <p>Nome: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    {/* Exiba outras informações do usuário */}
                </>
            )}

            <h2>Minhas Ordens</h2>
            {ordens.length === 0 ? (
                <p>Você ainda não fez nenhuma ordem.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ticker</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Data de Compra</th>
                            <th>Preço de Compra</th>
                            {/* Adicione outros campos conforme necessário */}
                        </tr>
                    </thead>
                    <tbody>
                        {ordens.map((ordem) => (
                            <tr key={ordem.id}>
                                <td>{ordem.id}</td>
                                <td>{ordem.ticker}</td>
                                <td>{ordem.nome}</td>
                                <td>{ordem.quantidade}</td>
                                <td>{new Date(ordem.data_da_compra).toLocaleDateString()}</td>
                                <td>{ordem.compra_preco}</td>
                                {/* Exiba outros campos conforme necessário */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default AccountPage;
