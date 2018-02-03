const assert = require('assert');

const Config = require('../src/Config');
const CONST = require('../src/const');
const convert = require('../src/convert');

describe('convert', () => {
    it('should convert multiline to PHP array', () => {
        let config = new Config();
        let indent = config.getIndent();

        let text = '\n\nhello\nworld\n\n';
        let converted = `[\n${indent}\'hello\',\n${indent}\'world\',\n]`;
        assert.equal(convert(CONST.MULTILINE, CONST.PHP_ARRAY, text, config), converted);

        text = '\n\nhello\n\n\nworld\n\n';
        converted = `[\n${indent}\'hello\',\n${indent}\'\',\n${indent}\'\',\n${indent}\'world\',\n]`;
        assert.equal(convert(CONST.MULTILINE, CONST.PHP_ARRAY, text, config), converted);
    });
});
