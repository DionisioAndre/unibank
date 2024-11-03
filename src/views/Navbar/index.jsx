import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import { jwtDecode } from "jwt-decode";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importante para o funcionamento do navbar
import './Navbar.css'
function Navbar() {
    const { user, logoutUser } = useContext(AuthContext);
    const token = localStorage.getItem("authToken");

    let user_id;
    if (token) {
        const decoded = jwtDecode(token);
        user_id = decoded.user_id;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img style={{ width: "120px", padding: "6px" }} src="" alt="Logo" />
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
                            <>
                                <li className="nav-item">
                                    <Link to="/HomeBroker" className="nav-link">Visitar o Mercado</Link>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link" onClick={logoutUser} style={{ cursor: "pointer" }}>Logout</span>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
