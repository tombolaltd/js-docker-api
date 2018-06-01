// import { expect } from 'chai';
// import 'mocha';
// import { Docker, IDockerOptions } from '../';
// import { StdValidator } from './common/std-validator';

// describe ('Docker', () => {
//     describe('help function', () => {
//         it('when complete should return and array with data string', (done) => {
//             const stdValidator: StdValidator = new StdValidator();

//             Docker.help()
//             .on('stdout', stdValidator.onStdOut)
//             .on('stderr', stdValidator.onStdErr)
//             .then((result: any) => {
//                 expect(result.length).is.greaterThan(0);
//                 stdValidator.validate(result);
//                 done();
//             }).catch(done);
//         });
//     });

//     describe('version function', () => {
//         it('when complete should return and array with data string', (done) => {
//             const stdValidator: StdValidator = new StdValidator();

//             Docker.version()
//             .on('stdout', stdValidator.onStdOut)
//             .on('stderr', stdValidator.onStdErr)
//             .then((result: any) => {
//                 expect(result.length).to.eq(1);
//                 stdValidator.validate(result);
//                 done();
//             }).catch(done);
//         });
//     });

//     describe('The command function', () => {
//         it('Run as ps command', (done) => {
//             const stdValidator: StdValidator = new StdValidator();

//             Docker.command({
//                 command: 'ps',
//             })
//             .on('stdout', stdValidator.onStdOut)
//             .on('stderr', stdValidator.onStdErr)
//             .then((result: any) => {
//                 expect(result).is.a('array');
//                 stdValidator.validate(result);
//                 done();
//             }).catch(done);
//         });

//         it('Run as ps command with all', (done) => {
//             const stdValidator: StdValidator = new StdValidator();

//             Docker.command({
//                 command: 'ps',
//                 dockerArgs: ['--all']
//             })
//             .on('stdout', stdValidator.onStdOut)
//             .on('stderr', stdValidator.onStdErr)
//             .then((result: any) => {
//                 stdValidator.validate(result);
//                 done();
//             }).catch(done);
//         });

//         it('when passed an unrecognised command fails reporting output', (done) => {
//             const stdValidator: StdValidator = new StdValidator();

//             Docker.command({
//                 command: 'foo'
//             })
//             .on('stdout', stdValidator.onStdOut)
//             .on('stderr', stdValidator.onStdErr)
//             .then((result: any) => {
//                 done(new Error('Expected test to fail, did not'));
//             }).catch(((error: Error) => {
//                 expect(error.message).to.equal('The command "docker foo" returned an exit status of 1');
//                 done();
//             }));
//         });
//     });

//     describe('The ps function', () => {
//         it('Run without arguments', (done) => {
//             const stdValidator: StdValidator = new StdValidator();

//             Docker.ps()
//             .on('stdout', stdValidator.onStdOut)
//             .on('stderr', stdValidator.onStdErr)
//             .then((result: any) => {
//                 stdValidator.validate(result);
//                 done();
//             }).catch(done);
//         });

//         it('Run with --all argument', (done) => {
//             const stdValidator: StdValidator = new StdValidator();

//             Docker.ps({
//                 dockerArgs: ['--all']
//             })
//             .on('stdout', stdValidator.onStdOut)
//             .on('stderr', stdValidator.onStdErr)
//             .then((result: any) => {
//                 stdValidator.validate(result);
//                 done();
//             }).catch(done);
//         });
//     });

// });
