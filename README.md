# Eleventy Stripe Boilerplate

I can't make a Stripe plugin for 11ty in a few hours (or until 11ty adds global data option to plugins) but I've collected together the functions I use into a blank boilerplate project. This repo includes includes 2 serverless functions:

- `stripe-get-checkout.js` and  
- `stripe-get-payment-intent.js`

These are the two main ways of taking payments with Stripe. 

Checkout means the transactions take place on Stripe's server. As they put it "We built Checkout so you don’t have to". It's useful, but also kinda locks you into managing product information with Stripe. 

Payment intent it's slightly more work but allows for complete customisation and freedom to store the product information elsewhere. 

I've wrapped these two functions with some methods that allow for easy calculation of shipping and general settings.

There is also stripe function in the `_data` folder with configurable options to retrieve data from Stripe's API at build time. (useful for dashboards).

Essentially this is a really simple boilerplate for someone looking to manage payments in with 11ty with Serverless functions. 

Expect a complete starter-kit project sometime in the new year.

## Before you start

Run: `npm install`.

Get a Stripe API Key: https://stripe.com/docs/keys

Rename `.env.example` to `.env` and replace the key with your own.

## Testing Serverless Functions

One way to test serverless function is with the Netlify CLI: https://www.netlify.com/products/dev/

Start the server with `netlify dev`. You can test the functions with my node script `test-functions` in the `utils` folder.

## This starter-kit has no front-end or content

I know.
