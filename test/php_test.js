const assert = require('assert');

const Config = require('../src/Config');
const phpOutput = require('../src/php/output');

describe('PHP test', () => {
    it('should convert array to PHP array', () => {
        let config = new Config();
        let indent = config.getIndent();

        let arr = [
            'hello',
            'world',
        ];
        let result = `[\n${indent}'hello',\n${indent}'world',\n]`;
        assert.equal(phpOutput(arr, config), result);
    });
});
