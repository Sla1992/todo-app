import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRoute from "./AuthenticatedRoute"
import Error from "./Error";
import ListTodo from "./ListTodo";
import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import TodoComponent from "./TodoComponent";


class TodoApp extends Component {
    render(){
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/login" component={Login}/>
                        <AuthenticatedRoute path="/welcome/:name" component={Welcome}/>
                        <AuthenticatedRoute path="/todos/:id" exact component={TodoComponent}/> /* Reihenfolge oder Exact beachten */
                        <AuthenticatedRoute path="/todos" component={ListTodo}/>
                        <AuthenticatedRoute path="/logout" component={Logout}/>

                        <Route component={Error}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

//loggedin false machen usw

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
                            <Link to="#" className="text-white text-decoration-none">Sign In</Link>
                        </li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return(
            <footer className="footer fixed-bottom">
                <span className="text-muted">All rights reserved 2019 @Sla</span>
            </footer>


        )
    }
}

export default TodoApp