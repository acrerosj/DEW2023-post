class Post {
  name;

  #number = 0;

  #subscribers = [];

  constructor(name) {
    this.name = name;
  }

  get summary() {
    return `${this.name} publication number ${this.#number}`;
  }

  getSubscribers() {
    return this.#subscribers.map((user) => user.name).join(',');
  }

  attach(user) {
    if (!this.#subscribers.includes(user)) {
      this.#subscribers.push(user);
    }
  }
}

module.exports = Post;
