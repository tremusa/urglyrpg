import { DevWorld } from '../presets/devworld.js';
import { WorldConstants } from '../constants/world-constants.js';
import { Store } from '../data/store.js';

export const CreateNewWorld = function(worldName) {
  return new Promise(async resolve => {
    if (_.isEmpty(worldName)) {
      await Store.logs.addItem({
        type: 'CreateNewWorld',
        error: true,
        text: 'World Name is empty, cant generate world'
      });
      resolve();
    }

    Store.world.setItem(WorldConstants.key.name, worldName);
    Store.world.setItem(WorldConstants.key.preset, DevWorld.presetName);
    Store.world.setItem(WorldConstants.key.tick, 0);
    DevWorld.world.forEach(async item => await Store.world.setItem(item.id, item));
    DevWorld.fields.forEach(async item => await Store.fields.setItem(item.id, item));
    DevWorld.objects.forEach(async item => await Store.objects.setItem(item.id, item));
    await Store.logs.addItem({
      type: 'CreateNewWorld',
      error: false,
      text: 'World created'
    });
    resolve();
  });
};