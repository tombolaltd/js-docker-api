import { expect } from 'chai';
import 'mocha';
import { SpawnOptions } from 'ts-process-promises';
import { DockerCompose, IDockerComposeOptions } from '../';
import { StdValidator } from './common/std-validator';

// // TODO: up the timeout or ensure alpine has been pulled somehow...
// describe.only('Integration test - up a service, exec, then down it', () => {
//     const stdValidator: StdValidator = new StdValidator(true);
//     it('Do it', (done) => {
//         DockerCompose.up({composeFilepath: './tests/assets/integration/docker-compose.yml', upOptions: ['--detach']})
//         .on('stdout', stdValidator.onStdOut)
//         .on('stderr', stdValidator.onStdErr)
//         .then((resultUp: any) => {
//             stdValidator.validate(resultUp);
//             stdValidator.resetStdOut();
//             DockerCompose.exec({composeFilepath: './tests/assets/integration/docker-compose.yml',
//             service: 'foo',
//             command: 'ls -la'})
//                 .on('stdout', stdValidator.onStdOut)
//                 .on('stderr', stdValidator.onStdErr)
//                 .then((resultDown: any) => {
//                     // stdValidator.validate(resultDown);
//                     console.log('skjnxjksnxkjsn', resultDown);
//                     done();
//                 }).catch((err: any) => {
//                     console.log('********************', err);
//                     done(err);
//                 });

//             // DockerCompose.down({composeFilepath: './tests/assets/integration/docker-compose.yml'})
//             //     .on('stdout', stdValidator.onStdOut)
//             //     .on('stderr', stdValidator.onStdErr)
//             //     .then((resultDown: any) => {
//             //         stdValidator.validate(resultDown);
//             //         done();
//             //     }).catch(done);
//         }).catch(done);
//     }).timeout(10000);
// });

// TODO: up the timeout or ensure alpine has been pulled somehow...
describe.skip('Integration test - up a service, exec, then down it', () => {
    const stdValidator: StdValidator = new StdValidator(true);

    it('Do it', (done) => {
        DockerCompose.exec({composeFilepath: './tests/assets/integration/docker-compose.yml',
            service: 'foo',
            command: 'ls -la',
            spawnOptions: {
                // stdio: ['pipe', process.stdout, process.stderr ]
            }})
                .on('stdout', stdValidator.onStdOut)
                .on('stderr', stdValidator.onStdErr)
                .then((resultDown: any) => {
                    // stdValidator.validate(resultDown);
                    console.log('skjnxjksnxkjsn', resultDown);
                    done();
                }).catch((err: any) => {
                    console.log('********************', err);
                    done(err);
                });
    }).timeout(10000);
});
