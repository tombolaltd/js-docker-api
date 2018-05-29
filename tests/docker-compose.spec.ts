import { expect } from 'chai';
import 'mocha';
import { DockerCompose, IDockerComposeOptions } from '../';
import { StdValidator } from './common/std-validator';

describe ('DockerCompose', () => {
    describe('The command function', () => {
        it('Run as ps command without filepath - get error', (done) => {
            const stdValidator: StdValidator = new StdValidator();

            DockerCompose.command({
                command: 'ps'
            })
            .on('stdout', stdValidator.onStdOut)
            .on('stderr', stdValidator.onStdErr)
            .then((result: any) => {
                expect.fail('Expected error - none was returned');
            }).catch((err: Error) => {
                expect(err.message).to.equal('The command "docker-compose ps" returned an exit status of 1');
                done();
            });
        });

        it('Run as ps command with filepath - get result', (done) => {
            const stdValidator: StdValidator = new StdValidator();

            DockerCompose.command({
                composeFilepath: './tests/assets/docker-compose.yml',
                command: 'ps'
            })
            .on('stdout', stdValidator.onStdOut)
            .on('stderr', stdValidator.onStdErr)
            .then((result: any) => {
                expect(result).is.a('array');
                stdValidator.validate(result);
                done();
            }).catch(done);
        });

        it('Run as ps --service command with filepath - get result', (done) => {
            const stdValidator: StdValidator = new StdValidator();

            DockerCompose.command({
                composeFilepath: './tests/assets/docker-compose.yml',
                command: 'ps',
                dockerArgs: ['--services']
            })
            .on('stdout', stdValidator.onStdOut)
            .on('stderr', stdValidator.onStdErr)
            .then((result: any) => {
                stdValidator.validate(result);
                expect(result).to.deep.equal(['foo']); // The names of the services in the YAML
                done();
            }).catch(done);
        });
    });
});
