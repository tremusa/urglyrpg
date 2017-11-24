import { WorldConstants } from '../constants/world-constants.js';
import { Store } from '../data/store.js';

export const NextTurn = function() {
  return new Promise(async resolve => {
    // Handle World
    const tick = await Store.world.getItem(WorldConstants.key.tick);
    await Store.world.setItem(WorldConstants.key.tick, tick + 1);
    // Handle Objects
    const objectIds = await Store.objects.keys();
    objectIds.forEach(async id => {
      const obj = await Store.objects.getItem(id);
      if (obj.action === null) {
        return;
      }
      // TODO: handle action
      obj.action = null;
      await Store.objects.setItem(obj.id, obj);
    });
    await Store.logs.addItem({
      type: 'NextTurn',
      error: false,
      text: 'NextTurn'
    });
    resolve();
  });
};