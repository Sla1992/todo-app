import React, {Component} from 'react';
import AuthenticationService from "./AuthenticationService";
import {Link, withRouter} from "react-router-dom";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return (
            <header className="header">
                <nav className="navbar navbar-expand-md">
                    <ul className="navbar-nav">
                        <li className="nav-link">
                            <Link to="#" className="text-white text-decoration-none">Sla's Todo-Site</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="#" className="text-white text-decoration-none">Home</Link>
                        </li>
                        {isUserLoggedIn && <li className="nav-link">
                            <Link to="/todos" className="text-white text-decoration-none">Todos</Link>
                        </li>}
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li>
                            <Link to="/login" className="text-white text-decoration-none">Login</Link>
                        </li>}
                        {isUserLoggedIn && <li className="nav-link">
                            <Link to="/logout" className="text-white text-decoration-none" onClick={AuthenticationService.logout}>Logout</Link>
                        </li>}
                        {!isUserLoggedIn && <li className="nav-link">
                            <Link to="#" className="text-white text-decoration-none">Sign Up</Link>
                        </li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);