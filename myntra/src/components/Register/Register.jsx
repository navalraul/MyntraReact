
import React, { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [userData, setUserData] = useState({ name: "", email: "", password: "", role: "Buyer" })
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userData.name && userData.email && userData.password) {

            const array = JSON.parse(localStorage.getItem("Myntra-Users")) || [];
            const Ls = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                role: userData.role,
                cart: []
            };
            array.push(Ls);

            localStorage.setItem("Myntra-Users",JSON.stringify(array));
            setUserData({ name: "", email: "", password: "", role:"Buyer" })
            alert("Registration Successful..")
            router('/login')
        } else {
            alert("Please fill all the details")
        }
    }

    function selectRole(event) {
        setUserData({...userData, ["role"]: event.target.value})
    }


    return (
        <div id='Rmain'>
            <div id="body">
                <div>
                    <img
                        src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg" />
                </div>
                <div>
                    <div class="log">
                        <h3>Register</h3>
                        <p>to continue</p>
                    </div>
                    <div class="in">
                        <form onSubmit={handleSubmit} >
                            <input onChange={handleChange} name='name' type="text" placeholder="Enter your Name" /><br />
                            <label>Select Role:</label><br />
                            <select onChange={selectRole}>
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                            </select>
                            <input onChange={handleChange} name='email' type="text" placeholder="Enter your Email" /><br />
                            <input onChange={handleChange} name='password' type="password" placeholder="Enter your Password" /><br />
                            <input type="submit" value="Register" />
                        </form>
                    </div>
                    <div class="text">
                        <h5>By continuing, I agree to the</h5>
                        <p>Terms of Use</p>
                        <h5>&</h5>
                        <p>Privacy Policy</p>
                    </div>
                    <div class="text2">
                        <h5>Already registered?</h5>
                        <p onClick={ ()=> router('/login')}>Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
