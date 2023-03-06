import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";


function NavBar() {
    return(
        <div className="container-fluid" style = {{paddingLeft: 0, paddingRight: 0}}>
            <nav className="navbar navbar-expand-lg navbar-dark NavBarCustom">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse customNavBar" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/"> About </Link>
                    </li>
                    <li className="nav-item">

                    <Link className="nav-link" to="/Work"> Work </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;