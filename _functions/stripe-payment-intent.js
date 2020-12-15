const settings = require("../utils/settings");
const { calculateShipping } = require("../utils/shipping");
const { getLineItemsFromCartData } = require("../utils/get-cart-data");

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// This is entry point for the serverless function, body should container cart data
  // Cart data is JSON in the format: { "id": qty }
  // eg: { "1": 3 } = 3 x item with ID "1"
 
exports.handler = async ({ body }) => {
  const lineItems = await getLineItemsFromCartData(JSON.parse(body));
  const totalAmount = lineItems.reduce((acc, item) => acc + item.quantity * item.amount, 0);
  const totalShipping = calculateShipping(lineItems);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalAmount + totalShipping,
    currency: settings.currency,
    metadata: { integration_check: "accept_a_payment" }
  });

  return {
    statusCode: 200,
    body: JSON.stringify(paymentIntent)
  };
};
