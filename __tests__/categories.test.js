'use strict';

const Categories = require('../src/models/categories.js');

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Categories model', () => {
  it('can post a new product', () => {
    const category = new Categories();
    let obj = { name: 'Bonnie' };
    return category.post(obj).then(record => {
      Object.keys(obj).forEach(key => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });

  it('can get a product', () => {
    const category = new Categories();
    let obj = { name: 'Bonnie' };
    return category.post(obj).then(record => {
      return category.get(record.id).then(product => {
        Object.keys(obj).forEach(key => {
          expect(product[0][key]).toEqual(obj[key]);
        });
      });
    });
  });
});
