import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from "./AuthenticatedRoute"
import Error from "./Error";
import ListTodo from "./ListTodo";
import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import TodoComponent from "./TodoComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";


class TodoApp extends Component {
    render(){
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <AuthenticatedRoute path="/welcome/:name" component={Welcome}/>
                        <AuthenticatedRoute path="/todos/:id" exact component={TodoComponent/* Reihenfolge oder Exact beachten */}/>
                        <AuthenticatedRoute path="/todos" component={ListTodo}/>

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


export default TodoApp