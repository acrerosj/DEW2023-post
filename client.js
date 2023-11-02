const User = require('./user');

class Client extends User {
  billing = 0;

  notify(post) {
    const price = post.price || 0;
    this.billing += price;
    this.billing = Number(this.billing.toFixed(2));
    return this.read(post.summary);
  }
}

module.exports = Client;
