const { getLineItemsFromCartData } = require("../utils/get-cart-data");
const { shippingLineItem } = require("../utils/shipping");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const settings = require("../utils/settings");

// This is entry point for the serverless function 
exports.handler = async ({ body }) => {
  const lineItems = await getLineItemsFromCartData(JSON.parse(body));
  const session = await stripe.checkout.sessions.create({
    ...settings.stripeCheckoutSettings,
    line_items: [
      ...lineItems,
      shippingLineItem(lineItems)
    ],
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ sessionId: session.id }),
  };
};
