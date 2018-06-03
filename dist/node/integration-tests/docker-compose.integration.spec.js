"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const _1 = require("../");
const composeFilepath = './src/integration-tests/assets/docker-compose.yml';
describe('Integration test - up a service, exec, then down it', () => {
    it('Up the serivce, ls, then down itr', (done) => {
        _1.DockerCompose.up({
            composeFilepath,
            detach: true
        })
            .then((resultUp) => {
            return _1.DockerCompose.run({ composeFilepath,
                service: 'foo',
                command: 'ls',
                commandArguments: '-la',
            });
        }).then((resultRun) => {
            return _1.DockerCompose.down({
                composeFilepath,
                rmi: 'all'
            });
        }).then((resultDown) => {
            done();
        })
            .catch(done);
    }).timeout(10000);
});
//# sourceMappingURL=docker-compose.integration.spec.js.map