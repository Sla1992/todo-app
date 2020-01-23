import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Logout extends Component {
    render() {
        return (
            <div>
                <div>You are now logged out.</div>
                <div className="text-muted "><small> Click <Link to="/login">Here</Link> to log in again.</small></div>
            </div>
        );
    }
}

export default Logout;