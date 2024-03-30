import { describe, it, expect } from 'vitest';
import { run } from './run';

/**
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

describe('cart checkout validation function', () => {
  it('returns an error when quantity exceeds one', () => {
    const result = run({
      cart: {
        lines: [
          {
            quantity: 3,
            merchandise: {
              id: "gid://shopify/ProductVariant/49035666620719",
              title: 156,
              maxorderquantity: {
                value: 2
              },
              minorderquantity: {
                value: 1,
              },
              product: {
                id: "gid://shopify/Product/9544285454639",
                title: "The Collection Snowboard: Liquid"
              }
            }
          }
        ]
      }
    });
    const expected = /** @type {FunctionRunResult} */ ({ errors: [
      {
        localizedMessage: "Sorry, the maximum order quantity for The Collection Snowboard: Liquid / 156 is 2",
        target: "cart"
      }
    ] });

    expect(result).toEqual(expected);
  });

  it('returns no errors when cart quantity is less than max order quantity', () => {
    const result = run({
      cart: {
        lines: [
          {
            quantity: 2,
            merchandise: {
              id: "gid://shopify/ProductVariant/49035666620719",
              title: 156,
              maxorderquantity: {
                value: 3
              },
              minorderquantity: {
                value: 1,
              },
              product: {
                id: "gid://shopify/Product/9544285454639",
                title: "The Collection Snowboard: Liquid"
              }
            }
          }
        ]
      }
    });
    const expected = /** @type {FunctionRunResult} */ ({ errors: [] });

    expect(result).toEqual(expected);
  });
});
