const settings = require("./settings");

const calculateShipping = (lineItems) => {
  // Implement your own shipping calculations.
  // These are just some examples:

  if(settings.shippingMethod = "flat-rate") {
    return settings.shippingCost; // Flat rate
  }

  if(settings.shippingMethod = "flagfall-item-cost") {
    const totalItemCost = lineItems.reduce((prev, next) => prev + next.shippingCost, 0);
    return settings.shippingCost + totalItemCost;
  }

  if(settings.shippingMethod = "weight-cost") {
    const totalWeight = lineItems.reduce((prev, next) => prev + next.weight, 0);
    return settings.shippingCost + totalWeight;
  }

  return 0;
};

// Stripe checkout needs a line item for shipping
// Payment intent method should use calculateShipping and incorporate this in the cost.
const shippingLineItem = (lineItems) => ({
  name: "Shipping and Handling",
  description: "Shipping and Handling",
  images: [], // got an image of a packed parcle?
  amount: calculateShipping(lineItems),
  currency: "AUD", // Change this
  quantity: 1,
});

module.exports = {
  calculateShipping,
  shippingLineItem,
};
