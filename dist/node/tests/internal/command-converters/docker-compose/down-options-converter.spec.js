"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _docker_compose_command_converters_1 = require("@docker-compose-command-converters");
const chai_1 = require("chai");
require("mocha");
describe('The downOptionsConverter function', () => {
    it('Passing empty parameter object results in an empty list', () => {
        const result = _docker_compose_command_converters_1.downOptionsConverter({});
        chai_1.expect(result).to.deep.equal([]);
    });
    it('The DockerCompose value is not converted by this function', () => {
        const result = _docker_compose_command_converters_1.downOptionsConverter({
            dockerComposeOptions: {
                verbose: true,
            }
        });
        chai_1.expect(result).to.deep.equal([]);
    });
    it('Passing options value populates correctly', () => {
        const result = _docker_compose_command_converters_1.downOptionsConverter({
            rmi: 'all',
            removeOrphans: true,
            volumes: true,
            timeout: 100
        });
        chai_1.expect(result).to.deep.equal([
            '--rmi', 'all',
            '--volumes',
            '--remove-orphans',
            '--timeout', 100
        ]);
    });
});
//# sourceMappingURL=down-options-converter.spec.js.map