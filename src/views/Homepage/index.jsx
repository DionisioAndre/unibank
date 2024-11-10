import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <section className="bod" style={{ backgroundColor: "#052b72", marginTop: 20, color: "#fff" }}>
            <div className="container py-5" id="bg">
                <div className="text-center mb-4">
                    <h1>KitadiBue</h1>
                    <p className="lead">Invista na bolsa de valores com essa ferramenta que permite mais facilidade e rapidez para suas operações.</p>
                    <Link to="/loginpage"><button className="btn btn-primary btn-lg">Abra a sua conta</button></Link>
                </div>

                <div className="row" >
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
                                <h5 className="card-title">Outras informaçoes</h5>
                                <p className="card-text">Vantagens de investir na Bolsa de Valores

Facilidade: as negociações na bolsa de valores são totalmente online, ou seja, você investe o seu dinheiro no conforto da sua casa...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-5" style={{ color: "#fff" }}>
                    <h1>Perguntas frequentes:</h1>
                </div>

                <div className="row">
    <div className="col-md-12 mb-4">
        <div className="card" style={{ color: "#fff", background: "linear-gradient(to right, #8e44ad, #4a0072)" }}>
            <div className="card-body">
                <h5 className="card-title">Como investir na bolsa de valores?</h5>
                <p className="card-text">
                    Investir na Bolsa de Valores é muito simples. Confira a seguir o passo a passo para você começar ainda hoje:
                    <br /><br />
                    <strong>1. Conheça seu perfil de investidor</strong><br />
                    Antes de começar a investir, é importante conhecer o seu perfil de investidor. Este processo te auxiliará a identificar sua tolerância aos riscos e quais ativos são mais indicados para os seus objetivos.
                    <br /><br />
                    <strong>2. Estabeleça objetivos financeiros</strong><br />
                    Antes de investir, é essencial estabelecer seus objetivos financeiros e os prazos para a realização. Para isso, analise a sua rotina e o mercado financeiro, pois ambos momentos devem ser favoráveis.
                    <br /><br />
                    <strong>3. Abra uma conta em uma corretora de valores</strong><br />
                    Para realizar qualquer operação, é necessário abrir uma conta em uma instituição financeira autorizada a operar na Bolsa de Valores, como a Rico. Após abrir sua conta, transfira o dinheiro a ser investido.
                    <br /><br />
                    <strong>4. Invista na Bolsa de Valores</strong><br />
                    Com sua conta ativa, entre em home broker. Em seguida, digite a sigla do ativo desejado e lance a sua oferta. Lembre-se de que o lote mínimo varia para cada ativo.
                </p>
                <Link to="/HomeBroker" className="btn btn-light">Comprar ações</Link>
            </div>
        </div>
    </div>
</div>

<div className="row">
    <div className="col-md-12 mb-4">
        <div className="card" style={{ color: "#fff", background: "linear-gradient(to right, #8e44ad, #4a0072)", marginTop: "20px" }}>
            <div className="card-body">
                <h5 className="card-title">Saiba mais</h5>
                <p className="card-text">
                    <strong>Vantagens e riscos de investir na Bolsa de Valores</strong><br />
                    Antes de sair investindo, você deve conhecer as principais vantagens e riscos envolvidos nas negociações.
                    <br /><br />
                    <strong>Vantagens:</strong><br />
                    - Facilidade: negociações totalmente online.<br />
                    - Rentabilidade: ganhos expressivos em renda variável.<br />
                    - Acessibilidade: é possível investir com pouco dinheiro.<br />
                    - Proventos: ações podem gerar dividendos.
                    <br /><br />
                    <strong>Desvantagens:</strong><br />
                    - Risco: investimentos podem possuir riscos de mercado.<br />
                    - Conhecimento: exige entender a dinâmica do mercado financeiro.
                    <br /><br />
                    <strong>Conclusão:</strong><br />
                    Investir na Bolsa de Valores pode trazer ganhos expressivos, mas requer acompanhamento e conhecimento.
                </p>
                <Link to="/HomeBroker" className="btn btn-light">Comprar títulos</Link>
            </div>
        </div>
    </div>
</div>
    

                </div>
    
        </section>

    );
}

export default Homepage;
