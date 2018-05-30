"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArgumentBuilders {
    static pushFlaggedKeyValueArgs(args, argFlagName, values) {
        if (typeof (values) !== 'undefined' && values) {
            if (Array.isArray(values)) {
                values.forEach((value) => {
                    ArgumentBuilders.pushFlaggedKeyValueArg(args, argFlagName, value);
                });
            }
            else {
                ArgumentBuilders.pushFlaggedKeyValueArg(args, argFlagName, values);
            }
        }
    }
    static pushPlainArgs(args, values) {
        if (typeof (values) !== 'undefined' && values) {
            if (Array.isArray(values)) {
                values.forEach((value) => {
                    ArgumentBuilders.pushPlainArg(args, value);
                });
            }
            else {
                ArgumentBuilders.pushPlainArg(args, values);
            }
        }
    }
    static pushFlaggedArgs(args, flag, values) {
        if (typeof (values) !== 'undefined' && values) {
            if (Array.isArray(values)) {
                values.forEach((value) => {
                    ArgumentBuilders.pushFlaggedArg(args, flag, value);
                });
            }
            else {
                ArgumentBuilders.pushFlaggedArg(args, flag, values);
            }
        }
    }
    static pushFlaggedArg(args, flag, value) {
        if (typeof (value) !== 'undefined' && value !== null) {
            args.push(flag);
            args.push(value);
        }
    }
    static pushPlainArg(args, value) {
        if (typeof (value) !== 'undefined' && value !== null) {
            args.push(value);
        }
    }
    static pushFlaggedKeyValueArg(args, argFlagName, value) {
        if (typeof (value) !== 'undefined' && value !== null) {
            const key = Object.getOwnPropertyNames(value)[0];
            args.push(argFlagName);
            args.push(`${key}=${value[key]}`);
        }
    }
}
exports.ArgumentBuilders = ArgumentBuilders;
//# sourceMappingURL=argument-builders.js.map