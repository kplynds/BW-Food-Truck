import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

const Login = () => {
    const [loginState, setLoginState] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const [btnDisabled, setBtnDisabled] = useState('');

    const loginSchematics = yup.object().shape({
        username: yup
        .string()
        .trim()
        .required('Enter valid username').min(10, '10 character minimum').max(20,' and 20 character maximum'),

        password: yup.string()
        .trim()
        .required('Enter correct password').min(8, 'Minimum 8 of characters').max(20,'But a maximum of 20')
    });

    useEffect(() => {
        console.log('The login form has been input.')
        loginSchematics.isValid(loginState).then((valid) => {
            setBtnDisabled(!valid);
        });
    }, [loginState]);

    function validateChange(e) {
        yup.reach(loginSchematics, e.target.name).validate(e.target.value)
        .then(() =>{
            setErrors({...errors, [e.target.name]: ''})
        })
        .catch(err => {
            console.log(err);
            setErrors({...errors, [e.target.name]: ''});
        })
    }

    function inputChange(e) {
        e.persist()
        const loginData = {
            ...loginState,
            [e.target.name]: e.target.value,
        };
        validateChange(e)
        setLoginState(loginData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div id='container'>
            <div>Login</div>
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>
                    Name:&nbsp;
                    <input
                    type='text'
                    name='username'
                    id='username'
                    placeholder='Username'
                    value={loginState.username}
                    onChange={inputChange}
                    />
                </label>
                <label htmlFor='password'>
                    Password:&nbsp;
                    <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    value={loginState.password}
                    onChange={inputChange}
                    />
                </label>


                <button disabled={btnDisabled} type='submit'>
                    login
                </button>
            </form>
        </div>

    )
}

export default Login 

