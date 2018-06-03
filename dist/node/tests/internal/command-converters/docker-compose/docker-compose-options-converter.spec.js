"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _docker_compose_command_converters_1 = require("@docker-compose-command-converters");
const chai_1 = require("chai");
require("mocha");
describe('The dockerComposeOptionsConverter function', () => {
    it('Passing empty parameter object results in an empty list', () => {
        const result = _docker_compose_command_converters_1.dockerComposeOptionsConverter({});
        chai_1.expect(result).to.deep.equal([]);
    });
    it('Passing options value populates correctly', () => {
        const result = _docker_compose_command_converters_1.dockerComposeOptionsConverter({
            projectName: 'project-name',
            verbose: true,
            logLevel: 'INFO',
            noAnsi: true,
            version: true,
            host: 'host',
            tls: true,
            tlsCACert: 'tlscacert',
            tlsCert: 'tlscert',
            tlsKey: 'tlskey',
            tlsVerify: true,
            skipHostnameCheck: true,
            projectDirectory: 'project-directory',
            compatibility: true,
        });
        chai_1.expect(result).to.deep.equal([
            '--project-name', 'project-name',
            '--verbose',
            '--log-level', 'INFO',
            '--no-ansi',
            '--version',
            '--host', 'host',
            '--tls',
            '--tlscacert', 'tlscacert',
            '--tlscert', 'tlscert',
            '--tlskey', 'tlskey',
            '--tlsverify',
            '--skip-hostname-check',
            '--project-directory', 'project-directory',
            '--compatibility'
        ]);
    });
});
//# sourceMappingURL=docker-compose-options-converter.spec.js.map