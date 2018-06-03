import { expect } from 'chai';
import 'mocha';
import { DockerCompose } from '../';

const composeFilepath: string = './src/integration-tests/assets/docker-compose.yml';

describe('Integration test - up a service, exec, then down it', () => {
    it('Up the serivce, ls, then down itr', (done) => {
        DockerCompose.up({
            composeFilepath,
            detach: true
        })
        .then((resultUp: any) => {
             return DockerCompose.run({composeFilepath,
                service: 'foo',
                command: 'ls',
                commandArguments: '-la',
            });
        }).then((resultRun: any) => {
            return DockerCompose.down({
                composeFilepath,
                rmi: 'all'});
        }).then((resultDown: any) => {
            done();
        })
        .catch(done);
    }).timeout(10000);
});
