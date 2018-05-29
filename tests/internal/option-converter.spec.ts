import { expect } from 'chai';
import 'mocha';
import { optionConverter } from '../../src/internal/option-converter';

describe ('optionConverter function', () => {
    it('with no args should return empty array', () => {
        const result = optionConverter() ;
        expect(result).to.eql([]);
    });

    it('with null arg should return empty array', () => {
        const result = optionConverter(null) ;
        expect(result).to.eql([]);
    });

    it('with empty object arg should return empty array', () => {
        const result = optionConverter({}) ;
        expect(result).to.eql([]);
    });

    it('with object having boolean true arg should add it as a flag', () => {
        const result = optionConverter({
            foo: true
        }) ;

        expect(result).to.eql(['--foo']);
    });

    it('with object having boolean false arg should not add it as a flag', () => {
        const result = optionConverter({
            foo: false
        }) ;

        expect(result).to.eql([]);
    });

    it('with object having string "true" arg should add it as a flag', () => {
        const result = optionConverter({
            foo: 'true'
        }) ;

        expect(result).to.eql(['--foo', 'true']);
    });

    it('with object having string "false" arg should not add it as a flag', () => {
        const result = optionConverter({
            foo: 'false'
        }) ;

        expect(result).to.eql(['--foo', 'false']);
    });

    it('with object having number arg should add it as a flag', () => {
        const result = optionConverter({
            foo: 2
        }) ;

        expect(result).to.eql(['--foo', 2]);
    });

    it('with object having number arg should add it as a flag', () => {
        const result = optionConverter({
            'true-bool': true,
            'false-bool': false,
            'true-string': 'true',
            'false-string': 'false',
            'string': 'Ford Prefect',
            'number': 42
        }) ;

        expect(result).to.eql([ '--true-bool',
            '--true-string',
            'true',
            '--false-string',
            'false',
            '--string',
            'Ford Prefect',
            '--number',
            42
        ]);
    });
});
