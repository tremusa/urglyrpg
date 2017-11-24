import { FieldStore } from './field-store.js';
import { LogStore } from './log-store.js';
import { ObjectStore } from './object-store.js';
import { WorldStore } from './world-store.js';

class DataStore {
  constructor() {
    this.fields = new FieldStore();
    this.logs = new LogStore();
    this.objects = new ObjectStore();
    this.world = new WorldStore();
  }
}

const Store = new DataStore;

export {
  Store
};