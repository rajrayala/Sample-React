import { Link } from "react-router-dom";

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }
    return (
        <footer>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-12 col-md-4 font13px py-2 py-md-0">
                        { getCurrentYear() }
                    </div>
                    <div className="col-12 col-md-8">
                        <ul className="list-inline text-left text-md-right mb-0">
                            <li className="list-inline-item d-block d-md-inline-block">
                                <Link className="font13px text-dark py-2 px-md-1" to="/">Home</Link>
                                <Link className="font13px text-dark py-2 px-md-1" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
