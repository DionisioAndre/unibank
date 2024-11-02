import authContext from '../../context/authContext';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Ordempage = () => {
    const navigate = useNavigate()
    const token=localStorage.getItem("authToken")
    if(token){
        const decoded=jwtDecode(token)
        var user=decoded.user_id
    }else{
        alert('Sessão expirada! Você precisa fazer login.'); // Alerta de login necessário
                navigate('/loginpage'); // Redirecionar para a página de login
    }
    const [formData, setFormData] = useState({
        tipo_de_titulo: '',
        valor_a_ser_investido: 0,
        data_da_compra: '',
        autorizacao: '',
        user: user
    });
    const [error, setError] = useState('');
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
            const response = await axios.post('http://127.0.0.1:8000/api/routerOrdems/', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate('/'); // Navegar para a página inicial após a criação da ordem
        } catch (err) {
            if (err.response?.status === 401) {
                alert('Sessão expirada! Você precisa fazer login.'); // Alerta de login necessário
                navigate('/loginpage'); // Redirecionar para a página de login
            } else {
                const errorMessage = err.response?.data?.error || "Ocorreu um erro ao criar a ordem.";
                setError(errorMessage);
                console.log(err.response);
            }
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
                        <label className="form-label" htmlFor="tipo_de_titulo">Código de Negociação:</label>
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
