const CONST = require('./const');
const convert = require('./convert');
const Config = require('./Config');

const inputType = document.getElementById('input-type');
const outputType = document.getElementById('output-type');
const input = document.getElementById('input');
const output = document.getElementById('output');
const error = document.getElementById('error');

const showOutput = () => {
    output.innerHTML = convert(inputType.value, outputType.value, input.value, new Config());
};

const inputChanged = () => {
    showOutput();
};

const inputTypeChanged = () => {
    showOutput();
};

const outputTypeChanged = () => {
    showOutput();
};

const init = () => {
    inputType.addEventListener('change', inputTypeChanged);
    outputType.addEventListener('change', outputTypeChanged);
    input.addEventListener('change', inputChanged);
    showOutput();
};

init();
