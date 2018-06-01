import { runOptionsConverter } from '@docker-compose-command-converters/run-options-converter';
import { expect } from 'chai';
import 'mocha';

describe('The runptionsConverter function', () => {
    it('Passing options value populates correctly', ()  => {
        const result: any[] = runOptionsConverter({
            detach: true,
            useAliases: false
        });
        expect(result).to.deep.equal(['--detach']);
    });

    it('Passing disablePsuedoTty as true populates correctly', ()  => {
        const result: any[] = runOptionsConverter({ disablePsuedoTty: true});
        expect(result).to.deep.equal(['-T']);
    });

    it('Passing user as true populates correctly', ()  => {
        const result: any[] = runOptionsConverter({ user: 'fred'});
        expect(result).to.deep.equal(['--user=fred']);
    });

    it('Passing workdir as true populates correctly', ()  => {
        const result: any[] = runOptionsConverter({ workdir: '/src'});
        expect(result).to.deep.equal(['--workdir=/src']);
    });

    it('Passing volumes arg populates correctly', ()  => {
        const result: any[] = runOptionsConverter({ volumes: '[]'});
        expect(result).to.deep.equal([ '--volume=[]']);
    });

    it('Passing volumes array populates correctly', ()  => {
        const result: any[] = runOptionsConverter({ volumes: ['qux', 'quux']});
        expect(result).to.deep.equal(['--volume=qux', '--volume=quux']);
    });

    it('Passing ports arg populates correctly', ()  => {
        const result: any[] = runOptionsConverter({ ports: '[]'});
        expect(result).to.deep.equal([ '--publish=[]']);
    });

    it('Passing ports array populates correctly', ()  => {
        const result: any[] = runOptionsConverter({ ports: ['qux', 'quux']});
        expect(result).to.deep.equal(['--publish=qux', '--publish=quux']);
    });

    it('Passing single environment variable value populates correctly', ()  => {
        const result: any[] = runOptionsConverter({environmentVariables: { key1: 'value1'}});
        expect(result).to.deep.equal(['-e', 'key1=value1']);
    });

    it('Passing build environment variable array value populates correctly', ()  => {
        const result: any[] = runOptionsConverter({environmentVariables: [{ key1: 'value1'}, { key2: 'value2'}]});
        expect(result).to.deep.equal(['-e', 'key1=value1', '-e', 'key2=value2']);
    });

    it('Passing single environment variable value populates correctly', ()  => {
        const result: any[] = runOptionsConverter({labels: { key1: 'value1'}});
        expect(result).to.deep.equal(['--label', 'key1=value1']);
    });

    it('Passing build environment variable array value populates correctly', ()  => {
        const result: any[] = runOptionsConverter({labels: [{ key1: 'value1'}, { key2: 'value2'}]});
        expect(result).to.deep.equal(['--label', 'key1=value1', '--label', 'key2=value2']);
    });

    it('Passing service value populates correctly', ()  => {
        const result: any[] = runOptionsConverter({ service: 'qux'});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing command value populates correctly', ()  => {
        const result: any[] = runOptionsConverter({ command: 'qux'});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing command arg populates correctly', ()  => {
        const result: any[] = runOptionsConverter({ commandArguments: 'qux'});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing command args array populates correctly', ()  => {
        const result: any[] = runOptionsConverter({ commandArguments: ['qux', 'quux']});
        expect(result).to.deep.equal(['qux', 'quux']);
    });

    it('The DockerCompose value is not converted by this function', ()  => {
       const result: any[] = runOptionsConverter({
           dockerComposeOptions: {
               verbose: true,
           }
       });
       expect(result).to.deep.equal([]);
    });

    it('Passing all options value populates correctly - in the expected order', ()  => {
        const result: any[] = runOptionsConverter({
            disablePsuedoTty: true,
            detach: true,
            name: 'MyRun',
            entrypoint: '/src/start.sh',
            noDeps: true,
            rm: true,
            servicePorts: true,
            useAliases: true,
            user: '"Norville Rogers"',
            workdir: '"/users/norville rogers/documents"',
            volumes: '[]',
            ports: ['porta', 'portb'],
            environmentVariables: [{ key1: 'value1'}, { key2: 'value2'}],
            labels: [{ key1: 'label1'}, { key2: 'label2'}],
            service: 'myService',
            command: 'myCommand',
            commandArguments: ['arg1', 'arg2']
        });
        expect(result).to.deep.equal([
            '-T',
            '--user="Norville Rogers"',
            '--detach',
            '--name', 'MyRun',
            '--entrypoint', '/src/start.sh',
            '--no-deps',
            '--rm',
            '--service-ports',
            '--use-aliases',
            '--volume=[]',
            '--publish=porta',
            '--publish=portb',
            '--workdir="/users/norville rogers/documents"',
            '-e', 'key1=value1', '-e', 'key2=value2',
            '--label', 'key1=label1', '--label', 'key2=label2',
            'myService',
            'myCommand', 'arg1', 'arg2'
        ]);
    });
});
