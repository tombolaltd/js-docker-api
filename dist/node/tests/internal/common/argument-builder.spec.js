"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builder_1 = require("@common/argument-builder");
const chai_1 = require("chai");
require("mocha");
describe('The ArgumentBuilder class', () => {
    describe('pushPlainArgs function', () => {
        it('using undefined results in the original array', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushPlainArgs(undefined);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
        it('using null results in the original array', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushPlainArgs(null);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
        it('passing empty array results in orginal array', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushPlainArgs([]);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
        it('passing array with one element results in new array with element added', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushPlainArgs([23]);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([23]);
        });
        it('passing array with multiple elementa results in new array with elements added', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushPlainArgs([42, 'baz', 'quux']);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([42, 'baz', 'quux']);
        });
        it('uith non array values correctly concatenates value', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushPlainArgs('--maymay');
            chai_1.expect(argumentBuilder.arguments).to.deep.equal(['--maymay']);
        });
        it('uith non array falsy values correctly concatenates value', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushPlainArgs(0);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([0]);
        });
        it('uith empty string does not concatenate the value', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushPlainArgs('');
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
    });
    describe('pushFlaggedKeyValueArgs function', () => {
        it('using undefined results in the original array', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushFlaggedKeyValueArgs('meme', undefined);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
        it('using an empty array results in the original array', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushFlaggedKeyValueArgs('meme', []);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
        it('using an array with one item correctly concatenates value', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushFlaggedKeyValueArgs('--meme', [{ NayanCat: true }]);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal(['--meme', 'NayanCat=true']);
        });
        it('using an array with multiple items correctly concatenates values', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushFlaggedKeyValueArgs('--meme', [{ NayanCat: true }, { YoMoma: 'fat' }, { 'current-year': 2018 }]);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([
                '--meme', 'NayanCat=true',
                '--meme', 'YoMoma=fat',
                '--meme', 'current-year=2018'
            ]);
        });
        it('using an non array value with one item correctly concatenates value', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushFlaggedKeyValueArgs('--meme', { NayanCat: true });
            chai_1.expect(argumentBuilder.arguments).to.deep.equal(['--meme', 'NayanCat=true']);
        });
    });
    describe('pushFlaggedArgs function', () => {
        it('using undefined results in the original array', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushFlaggedArgs('--baz', undefined);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
        it('using null results in the original array', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushFlaggedArgs('--baz', null);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
        it('using an single non array value correctly concatenates value', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushFlaggedArgs('--baz', 'quux');
            chai_1.expect(argumentBuilder.arguments).to.deep.equal(['--baz', 'quux']);
        });
        it('using an array value with one item correctly concatenates value', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushFlaggedArgs('--baz', ['quux']);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal(['--baz', 'quux']);
        });
        it('using an multi value array correctly concatenates values', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushFlaggedArgs('--baz', ['qux', 'quux', 'corge']);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal(['--baz', 'qux', '--baz', 'quux', '--baz', 'corge']);
        });
        it('using an single non array value which is falsy correctly concatenates value', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushFlaggedArgs('--baz', 0);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal(['--baz', 0]);
        });
        it('using an empty string no value is concatenated', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushFlaggedArgs('--baz', '');
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
    });
    describe('pushEqualArgs function', () => {
        it('using undefined results in the original array', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushEqualArgs('--baz', undefined);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
        it('using null results in the original array', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushEqualArgs('--baz', null);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
        it('using an single non array value correctly concatenates value', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushEqualArgs('--baz', 'quux');
            chai_1.expect(argumentBuilder.arguments).to.deep.equal(['--baz=quux']);
        });
        it('using an array value with one item correctly concatenates value', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushEqualArgs('--baz', ['quux']);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal(['--baz=quux']);
        });
        it('using an multi value array correctly concatenates values', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushEqualArgs('--baz', ['qux', 'quux', 'corge']);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal(['--baz=qux', '--baz=quux', '--baz=corge']);
        });
        it('using an single non array value which is falsy correctly concatenates value', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushEqualArgs('--baz', 0);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal(['--baz=0']);
        });
        it('using an empty string no value is concatenated', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushEqualArgs('--baz', '');
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
    });
    describe('pushBooleanArgs function', () => {
        it('undefined value results in no concatenation', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushBooleanArgs('--baz', undefined);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
        it('false value results in no concatenation', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushBooleanArgs('--baz', false);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal([]);
        });
        it('true value results in no concatenation', () => {
            const argumentBuilder = new argument_builder_1.default();
            argumentBuilder.pushBooleanArgs('--baz', true);
            chai_1.expect(argumentBuilder.arguments).to.deep.equal(['--baz']);
        });
    });
});
//# sourceMappingURL=argument-builder.spec.js.map