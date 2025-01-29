import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <section className="bod" style={{ backgroundColor: "#ffffff", marginTop: 20, color: "#000" }}>
            <div className="container py-5" id="bg1">
                <div className="text-center mb-4">
                    <h1>KitadiBwé</h1>
                    <p className="lead">Invista na bolsa de valores com essa ferramenta que permite mais facilidade e rapidez para suas operações.</p>
                    <Link to="/loginpage">
                        <button className="btn btn-primary btn-lg">Abra a sua conta</button>
                    </Link>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body" style={{ color: "#000" }}>
                                <h5 className="card-title">Compra e venda de ações</h5>
                                <p className="card-text">Por ser uma plataforma ágil e prática, o home broker é o canal ideal para compra e venda de ações sem complicações.</p>
                                <Link to="/HomeBroker" className="btn btn-secondary">Comprar ações</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body" style={{ color: "#000" }}>
                                <h5 className="card-title">Compra e venda de títulos</h5>
                                <p className="card-text">Por ser uma plataforma ágil e prática, o home broker é o canal ideal para compra e venda de títulos sem complicações.</p>
                                <Link to="/HomeBroker" className="btn btn-secondary">Comprar títulos</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body" style={{ color: "#000" }}>
                                <h5 className="card-title">Outras informações</h5>
                                <p className="card-text">Vantagens de investir na Bolsa de Valores. Facilidade: as negociações na bolsa de valores são totalmente online...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Adicionando o componente FAQ aqui */}
        
        </section>
    );
}

export default Homepage;
