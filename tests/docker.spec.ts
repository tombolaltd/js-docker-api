import { expect } from 'chai';
import 'mocha';
import {Docker, IDockerOptions} from '../';

// This is handly for debugging - set to true to get the output from the CLI
const showStdout: boolean = false;

function outputDebugLine (line: string): void {
    if ( showStdout ) {
        console.log(line);
    }
}

describe ('docker', () => {
    describe('help function', () => {
        it('when complete should return and array with data string', (done) => {
            const stdout = [];

            Docker.help()
            .on('stdout', (line: any) => {
                stdout.push(line);
                outputDebugLine(line);
            })
            .then((result: any) => {
                expect(result).is.a('array');
                expect(result.length).is.greaterThan(0);
                expect(result.length).eq(stdout.length);
                expect(result).to.eql(stdout);
                done();
            }).catch(done);
        });
    });

    describe('version function', () => {
        it('when complete should return and array with data string', (done) => {
            const stdout = [];

            Docker.version()
            .on('stdout', (line: any) => {
                stdout.push(line);
                outputDebugLine(line);
            })
            .then((result: any) => {
                expect(result).is.a('array');
                expect(result.length).to.eq(1);
                expect(result.length).eq(stdout.length);
                expect(result).to.eql(stdout);
                done();
            }).catch(done);
        });
    });

    describe('The command function', () => {
        it('Run as ps command', (done) => {
            const stdout = [];

            Docker.command({
                command: 'ps',
            })
            .on('stdout', (line: any) => {
                stdout.push(line);
                console.log(line);
            })
            .then((result: any) => {
                expect(result).is.a('array');
                expect(result.length).eq(stdout.length);
                expect(result).to.eql(stdout);
                done();
            }).catch(done);
        });

        it('Run as ps command with all', (done) => {
            const stdout = [];

            Docker.command({
                command: 'ps',
                dockerArgs: ['--all']
            })
            .on('stdout', (line: any) => {
                stdout.push(line);
                console.log(line);
            })
            .then((result: any) => {
                expect(result).is.a('array');
                expect(result.length).eq(stdout.length);
                expect(result).to.eql(stdout);
                done();
            }).catch(done);
        });
    });

    describe('The ps function', () => {
        it('Run without arguments', (done) => {
            const stdout = [];

            Docker.command({
                command: 'ps'
            })
            .on('stdout', (line: any) => {
                stdout.push(line);
                console.log(line);
            })
            .then((result: any) => {
                expect(result).is.a('array');
                expect(result.length).eq(stdout.length);
                expect(result).to.eql(stdout);
                done();
            }).catch(done);
        });

        it('Run with --all argument', (done) => {
            const stdout = [];

            Docker.command({
                command: 'ps',
                dockerArgs: ['--all']
            })
            .on('stdout', (line: any) => {
                stdout.push(line);
                console.log(line);
            })
            .then((result: any) => {
                expect(result).is.a('array');
                expect(result.length).eq(stdout.length);
                expect(result).to.eql(stdout);
                done();
            }).catch(done);
        });
    });

});
