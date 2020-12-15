const fetch = require("node-fetch");

fetch("http://localhost:8888/.netlify/functions/stripe-payment-intent",
{
  method: "post",
  body: JSON.stringify({ "1": 1})
}).then(res => {
  res.json().then(data => {
    console.log(data)
  })
});

fetch("http://localhost:8888/.netlify/functions/stripe-checkout",
{
  method: "post",
  body: JSON.stringify({ "1": 1})
}).then(res => {
  res.json().then(data => {
    console.log(data)
  })
})