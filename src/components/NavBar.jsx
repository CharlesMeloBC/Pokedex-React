import React from "react";
import logo from "../assets/logo.png"


function NavBar() {
    return (
        <nav id="navbar" className="navbar nav-pills nav-fill navbar-expand-sm ">
            <a href="/"><img className="navbar-brand" src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active ">
                        <a className="nav-link" href="/favorites">{<i className="bi bi-heart-fill"></i>} Favorites<span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar