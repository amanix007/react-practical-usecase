import React, { Component } from 'react';
import {firebaseall} from '../firebase/firebase';

import { Container, Row, Col } from 'reactstrap';
class Home extends Component {

    state = {
        username: '',
        post: ''
    }

    onSubmit(userId, name, email, imageUrl, post) {

        // firebaseall.database().ref('users/' + userId).set({
        //     username: name,
        //     email: email,
        //     profile_picture: imageUrl,
        //     post: post
        // }).then(s => console.log(s))
        // .catch(e => console.log(e));

    }

    setState(name, value) {
        this.setState({
            name: value
        })
    }
    render() {
        return (
            <React.Fragment>

                <section className="form">
                    <Container>
                        <Row>
                            <Col md="12">
                                <form onSubmit={this.onSubmit(10, this.state.username, 'amanix007@gmail.com', 'test', this.state.post)} >
                                    First name:<br />
                                    <input type="text"  onChange={e => this.setState('username', e.target.value)} value={this.state.username} />
                                    <br />
                                    Last name:<br />
                                    <textarea  cols="30" rows="10" onChange={e => this.setState('post', e.target.value)} value={this.state.post}></textarea>
                                    <br /><br />
                                    <input type="submit" value="Submit" />
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </section>

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
                                    <img src="./images/" alt="" className="img-responsive" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;