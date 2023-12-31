
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Cart.css'

const Cart = () => {

  const [finalPrice, setFinalPrice] = useState(0);
  const [userCart, setUserCart] = useState([]);
  const router = useNavigate();

  useEffect(() => {
    if (userCart.length) {
      var totalPrice = 0;
      for (var i = 0; i < userCart.length; i++) {
        totalPrice += userCart[i].price
      }
      setFinalPrice(totalPrice)
    }
  }, [userCart])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("MynCurrent-user"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Myntra-Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
          setUserCart(allUsers[i].cart)
          break;
        }
      }
    } else {
      alert("Please login to see all cart products..")
      router('/login')
    }
  }, [])

  function buyProducts() {
    const user = JSON.parse(localStorage.getItem("MynCurrent-user"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Myntra-Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
          allUsers[i].cart = [];
          break;
        }
      }
      localStorage.setItem("Myntra-Users", JSON.stringify(allUsers))
      router('/all-product')
    }
    setFinalPrice(0);
    setUserCart([]);
    alert("Product will deliver soon, Thanks for shopping with us....")
  }




  return (
    <div id='Cmain'>
      <div className='Chead'>
        <h1>Cart</h1>
      </div>
      <div className='Csub'>
        <div className='Csub-main'>
          {userCart && userCart.map((pro, index) => (
              <div className='Cmain-right' >
                <img src={pro.image} />
                <h3>Title: {pro.name}</h3>
                <h4>Price: {pro.price}</h4>
              </div>
        ))}
        </div>
        <div className='Cmain-left'>
          <h1>Total</h1>
          <p>Total MRP : {finalPrice+finalPrice}</p>
          <p>Total price after 50% dicount : {finalPrice}$ </p>

          <button onClick={buyProducts} style={{ width: "30%", backgroundColor: "green", height: "40px", color: "white"}}>Buy Products</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;
