'use strict';

const schema = require('./categories-schema.js');

class Categories {
  constructor() {}

  get(_id) {
    let queryObject = _id ? { _id } : {};
    return schema.find(queryObject);
  }

  post(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

  put(_id, record) {
    console.log(_id, record);
    return schema.findByIdAndUpdate({ _id }, record);
  }

  delete(_id) {
    return schema.findByIdAndRemove(_id);
  }
}

module.exports = Categories;
