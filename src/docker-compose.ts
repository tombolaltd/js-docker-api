
import Promise = require('bluebird');
import { SpawnOptions } from 'ts-process-promises';
import { PromiseWithEvents } from 'ts-process-promises/lib/PromiseWithEvents';
import { IDockerComposeOptions } from './interfaces/docker-compose-options';
import { commandSpawner } from './internal/command-spawner';
import { DockerComposeArgConverters } from './internal/docker-compose-arg-converters';
import { KeyValuePair } from './key-value-pair';

export class DockerCompose {
    // TODO: this typedoc will be out of date...
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
        commandArgs,
        composeFilepath,
        dockerArgs,
        spawnOptions
        }: {command?: string | undefined,
            commandArgs?: | any | any[] | undefined
            composeFilepath?: string | string[] | undefined,
            dockerArgs?: any[]| undefined,
            spawnOptions?: SpawnOptions | undefined
        } = {}): PromiseWithEvents<any[]>  {

        const fullArgs: any[] = DockerComposeArgConverters.command({
            command,
            commandArgs,
            composeFilepath,
            dockerArgs
        });

        return commandSpawner('docker-compose', fullArgs, spawnOptions);
    }

    //  TODO: UNTESTED
    public static build ({
        composeFilepath,
        buildOptions,
        buildArguments,
        services,
        spawnOptions
        }: {composeFilepath?: string | string[] | undefined,
            buildOptions?: any | any[]| undefined,
            buildArguments?: KeyValuePair | KeyValuePair[] | undefined,
            services?: any | any[] | undefined,
            spawnOptions?: SpawnOptions | undefined
        } = {}): PromiseWithEvents<any[]> {
        const dockerArgs: any[] = DockerComposeArgConverters.build({
            buildOptions,
            buildArguments,
            services,
        });

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

    //  TODO: UNTESTED
    // Stop and remove containers, networks, images, and volumes
    public static down ({
        composeFilepath,
        downOptions,
        spawnOptions
        }: {composeFilepath?: string | undefined,
            downOptions?: any | any[]| undefined,
            spawnOptions?: SpawnOptions | undefined
        } = {}): PromiseWithEvents<any[]> {

        const dockerArgs: any[] = DockerComposeArgConverters.down({
            downOptions
        });

        return DockerCompose.command({
            command: 'down',
            composeFilepath,
            dockerArgs,
            spawnOptions
        });
    }

    // // TODO: events             Receive real time events from containers

    // TODO: untested
    // Execute a command in a running container
    public static exec ({
        composeFilepath,
        execOptions,
        environmentVariables,
        service,
        command,
        commandArguments,
        spawnOptions
        }: {composeFilepath?: string | undefined,
            execOptions?: any | any[]| undefined,
            environmentVariables?: KeyValuePair | KeyValuePair[] | undefined,
            service?: string | undefined,
            command?: string | undefined,
            commandArguments?: any[] | undefined,
            spawnOptions?: SpawnOptions | undefined
        } = {}): PromiseWithEvents<any[]> {
        const dockerArgs: any[] = DockerComposeArgConverters.exec({
                execOptions,
                environmentVariables,
                service,
                command,
                commandArguments
            });

        return DockerCompose.command({
            command: 'exec',
            composeFilepath,
            dockerArgs,
            spawnOptions
        });
    }
    // TODO: help               Get help on a command
    // TODO: images             List images
    // TODO: kill               Kill containers
    // TODO: logs               View output from containers
    // TODO: pause              Pause services
    // TODO: port               Print the public port for a port binding
    // TODO: ps                 List containers
    // TODO: pull               Pull service images
    // TODO: push               Push service images
    // TODO: restart            Restart services
    // TODO: rm                 Remove stopped containers

    // Run a one-off command
    // public static run ({
    //     composeFilepath,
    //     runOptions,
    //     ports,
    //     environmentVariables,
    //     labels,
    //     service,
    //     command,
    //     commandArguments,
    //     spawnOptions
    //     }: {composeFilepath?: string | undefined,
    //         runOptions?: any[]| undefined,
    //         ports?: Array<[string, any]> | undefined,
    //         environmentVariables?: Array<[string, any]> | undefined,
    //         labels?: Array<[string, any]> | undefined,
    //         service?: string | undefined,
    //         command?: string | undefined,
    //         commandArguments?: any[] | undefined,
    //         spawnOptions?: SpawnOptions | undefined
    //     } = {}): PromiseWithEvents<any[]> {
    //     let dockerArgs: any[] = [];

    //     if (typeof(runOptions) !== 'undefined' && runOptions) {
    //         dockerArgs = dockerArgs.concat(runOptions);
    //     }

    //     if (typeof(environmentVariables) !== 'undefined' && environmentVariables) {
    //         environmentVariables.forEach((val: [string, any]) => {
    //             dockerArgs.push('--env');
    //             dockerArgs.push(`${val[0]}=${val[1]}`);
    //         });
    //     }

    //     if (typeof(service) !== 'undefined' && service) {
    //         dockerArgs.push(service);
    //     }

    //     if (typeof(command) !== 'undefined' && command) {
    //         dockerArgs.push(command);
    //     }

    //     if (typeof(commandArguments) !== 'undefined' && commandArguments) {
    //         dockerArgs = dockerArgs.concat(commandArguments);
    //     }

    //     return DockerCompose.command({
    //         command: 'exec',
    //         composeFilepath,
    //         dockerArgs,
    //         spawnOptions
    //     });
    // }
    // TODO: scale              Set number of containers for a service
    // TODO: start              Start services
    // TODO: stop               Stop services
    // TODO: top                Display the running processes
    // TODO: unpause            Unpause services

    // TODO: UNTESTED
    // FUTUREWORK: need to genericise KeyValuePair, scale is KeyValuePair<int> where the value is an int...
    // Create and start containers
    public static up ({
        composeFilepath,
        upOptions,
        scale,
        services,
        spawnOptions
        }: {composeFilepath?: string | undefined,
            upOptions?: any | any[]| undefined,
            scale?: KeyValuePair[] | undefined,
            services?: any | any[] | undefined,
            spawnOptions?: SpawnOptions | undefined
        } = {}): PromiseWithEvents<any[]> {
        const dockerArgs: any[] = DockerComposeArgConverters.up({
            upOptions,
            scale,
            services
        });

        return DockerCompose.command({
            command: 'up',
            composeFilepath,
            dockerArgs,
            spawnOptions
        });
    }

    public static version ({
        spawnOptions
    }: { spawnOptions?: SpawnOptions | undefined
       } = {}): PromiseWithEvents<any[]> {
            return DockerCompose.command({
                command: 'version',
                spawnOptions
        });
    }
}
