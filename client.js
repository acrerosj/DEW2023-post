const User = require('./user');

class Client extends User {
  billing = 0;
}

module.exports = Client;
