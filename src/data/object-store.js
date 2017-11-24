import { BaseStore } from './base-store.js'

export class ObjectStore extends BaseStore {
  constructor() {
    super('objects');
  }
}