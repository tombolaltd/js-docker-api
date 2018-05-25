"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pushOption(array, key, value) {
    array.push(`--${key}`);
    if (value) {
        array.push(value);
    }
}
function addOption(returnedArray, options, key) {
    const value = options[key];
    if (typeof (value) === 'boolean') {
        if (value) {
            pushOption(returnedArray, key);
        }
    }
    else {
        pushOption(returnedArray, key, value);
    }
}
function optionConverter(options) {
    const returnedArray = [];
    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            addOption(returnedArray, options, key);
        }
    }
    return returnedArray;
}
exports.optionConverter = optionConverter;
//# sourceMappingURL=option-converter.js.map