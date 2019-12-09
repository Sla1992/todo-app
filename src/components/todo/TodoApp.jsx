import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRoute from "./AuthenticatedRoute";

class TodoApp extends Component {
    render(){
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

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

class LoginComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: 'Frolian',
            password: 'sml12345',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        
    }

    handleChange(event) {
        console.log(this.state);
        this.setState({
            [event.target.name] 
                :event.target.value
        })
    }

    loginClicked(){
        console.log(this.state)
        if(this.state.username==='Frolian' && this.state.password==='sml12345'){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            /*this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed: false})*/
        }
        else{
            console.log('Failed')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed: true})
        }
            
    }

    render(){
        return (

            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials </div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    {this.state.showSuccessMessage && <div> Login Successful</div>}
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <div>You are now logged out.</div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <div className="container">
                    Dobro dosao, {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
            </div>
        )
    }
}



/*function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div> Invalid Credentials </div>
    }
    return null
    
}

function ShowLoginSuccessMessage(props){
    if(props.showSuccessMessage){
        return <div>Login Successful</div>
    }
    return null
    
}*/

function ErrorComponent() {
    return <div> An Error Occured. There is no Support. Go Die.</div>
}

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos :
            [
                {id: 1, description : 'Learn React', done: false, targetDate: new Date()},
                {id: 2, description : 'Become an Expert at React', done: false, targetDate: new Date()},
                {id: 3, description : 'Visit India', done: false, targetDate: new Date()}
            ]

        }
    }
    render() {
        return(
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TodoApp