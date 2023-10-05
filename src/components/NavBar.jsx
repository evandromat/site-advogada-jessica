import { Link } from "react-router-dom";


export default function NavBar({ active }) {

    return (
        <div className="nav-bar">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <a href="#" className="navbar-brand">MENU</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <Link to="/" className={`nav-item nav-link ${active === 1 ? "active" : ''}`}>Home</Link>
                            <Link to="/sobre" className={`nav-item nav-link ${active === 2 ? "active" : ''}`}>Sobre</Link>
                            <Link to="/areas-atuacao" className={`nav-item nav-link ${active === 3 ? "active" : ''}`}>Atuação</Link>
                            <Link to="/advogados" className={`nav-item nav-link ${active === 4 ? "active" : ''}`}>Advogados</Link>
                            <Link to="/portfolio" className={`nav-item nav-link ${active === 5 ? "active" : ''}`}>Estudo de Casos</Link>
                            <div className={`nav-item ${active === 6 ? "active" : ''} dropdown`}>
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu">
                                    <Link to="/blog" className={`dropdown-item ${active === 6 ? "active" : ''}`}>Blog</Link>
                                    <Link to="/pagina-pessoal" className={`dropdown-item`}>Página Pessoal</Link>
                                </div>
                            </div>
                            <Link to="/contato" className={`nav-item nav-link ${active === 7 ? "active" : ''}`}>Contato</Link>
                        </div>

                    </div>
                </nav>
            </div>
        </div>)
}