const CONST = require('./const');
const multiline = require('./multiline');
const php = require('./php');
const javascript = require('./javascript');

const types = {
    multiline, php
};

const inputToArray = (inputFormat, input, config) => {
    input = input.trim();
    if (input === '') {
        return [];
    }

    let array = [];
    switch (inputFormat) {
        case CONST.MULTILINE:
            array = multiline.input(input, config);
            break;
    }
    return array;
};

const arrayToOutput = (outputFormat, array, config) => {
    let output = '';
    switch (outputFormat) {
        case CONST.PHP_ARRAY:
            output = php.output(array, config);
            break;
        case CONST.JAVASCRIPT_ARRAY:
            output = javascript.output(array, config);
            break;
    }
    return output;
};

const convert = (inputFormat, outputFormat, text, config) => {
    return arrayToOutput(outputFormat, inputToArray(inputFormat, text, config), config);
};

module.exports = convert;
