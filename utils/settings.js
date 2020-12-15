
module.exports = {
  currency: "AUD",
  shippingMethod: "flat-rate",
  shippingCost: 350,

  stripeCheckoutSettings: {
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: [
        "US",
        "CA",
        "MX",
        "IE",
        "GB",
        "DE",
        "JP",
        "FR",
        "HR",
        "DK",
        "NO",
        "SE",
        "FI",
        "AU",
      ],
    },
    success_url: 'http://example.com/thanks',
    cancel_url: 'http://example.com/',
  }
}