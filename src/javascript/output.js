module.exports = (array, config) => {
    let indent = config.getIndent();
    return `[\n${array.map(txt => `${indent}'${txt}',`).join('\n')}\n]`;
};
