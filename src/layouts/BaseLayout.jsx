import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/icon.png';
class BaseLayout extends Component {
    render() {
        return (

            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
                    <div className="container">
                        <a className="navbar-brand"><img src={logo} alt="Logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signin">Sign In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/account">Account</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                {this.props.children}
                <footer>
                    <ul>
                        <li><a>item</a></li>
                        <li><a>item</a></li>
                        <li><a>item</a></li>
                    </ul>
                </footer>
            </React.Fragment>
        )
    }
}


export default BaseLayout;
