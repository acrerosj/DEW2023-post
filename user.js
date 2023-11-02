class User {
  name;

  constructor(name) {
    this.name = name;
  }

  read(txt) {
    return `${this.name} is reading ${txt}`;
  }

  notify(post) {
    return this.read(post.summary);
  }
}

module.exports = User;
