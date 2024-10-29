import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Ordempage = () => {
    const [formData, setFormData] = useState({
        tipo_de_titulo: '', // Corrigido para "tipo_de_titulo"
        valor_a_ser_investido: 0,
        data_da_compra: '',
        autorizacao: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'valor_a_ser_investido' ? Number(value) : value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('authTokens');
            await axios.post('http://127.0.0.1:8000/api/ordem/', formData, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token).access}` // Parse para obter o token de acesso
                }
            });
            navigate('/'); // Navegar para a página inicial após a criação da ordem
        } catch (err) {
            const errorMessage = err.response?.data?.error || "Ocorreu um erro ao criar a ordem.";
            setError(errorMessage);
        }
    };

    return (  
        <section className="bod" style={{ backgroundColor: "#052b72", marginTop: 20, color: "#fff" }}>
            <div className="container py-5" id="bg">
            <div className="text-center mb-4">
            <h1>Criar Ordem</h1>
            </div>
            
            <form onSubmit={handleSubmit} className="form">
                <div className="mb-3">
                    <label className="form-label" htmlFor="tipo_de_titulo">Tipo de Título:</label>
                    <input
                        className="form-control" 
                        type="text"
                        id="tipo_de_titulo"
                        name="tipo_de_titulo"
                        value={formData.tipo_de_titulo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="data_da_compra" className="form-label">Data da Compra:</label>
                    <input
                    className="form-control"
                        type="date"
                        id="data_da_compra"
                        name="data_da_compra"
                        value={formData.data_da_compra}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="valor_a_ser_investido">Valor a ser Investido:</label>
                    <input
                    className="form-control"
                        type="number"
                        id="valor_a_ser_investido"
                        name="valor_a_ser_investido"
                        value={formData.valor_a_ser_investido}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="autorizacao">Autorização:</label>
                    <input
                    className="form-control"
                        type="text"
                        id="autorizacao"
                        name="autorizacao"
                        value={formData.autorizacao}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Criar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        </section>
    );
};

export default Ordempage;
