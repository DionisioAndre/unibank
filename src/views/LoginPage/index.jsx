import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/authContext"
import img from "../img/quiz.svg"
import {FaAngry} from "react-icons/fa"

function Loginpage() {

    const {loginUser}=useContext(AuthContext)

    const handlesubmit= e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        const password2=e.target.password2.value
        if(password===password2){
                alert('logado!');
                const success =loginUser(email,password)
                alert("kkk"+success);
                if (success) {
                alert('logado!');
    }
} else {
alert("Preencha todos os campos.");
}
};
    return (
        <div>
            <section className="body" style={{ backgroundColor: "#052b72", marginTop: 20, color: "#fff" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-6 d-none d-md-block">
                                        <img src={img} alt="login" className="img-flui"
                                            style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-6 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form onSubmit={handlesubmit}>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <span className="h2 fw-bold mb-0">Bem vindo a <b>Unibank</b></span>
                                                </div>
                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}
                                                >Entrar </h5>
                                                <div className="form-outline mb-4">
                                                    <input name="email" type="email" id="email" className="form-control form-control-lg" placeholder="Email" />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input name="password" type="password" id="password" className="form-control form-control-lg" placeholder="password" />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input name="password2" type="password" id="password2" className="form-control form-control-lg" placeholder="Confirm password" />
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit">Entrar</button>
                                                </div>
                                                <Link to="#" className="small text-muted">Esqueceu a password?</Link>
                                                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                                    Nao tem uma conta?
                                                    <Link to="/register" style={{ color: "#393f81" }}>
                                                        Registrar aqui
                                                    </Link>
                                                </p>
                                                <Link to="#" className="small text-muted">
                                                    termos e uso
                                                </Link>
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
    )

}

export default Loginpage