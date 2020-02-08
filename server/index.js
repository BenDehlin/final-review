require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      authCtrl = require('./controllers/authController'),
      cartCtrl = require('./controllers/cartController'),
      app = express(),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      port = SERVER_PORT;


app.use(express.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 *24}
}))

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Database running')
  app.listen(port, () => console.log(`Memeing on ${port}`));
})

//ENDPOINTS
//auth endpoints
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth.logout', authCtrl.logout)

//products endpoints
app.get('/api/products', cartCtrl.getProducts)

//cart endpoints
app.get('/api/cart/:id', cartCtrl.getCart)
app.post('/api/cart', cartCtrl.addToCart)

