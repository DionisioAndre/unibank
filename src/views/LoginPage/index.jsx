import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import img from "../img/quiz.svg";
import { useNavigate } from "react-router-dom";

function Loginpage() {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handlesubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password2 = e.target.password2.value;

        if (password === password2) {
            const success = loginUser(email, password);
            if (success) {
                navigate("/");
            }
        } else {
            alert("Preencha todos os campos.");
        }
    };

    return (
        <div>
            <section className="body">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-md-6 d-none d-md-block">
                                        <img src={img} alt="login" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form onSubmit={handlesubmit}>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <span className="h2 fw-bold mb-0">Bem vindo a <b>Unibank</b></span>
                                                </div>
                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Entrar</h5>
                                                <div className="form-outline mb-4">
                                                    <input name="email" type="email" id="email" className="form-control form-control-lg" placeholder="Email" required />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input name="password" type="password" id="password" className="form-control form-control-lg" placeholder="Senha" required />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input name="password2" type="password" id="password2" className="form-control form-control-lg" placeholder="Confirmar senha" required />
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit">Entrar</button>
                                                </div>
                                                <Link to="#" className="small link-color">Esqueceu a senha?</Link>
                                                <p className="mb-5 pb-lg-2">
                                                    Não tem uma conta? <Link to="/register" className="link-color">Registrar aqui</Link>
                                                </p>
                                                <Link to="#" className="small link-color">Termos e uso</Link>
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

export default Loginpage;
