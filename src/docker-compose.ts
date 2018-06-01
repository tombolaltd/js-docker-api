
import Promise = require('bluebird');
import { SpawnOptions } from 'ts-process-promises';
import { PromiseWithEvents } from 'ts-process-promises/lib/PromiseWithEvents';
import * as OptionsInterfaces from './interfaces/docker-compose-options';
import * as OptionsConverters from './internal/command-converters/docker-compose';
import { commandSpawner } from './internal/command-spawner';
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
    public static command(options: OptionsInterfaces.ICommandOptions = {}): PromiseWithEvents<any[]>  {
        const fullArgs: any[] = OptionsConverters.commandOptionsConverter(options);

        const spawner: PromiseWithEvents<any> = commandSpawner('docker-compose', fullArgs, options.spawnOptions);
        if (options.useStdIo){
            return spawner.on('stdout', console.log)
                .on('stderr', console.error);
        }
        return spawner;
    }

    //  TODO: UNTESTED
    public static build (options: OptionsInterfaces.IBuildOptions = {}): PromiseWithEvents<any[]> {
        return DockerCompose.command({
            command: 'build',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.buildOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions,
            useStdIo: options.useStdIo
        });
    }

    // TODO: bundle             Generate a Docker bundle from the Compose file
    // TODO: config             Validate and view the Compose file
    // TODO: create             Create services

    //  TODO: UNTESTED
    // Stop and remove containers, networks, images, and volumes
    public static down (options: OptionsInterfaces.IDownOptions = {}): PromiseWithEvents<any[]> {
        return DockerCompose.command({
            command: 'down',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.downOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions,
            useStdIo: options.useStdIo
        });
    }

    // // TODO: events             Receive real time events from containers

    // TODO: untested
    // Execute a command in a running container
    public static exec (options: OptionsInterfaces.IExecOptions = {}): PromiseWithEvents<any[]> {
        return DockerCompose.command({
            command: 'exec',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.execOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions,
            useStdIo: options.useStdIo
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
    public static run (options: OptionsInterfaces.IRunOptions = {}): PromiseWithEvents<any[]> {
        return DockerCompose.command({
            command: 'run',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.runOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions,
            useStdIo: options.useStdIo
        });
    }
    // TODO: scale              Set number of containers for a service
    // TODO: start              Start services
    // TODO: stop               Stop services
    // TODO: top                Display the running processes
    // TODO: unpause            Unpause services

    // TODO: UNTESTED
    // FUTUREWORK: need to genericise KeyValuePair, scale is KeyValuePair<int> where the value is an int...
    // Create and start containers
    public static up (options: OptionsInterfaces.IUpOptions = {}): PromiseWithEvents<any[]> {
        return DockerCompose.command({
            command: 'up',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.upOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions,
            useStdIo: options.useStdIo
        });
    }

    public static version ({
        dockerComposeOptions,
        spawnOptions,
        useStdIo
    }: { dockerComposeOptions?: OptionsInterfaces.IDockerComposeOptions | undefined
        spawnOptions?: SpawnOptions | undefined,
        useStdIo?: boolean | undefined
       } = {}): PromiseWithEvents<any[]> {
            return DockerCompose.command({
                command: 'version',
                dockerComposeOptions,
                spawnOptions,
                useStdIo
        });
    }
}
