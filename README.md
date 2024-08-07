# Shopify Function Template - Checkout Validation Function (app with extensions only)
### Use Case - Min / Max Order Quantity

This is a template for building a Checkout Validation Function which enforces a line item minimum and maximum quantity based on thresholds store in metafields on the variant level. This app does not include an app home UI.

It contains the basics for building a Shopify app that uses only app extensions. 

(https://shopify.dev/docs/apps/getting-started) 

(https://shopify.dev/docs/api/functions/reference/cart-checkout-validation) 

## Getting started

### Requirements

1. You must [download and install Node.js](https://nodejs.org/en/download/) if you don't already have it.
1. You must [create a Shopify partner account](https://partners.shopify.com/signup) if you don’t have one.
1. You must create a store for testing if you don't have one, either a [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or a [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store).

### Clone the project
```
git clone https://github.com/nf-shopify/min-max-order-quantity.git
```

You can find function within /extensions/min-max-function

### Prerequisites

1. Creation of a integer metafield on the varirant object to contain minimum quantity - namespace: "custom", key: "min_order_quantity"
1. Creation of a integer metafield on the varirant object to contain maximum quantity - namespace: "custom", key: "max_order_quantity"

### Local Development

[The Shopify CLI](https://shopify.dev/docs/apps/tools/cli) connects to an app in your Partners dashboard. It provides environment variables and runs commands in parallel..

You can develop locally using your preferred package manager. Run one of the following commands from the root of your app.

Using npm:

```shell
npm run dev
```

Open the URL generated in your console. Once you grant permission to the app, you can start to to test the function in your store.


## Developer resources

- [Introduction to Shopify apps](https://shopify.dev/docs/apps/getting-started)
- [App authentication](https://shopify.dev/docs/apps/auth)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-api-js#readme)



