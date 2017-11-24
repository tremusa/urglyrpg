const assert = chai.assert

import { DeleteWorld } from '../src/actions/delete-world.js';
import { CreateNewWorld } from '../src/actions/create-new-world.js';
import { Store } from '../src/data/store.js';


describe('world setup and clean up', () => {
  after(async () => {
    await DeleteWorld();
  })
  it('should delete posible existing world', async () => {
    await DeleteWorld();
    const fields = await Store.fields.all();
    const world = await Store.world.all();
    const objects = await Store.objects.all();
    const logs = await Store.logs.all();
    console.log(fields);
    assert.lengthOf(Object.keys(fields), 0);
    assert.lengthOf(Object.keys(world), 0);
    assert.lengthOf(Object.keys(objects), 0);
    assert.lengthOf(Object.keys(logs), 0);
  });
  it('should create a new world with dev preset', async () => {
    await CreateNewWorld('test-world');
    const fields = await Store.fields.all();
    const world = await Store.world.all();
    const objects = await Store.objects.all();
    const logs = await Store.logs.all();
    assert(Object.keys(fields).length !== 0);
    assert(Object.keys(world).length !== 0);
    assert(Object.keys(objects).length !== 0);
    assert(Object.keys(logs).length !== 0);
    assert(world.name === 'test-world');
    assert(world.preset === 'dev');
  });
});