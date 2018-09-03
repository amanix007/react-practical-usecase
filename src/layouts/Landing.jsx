import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Landing extends Component {


    onSubmit(userId, name, email, imageUrl, post) {

        console.log('submit');

    }

    render() {
        return (
            <div className="container">
                <Container>
                    <Row>
                        <Col md="12">
                        <form  >
                                    First name:<br />
                                    <input type="text"   />
                                    <br />
                                    Last name:<br />
                                    <textarea  cols="30" rows="10" ></textarea>
                                    <br /><br />
                                    <input type="submit" value="Submit" />
                                </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Landing;