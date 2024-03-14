import './Navbar.css';
import photoProfile from '../../assets/img/photoProfile.jpg';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState('');
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    const checkScreenWidth = () => {
        setIsMobileScreen(window.innerWidth <= 768);
    };

    useEffect(() => {
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    useEffect(() => {
        if (!isMobileScreen) {
            setIsNavVisible(true);
        }
    }, [isMobileScreen]);

    return (
        <>
            <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={toggleNav}></i>
            <header id='header' className={`${isNavVisible ? 'visible' : ''}`}>
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src={photoProfile} alt="Hektor Augusto" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><Link to='/'>Hektor Augusto</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="https://www.instagram.com/augusto_hektor/" target="_blank" rel="noopener noreferrer" className="instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://github.com/Hektor-Augusto2302" target="_blank" rel="noopener noreferrer" className="google-plus">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/hektor-soares-4435b722b/" target="_blank" rel="noopener noreferrer" className="linkedin">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <nav id="navbar" className={`nav-menu navbar ${isNavVisible ? 'mobile-nav-active' : ''}`}>
                        <ul>
                            <li>
                                <Link to='/' className={`nav-link scrollto ${currentPage === '/' && 'active'}`}>
                                    <i className="bi bi-house-door"></i> <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/about' className={`nav-link scrollto ${currentPage === '/about' && 'active'}`}>
                                    <i className="bi bi-person"></i> <span>About</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/resume' className={`nav-link scrollto ${currentPage === '/resume' && 'active'}`}>
                                    <i className="bi bi-file-earmark-person"></i> <span>Resume</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact' className={`nav-link scrollto ${currentPage === '/contact' && 'active'}`}>
                                    <i className="bi bi-envelope-arrow-down"></i> <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar;
