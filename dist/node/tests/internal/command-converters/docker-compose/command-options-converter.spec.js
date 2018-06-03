"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _docker_compose_command_converters_1 = require("@docker-compose-command-converters");
const chai_1 = require("chai");
require("mocha");
describe('The command function', () => {
    it('Passing empty parameter object results in an empty list', () => {
        const result = _docker_compose_command_converters_1.commandOptionsConverter({});
        chai_1.expect(result).to.deep.equal([]);
    });
    it('Passing command value populates correctly', () => {
        const result = _docker_compose_command_converters_1.commandOptionsConverter({ command: 'foo' });
        chai_1.expect(result).to.deep.equal(['foo']);
    });
    it('Passing command value with args populates correctly', () => {
        const result = _docker_compose_command_converters_1.commandOptionsConverter({ command: 'foo', commandArguments: ['arg1', 'arg2'] });
        chai_1.expect(result).to.deep.equal(['foo', 'arg1', 'arg2']);
    });
    it('Passing file value populates correctly', () => {
        const result = _docker_compose_command_converters_1.commandOptionsConverter({ composeFilepath: 'bar' });
        chai_1.expect(result).to.deep.equal(['--file', 'bar']);
    });
    it('Passing multiple file value populates correctly', () => {
        const result = _docker_compose_command_converters_1.commandOptionsConverter({ composeFilepath: ['bar', 'baz'] });
        chai_1.expect(result).to.deep.equal(['--file', 'bar', '--file', 'baz']);
    });
    it('Passing dockerArgs value populates correctly', () => {
        const result = _docker_compose_command_converters_1.commandOptionsConverter({ commandArguments: 'qux' });
        chai_1.expect(result).to.deep.equal(['qux']);
    });
    it('Passing dockerArgs array populates correctly', () => {
        const result = _docker_compose_command_converters_1.commandOptionsConverter({ commandArguments: ['qux', 'quux'] });
        chai_1.expect(result).to.deep.equal(['qux', 'quux']);
    });
    it('Passing all options value populates correctly - in the expected order', () => {
        const result = _docker_compose_command_converters_1.commandOptionsConverter({
            command: 'run',
            commandArguments: ['foo', 'bar'],
            composeFilepath: ['docker-compose1.yaml', 'docker-compose2.yaml'],
            dockerComposeOptions: {
                verbose: true,
                logLevel: 'DEBUG',
                projectName: 'project',
                noAnsi: true,
                version: true,
                host: 'host',
                tls: true,
                tlsCACert: 'tlsCACert',
                tlsCert: 'tlsCert',
                tlsKey: 'tlsKey',
                tlsVerify: true,
                skipHostnameCheck: true,
                projectDirectory: 'projectDirectory',
                compatibility: true
            }
        });
        chai_1.expect(result).to.deep.equal([
            '--file', 'docker-compose1.yaml',
            '--file', 'docker-compose2.yaml',
            '--project-name', 'project',
            '--verbose', '--log-level', 'DEBUG',
            '--no-ansi',
            '--version',
            '--host', 'host',
            '--tls',
            '--tlscacert', 'tlsCACert',
            '--tlscert', 'tlsCert',
            '--tlskey', 'tlsKey',
            '--tlsverify',
            '--skip-hostname-check',
            '--project-directory', 'projectDirectory',
            '--compatibility',
            'run', 'foo', 'bar'
        ]);
    });
});
//# sourceMappingURL=command-options-converter.spec.js.map