
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AllProduct.css'

const AllProduct = () => {

  const [isProductsExist, setIsProductsExist] = useState(false);
  const [products, setProducts] = useState();
  const router = useNavigate();

  useEffect(() => {
    const productFromDb = JSON.parse(localStorage.getItem("Myntra-Products"))

    if (productFromDb) {
      setIsProductsExist(true);
      setProducts(productFromDb)
    } else {
      setIsProductsExist(false)
    }
  }, [])

  const redirect=(id)=> {
    router(`/single/${id}`)
  }

  return (
    <div id='Allmain'>
      <div className='Head'>
        <p>Home / Clothing / Men T-Shirts</p>
        <h4>Men T-Shirts - 105754 items</h4>
      </div>
      {!isProductsExist ? <div>No Products</div>
        :
        <div className='Allsub'>
          {products && products.map((pro) => (
            <div onClick={ () => redirect(pro.id)} className='All' key={pro.name}>
              <img src={pro.image} />
              <h3>{pro.name}</h3>
              <p>{pro.category}</p>
              <h4>{pro.price}</h4>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default AllProduct;
