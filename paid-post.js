const Post = require('./post');
const Client = require('./client');

class PaidPost extends Post {
  price;

  constructor(name, price) {
    super(name);
    this.price = price;
  }

  attach(user) {
    if (user instanceof Client) {
      super.attach(user);
    }
  }
}

module.exports = PaidPost;
