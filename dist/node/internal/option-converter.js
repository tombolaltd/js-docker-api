"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builders_1 = require("./argument-builders");
function addOption(returnedArray, key, value) {
    const flag = `--${key}`;
    const valueType = typeof (value);
    if (valueType === 'boolean') {
        if (value) {
            argument_builders_1.ArgumentBuilders.pushPlainArgs(returnedArray, flag);
        }
    }
    else if (valueType === 'object') {
        argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(returnedArray, flag, value);
    }
    else {
        argument_builders_1.ArgumentBuilders.pushPlainArgs(returnedArray, [flag, value]);
    }
}
function addOptions(returnedArray, key, values) {
    for (const option of values) {
        addOption(returnedArray, key, option);
    }
}
function optionConverter(options) {
    const returnedArray = [];
    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            const value = options[key];
            if (Array.isArray(value)) {
                addOptions(returnedArray, key, value);
            }
            else {
                addOption(returnedArray, key, value);
            }
        }
    }
    return returnedArray;
}
exports.optionConverter = optionConverter;
//# sourceMappingURL=option-converter.js.map