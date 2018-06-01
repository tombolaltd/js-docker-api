import { expect } from 'chai';
import 'mocha';
import { DockerCompose } from '../../src';

describe.only('Integration test - up a service, exec, then down it', () => {
    it('Up the serivce, ls, then down itr', (done) => {
        DockerCompose.up({
            composeFilepath: './tests/assets/integration/docker-compose.yml',
            detach: true
        })
        .then((resultUp: any) => {
             return DockerCompose.run({composeFilepath: './tests/assets/integration/docker-compose.yml',
                service: 'foo',
                command: 'ls',
                commandArguments: '-la',
            });
        }).then((resultRun: any) => {
            return DockerCompose.down({
                composeFilepath: './tests/assets/integration/docker-compose.yml',
                rmi: 'all'});
        }).then((resultDown: any) => {
            done();
        })
        .catch(done);
    }).timeout(10000);
});
