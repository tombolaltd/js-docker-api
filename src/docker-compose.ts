
import Promise = require('bluebird');
import { SpawnOptions } from 'ts-process-promises';
import { PromiseWithEvents } from 'ts-process-promises/lib/PromiseWithEvents';
import { IDockerComposeOptions } from './interfaces/docker-compose-options';
import { commandSpawner } from './internal/command-spawner';
import { optionConverter } from './internal/option-converter';

export class DockerCompose {
    /**
     * Allows the running of any  abritary docker
     * Can be used to manage changes to the docker CLI
     *
     * @static
     * @param command {(string | undefined)} the command to run, do not supply for an argment only command such as "docker -v"
     * @param composeFilepath {(string | undefined)} The path to the compose YAML
     * @param dockerArgs {(any[] | undefined)} an array of arguments added to the docker ps command (e.g. --all for docker ps --all)
     * @param spawnOptions {(SpawnOptions | undefined)} options to control how the child shell process is managed
     * @returns {PromiseWithEvents<any[]>}   - the promise use ".on('stdout', (line: any) => { .... })" to get immediate feedback from stdout
     * @memberof Docker
     */
    public static command({command,
        composeFilepath,
        dockerArgs,
        spawnOptions
        }: {command?: string | undefined,
            composeFilepath?: string | undefined,
            dockerArgs?: any[]| undefined,
            spawnOptions?: SpawnOptions | undefined
        } = {}): PromiseWithEvents<any[]>  {
        let fullArgs: any[] = [];

        if (typeof(composeFilepath) !== 'undefined' && composeFilepath) {
            fullArgs = fullArgs.concat('--file');
            fullArgs = fullArgs.concat(composeFilepath);
        }

        if (typeof(command) !== 'undefined' && command) {
            fullArgs.push(command);
        }

        if (typeof(dockerArgs) !== 'undefined' && dockerArgs && dockerArgs.length > 0) {
            fullArgs = fullArgs.concat(dockerArgs);
        }

        return commandSpawner('docker-compose', fullArgs, spawnOptions);
    }
}
