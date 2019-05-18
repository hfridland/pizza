import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './LoginForm.module.css';
import { updateObject } from '../../../shared/utility';
import * as actions from '../../../store/actions/index';

class LoginForm extends Component {

    state = {
        email: 'hfridland@shaw.ca',
        pwd: '123456'
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.pwd);
    }

    inputChangedHandler = (event, controlName) => {
        const state = updateObject(this.state, {[controlName]: event.target.value});

        this.setState(state);
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <span className={classes.Error}>{this.props.error.message}</span>
            );
        }

        /*return (
            <form onSubmit={this.submitHandler}>
                <ButtonToolbar>
                    <Form.Group as={Row} controlId="formBasicEmail">
                        <Form.Label column sm='2'>User Email (hfridland@shaw.ca):</Form.Label>
                        <Form.Control type="email" placeholder="User email" value={this.state.email} />
                    </Form.Group>
                </ButtonToolbar>
            </form>
        );*/

        return (
            <form className={classes.LoginForm} onSubmit={this.submitHandler}>
                <label>
                    User Email (hfridland@shaw.ca):
                    <input type='email' placeholder='User Email' value={this.state.email} onChange={(event) => this.inputChangedHandler(event, 'email')} />
                </label>
                <label>
                    User Password (123456):
                    <input type='password' placeholder='User Password' value={this.state.pwd} onChange={(event) => this.inputChangedHandler(event, 'pwd')} />
                </label>
                <button>Login</button>
                {errorMessage}
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);