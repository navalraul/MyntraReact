
import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div id='Nmain'>
      <div id="navbar">
            <div class="navleft">
                <div>
                    <img src="data:image/jpeg;base64,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"/>
                </div>
                <div>
                    <div>
                        <h4>ALL</h4>
                    </div>
                    <div>
                        <h4>MEN</h4>
                    </div>
                    <div>
                        <h4>WOMEN</h4>
                    </div>
                    <div>
                        <h4>KIDS</h4>
                    </div>
                    <div>
                        <h4>HOME & LIVING</h4>
                    </div>
                    <div>
                        <h4>BEAUTY</h4>
                    </div>
                    <div>
                        <h4>STUDIO</h4>
                    </div>
                </div>
            </div>
            <div class="navright">
                <div>
                    <input type="text" placeholder="Search for products,brands and more"/>
                </div>
                <div>
                    <div>
                        <i class="fa-regular fa-user"></i>
                        <h4>Profile</h4>
                    </div>
                    <div>
                        <i class="fa-regular fa-heart"></i>
                        <h4>Wishlist</h4>
                    </div>
                    <div>
                        <i class="fa-solid fa-bag-shopping"></i>
                        <h4>Bag</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
