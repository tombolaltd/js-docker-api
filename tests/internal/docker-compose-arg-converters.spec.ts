import { expect } from 'chai';
import 'mocha';
import { DockerComposeArgConverters} from '../../src/internal/docker-compose-arg-converters';

describe('The docker-compose-arg-converters class', () => {
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
            const result: any[] = DockerComposeArgConverters.command({command: 'foo', commandArgs: ['arg1', 'arg2']});
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
            const result: any[] = DockerComposeArgConverters.command({dockerArgs: 'qux'});
            expect(result).to.deep.equal(['qux']);
        });

        it('Passing dockerArgs array populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.command({dockerArgs: ['qux', 'quux']});
            expect(result).to.deep.equal(['qux', 'quux']);
        });

        it('Passing all options value populates correctly - in the expected order', ()  => {
            const result: any[] = DockerComposeArgConverters.command({
                command: 'run',
                commandArgs: ['foo', 'bar'],
                composeFilepath: ['docker-compose1.yaml', 'docker-compose2.yaml'],
                dockerArgs: ['--verbose', '-log-level', 'DEBUG']
            });
            expect(result).to.deep.equal([
                '--file', 'docker-compose1.yaml',
                '--file', 'docker-compose2.yaml',
                '--verbose', '-log-level', 'DEBUG',
                'run', 'foo', 'bar'
            ]);
        });
    });

    describe('The build function', () => {
        it('Passing no parameter object results in an empty list', ()  => {
           const result: any[] = DockerComposeArgConverters.build();
           expect(result).to.deep.equal([]);
        });

        it('Passing empty parameter object results in an empty list', ()  => {
            const result: any[] = DockerComposeArgConverters.build({});
            expect(result).to.deep.equal([]);
        });

        it('Passing options value populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.build({ buildOptions: 'qux'});
            expect(result).to.deep.equal(['qux']);
        });

        it('Passing options array populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.build({ buildOptions: ['qux', 'quux']});
            expect(result).to.deep.equal(['qux', 'quux']);
        });

        it('Passing single build args value populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.build({buildArguments: { key1: 'value1'}});
            expect(result).to.deep.equal(['--build-arg', 'key1=value1']);
        });

        it('Passing build args array value populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.build({buildArguments: [{ key1: 'value1'}, { key2: 'value2'}]});
            expect(result).to.deep.equal(['--build-arg', 'key1=value1', '--build-arg', 'key2=value2']);
        });

        it('Passing service value populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.build({ services: ['qux']});
            expect(result).to.deep.equal(['qux']);
        });

        it('Passing service array populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.build({ services: ['qux', 'quux']});
            expect(result).to.deep.equal(['qux', 'quux']);
        });

        it('Passing all options value populates correctly - in the expected order', ()  => {
            const result: any[] = DockerComposeArgConverters.build({
                buildArguments: [{ key1: 'value1'}, { key2: 'value2'}],
                buildOptions: ['opts1', 'opts2'],
                services: ['qux', 'quux']
            });
            expect(result).to.deep.equal([
                'opts1', 'opts2',
                '--build-arg', 'key1=value1', '--build-arg', 'key2=value2',
                'qux', 'quux'
            ]);
        });
    });

    describe('The down function', () => {
        it('Passing no parameter object results in an empty list', ()  => {
           const result: any[] = DockerComposeArgConverters.down();
           expect(result).to.deep.equal([]);
        });

        it('Passing empty parameter object results in an empty list', ()  => {
            const result: any[] = DockerComposeArgConverters.down({});
            expect(result).to.deep.equal([]);
        });

        it('Passing options value populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.down({ downOptions: 'qux'});
            expect(result).to.deep.equal(['qux']);
        });

        it('Passing options array populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.down({ downOptions: ['qux', 'quux']});
            expect(result).to.deep.equal(['qux', 'quux']);
        });
    });

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
            const result: any[] = DockerComposeArgConverters.exec({ execOptions: 'qux'});
            expect(result).to.deep.equal(['qux']);
        });

        it('Passing options array populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.exec({ execOptions: ['qux', 'quux']});
            expect(result).to.deep.equal(['qux', 'quux']);
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
                execOptions: ['opt1', 'opt2'],
                environmentVariables: [{ key1: 'value1'}, { key2: 'value2'}],
                service: 'myService',
                command: 'myCommand',
                commandArguments: ['arg1', 'arg2']
            });
            expect(result).to.deep.equal([
                'opt1', 'opt2',
                '--env', 'key1=value1', '--env', 'key2=value2',
                'myService',
                'myCommand', 'arg1', 'arg2'
            ]);
        });
    });

    describe('The up function', () => {
        it('Passing no parameter object results in an empty list', ()  => {
           const result: any[] = DockerComposeArgConverters.up();
           expect(result).to.deep.equal([]);
        });

        it('Passing empty parameter object results in an empty list', ()  => {
            const result: any[] = DockerComposeArgConverters.up({});
            expect(result).to.deep.equal([]);
        });

        it('Passing options value populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.up({ upOptions: 'qux'});
            expect(result).to.deep.equal(['qux']);
        });

        it('Passing options array populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.up({ upOptions: ['qux', 'quux']});
            expect(result).to.deep.equal(['qux', 'quux']);
        });

        it('Passing single scale variable value populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.up({scale: { key1: 1}});
            expect(result).to.deep.equal(['--scale', 'key1=1']);
        });

        it('Passing build scale variable array value populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.up({scale: [{ key1: 1}, { key2: 2}]});
            expect(result).to.deep.equal(['--scale', 'key1=1', '--scale', 'key2=2']);
        });

        it('Passing service value populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.up({ services: 'qux'});
            expect(result).to.deep.equal(['qux']);
        });

        it('Passing service array populates correctly', ()  => {
            const result: any[] = DockerComposeArgConverters.up({ services: ['qux', 'quux']});
            expect(result).to.deep.equal(['qux', 'quux']);
        });

        it('Passing all options value populates correctly - in the expected order', ()  => {
            const result: any[] = DockerComposeArgConverters.up({
                upOptions: ['opt1', 'opt2'],
                scale: [{ key1: 1}, { key2: 2}],
                services: ['myService1', 'myService2']
            });
            expect(result).to.deep.equal([
                'opt1', 'opt2',
                '--scale', 'key1=1', '--scale', 'key2=2',
                'myService1', 'myService2'
            ]);
        });
    });
});
