export class BaseStore {
  constructor(storeName) {
    this.store = localforage.createInstance({
      name: storeName,
      driver: localforage.INDEXEDDB
    });
  }
  getItem(key) {
    return new Promise(resolve => {
      this.store.getItem(key).then(value => resolve(value));
    });
  }
  addItem(data) {
    return this.setItem(this.uuid(), data);
  }
  setItem(key, data) {
    return new Promise(resolve => {
      this.store.setItem(key, data).then(value => resolve(value));
    });
  }
  removeItem(key) {
    return new Promise(resolve => {
      this.store.removeItem(key).then(() => resolve());
    });
  }
  clear() {
    return new Promise(resolve => {
      this.store.clear().then(() => resolve());
    });
  }
  key(index) {
    return new Promise(resolve => {
      this.store.key(index).then(value => resolve(value));
    });
  }
  keys() {
    return new Promise(resolve => {
      this.store.keys().then(value => resolve(value));
    });
  }
  length() {
    return new Promise(resolve => {
      this.store.length().then(value => resolve(value));
    });
  }
  iterate(itFunc) {
    return new Promise(resolve => {
      this.store.iterate(itFunc).then(value => resolve());
    });
  }
  all() {
    return new Promise(resolve => {
      const data = {};
      this.store
        .iterate((value, key) => {
          data[key] = value;
        })
        .then(() => resolve(data));
    });
  }
  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}