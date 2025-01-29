import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import { jwtDecode } from "jwt-decode";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

function Navbar() {
    const { user, logoutUser } = useContext(AuthContext);
    const token = localStorage.getItem("authToken");

    let user_id;
    if (token) {
        try {
            // Verifica se o token tem 3 partes separadas por "."
            if (token.split('.').length === 3) {
                const decoded = jwtDecode(token);
                user_id = decoded.user_id;
            } else {
                console.error("Token inválido, faltando partes.");
            }
        } catch (error) {
            console.error("Erro ao decodificar o token:", error);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <span style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#000" }}>KitadiBwé</span> {/* Logo substituído por texto */}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                       
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarBuyInvest" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Comprar e Investir
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarBuyInvest">
                                <li><Link to="/HomeBroker" className="dropdown-item">Comprar</Link></li>
                                
                            </ul>
                        </li>
                       
                        <li className="nav-item">
                            <Link to="/help" className="nav-link">Ajuda</Link>
                        </li>
                        {!token && (
                            <>
                                <li className="nav-item">
                                    <Link to="/loginpage" className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">Register</Link>
                                </li>
                            </>
                        )}
                        {token && (
                            <li className="nav-item">
                                <span className="nav-link" onClick={logoutUser} style={{ cursor: "pointer" }}>Logout</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
