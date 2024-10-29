import "./Navbar.css"
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import { jwtDecode } from "jwt-decode";
import 'bootstrap'
const { Link } = require("react-router-dom");

function Navbar() {
    const {user,logoutUser}=useContext(AuthContext)
    const token=localStorage.getItem("authTokens")

    if(token){
        const decoded=jwtDecode(token)
        var user_id=decoded.user_id
    }
    return (
        <div  id="bg">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar"id="bg1" >
                <div className="container-fluid ">
                    <Link to="#" className="navbr-brand">

                        <img style={{width:"120px",padding:"6px"}} src="" alt=""/>
                    </Link>
                    <button className="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="navbarNav" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className=" nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            {token===null &&
                                <>
                            <li className=" nav-item">
                                <Link to="/loginpage" className="nav-link">Login</Link>
                            </li>
                            <li className=" nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>

                                           
                                </> }
                                {token!==null &&
                                <>
                            <li className=" nav-item">
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            </li>
                            <li className=" nav-item">
                                <Link  className="nav-link" onClick={logoutUser} style={{cursor:"pointer"} } >logout</Link>
                            </li>

                                           
                                </> }

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
    
}

export default Navbar