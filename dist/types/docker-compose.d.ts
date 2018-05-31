import { SpawnOptions } from 'ts-process-promises';
import { PromiseWithEvents } from 'ts-process-promises/lib/PromiseWithEvents';
import * as OptionsInterfaces from './interfaces/docker-compose-options';
import { KeyValuePair } from './key-value-pair';
export declare class DockerCompose {
    static command({command, commandArguments, composeFilepath, dockerComposeOptions, spawnOptions, useStdIo}?: {
        command?: string | undefined;
        commandArguments?: any | any[] | undefined;
        composeFilepath?: string | string[] | undefined;
        dockerComposeOptions?: OptionsInterfaces.IDockerComposeOptions;
        spawnOptions?: SpawnOptions | undefined;
        useStdIo?: boolean | undefined;
    }): PromiseWithEvents<any[]>;
    static build({composeFilepath, buildOptions, buildArguments, dockerComposeOptions, services, spawnOptions, useStdIo}?: {
        composeFilepath?: string | string[] | undefined;
        buildOptions?: any | any[] | undefined;
        buildArguments?: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined;
        dockerComposeOptions?: OptionsInterfaces.IDockerComposeOptions | undefined;
        services?: any | any[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
        useStdIo?: boolean | undefined;
    }): PromiseWithEvents<any[]>;
    static down({composeFilepath, dockerComposeOptions, downOptions, spawnOptions, useStdIo}?: {
        composeFilepath?: string | undefined;
        dockerComposeOptions?: OptionsInterfaces.IDockerComposeOptions | undefined;
        downOptions?: any | any[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
        useStdIo?: boolean | undefined;
    }): PromiseWithEvents<any[]>;
    static exec({composeFilepath, dockerComposeOptions, execOptions, environmentVariables, service, command, commandArguments, spawnOptions, useStdIo}?: {
        composeFilepath?: string | undefined;
        dockerComposeOptions?: OptionsInterfaces.IDockerComposeOptions | undefined;
        execOptions?: any | any[] | undefined;
        environmentVariables?: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined;
        service?: string | undefined;
        command?: string | undefined;
        commandArguments?: any | any[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
        useStdIo?: boolean | undefined;
    }): PromiseWithEvents<any[]>;
    static run({composeFilepath, dockerComposeOptions, runOptions, volumes, ports, environmentVariables, labels, service, command, commandArguments, spawnOptions, useStdIo}?: {
        composeFilepath?: string | undefined;
        dockerComposeOptions?: OptionsInterfaces.IDockerComposeOptions | undefined;
        runOptions?: any | any[] | undefined;
        volumes?: any | any[] | undefined;
        ports?: any | any[] | undefined;
        environmentVariables?: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined;
        labels?: KeyValuePair<string> | Array<KeyValuePair<string>> | undefined;
        service?: string | undefined;
        command?: string | undefined;
        commandArguments?: any | any[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
        useStdIo?: boolean | undefined;
    }): PromiseWithEvents<any[]>;
    static up({composeFilepath, dockerComposeOptions, upOptions, scale, services, spawnOptions, useStdIo}?: {
        composeFilepath?: string | undefined;
        dockerComposeOptions?: OptionsInterfaces.IDockerComposeOptions | undefined;
        upOptions?: OptionsInterfaces.IUpOptions | undefined;
        scale?: KeyValuePair<number> | Array<KeyValuePair<number>> | undefined;
        services?: string | string[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
        useStdIo?: boolean | undefined;
    }): PromiseWithEvents<any[]>;
    static version({dockerComposeOptions, spawnOptions, useStdIo}?: {
        dockerComposeOptions?: OptionsInterfaces.IDockerComposeOptions | undefined;
        spawnOptions?: SpawnOptions | undefined;
        useStdIo?: boolean | undefined;
    }): PromiseWithEvents<any[]>;
}
