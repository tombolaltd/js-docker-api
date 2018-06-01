import { ArgumentBuilder } from '@common/argument-builder';
import { expect } from 'chai';
import 'mocha';

describe('The ArgumentBuilder class', () => {

    describe('pushPlainArgs function', () => {
        it('using undefined results in the original array', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushPlainArgs(undefined);
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });

        it('using null results in the original array', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushPlainArgs(null);
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });

        it('passing empty array results in orginal array', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushPlainArgs([]);
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });

        it('passing array with one element results in new array with element added', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushPlainArgs([23]);
            expect(argumentBuilder.arguments).to.deep.equal([23]);
        });

        it('passing array with multiple elementa results in new array with elements added', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushPlainArgs([42, 'baz', 'quux']);
            expect(argumentBuilder.arguments).to.deep.equal([42, 'baz', 'quux']);
        });

        it('uith non array values correctly concatenates value', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushPlainArgs('--maymay');
            expect(argumentBuilder.arguments).to.deep.equal(['--maymay']);
        });

        it('uith non array falsy values correctly concatenates value', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushPlainArgs(0);
            expect(argumentBuilder.arguments).to.deep.equal([0]);
        });

        it('uith empty string does not concatenate the value', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushPlainArgs('');
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });

    });

    describe('pushFlaggedKeyValueArgs function', () => {
        it('using undefined results in the original array', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushFlaggedKeyValueArgs('meme', undefined);
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });

        it('using an empty array results in the original array', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushFlaggedKeyValueArgs('meme', []);
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });

        it('using an array with one item correctly concatenates value', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushFlaggedKeyValueArgs('--meme', [{NayanCat: true}]);
            expect(argumentBuilder.arguments).to.deep.equal(['--meme', 'NayanCat=true']);
        });

        it('using an array with multiple items correctly concatenates values', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushFlaggedKeyValueArgs('--meme', [{NayanCat: true}, {YoMoma: 'fat'}, {'current-year': 2018}]);
            expect(argumentBuilder.arguments).to.deep.equal([
                '--meme', 'NayanCat=true',
                '--meme', 'YoMoma=fat',
                '--meme', 'current-year=2018'
            ]);
        });

        it('using an non array value with one item correctly concatenates value', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushFlaggedKeyValueArgs('--meme', {NayanCat: true});
            expect(argumentBuilder.arguments).to.deep.equal(['--meme', 'NayanCat=true']);
        });
    });

    describe('pushFlaggedArgs function', () => {
        it('using undefined results in the original array', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushFlaggedArgs('--baz', undefined);
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });

        it('using null results in the original array', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushFlaggedArgs('--baz', null);
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });

        it('using an single non array value correctly concatenates value', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushFlaggedArgs('--baz', 'quux');
            expect(argumentBuilder.arguments).to.deep.equal(['--baz', 'quux']);
        });

        it('using an array value with one item correctly concatenates value', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushFlaggedArgs('--baz', ['quux']);
            expect(argumentBuilder.arguments).to.deep.equal(['--baz', 'quux']);
        });

        it('using an multi value array correctly concatenates values', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushFlaggedArgs('--baz', ['qux', 'quux', 'corge']);
            expect(argumentBuilder.arguments).to.deep.equal(['--baz', 'qux', '--baz', 'quux', '--baz', 'corge']);
        });

        it('using an single non array value which is falsy correctly concatenates value', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushFlaggedArgs('--baz', 0);
            expect(argumentBuilder.arguments).to.deep.equal(['--baz', 0]);
        });

        it('using an empty string no value is concatenated', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushFlaggedArgs('--baz', '');
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });
    });

    describe('pushEqualArgs function', () => {
        it('using undefined results in the original array', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushEqualArgs('--baz', undefined);
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });

        it('using null results in the original array', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushEqualArgs('--baz', null);
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });

        it('using an single non array value correctly concatenates value', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushEqualArgs('--baz', 'quux');
            expect(argumentBuilder.arguments).to.deep.equal(['--baz=quux']);
        });

        it('using an array value with one item correctly concatenates value', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushEqualArgs('--baz', ['quux']);
            expect(argumentBuilder.arguments).to.deep.equal(['--baz=quux']);
        });

        it('using an multi value array correctly concatenates values', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushEqualArgs('--baz', ['qux', 'quux', 'corge']);
            expect(argumentBuilder.arguments).to.deep.equal(['--baz=qux', '--baz=quux', '--baz=corge']);
        });

        it('using an single non array value which is falsy correctly concatenates value', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushEqualArgs('--baz', 0);
            expect(argumentBuilder.arguments).to.deep.equal(['--baz=0']);
        });

        it('using an empty string no value is concatenated', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushEqualArgs('--baz', '');
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });
    });

    describe('pushBooleanArgs function', () => {
        it('undefined value results in no concatenation', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushBooleanArgs('--baz', undefined);
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });

        it('false value results in no concatenation', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushBooleanArgs('--baz', false);
            expect(argumentBuilder.arguments).to.deep.equal([]);
        });

        it('true value results in no concatenation', () => {
            const argumentBuilder = new ArgumentBuilder();

            argumentBuilder.pushBooleanArgs('--baz', true);
            expect(argumentBuilder.arguments).to.deep.equal(['--baz']);
        });
    });
});
