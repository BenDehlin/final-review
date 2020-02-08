import React, { useState, useEffect } from "react"
import axios from "axios"
import { connect } from "react-redux"
import AuthModal from "./AuthModal"

const Products = ({ user }) => {
  const [products, setProducts] = useState([])
  const [showModal, setModal] = useState(false)
  useEffect(() => {
    axios
      .get("/api/products")
      .then(results => {
        setProducts(results.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleToggle = () => {
    setModal(!showModal)
  }

  const addToCart = (id, price) => {
    if (user.email) {
      axios.post('/api/cart', {
        customer_order_id: user.customer_order_id,
        product_id: id,
        price
      }).then(results => {
        window.alert('Item added to cart')
      }).catch(err => console.log(err))
    } else {
      handleToggle()
    }
  }

  return (
    <div className="product-flex">
      {products.map(({product_id, product_image, product_name, price}) => (
        <div key={product_id} className="product-container">
          <img
            src={product_image}
            alt={product_name}
            className="product-image"
          />
          <p>{product_name}</p>
          <p>{product_description}</p>
          <p>${price}</p>
          <button onClick={() => addToCart(product_id, price)}>Add to Cart</button>
        </div>
      ))}
      {showModal && <AuthModal handleToggle={handleToggle} />}
    </div>
  )
}

const mapStateToProps = state => {
  const { user } = state.reducer
  return { user }
}

export default connect(mapStateToProps)(Products)
