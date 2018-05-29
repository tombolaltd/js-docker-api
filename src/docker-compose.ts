
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

    //  TODO: UNTESTED
    public static build ({
        composeFilepath,
        buildOptions,
        buildArguments,
        services,
        spawnOptions
        }: {composeFilepath?: string | undefined,
            buildOptions?: any[]| undefined,
            buildArguments?: Array<[string, any]> | undefined,
            services?: any[] | undefined,
            spawnOptions?: SpawnOptions | undefined
        } = {}): PromiseWithEvents<any[]> {
        let dockerArgs: any[] = [];

        if (typeof(buildOptions) !== 'undefined' && buildOptions) {
            dockerArgs = dockerArgs.concat(optionConverter(buildOptions));
        }

        if (typeof(buildArguments) !== 'undefined' && buildArguments) {
            buildArguments.forEach((val: [string, any]) => {
                dockerArgs.push(val[0]);
                dockerArgs.push(val[1]);
            });
        }

        if (typeof(services) !== 'undefined' && services) {
            dockerArgs = dockerArgs.concat(optionConverter(services));
        }

        return DockerCompose.command({
            command: 'build',
            composeFilepath,
            dockerArgs,
            spawnOptions
        });
    }

    // TODO: bundle             Generate a Docker bundle from the Compose file
    // TODO: config             Validate and view the Compose file
    // TODO: create             Create services
    // down               Stop and remove containers, networks, images, and volumes
    // TODO: events             Receive real time events from containers
    // exec               Execute a command in a running container
    // help               Get help on a command
    // images             List images
    // kill               Kill containers
    // TODO: logs               View output from containers
    // TODO: pause              Pause services
    // TODO: port               Print the public port for a port binding
    // ps                 List containers
    // TODO: pull               Pull service images
    // TODO: push               Push service images
    // restart            Restart services
    // rm                 Remove stopped containers
    // TODO: run                Run a one-off command
    // TODO: scale              Set number of containers for a service
    // start              Start services
    // stop               Stop services
    // TODO: top                Display the running processes
    // TODO: unpause            Unpause services
    // up                 Create and start containers

    public static version ({
        spawnOptions
        }: {
            spawnOptions?: SpawnOptions | undefined
        } = {}): PromiseWithEvents<any[]> {
            return DockerCompose.command({
                command: 'version',
                spawnOptions
            });
        }
}
