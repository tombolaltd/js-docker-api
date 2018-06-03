"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const _1 = require("../");
describe('DockerCompose', () => {
    describe('The command function', () => {
        it('Run as ps command without filepath - get error', (done) => {
            _1.DockerCompose.command({
                command: 'ps'
            })
                .then((result) => {
                chai_1.expect.fail('Expected error - none was returned');
            }).catch((err) => {
                chai_1.expect(err).to.equal(1);
                done();
            });
        });
        it('when passed an unrecognised command fails reporting output', (done) => {
            _1.DockerCompose.command({
                command: 'foo'
            })
                .then((result) => {
                done(new Error('Expected test to fail, did not'));
            }).catch(((error) => {
                chai_1.expect(error).to.equal(1);
                done();
            }));
        });
        it('Run as ps command with filepath - get result', (done) => {
            _1.DockerCompose.command({
                composeFilepath: './tests/assets/docker-compose.yml',
                command: 'ps'
            })
                .then((result) => {
                chai_1.expect(result).to.equal('done');
                done();
            }).catch(done);
        });
        it('Run as ps --service command with filepath - get result', (done) => {
            _1.DockerCompose.command({
                composeFilepath: './tests/assets/docker-compose.yml',
                command: 'ps',
                commandArguments: '--services',
            })
                .then((result) => {
                chai_1.expect(result).to.equal('done');
                done();
            }).catch(done);
        });
    });
    it('The version function', (done) => {
        _1.DockerCompose.version()
            .then((result) => {
            chai_1.expect(result).to.equal('done');
            done();
        }).catch(done);
    });
});
//# sourceMappingURL=docker-compose.spec.js.map