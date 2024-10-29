import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/authContext"
import img from "../img/category.svg"

function Dionisio() {

    const [email,setemail]=useState("")
    const [username,setUsername]=useState("")
    const [password,setpassword]=useState("")
    const [password2,setpassword2]=useState("")
    const [telefone,settelefone]=useState("")
    
    const {registerUser}=useContext(AuthContext)
    console.log(username)
    const handlesubmit=async e=>{
            e.preventDefault()
            if(password===password2){
                try {
                    const success = await registerUser(email,username,telefone,password,password2)
                    if (success) {
                        alert('Registro bem-sucedido!');
            }
        } catch (error) {
            const message = error?.response?.data?.error || 'Errodio ao registrar. Tente novamente.';
            alert(message);
        } 
    } else {
        alert("Preencha todos os campos.");
    }
};
    return (
        <div>
            <section className="bod" style={{ backgroundColor: "#052b72", marginTop: 20, color: "#fff" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src={img} alt="login" className="img-flui"
                                            style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form onSubmit={handlesubmit}>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <span className="h2 fw-bold mb-0">Bem vindo a <b>Unibank</b></span>
                                                </div>
                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}
                                                >Registrar </h5>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="username" className="form-control form-control-lg" placeholder="Username" onChange={e=>setUsername(e.target.value)} />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="Email" className="form-control form-control-lg" placeholder="Email" onChange={e=>setemail(e.target.value)}/>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="telefone" className="form-control form-control-lg" placeholder="telefone" onChange={e=>settelefone(e.target.value)}/>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="password" className="form-control" placeholder="password" onChange={e=>setpassword(e.target.value)}/>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="password2" className="form-control" placeholder="Confirm password" onChange={e=>setpassword2(e.target.value)}/>
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit">Entrar</button>
                                                </div>
                                                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                                    <Link to="/loginpage" style={{ color: "#393f81" }}>
                                                    Ja tenho conta
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

export default Dionisio