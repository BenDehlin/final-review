import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import axios from "axios"
import AuthModal from "./AuthModal"

const Cart = ({ user }) => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    axios
      .get(`/api/cart/${user.customer_order_id}`)
      .then(results => {
        setCart(results.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      {user.email ? (
        <div>
          {cart.map(
            ({ product_id, product_image, product_name, price }) => (
              <div key={product_id} className="product-container">
                <img
                  src={product_image}
                  alt={product_name}
                  className="product-image"
                />
                <p>{product_name}</p>
                <p>{product_description}</p>
                <p>${price}</p>
              </div>
            )
          )}
        </div>
      ) : (
        <AuthModal />
      )}
    </div>
  )
}

mapStateToProps = store => {
  const { user } = store.reducer
  return { user }
}

export default connect(mapStateToProp)(Cart)
