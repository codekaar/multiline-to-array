const assert = require('assert');
const multilineInput = require('../src/multiline/input');

describe('Multiline input test', () => {
    it('should convert multiline text to array', () => {
        assert.deepEqual(multilineInput('hello\nworld'), [
            'hello',
            'world',
        ]);
    });
});
