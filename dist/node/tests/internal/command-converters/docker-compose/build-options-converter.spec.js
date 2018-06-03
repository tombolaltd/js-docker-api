"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _docker_compose_command_converters_1 = require("@docker-compose-command-converters");
const chai_1 = require("chai");
require("mocha");
describe('The buildOptionsConverter function', () => {
    it('Passing empty parameter object results in an empty list', () => {
        const result = _docker_compose_command_converters_1.buildOptionsConverter({});
        chai_1.expect(result).to.deep.equal([]);
    });
    it('Passing options value populates correctly', () => {
        const result = _docker_compose_command_converters_1.buildOptionsConverter({
            compress: true,
            pull: false,
            buildArguments: [{ key1: 'val1' }, { key2: 2 }]
        });
        chai_1.expect(result).to.deep.equal(['--compress', '--build-arg', 'key1=val1', '--build-arg', 'key2=2']);
    });
    it('Passing single build args value populates correctly', () => {
        const result = _docker_compose_command_converters_1.buildOptionsConverter({ buildArguments: { key1: 'value1' } });
        chai_1.expect(result).to.deep.equal(['--build-arg', 'key1=value1']);
    });
    it('Passing build args array value populates correctly', () => {
        const result = _docker_compose_command_converters_1.buildOptionsConverter({ buildArguments: [{ key1: 'value1' }, { key2: 'value2' }] });
        chai_1.expect(result).to.deep.equal(['--build-arg', 'key1=value1', '--build-arg', 'key2=value2']);
    });
    it('Passing service value populates correctly', () => {
        const result = _docker_compose_command_converters_1.buildOptionsConverter({ services: ['qux'] });
        chai_1.expect(result).to.deep.equal(['qux']);
    });
    it('Passing service array populates correctly', () => {
        const result = _docker_compose_command_converters_1.buildOptionsConverter({ services: ['qux', 'quux'] });
        chai_1.expect(result).to.deep.equal(['qux', 'quux']);
    });
    it('The DockerCompose value is not converted by this function', () => {
        const result = _docker_compose_command_converters_1.buildOptionsConverter({
            dockerComposeOptions: {
                verbose: true,
            }
        });
        chai_1.expect(result).to.deep.equal([]);
    });
    it('Passing all options value populates correctly - in the expected order', () => {
        const result = _docker_compose_command_converters_1.buildOptionsConverter({
            buildArguments: [{ key1: 'value1' }, { key2: 2 }],
            compress: true,
            pull: true,
            forceRm: true,
            noCache: true,
            memory: '2GB',
            services: ['qux', 'quux'],
            dockerComposeOptions: {
                verbose: true,
            }
        });
        chai_1.expect(result).to.deep.equal([
            '--compress',
            '--force-rm',
            '--no-cache',
            '--pull',
            '--memory', '2GB',
            '--build-arg', 'key1=value1', '--build-arg', 'key2=2',
            'qux', 'quux'
        ]);
    });
});
//# sourceMappingURL=build-options-converter.spec.js.map