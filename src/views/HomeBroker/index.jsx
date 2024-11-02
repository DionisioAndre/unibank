import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AtivoContext } from '../AtivoContext';
import { useContext } from "react";
import './HomeBroker.css';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const HomeBroker = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState({});
    const [inputs, setInputs] = useState({});
    const { ativos, loading } = useContext(AtivoContext);
    const token = localStorage.getItem("authToken");

    const handleBuyOrder = async (ativo) => {
        if (token) {
            const decoded = jwtDecode(token);
            const user = decoded.user_id;

            const quantidade = parseInt(inputs[ativo.ticker]?.quantidade, 10);
            const data_da_compra = new Date(inputs[ativo.ticker]?.dataCompra).toISOString();

            // Validations
            if (quantidade < 1) {
                alert("A quantidade deve ser maior que zero.");
                return;
            }

            if (new Date(data_da_compra) < new Date()) {
                alert("A data da compra não pode ser no passado.");
                return;
            }

            try {
                await axios.post('http://127.0.0.1:8000/api/routerOrdems/', {
                    user: user,
                    ticker: ativo.ticker,
                    nome: ativo.nome,
                    quantidade: quantidade,
                    data_da_compra: data_da_compra
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                alert(`Pedido de compra para ${ativo.ticker} enviado com sucesso!`);
                setInputs(prev => ({ ...prev, [ativo.ticker]: { quantidade: '', dataCompra: '' } }));
                setShowForm(prev => ({ ...prev, [ativo.ticker]: false }));
            } catch (error) {
                console.error('Erro ao enviar pedido de compra:', error.response?.data || error.message);
                alert('Erro ao enviar pedido de compra. Tente novamente.');
            }
        } else {
            alert("Não iniciou sessão ou sua sessão expirou, por favor inicie sessão");
            navigate('/loginpage');
        }
    };

    const handleInputChange = (ticker, field, value) => {
        setInputs(prev => ({
            ...prev,
            [ticker]: {
                ...prev[ticker],
                [field]: value
            }
        }));
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Ocorreu um erro ao carregar os dados: {error.message}</div>;
    }

    return (
        <section className="home-broker">
            <div className="container">
                <div className="row">
                    {ativos.map((ativo) => (
                        <div className="col-md-4 mb-4" key={ativo.ticker}>
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">{ativo.nome}</h3>
                                    <p className="card-text"><strong>Código:</strong> {ativo.ticker}</p>
                                    <p className="card-text"><strong>VNUAS/Dividendos:</strong> {ativo.vnuas_dividendos}</p>
                                    <p className="card-text"><strong>Taxa Cupão:</strong> {ativo.taxa_cupao}%</p>
                                    <p className="card-text"><strong>Data de Emissão:</strong> {ativo.data_emissao}</p>
                                    <p className="card-text"><strong>Data de Vencimento:</strong> {ativo.data_vencimento}</p>
                                    <p className="card-text"><strong>Última Cotação:</strong> {ativo.ultima_cotacao}</p>
                                    <p className="card-text"><strong>Preço de Compra:</strong> {ativo.compra_preco}</p>
                                    <p className="card-text"><strong>Preço de Venda:</strong> {ativo.venda_preco}</p>

                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => setShowForm(prev => ({ ...prev, [ativo.ticker]: !prev[ativo.ticker] }))}
                                    >
                                        Emitir Pedido de Compra
                                    </button>

                                    {showForm[ativo.ticker] && (
                                        <div className="mt-3">
                                            <input 
                                                type="number" 
                                                className="form-control mb-2"
                                                placeholder="Quantidade" 
                                                value={inputs[ativo.ticker]?.quantidade || ''}
                                                onChange={(e) => handleInputChange(ativo.ticker, 'quantidade', e.target.value)}
                                                required
                                            />
                                            <input 
                                                type="date" 
                                                className="form-control mb-2"
                                                value={inputs[ativo.ticker]?.dataCompra || ''}
                                                onChange={(e) => handleInputChange(ativo.ticker, 'dataCompra', e.target.value)}
                                                required
                                            />
                                            <button 
                                                className="btn btn-success mt-2" 
                                                onClick={() => handleBuyOrder(ativo)}
                                            >
                                                Confirmar Compra
                                            </button>
                                            <button 
                                                className="btn btn-secondary mt-2 ml-2" 
                                                onClick={() => {
                                                    setShowForm(prev => ({ ...prev, [ativo.ticker]: false }));
                                                    setInputs(prev => ({ ...prev, [ativo.ticker]: { quantidade: '', dataCompra: '' } }));
                                                }}
                                            >
                                                Cancelar
                                            </button>

                                            {/* Validations */}
                                            {inputs[ativo.ticker]?.quantidade < 1 && inputs[ativo.ticker]?.quantidade !== undefined && (
                                                <div className="text-danger mt-2">A quantidade deve ser maior que zero.</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeBroker;
