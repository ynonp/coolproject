import test from 'node:test';
import assert from 'node:assert';
import * as peopleService from '../people.service';

test('synchronous passing test', (t) => {  
  assert.strictEqual(1, 1);
});

test('get people', async t => {
  const people = await peopleService.getAllUsers();
  assert.deepEqual(people, [
    {
      age: 20,
      email: 'ynon@tocode.co.il',
      id: 1,
      name: 'ynon'
    },
    {
      age: 22,
      email: 'dave@gmail.com',
      id: 2,
      name: 'dave'
    }
  ]);
  
})