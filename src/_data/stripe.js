require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async () => {
  // This is pretty slow to fetch everything so comment out what you don't need

  const endpoints = {
    // balance: stripe.balance.retrieve,
    // balanceTransactions: stripe.balanceTransactions.list,
    charges: stripe.charges.list.bind(stripe.charges),
    customers: stripe.customers.list.bind(stripe.customers),
    // disputes: stripe.disputes.list.bind(stripe.disputes),
    // events: stripe.events.list.bind(stripe.events),
    // files: stripe.files.list.bind(stripe.files),
    // fileLinks: stripe.fileLinks.list.bind(stripe.fileLinks),
    paymentIntents: stripe.paymentIntents.list.bind(stripe.paymentIntents),
    // payouts: stripe.payouts.list.bind(stripe.payouts),
    // products: stripe.products.list.bind(stripe.products),
    // refunds: stripe.refunds.list.bind(stripe.refunds),
    // coupons: stripe.coupons.list.bind(stripe.coupons),
    // invoices: stripe.invoices.list.bind(stripe.invoices),
    // invoiceItems: stripe.invoiceItems.list.bind(stripe.invoiceItems),
    // plans: stripe.plans.list.bind(stripe.plans),
    // subscriptions: stripe.subscriptions.list.bind(stripe.subscriptions),
    // accounts: stripe.accounts.list.bind(stripe.accounts),
    // applicationFees: stripe.applicationFees.list.bind(stripe.applicationFees),
    // countrySpecs: stripe.countrySpecs.list.bind(stripe.countrySpecs),
    // topups: stripe.topups.list.bind(stripe.topups),
    // transfers: stripe.transfers.list.bind(stripe.transfers),
    // terminal: stripe.terminal.locations.bind(stripe.terminal).list,
    // terminal: stripe.terminal.readers.bind(stripe.terminal).list,
    // orders: stripe.orders.list.bind(stripe.orders),
    // orderReturns: stripe.orderReturns.list.bind(stripe.orderReturns),
    // skus: stripe.skus.list.bind(stripe.skus),
    // webhookEndpoints: stripe.webhookEndpoints.list.bind(stripe.webhookEndpoints),
    // creditNotes: stripe.creditNotes.list.bind(stripe.creditNotes),
    // reviews: stripe.reviews.list.bind(stripe.reviews),
    // radar: stripe.radar.valueLists.bind(stripe.radar).list,
    // checkout: stripe.checkout.sessions.bind(stripe.checkout).list,
    // prices: stripe.prices.list.bind(stripe.prices)
  }

  let data = {}
  for (const [key, method] of Object.entries(endpoints) ) {
    const result = await method();
    data[key] = result.data
  }

  return data
}