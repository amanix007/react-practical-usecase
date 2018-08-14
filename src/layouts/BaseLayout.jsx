import React, { Component } from 'react';
import logo from '../assets/img/icon.png';
import Navigation from './Navigation';
import { firebase } from '../firebase/';
class BaseLayout extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          authUser: null,
        };
      }

    componentDidMount() {

        firebase.auth.onAuthStateChanged(authUser => {
          authUser ? this.setState({authUser}) : this.setState({authUser: null})
        });
      }
    

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
                            <Navigation authUser={this.state.authUser}/>
                        </div>
                    </div>
                </nav>
                <main className="main">
                {this.props.children}
                </main>
                <footer>
                    <div className="container">
                    <ul>
                        <li><a>item</a></li>
                        <li><a>item</a></li>
                        <li><a>item</a></li>
                    </ul>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}


export default BaseLayout;
