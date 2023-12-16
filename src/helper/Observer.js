export class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(callback) {
    console.log('subscribe ', callback);
    this.observers.push(callback);
  }

  unsubscribe(callback) {
    console.log('unsubscribe ', callback);
    this.observers = this.observers.filter((observer) => observer !== callback);
  }

  notify(data) {
    console.log('notify ', data);
    this.observers.forEach((observer) => observer(data));
  }
}

export const authObserver = new Observer();