require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");

const productRouter = require('./routers/product');
const customerRouter = require('./routers/customer');
// const authRouter = require('./routers/authentication');
const invoiceRouter = require('./routers/invoice')
const contactRouter = require('./routers/contactForm')

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json())

app.use('/product', productRouter)
app.use('/customer', customerRouter)
// app.use('/membership', authRouter)
app.use('/invoice', invoiceRouter)
app.use('/contactForm', contactRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

