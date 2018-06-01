"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArgumentBuilder {
    constructor() {
        this.args = [];
    }
    pushFlaggedKeyValueArgs(argFlagName, values) {
        if (typeof (values) !== 'undefined') {
            if (Array.isArray(values)) {
                values.forEach((value) => {
                    this.pushFlaggedKeyValueArg(argFlagName, value);
                });
            }
            else {
                this.pushFlaggedKeyValueArg(argFlagName, values);
            }
        }
    }
    pushPlainArgs(values) {
        if (typeof (values) !== 'undefined') {
            if (Array.isArray(values)) {
                values.forEach((value) => {
                    this.pushPlainArg(value);
                });
            }
            else {
                this.pushPlainArg(values);
            }
        }
    }
    pushFlaggedArgs(flag, values) {
        if (typeof (values) !== 'undefined') {
            if (Array.isArray(values)) {
                values.forEach((value) => {
                    this.pushFlaggedArg(flag, value);
                });
            }
            else {
                this.pushFlaggedArg(flag, values);
            }
        }
    }
    pushEqualArgs(flag, values) {
        if (typeof (values) !== 'undefined') {
            if (Array.isArray(values)) {
                values.forEach((value) => {
                    this.pushEqualArg(flag, value);
                });
            }
            else {
                this.pushEqualArg(flag, values);
            }
        }
    }
    get arguments() {
        return this.args;
    }
    pushBooleanArgs(flag, value) {
        if (typeof (value) !== 'undefined' && value) {
            this.pushPlainArg(flag);
        }
    }
    pushFlaggedArg(flag, value) {
        if (typeof (value) !== 'undefined' && this.canAddValue(value)) {
            this.args.push(flag);
            this.args.push(value);
        }
    }
    pushPlainArg(value) {
        if (typeof (value) !== 'undefined' && this.canAddValue(value)) {
            this.args.push(value);
        }
    }
    pushEqualArg(key, value) {
        if (typeof (value) !== 'undefined' && this.canAddValue(value)) {
            this.args.push(`${key}=${value}`);
        }
    }
    pushFlaggedKeyValueArg(argFlagName, value) {
        if (typeof (value) !== 'undefined' && this.canAddValue(value)) {
            const key = Object.getOwnPropertyNames(value)[0];
            this.args.push(argFlagName);
            this.args.push(`${key}=${value[key]}`);
        }
    }
    canAddValue(value) {
        if (value == null) {
            return false;
        }
        return value !== '';
    }
}
exports.ArgumentBuilder = ArgumentBuilder;
//# sourceMappingURL=argument-builder.js.map