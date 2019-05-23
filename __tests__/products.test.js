'use strict';

const Products = require('../src/models/products');

describe('Product model', () => {
  it('can post a new product', () => {
    const product = new Products();
    let obj = { category: 'Bonnie' };
    return product.post(obj).then(record => {
      Object.keys(obj).forEach(key => {
        expect(record[0][key]).toEqual(obj[key]);
      });
    });
  });
});
