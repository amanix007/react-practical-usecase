import React, { Component } from 'react';
import {Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

const SignUp = ({history}) =>
    <div className="container">
        <h1>SignUp</h1>
        <SignUpForm  history={history} />
    </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
})


class SignUpForm extends Component {
    constructor(props) {
        super(props);


        this.state = { ...INITIAL_STATE };
        console.log(this.props);

    }

    onSubmit = (event) => {
        event.preventDefault();
        const { email, passwordOne } = this.state;
        const {
            history,
          } = this.props;
          this.signUp(email, passwordOne);
    }

    signUp = async (email,passwordOne) => {
        // auth.createUserWithEmailAndPassword(email, passwordOne)
        // .then(authUser => {
        //   this.setState({ ...INITIAL_STATE });
        //   history.push('/home');
        // })
        // .catch(error => {
        //   this.setState(byPropKey('error', error));
        // });

        try{
            let res = await auth.createUserWithEmailAndPassword(email,passwordOne);
            if(res)
                this.setState({...INITIAL_STATE});
            this.props.history.push('/home');

        }catch(err){
                this.setState(byPropKey("error",err));
        }
    }

    render() {
        const { username, email, passwordOne, passwordTwo, error } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={username}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button type="submit" disabled={isInvalid}>Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () =>
    <p>
        Don't have an account?
    {' '}
        <Link to='/signup'>Sign Up</Link>
    </p>

export default withRouter(SignUp);

export {
    SignUpForm,
    SignUpLink,
};