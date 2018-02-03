class Config {
    constructor() {
        this.indentType = 'space';
        this.indentSize = 4;
    }

    getIndent() {
        switch (this.indentType) {
            case 'space':
                return (new Array(this.indentSize)).fill(' ').join('');
            case 'tab':
                return '\t';
        }
    }
}

module.exports = Config;
