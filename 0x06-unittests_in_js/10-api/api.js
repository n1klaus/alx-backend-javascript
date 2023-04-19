const express = require('express');

const app = express();

app.get('/', (req, resp) => {
  resp.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, resp) => {
  if (isNaN(req.params.id)) {
    return resp.status(404);
  }
  resp.status(200).send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, resp) => {
  const respObject = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  resp.status(200).json(respObject.toString());
});

app.post('/login', (req, resp) => {
  resp.status(200).send(`Welcome ${req.body.userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
