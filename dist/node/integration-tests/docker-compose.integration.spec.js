"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const _1 = require("../");
describe('Integration test - up a service, exec, then down it', () => {
    it('Up the serivce, ls, then down itr', (done) => {
        _1.DockerCompose.up({
            composeFilepath: './tests/assets/integration/docker-compose.yml',
            detach: true
        })
            .then((resultUp) => {
            return _1.DockerCompose.run({ composeFilepath: './tests/assets/integration/docker-compose.yml',
                service: 'foo',
                command: 'ls',
                commandArguments: '-la',
            });
        }).then((resultRun) => {
            return _1.DockerCompose.down({
                composeFilepath: './tests/assets/integration/docker-compose.yml',
                rmi: 'all'
            });
        }).then((resultDown) => {
            done();
        })
            .catch(done);
    }).timeout(10000);
});
//# sourceMappingURL=docker-compose.integration.spec.js.map