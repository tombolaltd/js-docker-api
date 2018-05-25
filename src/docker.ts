import Promise = require('bluebird');
import * as Events from 'events';
import { spawn, SpawnOptions, SpawnResult } from 'ts-process-promises';
import { PromiseWithEvents } from 'ts-process-promises/lib/PromiseWithEvents';
import { IDockerOptions } from './interfaces/docker-options';
import { optionConverter } from './internal/option-converter';

/**
 * The Docker CLI command api
 *
 * @export
 * @class Docker
 */
export class Docker {
    /**
     * Allows the running of any  abritary docker
     * Can be used to manage changes to the docker CLI
     *
     * @static
     * @param command {(string | undefined)} the command to run, do not supply for an argment only command such as "docker -v"
     * @param options {(IDockerOptions | undefined)}
     * @param dockerArgs {(any[] | undefined)} an array of arguments added to the docker ps command (e.g. --all for docker ps --all)
     * @param spawnOptions {(SpawnOptions | undefined)} options to control how the child shell process is managed
     * @returns {PromiseWithEvents<any[]>}   - the promise use ".on('stdout', (line: any) => { .... })" to get immediate feedback from stdout
     * @memberof Docker
     */
    public static command({command,
        options,
        dockerArgs,
        spawnOptions
        }: {command?: string | undefined,
            options?: IDockerOptions | undefined,
            dockerArgs?: any[]| undefined,
            spawnOptions?: SpawnOptions | undefined
        }): PromiseWithEvents<any[]>  {
        let fullArgs: any[] = [];

        if (typeof(options) !== 'undefined' && options) {
            fullArgs = fullArgs.concat(optionConverter(options));
        }

        if (typeof(command) !== 'undefined' && command) {
            fullArgs.push(command);
        }
        console.log(dockerArgs);
        if (typeof(dockerArgs) !== 'undefined' && dockerArgs && dockerArgs.length > 0) {
            fullArgs = fullArgs.concat(dockerArgs);
        }

        return new PromiseWithEvents<any[]>((resolve: ((reason: any[] | Promise.Thenable<any[]> ) => void), reject: ((error: any) => void), eventEmitter: Events.EventEmitter) => {
            const result: any[] = [];
            spawn('docker', fullArgs, spawnOptions)
                .on('stdout', (line: any) => {
                    eventEmitter.emit('stdout', line);
                    result.push(line);
                })
                .on('error', (err: any) => { throw err; })
                .then((value: SpawnResult) => {
                    if (value.exitCode === 0) {
                        resolve(result);
                    } else {
                        reject(new Error(`The command returned an exit status of ${value.exitCode}`));
                    }
                });
        });
    }

    /**
     * Returns a Promise with events - when resolved the promise returns the help information
     *
     * @static
     * @returns {PromiseWithEvents<any[]>}  - the promise use ".on('stdout', (line: any) => { .... })" to get immediate feedback from stdout
     * @memberof Docker
     */
    public static help(): PromiseWithEvents<any[]> {
        return Docker.command({dockerArgs: ['--help']});
    }

    /**
     * Returns a Promise with events - when resolved the promise returns version information
     *
     * @static
     * @returns {PromiseWithEvents<any[]>}  - the promise use ".on('stdout', (line: any) => { .... })" to get immediate feedback from stdout
     * @memberof Docker
     */
    public static version(): PromiseWithEvents<any[]> {
        return Docker.command({dockerArgs: ['--version']});
    }

    /**
     * Runs the "docker ps" command
     *
     * @static
     * @param dockerArgs {(any[] | undefined)} an array of arguments added to the docker ps command (e.g. --all for docker ps --all)
     * @param spawnOptions {(SpawnOptions | undefined)} options to control how the child shell process is managed
     * @returns {PromiseWithEvents<any[]>}   - the promise use ".on('stdout', (line: any) => { .... })" to get immediate feedback from stdout
     * @memberof Docker
     */
    public static ps({dockerArgs,
        spawnOptions
        }: { dockerArgs?: any[]| undefined,
            spawnOptions?: SpawnOptions | undefined
        }): PromiseWithEvents<any[]> {
        // This is an function is an example command - to provide a pattern for syntactic sugar over the other commands
        return Docker.command({dockerArgs: ['--version']});
    }
}
