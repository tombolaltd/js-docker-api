import { execOptionsConverter } from '@docker-compose-command-converters/exec-options-converter';
import { expect } from 'chai';
import 'mocha';

describe('The execOptionsConverter function', () => {
    it('Passing empty parameter object results in an empty list', ()  => {
        const result: any[] = execOptionsConverter({});
        expect(result).to.deep.equal([]);
    });

    it('Passing options value populates correctly', ()  => {
        const result: any[] = execOptionsConverter({
            detach: false,
            privileged: true,
            environmentVariables: [{key1: 'val1'}, {key2: 2}],
            workdir: '/src'
        });
        expect(result).to.deep.equal([
            '--privileged',
            '--workdir', '/src',
            '--env', 'key1=val1',
            '--env', 'key2=2'
        ]);
    });

    it('Passing disablePsuedoTty as true populates correctly', ()  => {
        const result: any[] = execOptionsConverter({ disablePsuedoTty: true});
        expect(result).to.deep.equal(['-T']);
    });

    it('Passing index as value populates correctly', ()  => {
        const result: any[] = execOptionsConverter({ index: 42 });
        expect(result).to.deep.equal(['--index=42']);
    });

    it('Passing disablePsuedoTty as false does not adds flag', ()  => {
        const result: any[] = execOptionsConverter({ disablePsuedoTty: false});
        expect(result).to.deep.equal([]);
    });

    it('Passing single environment variable value populates correctly', ()  => {
        const result: any[] = execOptionsConverter({environmentVariables: { key1: 'value1'}});
        expect(result).to.deep.equal(['--env', 'key1=value1']);
    });

    it('Passing build environment variable array value populates correctly', ()  => {
        const result: any[] = execOptionsConverter({environmentVariables: [{ key1: 'value1'}, { key2: 'value2'}]});
        expect(result).to.deep.equal(['--env', 'key1=value1', '--env', 'key2=value2']);
    });

    it('Passing service value populates correctly', ()  => {
        const result: any[] = execOptionsConverter({ service: 'qux'});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing command value populates correctly', ()  => {
        const result: any[] = execOptionsConverter({ command: 'qux'});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing command arg populates correctly', ()  => {
        const result: any[] = execOptionsConverter({ commandArguments: 'qux'});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing command args array populates correctly', ()  => {
        const result: any[] = execOptionsConverter({ commandArguments: ['qux', 'quux']});
        expect(result).to.deep.equal(['qux', 'quux']);
    });

    it('The DockerCompose value is not converted by this function', ()  => {
       const result: any[] = execOptionsConverter({
           dockerComposeOptions: {
               verbose: true,
           }
       });
       expect(result).to.deep.equal([]);
    });

    it('Passing all options value populates correctly - in the expected order', ()  => {
        const result: any[] = execOptionsConverter({
            disablePsuedoTty: true,
            index: 0,
            detach: true,
            privileged: true,
            environmentVariables: [{key1: 'val1'}, {key2: 2}],
            user: 'mr-ed',
            workdir: '/src',
            service: 'myService',
            command: 'myCommand',
            commandArguments: ['arg1', 'arg2']
        });

        expect(result).to.deep.equal([
            '-T',
            '--index=0',
            '--detach',
            '--privileged',
            '--user', 'mr-ed',
            '--workdir', '/src',
            '--env', 'key1=val1',
            '--env', 'key2=2',
            'myService',
            'myCommand', 'arg1', 'arg2'
        ]);
    });
});
