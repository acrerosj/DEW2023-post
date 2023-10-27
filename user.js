class User {
  name;

  constructor(name) {
    this.name = name;
  }

  read(txt) {
    return `${this.name} is reading ${txt}`;
  }
}

module.exports = User;
