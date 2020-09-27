const { Service } = require('feathers-knex');

exports.Books = class Books extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'books'
    });
  }
};
