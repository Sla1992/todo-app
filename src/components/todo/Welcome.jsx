import React, {Component} from 'react';
import {Link} from "react-router-dom";
import HelloWorldService from "./HelloWorldService";

class Welcome extends Component {

    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.state = {
            welcomemessage : ''
        };
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <div className="container">
                    Dobro dosao, {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage}
                    className="btn btn-success">Get Welcome Message </button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </div>
        );
    }
    retrieveWelcomeMessage() {
       console.log('retrieve clicked');
       HelloWorldService.executeHelloWorldService()
           .then(response => this.handleSuccessfulResponse(response));
        //.catch
        HelloWorldService.executeHelloWorldBeanService()
            .then( response => this.handleSuccessfulResponse(response));
        console.log('retrieve clicked');
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then( response => this.handleSuccessfulResponse(response));
    }

    handleSuccessfulResponse(response){
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }


}

export default Welcome;