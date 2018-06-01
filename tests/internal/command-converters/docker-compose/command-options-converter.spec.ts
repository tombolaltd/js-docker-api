import { expect } from 'chai';
import 'mocha';
import * as converters from '../../../../src/internal/command-converters/docker-compose';

describe('The command function', () => {
    it('Passing no parameter object results in an empty list', ()  => {
       const result: any[] = DockerComposeArgConverters.command();
       expect(result).to.deep.equal([]);
    });

    it('Passing empty parameter object results in an empty list', ()  => {
        const result: any[] = DockerComposeArgConverters.command({});
        expect(result).to.deep.equal([]);
    });

    it('Passing command value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.command({command: 'foo'});
        expect(result).to.deep.equal(['foo']);
    });

    it('Passing command value with args populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.command({command: 'foo', commandArguments: ['arg1', 'arg2']});
        expect(result).to.deep.equal(['foo', 'arg1', 'arg2']);
    });

    it('Passing file value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.command({composeFilepath: 'bar'});
        expect(result).to.deep.equal(['--file', 'bar']);
    });

    it('Passing multiple file value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.command({composeFilepath: ['bar', 'baz']});
        expect(result).to.deep.equal(['--file', 'bar', '--file', 'baz']);

    });

    it('Passing dockerArgs value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.command({commandArguments: 'qux'});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing dockerArgs array populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.command({commandArguments: ['qux', 'quux']});
        expect(result).to.deep.equal(['qux', 'quux']);
    });

    it('Passing all options value populates correctly - in the expected order', ()  => {
        const result: any[] = DockerComposeArgConverters.command({
            command: 'run',
            commandArguments: ['foo', 'bar'],
            composeFilepath: ['docker-compose1.yaml', 'docker-compose2.yaml'],
            dockerComposeOptions: {
                'verbose': true,
                'log-level': 'DEBUG'
            }
        });
        expect(result).to.deep.equal([
            '--file', 'docker-compose1.yaml',
            '--file', 'docker-compose2.yaml',
            '--verbose', '--log-level', 'DEBUG',
            'run', 'foo', 'bar'
        ]);
    });
});
