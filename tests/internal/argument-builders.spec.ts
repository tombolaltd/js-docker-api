import { expect } from 'chai';
import 'mocha';
import { ArgumentBuilders } from '../../src/internal/argument-builders';

describe('The ArgumentBuilders class', () => {
    describe('pushPlainArgs function', () => {
        it('using undefined results in the original array', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushPlainArgs(workingArray, undefined);
            expect(workingArray).to.deep.equal(originalArray);
        });

        it('using null results in the original array', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushPlainArgs(workingArray, null);
            expect(workingArray).to.deep.equal(originalArray);
        });

        it('passing empty array results in orginal array', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushPlainArgs(workingArray, []);
            expect(workingArray).to.deep.equal(originalArray);
        });

        it('passing array with one element results in new array with element added', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushPlainArgs(workingArray, [23]);
            expect(workingArray).to.deep.equal(['foo', 'bar', 23]);
        });

        it('passing array with multiple elementa results in new array with elements added', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushPlainArgs(workingArray, [42, 'baz', 'quux']);
            expect(workingArray).to.deep.equal(['foo', 'bar', 42, 'baz', 'quux']);
        });

        it('uith non array values correctly concatenates value', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushPlainArgs(workingArray, '--maymay');
            expect(workingArray).to.deep.equal(['foo', 'bar', '--maymay']);
        });
    });

    describe('pushFlaggedKeyValueArgs function', () => {
        it('using undefined results in the original array', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushFlaggedKeyValueArgs(workingArray, 'meme', undefined);
            expect(workingArray).to.deep.equal(originalArray);
        });

        it('using null results in the original array', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushFlaggedKeyValueArgs(workingArray, 'meme', null);
            expect(workingArray).to.deep.equal(originalArray);
        });

        it('using an empty array results in the original array', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushFlaggedKeyValueArgs(workingArray, 'meme', null);
            expect(workingArray).to.deep.equal(originalArray);
        });

        it('using an array with one item correctly concatenates value', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushFlaggedKeyValueArgs(workingArray, '--meme', [{NayanCat: true}]);
            expect(workingArray).to.deep.equal(['foo', 'bar', '--meme', 'NayanCat=true']);
        });

        it('using an array with multiple items correctly concatenates values', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushFlaggedKeyValueArgs(workingArray, '--meme', [{NayanCat: true}, {YoMoma: 'fat'}, {'current-year': 2018}]);
            expect(workingArray).to.deep.equal(['foo',
                'bar',
                '--meme', 'NayanCat=true',
                '--meme', 'YoMoma=fat',
                '--meme', 'current-year=2018'
            ]);
        });

        it('using an non array value with one item correctly concatenates value', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushFlaggedKeyValueArgs(workingArray, '--meme', {NayanCat: true});
            expect(workingArray).to.deep.equal(['foo', 'bar', '--meme', 'NayanCat=true']);
        });
    });

    describe('pushFlaggedArgs function', () => {
        it('using undefined results in the original array', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushFlaggedArgs(workingArray, '--baz', undefined);
            expect(workingArray).to.deep.equal(originalArray);
        });

        it('using null results in the original array', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushFlaggedArgs(workingArray, '--baz', null);
            expect(workingArray).to.deep.equal(originalArray);
        });

        it('using an single non array value correctly concatenates value', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushFlaggedArgs(workingArray, '--baz', 'quux');
            expect(workingArray).to.deep.equal(['foo', 'bar', '--baz', 'quux']);
        });

        it('using an array value with one item correctly concatenates value', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushFlaggedArgs(workingArray, '--baz', ['quux']);
            expect(workingArray).to.deep.equal(['foo', 'bar', '--baz', 'quux']);
        });

        it('using an multi value array correctly concatenates values', () => {
            const originalArray = ['foo', 'bar'];
            const workingArray = originalArray.slice(0);
            ArgumentBuilders.pushFlaggedArgs(workingArray, '--baz', ['qux', 'quux', 'corge']);
            expect(workingArray).to.deep.equal(['foo', 'bar', '--baz', 'qux', '--baz', 'quux', '--baz', 'corge']);
        });
    });
});
