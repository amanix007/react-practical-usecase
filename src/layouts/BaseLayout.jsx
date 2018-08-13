import React, { Component } from 'react';
import logo from '../assets/img/icon.png';
class BaseLayout extends Component {
    render() {
        return (

            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src={logo} alt="Logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                {this.props.children}
                <footer>
                    <ul>
                        <li><a href="#">item</a></li>
                        <li><a href="#">item</a></li>
                        <li><a href="#">item</a></li>
                    </ul>
                </footer>
            </React.Fragment>
        )
    }
}


export default BaseLayout;
