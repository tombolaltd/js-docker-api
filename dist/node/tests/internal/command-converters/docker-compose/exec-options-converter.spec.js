"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _docker_compose_command_converters_1 = require("@docker-compose-command-converters");
const chai_1 = require("chai");
require("mocha");
describe('The execOptionsConverter function', () => {
    it('Passing empty parameter object results in an empty list', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({});
        chai_1.expect(result).to.deep.equal([]);
    });
    it('Passing options value populates correctly', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({
            detach: false,
            privileged: true,
            environmentVariables: [{ key1: 'val1' }, { key2: 2 }],
            workdir: '/src'
        });
        chai_1.expect(result).to.deep.equal([
            '--privileged',
            '--workdir', '/src',
            '--env', 'key1=val1',
            '--env', 'key2=2'
        ]);
    });
    it('Passing disablePsuedoTty as true populates correctly', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({ disablePsuedoTty: true });
        chai_1.expect(result).to.deep.equal(['-T']);
    });
    it('Passing index as value populates correctly', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({ index: 42 });
        chai_1.expect(result).to.deep.equal(['--index=42']);
    });
    it('Passing disablePsuedoTty as false does not adds flag', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({ disablePsuedoTty: false });
        chai_1.expect(result).to.deep.equal([]);
    });
    it('Passing single environment variable value populates correctly', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({ environmentVariables: { key1: 'value1' } });
        chai_1.expect(result).to.deep.equal(['--env', 'key1=value1']);
    });
    it('Passing build environment variable array value populates correctly', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({ environmentVariables: [{ key1: 'value1' }, { key2: 'value2' }] });
        chai_1.expect(result).to.deep.equal(['--env', 'key1=value1', '--env', 'key2=value2']);
    });
    it('Passing service value populates correctly', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({ service: 'qux' });
        chai_1.expect(result).to.deep.equal(['qux']);
    });
    it('Passing command value populates correctly', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({ command: 'qux' });
        chai_1.expect(result).to.deep.equal(['qux']);
    });
    it('Passing command arg populates correctly', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({ commandArguments: 'qux' });
        chai_1.expect(result).to.deep.equal(['qux']);
    });
    it('Passing command args array populates correctly', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({ commandArguments: ['qux', 'quux'] });
        chai_1.expect(result).to.deep.equal(['qux', 'quux']);
    });
    it('The DockerCompose value is not converted by this function', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({
            dockerComposeOptions: {
                verbose: true,
            }
        });
        chai_1.expect(result).to.deep.equal([]);
    });
    it('Passing all options value populates correctly - in the expected order', () => {
        const result = _docker_compose_command_converters_1.execOptionsConverter({
            disablePsuedoTty: true,
            index: 0,
            detach: true,
            privileged: true,
            environmentVariables: [{ key1: 'val1' }, { key2: 2 }],
            user: 'mr-ed',
            workdir: '/src',
            service: 'myService',
            command: 'myCommand',
            commandArguments: ['arg1', 'arg2']
        });
        chai_1.expect(result).to.deep.equal([
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
//# sourceMappingURL=exec-options-converter.spec.js.map