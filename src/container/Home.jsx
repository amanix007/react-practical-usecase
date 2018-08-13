import React, { Component } from 'react';
import logo from '../assets/img/icon.png';
class Home extends Component {
    render() {
        return (
            <div className="wrapper">
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

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/* <div className="text text-center">
                                    <h1>Aman Ullah</h1>
                                    <p></p>
                                </div> */}

                                <div className="jumbotron text-center">
                                    <h1>Aman Ullah</h1>
                                    <p className="lead">A Potato who thriving to be a mango.</p>
                                    <a className="btn btn-lg btn-primary" href="#" role="button">Hire Me »</a>
                                    <ul className="text-center social-links">
                                        <li><a href="https://facebook.com/amaniology" target="_blank">fb</a></li>
                                        <li><a href="" target="_blank">twitter</a></li>
                                        <li><a href="" target="_blank">Linkedin</a></li>
                                        <li><a href="" target="_blank">Github</a></li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </header>
                <section className="about-me">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>About Me</h4>
                                <p>I am Zonayed Ahmed, from a small, beautiful country, Bangladesh. I love to work with new things. Also love to add new skills in my pocket continuously. Skill is my weapon and perfection is my habit. Love to code with JavaScript and also love programming.</p>
                                <p>I am currently working as a Full Stack Web Developer. Scroll Down to know more about me</p>
                                <div className="about-btns">
                                    <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Contact Me</a>
                                    <a href="#" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Download CV</a>
                                </div>

                            </div>
                            <div className="col-md-6">
                            <img src="./images/" alt="" className="img-responsive"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;