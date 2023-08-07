
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import './SingleProduct.css'

const SingleProduct = () => {

  const [isProductExist, setIsProductExist] = useState(false);
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);
  const [CurrentUserEmail, setCurrentUserEmail] = useState("");
  const [product, setProduct] = useState();
  const [userData, setUserData] = useState();
  const [singleproduct, setSingleProduct] = useState({});
  const [updatewindow, setUpdateWindow] = useState(false);
  const [productData, setProductData] = useState({ name: '', price: '', image: '', category: 'Other' })

  const { id } = useParams();
  const { state } = useContext(AuthContext);
  const router = useNavigate();


  useEffect(() => {
    if (state) {
      setUserData(state.user)
    }
  }, [state])

  useEffect(() => {
    const productFromDb = JSON.parse(localStorage.getItem("Myntra-Products"));
    if (productFromDb) {
      setIsProductExist(true)
      setProduct(productFromDb)
    } else {
      setIsProductExist(false)
    }
  }, [])

  useEffect(() => {
    if (isProductExist) {
      if (id && product.length) {
        const res = product.find((pro) => pro.id == id)
        setSingleProduct(res)
      }
    }
  }, [id, product])

  useEffect(() => {
    var user = JSON.parse(localStorage.getItem("MynCurrent-user"));
    // console.log(user, "-user")
    if (user) {
      setIsUserLoggedin(true);
      setCurrentUserEmail(user.email)
    }
  }, [])

  function updateContainer() {
    setUpdateWindow(true);
  }
  function closewindow() {
    setUpdateWindow(false);
  }

  function addtocart() {
    // alert("hii")
    if (isUserLoggedin) {
      const user = JSON.parse(localStorage.getItem("Myntra-Users"));
      for (var i = 0; i < user.length; i++) {
        if (user[i].email == CurrentUserEmail) {
          user[i].cart.push(singleproduct);
          localStorage.setItem("Myntra-Users", JSON.stringify(user));
          break;
        }
      }
      alert("Product Added Successfully!!!")
      router('/all-product')
    }
  }

  function handleChange(event) {
    setProductData({ ...productData, [event.target.name]: event.target.value })
  }
  function selectrole(event) {
    setProductData({ ...productData, ["category"]: event.target.value })
  }

  function handleSubmit(e) {
    // toast.success("Product Update")
    e.preventDefault();
    const allPro = JSON.parse(localStorage.getItem('Myntra-Products'))
    for (var i = 0; i < allPro.length; i++) {
      if (allPro[i].id === id) {
        allPro[i].image = productData.image;
        allPro[i].name = productData.name;
        allPro[i].price = productData.price;
        allPro[i].category = productData.category;
        singleproduct.image = productData.image;
        singleproduct.name = productData.name;
        singleproduct.price = productData.price;
        singleproduct.category = productData.category;

        localStorage.setItem("Myntra-Products", JSON.stringify(allPro));
        setProductData({ name: '', price: '', image: '', category: 'Other' })
        router('/all-product')
        alert("Product Update")
      }
    }
  }


  return (
    <div>
      {updatewindow ? (
        <div className='updatewindow'>
          <div className='closemark' onClick={closewindow}>
            X
          </div>
          <form onSubmit={handleSubmit}>
            <div id='update'>
              <h1>UPDATE PRODUCTS</h1>
              <div className='Input'>
                <label>Product Name : </label><br />
                <input type='text' name='name' onChange={handleChange} value={productData.name} /><br />
              </div>
              <div className='Input'>
                <label>Product Price : </label><br />
                <input type='number' name='price' onChange={handleChange} value={productData.price} /><br />
              </div>
              <div className='Input'>
                <label>Product Category :</label><br />
                <select onChange={selectrole}>
                  <option value='Other'>Other</option>
                  <option value='Mens'>Mens</option>
                  <option value='Women'>Women</option>
                  <option value='Kids'>Kids</option>
                  <option value='Electronics'>Electronics</option>
                </select>
              </div>
              <div className='Input'>
                <label>Product Image : </label><br />
                <input type='text' name='image' onChange={handleChange} value={productData.image} /><br />
              </div>
              <div id='btn'>
                <input type='submit' value='UPDATE' />
              </div>

            </div>
          </form>

        </div>
      ) : null
      }
      <div id='single_pro'>

        <div id='outter'>
          <div id="inner_left">
            <div>
              <img src={singleproduct.image} />
            </div>
            <div>
              <img src={singleproduct.image} />
            </div>
            <div>
              <img src={singleproduct.image} />
            </div>
          </div>
          <div id='inner_right'>
            <div id="info">
              <div>
                <h2>{singleproduct.name}</h2>
                <p>Men Purple Boxy Fit Printed Round Neck Pure Cotton T-shirt</p>
                <p>4.2 2.8k Ratings</p>
              </div>
              <div>
                <h3>MRP:{singleproduct.price}Rs</h3>
                <p>inclusive of all taxes</p>
              </div>
              <div>
                <h3>SELECT SIZE</h3>
                <h4>SIZE CHART</h4>
                <input type="button" value="M" />
                <input type="button" value="L" />
                <input type="button" value="XL" />
                <input type="button" value="XXL" />
              </div>
            </div>
            {userData?.role == 'Seller' ?
              <div id='btn'>
                <button onClick={updateContainer}>Update</button>
              </div>
              :
              <div id='out_btn'>
                <button onClick={addtocart}>Add To Cart</button>
              </div>}
            <div id="delivery">
              <h3>DELIVERY OPTIONS</h3>
              <input type="number" placeholder="Enter pin code" />
            </div>
            <div id="productinfo">
              <div>
                <p>100% Original Products</p>
                <p>Pay on delivery might be available</p>
                <p>Easy 14 days returns and exchanges</p>
                <p> Try & Buy might be available </p>
              </div>
            </div>
            <div id="bestoffers">
              <div>
                <h3>BEST OFFERS</h3>
              </div>
              <div>
                <h3>BEST PRICE :RS 512</h3><ul>
                  <li>Applicable on: Orders above Rs. 899 (only on first purchase)</li>
                  <li>Coupon code: MYNTRA200</li>
                  <li>Coupon Discount: Rs. 147 off (check cart for final savings)</li></ul>
                <h4>View Eligible Products</h4>
              </div>
              <div id="discount">
                <h3>10% Instant Discount on RuPay Credit Cards</h3>
                <ul>
                  <li>Min Spend Rs 2,000, Max Discount Rs 500.</li>
                </ul>
                <h4>Terms & Condition</h4>
              </div>
              <div id="emi">
                <h3>EMI option available</h3>
                <ul>
                  <li>EMI starting from Rs.27/month</li>
                </ul>
                <h4>View Plan</h4>
              </div>
            </div>
            </div>
          </div>


        </div>
      </div>
      )
}

      export default SingleProduct;
