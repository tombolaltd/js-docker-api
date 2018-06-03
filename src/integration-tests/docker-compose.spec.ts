import { expect } from 'chai';
import 'mocha';
import { DockerCompose } from '../';
const composeFilepath: string = './src/integration-tests/assets/docker-compose.yml';

describe('DockerCompose', () => {
    describe('The command function', () => {
        it('Run as ps command without filepath - get error', (done) => {
            DockerCompose.command({
                command: 'ps'
            })
            .then((result: any) => {
                expect.fail('Expected error - none was returned');
            }).catch((err: number) => {
                expect(err).to.equal(1);
                done();
            });
        });

        it('when passed an unrecognised command fails reporting output', (done) => {
            DockerCompose.command({
                command: 'foo'
            })
            .then((result: any) => {
                done(new Error('Expected test to fail, did not'));
            }).catch(((error: number) => {
                expect(error).to.equal(1);
                done();
            }));
        });

        it('Run as ps command with filepath - get result', (done) => {
            DockerCompose.command({
                composeFilepath,
                command: 'ps'
            })
            .then((result: string) => {
                expect(result).to.equal('done');
                done();
            }).catch(done);
        });

        it('Run as ps --service command with filepath - get result', (done) => {
            DockerCompose.command({
                composeFilepath,
                command: 'ps',
                commandArguments: '--services',
            })
            .then((result: string) => {
                expect(result).to.equal('done');
                done();
            }).catch(done);
        });
    });

    it('The version function', (done) => {
        DockerCompose.version()
        .then((result: any) => {
            expect(result).to.equal('done');
            done();
        }).catch(done);
    });
});
