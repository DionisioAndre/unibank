import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <section className="bod" style={{ backgroundColor: "#052b72", marginTop: 20, color: "#fff" }}>
            <div className="container py-5" id="bg">
                <div className="text-center mb-4">
                    <h1>UNIBANK</h1>
                    <p className="lead">Invista na bolsa de valores com essa ferramenta que permite mais facilidade e rapidez para suas operações.</p>
                    <Link to="/loginpage"><button className="btn btn-primary btn-lg">Abra a sua conta</button></Link>
                </div>

                <div className="row" >
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body" style={{ color: "#000" }}>
                                <h5 className="card-title">Compra e venda de ações</h5>
                                <p className="card-text">Por ser uma plataforma ágil e prática, o home broker é o canal ideal para compra e venda de ações sem complicações.</p>
                                <Link to="/ordempage" className="btn btn-secondary">Comprar ações</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body" style={{ color: "#000" }}>
                                <h5 className="card-title">Compra e venda de títulos</h5>
                                <p className="card-text">Por ser uma plataforma ágil e prática, o home broker é o canal ideal para compra e venda de títulos sem complicações.</p>
                                <Link to="/ordempage" className="btn btn-secondary">Comprar títulos</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body" style={{ color: "#000" }}>
                                <h5 className="card-title">Outros serviços</h5>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem unde odit ut, officiis asperiores molestiae eum! Assumenda ipsum sunt praesentium, nostrum, distinctio voluptatibus incidunt doloribus recusandae reprehenderit eius, repellendus itaque.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-5" style={{ color: "#fff" }}>
                    <h1>Perguntas frequentes:</h1>
                </div>

                <div className="row">
                    <div className="col-md-20 mb-20">
                        <div className="card" style={{ color: "#fff", backgroundColor: "#0e5cee" }}>
                            <div className="card-body">
                                <h5 className="card-title">Como investir na bolsa de valores?</h5>
                                <p className="card-text">Investir na Bolsa de Valores é muito simples. Confira a seguir o passo a passo para você começar ainda hoje:
                                    <br /><br />
                                    1. Conheça seu perfil de investidor
                                    Antes de começar a investir, é importante conhecer o seu perfil de investidor. Este processo te auxiliará a identificar sua tolerância aos riscos e quais ativos são mais indicados para os seus objetivos.
                                    <br />
                                    2. Estabeleça objetivos financeiros
                                    Antes de investir, é essencial estabelecer seus objetivos financeiros e os prazos para a realização. Para isso, analise a sua rotina e o mercado financeiro, pois ambos momentos devem ser favoráveis.
                                    <br />
                                    3. Abra uma conta em uma corretora de valores
                                    Para realizar qualquer operação, é necessário abrir uma conta em uma instituição financeira autorizada a operar na Bolsa de Valores, como a Rico.
                                    <br />
                                    Abra a sua conta na Rico e comece a investir de um jeito simples, rápido e descomplicado.
                                    Após abrir sua conta, transfira o dinheiro a ser investido da sua conta bancária para a conta da corretora de valores por meio de TED de mesma titularidade.
                                    <br />
                                    4. Invista na Bolsa de Valores
                                    Com sua conta ativa, entre em home broker. Em seguida, digite a sigla do ativo desejado e lance a sua oferta.
                                    <br />
                                    Assim que o preço da sua ordem coincidir com outra oferta, ela será executada e as ações virão para a sua custódia. Lembre-se de que o lote mínimo varia para cada ativo. Nas ações, ele é de 100 papéis.</p>
                                <Link to="/ordempage" className="btn btn-secondary">Comprar ações</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-20 mb-20">
                        <div className="card" style={{ color: "#fff", backgroundColor: "#0e5cee", marginTop:20 }}>
                            <div className="card-body">
                                <h5 className="card-title">Saiba mais</h5>
                                <p className="card-text">
                                    <br />

                                    Vantagens e riscos de investir na Bolsa de Valores
                                    <br /><br />Antes de sair investindo na Bolsa de Valores, você deve conhecer as principais vantagens e riscos envolvidos nas negociações. Confira a seguir:
                                        <br />
                                    Vantagens de investir na Bolsa de Valores
                                    <br /><br />Facilidade: as negociações na bolsa de valores são totalmente online, ou seja, você investe o seu dinheiro no conforto da sua casa;
                                    <br />Rentabilidade: em renda variável, você pode ter ganhos expressivos com ações em tempo muito menor em relação a um investimento de renda fixa;
                                   <br /> Acessibilidade: ao contrário do que muitos pensam, é possível investir na Bolsa de Valores com pouco dinheiro, tudo vai depender do tipo de ativo escolhido;
                                    Se tornar sócio de uma empresa: esta vantagem costuma ser bastante atrativa, principalmente ao comprar grandes quantias de ações. Caso você tenha mais de 50% do total de papéis ordinários, há possibilidade assumir o controle da empresa;
                                    <br />Proventos: ao investir em ações, você pode receber os proventos, que por sua vez, são distribuídos sob forma de dividendos e Juros Sobre Capital Próprio (JCP), ideais para quem deseja viver de renda.
                                    <br /><br />Desvantagens de investir na Bolsa de Valores
                                    <br />Risco: todos os investimentos podem possuir riscos de mercado, risco do ativo ou risco de liquidez. Por isso, é importante conhecer sua tolerância para identificar os melhores ativos para investir;
                                    Consequências do mercado: o desempenho das ações é fortemente influenciado pelo mercado, que engloba cenários interno e externo do país. Em momentos de instabilidade em qualquer um deles, os papéis podem sofrer quedas no curto prazo;
                                    <br />Conhecimento: investir na Bolsa de Valores exige conhecimento, então, se você quer ganhar dinheiro, é fundamental entender a dinâmica do mercado financeiro, se manter informado e disposto a aprender novas técnicas.
                                    Conclusão
                                    Investir na Bolsa de Valores pode trazer ganhos expressivos, seja para investidores que buscam aumentar seu patrimônio ou empresas que querem captar recursos para financiar seus projetos.

                                    Independente dos seus objetivos, a Bolsa de Valores é um ambiente dinâmico, que exige acompanhamento e conhecimento para a obtenção de retornos significativos.

                                    Você pode aproveitar ao máximo as oportunidades que a Bolsa de Valores tem a oferecer, mas lembre-se que se trata de uma jornada contínua. Esteja preparado para aprender, se adaptar para alcançar seu futuro financeiro de sucesso.

                                </p>
                                <Link to="/ordempage" className="btn btn-secondary">Comprar títulos</Link>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>

    );
}

export default Homepage;
