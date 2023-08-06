
import React, { useContext, useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {

    const { state, Login } = useContext(AuthContext);

    const [userData, setUserData] = useState({ email: "", password: "" })
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem("Myntra-Users"));

            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == userData.email && users[i].password == userData.password) {
                    flag = true;
                    break;
                }
            }
            if (flag == false) {
                return alert("Please Check your email & password")
            } else {
                localStorage.setItem("MynCurrent-user", JSON.stringify(users[i]));
                Login(users[i])
                alert("Login Successfull..");
                setUserData({ email: "", password: "" })
                router('/')
            }
        }
    }


    return (
        <div id='Lmain'>
            <div id="body">
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg" />
                </div>
                <div>
                    <div class="log">
                        <h3>Login</h3><p>to continue</p>
                    </div>
                    <div class="in">
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleChange} name='email' type="text" placeholder="Enter your Email" /><br />
                            <input onChange={handleChange} name='password' type="password" placeholder="Enter your Password" />
                            <input type="submit" value="Login" />
                        </form>
                    </div>
                    <div class="text">
                        <h5>By continuing, I agree to the</h5><p>Terms of Use</p><h5>&</h5><p>Privacy Policy</p>
                    </div>
                    <div class="text2">
                        <h5>Are you a new user?</h5>
                        <p onClick={ ()=> router('/register')}>Register</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
