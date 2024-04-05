// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */

export function run(input) {
  const { lines } = input.cart;
  const errors = lines.reduce((acc, lineItem) => {
    const { quantity, merchandise } = lineItem;
    const maxOrderQuantity = Number.parseInt(merchandise?.maxorderquantity?.value);
    const minOrderQuantity = Number.parseInt(merchandise?.minorderquantity?.value);

    console.log("Product Title: ", merchandise?.product?.title, " Variant Title: ",merchandise?.title,
    " Cart Quantity: ", quantity, " Min Order Quantity:", minOrderQuantity, " Max Order Quantity:", maxOrderQuantity);

    // Compare cart quantity to max and min order quantity
    if (quantity > maxOrderQuantity) {
      acc.push({
        localizedMessage: `Sorry, the maximum order quantity for ${merchandise?.product?.title} / ${merchandise?.title} is ${maxOrderQuantity}`,
        target: "cart",
      });
    } else if (quantity < minOrderQuantity) {
      acc.push({
        localizedMessage: `Sorry, the minimum order quantity for ${merchandise?.product?.title} / ${merchandise?.title} is ${minOrderQuantity}`,
        target: "cart",
      });
    }
    return acc;
  }, []);

  return { errors };
}
