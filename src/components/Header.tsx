import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="navbar navbar-expand-md navbar-light bg-light px-md-0">
            <nav className="container">
                <Link className="font13px text-dark py-2 px-md-1" to="/">
                    <img alt="" className="img-fluid logo-image" />
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse pl-2 pl-md-0" id="navbarCollapse">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-item nav-link d-inline-block" to="/">Home</Link>
                    <Link className="nav-item nav-link d-inline-block" to="/contact">Contact</Link>
                </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
