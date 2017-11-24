const assert = chai.assert

import { BaseStore } from '../src/data/base-store.js';


describe('BaseStore', () => {
  const testStore = new BaseStore('test-store');
  it('should be cleared at begin', async () => {
    await testStore.clear();
    const allData = await testStore.all();
    const keys = await testStore.keys();
    assert(Object.keys(allData).length === 0);
    assert(keys.length === 0);
  });
  it('should add new items', async () => {
    const storedObj = await testStore.addItem({ 'test-obj': 'test-obj' });
    const storedString = await testStore.addItem('test string');
    const storedNumber = await testStore.addItem(1337);
    const storedArray = await testStore.addItem([1, 2, 3, 4]);
    const allData = await testStore.all();
    const keys = await testStore.keys();

    assert(Object.keys(allData).length === 4);
    assert(keys.length === 4);
    assert(JSON.stringify(allData[storedObj.key]) === JSON.stringify({ 'test-obj': 'test-obj' }));
    assert(allData[storedString.key] === 'test string');
    assert(allData[storedNumber.key] === 1337);
    assert(JSON.stringify(allData[storedArray.key]) === JSON.stringify([1, 2, 3, 4]));
  });
});