import {Store} from '../data/store.js';

export const DeleteWorld = function () {
  return new Promise(async resolve => {
    await Store.fields.clear();
    await Store.world.clear();
    await Store.objects.clear();
    await Store.logs.clear();
    resolve();
  });
};