import { expect } from 'chai';
import 'mocha';
import * as converters from '../../../../src/internal/command-converters/docker-compose';

describe('The exec function', () => {
    it('Passing no parameter object results in an empty list', ()  => {
       const result: any[] = DockerComposeArgConverters.exec();
       expect(result).to.deep.equal([]);
    });

    it('Passing empty parameter object results in an empty list', ()  => {
        const result: any[] = DockerComposeArgConverters.exec({});
        expect(result).to.deep.equal([]);
    });

    it('Passing options value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.exec({
            execOptions: {
                detach: false,
                privileged: true,
                env: [{key1: 'val1'}, {key2: 2}],
                workdir: '/src'
            }
        });
        expect(result).to.deep.equal([
            '--privileged',
            '--env', 'key1=val1',
            '--env', 'key2=2',
            '--workdir', '/src'
        ]);
    });

    it('Passing disablePsuedoTty as true populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.exec({ disablePsuedoTty: true});
        expect(result).to.deep.equal(['-T']);
    });

    it('Passing index as value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.exec({ index: 42 });
        expect(result).to.deep.equal(['--index=42']);
    });

    it('Passing disablePsuedoTty as false does not adds flag', ()  => {
        const result: any[] = DockerComposeArgConverters.exec({ disablePsuedoTty: false});
        expect(result).to.deep.equal([]);
    });

    it('Passing single environment variable value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.exec({environmentVariables: { key1: 'value1'}});
        expect(result).to.deep.equal(['--env', 'key1=value1']);
    });

    it('Passing build environment variable array value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.exec({environmentVariables: [{ key1: 'value1'}, { key2: 'value2'}]});
        expect(result).to.deep.equal(['--env', 'key1=value1', '--env', 'key2=value2']);
    });

    it('Passing service value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.exec({ service: 'qux'});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing command value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.exec({ command: 'qux'});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing command arg populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.exec({ commandArguments: 'qux'});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing command args array populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.exec({ commandArguments: ['qux', 'quux']});
        expect(result).to.deep.equal(['qux', 'quux']);
    });

    it('Passing all options value populates correctly - in the expected order', ()  => {
        const result: any[] = DockerComposeArgConverters.exec({
            disablePsuedoTty: true,
            index: 0,
            execOptions: {
                detach: false,
                privileged: true,
                env: [{key1: 'val1'}, {key2: 2}],
                workdir: '/src'
            },
            environmentVariables: [{ key1: 'value1'}, { key2: 'value2'}],
            service: 'myService',
            command: 'myCommand',
            commandArguments: ['arg1', 'arg2']
        });
        expect(result).to.deep.equal([
            '-T',
            '--index=0',
            '--privileged',
            '--env', 'key1=val1',
            '--env', 'key2=2',
            '--workdir', '/src',
            '--env', 'key1=value1', '--env', 'key2=value2',
            'myService',
            'myCommand', 'arg1', 'arg2'
        ]);
    });
});
