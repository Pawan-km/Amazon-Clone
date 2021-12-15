import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../css/Login.css'
import { auth } from "../firebase";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // some fancy firebase loginshittt..

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        // some fancy firebase loginshittt..

        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Pleade see out Privacy Notice, our Cookies Notice and our Interest-Based Ads Notics
                </p>

                <button className="login__registerButton" onClick={register}>
                    Create Your Amazone Accout
                </button>
            </div>
        </div>
    )
}

export default Login
