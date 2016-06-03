var assert = require('assert');

// assert.throws(function(){
//     throw new Error('Wrong value');
// }, /value/, 'without throw error!');

// name = 789;
// assert.strictEqual(global.name, undefined, 'global name is defined');
// assert.notEqual(global.name, undefined, 'global name no defined');

// var err = new Error('assert error');
// assert.ifError(err);

// assert.deepEqual(false, null, 'two value different');

assert.notEqual(false, null, 'two value is same');
// assert(false, 'throw error');
