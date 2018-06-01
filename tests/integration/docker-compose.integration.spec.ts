// import { expect } from 'chai';
// import 'mocha';
// import { SpawnOptions } from 'ts-process-promises';
// import { DockerCompose } from '../';
// import { StdValidator } from './common/std-validator';

// describe.skip('Integration test - up a service, exec, then down it', () => {
//     const stdValidator: StdValidator = new StdValidator(false);
//     it('Do it', (done) => {
//         DockerCompose.up({composeFilepath: './tests/assets/integration/docker-compose.yml', upOptions: {detach: true}})
//         .on('stdout', stdValidator.onStdOut)
//         .on('stderr', stdValidator.onStdErr)
//         .then((resultUp: any) => {
//             stdValidator.validate(resultUp);
//             stdValidator.resetStdOut();
//              return DockerCompose.run({composeFilepath: './tests/assets/integration/docker-compose.yml',
//                 service: 'foo',
//                 command: 'ls',
//                 commandArguments: '-la',
//             })
//             .on('stdout', stdValidator.onStdOut)
//             .on('stderr', stdValidator.onStdErr);
//         }).then((resultRun: any) => {
//             stdValidator.validate(resultRun);
//             stdValidator.resetStdOut();
//             return DockerCompose.down({
//                 composeFilepath: './tests/assets/integration/docker-compose.yml',
//                 downOptions: {
//                     rmi: 'all'
//                 }
//             })
//             .on('stdout', stdValidator.onStdOut)
//             .on('stderr', stdValidator.onStdErr)
//             .then((resultDown: any) => {
//                 stdValidator.validate(resultDown);
//                 done();
//             });
//         })
//         .catch(done);
//     }).timeout(10000);
// });
