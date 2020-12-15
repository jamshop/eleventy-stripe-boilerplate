const settings = require("./settings");

const getProducts = async () => {
  // Define your own getProducts function
  // This is the source of truth, don't trust the front-end but it should match
  // For 11ty I import this from _data e.g: require("../../site/_data/products");
  // You can import from Shopify or Stripe or anything.

  // Return in the format: 
  return [
    {
      id: 1,
      image: "/img/orange.jpg",
      amount: 175,
      name: "Orange",
      description: "The orange is the fruit of various citrus species in the family Rutaceae.",
      itemWeight: 15, // Only required for "weight-cost" shipping example
      shippingCost: 15, // Only required for "flagfall-item-cost" shipping example
      // I typically have other keys used by the front-end
    }
  ]

}

const getLineItemsFromCartData = async (cart) => {
  // Cart data is in the format: { "id": qty }
  // eg: { "1": 3 } = 3 x item with ID "1"

  const products = await getProducts();
  return (
    Object.keys(cart)
      .filter((cartId) => products.find((product) => product.id == cartId)) // Make sure the product exists
      .map((cartId) => {
        const item = products.find((product) => product.id == cartId);
        // This data is in the shape required for Stripe checkout
        return {
          name: item.name,
          description: item.description,
          images: [item.image],
          amount: item.amount,
          currency: settings.currency,
          quantity: cart[item.id],
        };
      })
      .filter((item) => item.quantity > 0) // Remove any with quantity of 0
  );
};


module.exports = { getLineItemsFromCartData }