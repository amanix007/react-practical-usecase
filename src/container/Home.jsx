import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="home">
                

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="jumbotron text-center">
                                    <h1>Aman Ullah</h1>
                                    <p className="lead">A Potato who thriving to be a mango.</p>
                                    <a className="btn btn-lg btn-primary" role="button">Hire Me »</a>
                                    <ul className="text-center social-links">
                                        <li><a>fb</a></li>
                                        <li><a>twitter</a></li>
                                        <li><a>Linkedin</a></li>
                                        <li><a>Github</a></li>
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
                                    <a className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Contact Me</a>
                                    <a className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Download CV</a>
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