import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import img from "../img/category.svg";
import './Register.css'
function Dionisio() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [telefone, setTelefone] = useState("");
    
    const { registerUser } = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        if (password === password2) {
            try {
                const success = await registerUser(email, username, telefone, password);
                if (success) {
                    alert('Registro bem-sucedido!');
                }
            } catch (error) {
                const message = error?.response?.data?.error || 'Erro ao registrar. Tente novamente.';
                alert(message);
            } 
        } else {
            alert("As senhas não coincidem.");
        }
    };

    return (
        <div>
            <section className="bod" style={{ backgroundColor: "#052b72", marginTop: 20, color: "#fff" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src={img} alt="registration" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form onSubmit={handleSubmit}>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <span className="h2 fw-bold mb-0">Bem vindo a <b>Unibank</b></span>
                                                </div>
                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Registrar</h5>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="username" className="form-control form-control-lg" placeholder="Username" onChange={e => setUsername(e.target.value)} required />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="email" className="form-control form-control-lg" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="telefone" className="form-control form-control-lg" placeholder="Telefone" onChange={e => setTelefone(e.target.value)} required />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="password" className="form-control" placeholder="Senha" onChange={e => setPassword(e.target.value)} required />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="password2" className="form-control" placeholder="Confirmar senha" onChange={e => setPassword2(e.target.value)} required />
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit">Registrar</button>
                                                </div>
                                                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                                    <Link to="/loginpage" style={{ color: "#393f81" }}>Já tenho conta</Link>
                                                </p>
                                                <Link to="#" className="small text-muted">Termos e uso</Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dionisio;
