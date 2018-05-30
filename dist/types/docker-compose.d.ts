import { SpawnOptions } from 'ts-process-promises';
import { PromiseWithEvents } from 'ts-process-promises/lib/PromiseWithEvents';
import { KeyValuePair } from './key-value-pair';
export declare class DockerCompose {
    static command({command, commandArgs, composeFilepath, dockerArgs, spawnOptions}?: {
        command?: string | undefined;
        commandArgs?: any | any[] | undefined;
        composeFilepath?: string | string[] | undefined;
        dockerArgs?: any[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
    }): PromiseWithEvents<any[]>;
    static build({composeFilepath, buildOptions, buildArguments, services, spawnOptions}?: {
        composeFilepath?: string | string[] | undefined;
        buildOptions?: any | any[] | undefined;
        buildArguments?: KeyValuePair | KeyValuePair[] | undefined;
        services?: any | any[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
    }): PromiseWithEvents<any[]>;
    static down({composeFilepath, downOptions, spawnOptions}?: {
        composeFilepath?: string | undefined;
        downOptions?: any | any[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
    }): PromiseWithEvents<any[]>;
    static exec({composeFilepath, execOptions, environmentVariables, service, command, commandArguments, spawnOptions}?: {
        composeFilepath?: string | undefined;
        execOptions?: any | any[] | undefined;
        environmentVariables?: KeyValuePair | KeyValuePair[] | undefined;
        service?: string | undefined;
        command?: string | undefined;
        commandArguments?: any[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
    }): PromiseWithEvents<any[]>;
    static up({composeFilepath, upOptions, scale, services, spawnOptions}?: {
        composeFilepath?: string | undefined;
        upOptions?: any | any[] | undefined;
        scale?: KeyValuePair[] | undefined;
        services?: any | any[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
    }): PromiseWithEvents<any[]>;
    static version({spawnOptions}?: {
        spawnOptions?: SpawnOptions | undefined;
    }): PromiseWithEvents<any[]>;
}
