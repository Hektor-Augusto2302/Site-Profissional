import { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = typedRef.current;
        const words = ['Desenvolvedor Full Stack', 'Engenheiro de Produção'];
        let wordIndex = 0;
        let letterIndex = 0;
        let direction = 1;

        const type = () => {
            typed.textContent = words[wordIndex].slice(0, letterIndex + 1);
            letterIndex += direction;

            if (letterIndex === -1 || letterIndex === words[wordIndex].length) {
                direction *= -1;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(() => type(), 1000);
            } else {
                setTimeout(() => type(), 50);
            }
        };

        type();
    }, []);

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Hektor Augusto</h1>
                <p>Eu Sou <span className="typed" ref={typedRef}></span></p>
            </div>
        </section>
    );
};

export default Home;
