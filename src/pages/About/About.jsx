import './About.css';

const About = () => {
    const About = `Iniciei minha trajetória aos 16 anos nas Lojas Bellian Modas, crescendo de aprendiz para auxiliar de almoxarifado. Com determinação, participei voluntariamente no Exército Brasileiro, evoluindo de soldado para papéis essenciais, como auxiliar de almoxarife e motorista.

    Graduado em Engenharia de Produção pela UGB, concluí meu curso em julho de 2023. Na Unimed de Volta Redonda, cresci de auxiliar para assistente de almoxarifado, aprimorando habilidades em gestão de estoque, trabalho em equipe e otimização de processos.
    
    Com uma promoção subsequente, tornei-me Analista de Custos Assistenciais, aprimorando minhas habilidades analíticas na análise de cobranças, contas federativas e gerenciamento de pagamentos clínicos.
    
    Adquiri também 11 meses de experiência na Vylex Tecnologia, onde desenvolvi habilidades em HTML, CSS, JavaScript, ReactJS, Bootstrap e Node.js.
    
    Estou em busca de novos desafios para aplicar meu conhecimento multidisciplinar, habilidades analíticas e paixão por solucionar problemas. Se procura um profissional comprometido e focado em resultados, estou pronto para contribuir com sua equipe.`;

    const textAbout = "Sou um profissional versátil com formação em Engenharia de Produção e habilidades em desenvolvimento Full Stack. Com minha experiência e paixão por solucionar problemas, estou comprometido em criar soluções inovadoras e eficientes que impulsionam o crescimento e a excelência em projetos de tecnologia."

    return (
        <section id="about" className="about mt-5 d-flex justify-content-center align-items-center flex-column">
            <div className="container">
                <div className="section-title">
                    <h2>Sobre</h2>
                    <p>{About}</p>
                </div>
                <div className="row">
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Engenheiro de Produção &amp; Dsenvolvedor Full Stack.</h3>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Aniversario:</strong> <span>23 Fev 1996</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Celular:</strong> <span>+55 (11) 97137-3202</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Cidade:</strong> <span>Mauá - SP</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Idade:</strong> <span>28</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>E-mail:</strong> <span>hektoraugusto.s@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            {textAbout}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About