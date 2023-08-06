import React, { useEffect, useState } from 'react';
import './AddProduct.css'
import { useNavigate } from 'react-router-dom';
import { v4 as uuid4} from 'uuid'

const AddProduct = () => {

  const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "Other"})
  const router = useNavigate();

  const handleChange= (event)=> {
    setProductData({...productData, [event.target.name]: event.target.value})
  }

  const handleSubmit=(event)=> {
    event.preventDefault();
    if(productData.name && productData.price && productData.image && productData.category) {

      const productsArray = JSON.parse(localStorage.getItem("Myntra-Products")) || [];

      const randomId = uuid4();
      productData["id"] = randomId;
      productsArray.push(productData);
      localStorage.setItem("Myntra-Products", JSON.stringify(productsArray))
      setProductData({ name: "", price: "", image: "", category: "Other"})
      router('/all-product')
      alert("Product added successfull..")
    } else {
      alert("Fill all the details..")
    }
  }

  function selectRole(event) {
    setProductData({...productData, ["category"]: event.target.value})
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("MynCurrent-user"))
    if(user) {
      if(user?.role == "Buyer") {
        alert("You are not seller")
        router('/')
      }
    } else {
      alert("You are not logged in...")
      router('/login')
    }
  },[])


  return (
    <div id='Addmain'>
      <div className='Add-sub'>
        <h3>Add Product</h3>
        <form onSubmit={handleSubmit}>
          <label>Product Name :</label><br />
          <input value={productData.name} type='text' onChange={handleChange} name="name" /><br />
          <label>Product Price :</label><br />
          <input value={productData.price} type='number' onChange={handleChange} name='price' /><br />
          <label>Product Category :</label><br />
          <select onChange={selectRole} >
            <option value="Other">Other</option>
            <option value="Mens">Mens</option>
            <option value="Womens">Womens</option>
            <option value="Chidrens">Chidrens</option>
            <option value="Electronics">Electronics</option>
          </select><br />
          <label>Product Image :</label><br />
          <input value={productData.image} type='text' onChange={handleChange} name='image' /><br />
          <input type='submit' value='Add Product' /><br />
        </form>
      </div>
    </div>
  )
}

export default AddProduct;
