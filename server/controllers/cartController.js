module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get('db')
    db.products.get_products()
    .then(results => res.status(200).send(results))
    .catch(err => res.status(500).send(err))
  },
  addToCart: (req, res) => {
    const {customer_order_id, product_id, price} = req.body
    const db = req.app.get('db')
    db.cart.add_to_cart({order_id: customer_order_id, product_id, price})
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
  },
  getCart: (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.cart.get_cart(id)
    .then(results => res.status(200).send(results))
    .catch(err => res.status(500).send(err))
  }
}