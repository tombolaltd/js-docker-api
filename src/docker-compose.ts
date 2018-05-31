
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
        commandArguments,
        composeFilepath,
        dockerComposeOptions,
        spawnOptions,
        useStdIo
        }: {command?: string | undefined,
            commandArguments?: | any | any[] | undefined
            composeFilepath?: string | string[] | undefined,
            dockerComposeOptions?: IDockerComposeOptions,
            spawnOptions?: SpawnOptions | undefined,
            useStdIo?: boolean | undefined
        } = {}): PromiseWithEvents<any[]>  {

        const fullArgs: any[] = DockerComposeArgConverters.command({
            command,
            commandArguments,
            composeFilepath,
            dockerComposeOptions
        });

        const spawner: PromiseWithEvents<any> = commandSpawner('docker-compose', fullArgs, spawnOptions);
        if (useStdIo){
            return spawner.on('stdout', console.log).on('stderr', console.error);
        }
        return spawner;
    }

    //  TODO: UNTESTED
    public static build ({
        composeFilepath,
        buildOptions,
        buildArguments,
        dockerComposeOptions,
        services,
        spawnOptions,
        useStdIo
        }: {composeFilepath?: string | string[] | undefined,
            buildOptions?: any | any[]| undefined,
            buildArguments?: KeyValuePair | KeyValuePair[] | undefined,
            dockerComposeOptions?: IDockerComposeOptions | undefined
            services?: any | any[] | undefined,
            spawnOptions?: SpawnOptions | undefined,
            useStdIo?: boolean | undefined
        } = {}): PromiseWithEvents<any[]> {
        const commandArguments: any[] = DockerComposeArgConverters.build({
            buildOptions,
            buildArguments,
            services,
        });

        return DockerCompose.command({
            command: 'build',
            commandArguments,
            composeFilepath,
            dockerComposeOptions,
            spawnOptions,
            useStdIo
        });
    }

    // TODO: bundle             Generate a Docker bundle from the Compose file
    // TODO: config             Validate and view the Compose file
    // TODO: create             Create services

    //  TODO: UNTESTED
    // Stop and remove containers, networks, images, and volumes
    public static down ({
        composeFilepath,
        dockerComposeOptions,
        downOptions,
        spawnOptions,
        useStdIo
        }: {composeFilepath?: string | undefined,
            dockerComposeOptions?: IDockerComposeOptions | undefined
            downOptions?: any | any[]| undefined,
            spawnOptions?: SpawnOptions | undefined,
            useStdIo?: boolean | undefined
        } = {}): PromiseWithEvents<any[]> {

        const commandArguments: any[] = DockerComposeArgConverters.down({
            downOptions
        });

        return DockerCompose.command({
            command: 'down',
            composeFilepath,
            commandArguments,
            dockerComposeOptions,
            spawnOptions,
            useStdIo
        });
    }

    // // TODO: events             Receive real time events from containers

    // TODO: untested
    // Execute a command in a running container
    public static exec ({
        composeFilepath,
        dockerComposeOptions,
        execOptions,
        environmentVariables,
        service,
        command,
        commandArguments,
        spawnOptions,
        useStdIo
        }: {composeFilepath?: string | undefined,
            dockerComposeOptions?: IDockerComposeOptions | undefined,
            execOptions?: any | any[]| undefined,
            environmentVariables?: KeyValuePair | KeyValuePair[] | undefined,
            service?: string | undefined,
            command?: string | undefined,
            commandArguments?: any | any[] | undefined,
            spawnOptions?: SpawnOptions | undefined,
            useStdIo?: boolean | undefined
        } = {}): PromiseWithEvents<any[]> {
        const fullCommandArgs: any[] = DockerComposeArgConverters.exec({
                execOptions,
                environmentVariables,
                service,
                command,
                commandArguments
            });

        return DockerCompose.command({
            command: 'exec',
            composeFilepath,
            commandArguments: fullCommandArgs,
            dockerComposeOptions,
            spawnOptions,
            useStdIo
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
    public static run ({
        composeFilepath,
        dockerComposeOptions,
        runOptions,
        volumes,
        ports,
        environmentVariables,
        labels,
        service,
        command,
        commandArguments,
        spawnOptions,
        useStdIo
        }: {composeFilepath?: string | undefined,
            dockerComposeOptions?: IDockerComposeOptions | undefined,
            runOptions?: any | any[]| undefined,
            volumes?: any| any[] | undefined,
            ports?: any| any[] | undefined,
            environmentVariables?: KeyValuePair | KeyValuePair[] | undefined,
            labels?: KeyValuePair| KeyValuePair[] | undefined,
            service?: string | undefined,
            command?: string | undefined,
            commandArguments?: any | any[] | undefined
            spawnOptions?: SpawnOptions | undefined,
            useStdIo?: boolean | undefined
        } = {}): PromiseWithEvents<any[]> {
        const fullCommandArgs: any[] = DockerComposeArgConverters.run({
            runOptions,
            volumes,
            ports,
            environmentVariables,
            labels,
            service,
            command,
            commandArguments
        });

        return DockerCompose.command({
            command: 'run',
            composeFilepath,
            commandArguments: fullCommandArgs,
            dockerComposeOptions,
            spawnOptions,
            useStdIo
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
    public static up ({
        composeFilepath,
        dockerComposeOptions,
        upOptions,
        scale,
        services,
        spawnOptions,
        useStdIo
        }: {composeFilepath?: string | undefined,
            dockerComposeOptions?: IDockerComposeOptions | undefined
            upOptions?: any | any[]| undefined,
            scale?: KeyValuePair[] | undefined,
            services?: any | any[] | undefined,
            spawnOptions?: SpawnOptions | undefined,
            useStdIo?: boolean | undefined
        } = {}): PromiseWithEvents<any[]> {
        const commandArguments: any[] = DockerComposeArgConverters.up({
            upOptions,
            scale,
            services
        });

        return DockerCompose.command({
            command: 'up',
            composeFilepath,
            commandArguments,
            dockerComposeOptions,
            spawnOptions,
            useStdIo
        });
    }

    public static version ({
        dockerComposeOptions,
        spawnOptions,
        useStdIo
    }: { dockerComposeOptions?: IDockerComposeOptions | undefined
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
