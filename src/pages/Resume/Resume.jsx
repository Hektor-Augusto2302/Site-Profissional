import './Resume.css';

const Resume = () => {
    return (
        <section id="resume" className="resume mt-5">
            <div className="container">
                <div className="section-title">
                    <h2>Resumo</h2>
                    <p></p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Sumario</h3>
                        <div className="resume-item pb-0">
                            <h4>Hektor Augusto</h4>
                            <p><em></em></p>
                            <ul>
                                <li>Mauá, São Paulo, Brasil</li>
                                <li>(11) 97137-3202</li>
                                <li>hektoraugusto.s@gmail.com</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Educação</h3>
                        <div className="resume-item">
                            <h4>Engenharia de Produção</h4>
                            <h5>2018 - 2023</h5>
                        </div>
                        <div className="resume-item">
                            <h4>React Js</h4>
                            <h5>2022 - 2023</h5>
                        </div>
                        <div className="resume-item">
                            <h4>Node Js</h4>
                            <h5>2023 - 2024</h5>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Experiência Profissional</h3>
                        <div className="resume-item">
                            <h4>Unimed Volta Redonda</h4>
                            <h5>2019 -2022</h5>
                            <p><em>Volta Redonda, Rio de Janeiro, Brasil</em></p>
                            <ul>
                                <li>Analista de Custos Assistenciais</li>
                                <li>Analise de cobrança e de contas federativas</li>
                                <li>Analise de notas fiscais</li>
                                <li>Analise de cobrança de intercâmbio e de notas fiscais</li>
                                <li>Analise de pagamento clinica</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Vylex Tecnologia</h4>
                            <h5>2022 -2023</h5>
                            <p><em>São Paulo, São Paulo, Brasil</em></p>
                            <ul>
                                <li>Trainee</li>
                                <li>Programação- Front end nas linguagens Javascript, HTML5 e CSS.</li>
                                <li>Programação- Front end nas frameworks Recat Js, Node Js e MongoDB.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Resume