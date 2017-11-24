import { WorldConstants } from '../constants/world-constants.js';
import { Store } from '../data/store.js';

export const SetPlayerAction = function(playerAction) {
  return new Promise(async resolve => {
    const playerId = await Store.world.getItem(WorldConstants.key.playerId);
    const player = await Store.objects.getItem(playerId.value);
    player.action = playerAction;
    await Store.objects.setItem(player.id, player);
    await Store.logs.addItem({
      type: 'SetPlayerAction',
      error: false,
      text: 'SetPlayerAction',
      detail: JSON.stringify(playerAction)
    });
    resolve();
  });
};