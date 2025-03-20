import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="position-sticky top-0 z-1">
            <nav className="navbar navbar-expand-lg bg-dark position-sticky top-0" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Movies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to={"/"}>Home</NavLink>
                            <NavLink className="nav-link" aria-current="page" to={"/movies/form"}>Add Movie</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}