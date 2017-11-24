import { BaseStore } from './base-store.js'

export class LogStore extends BaseStore {
  constructor() {
    super('logs');
  }
}