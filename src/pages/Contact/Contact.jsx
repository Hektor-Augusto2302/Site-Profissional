import './Contact.css';

const Contact = () => {
    return (
        <div className="container mt-5">
            <h1 className='text-center'>Contato</h1>
            <div className="row div-container">
                <h1 className='mb-5'>Pode entrar em contato por:</h1>
                <ul className='ulContact mb-5'>
                    <li><h3>Telefone: (11) 97137-3202</h3></li>
                </ul>
                <h2 className='mb-5'>Mídias sociais e profissionais como:</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://www.linkedin.com/in/hektor-soares-4435b722b/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin ms-5 social-links-contact"></i>
                    </a>
                    <a href="https://github.com/Hektor-Augusto2302" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github ms-5 social-links-contact"></i>
                    </a>
                    <a href="https://www.instagram.com/augusto_hektor/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram ms-5 social-links-contact"></i>
                    </a>
                    <a href="mailto:hektoraugusto.s@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-envelope ms-5 social-links-contact"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
