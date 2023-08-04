
import React from 'react';
import './Register.css'

const Register = () => {
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
                        <form onsubmit="Register(event)">
                            <input type="text" placeholder="Enter your Name" /><br />
                            <input type="text" placeholder="Enter your Email" /><br />
                            <input type="password" placeholder="Enter your Password" /><br />
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
                        <h5>Having trouble logging in?</h5>
                        <p>Get Help</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
