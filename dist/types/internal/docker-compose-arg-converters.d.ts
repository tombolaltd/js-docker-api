import { IDockerComposeOptions } from '../interfaces/docker-compose-options';
import { KeyValuePair } from '../key-value-pair';
export declare class DockerComposeArgConverters {
    static command({command, commandArguments, composeFilepath, dockerComposeOptions}?: {
        command?: string | undefined;
        commandArguments?: string | string[] | undefined;
        composeFilepath?: string | string[] | undefined;
        dockerComposeOptions?: IDockerComposeOptions;
    }): any[];
    static build({buildOptions, buildArguments, services}?: {
        buildOptions?: any | any[] | undefined;
        buildArguments?: KeyValuePair | KeyValuePair[] | undefined;
        services?: any | any[] | undefined;
    }): any[];
    static down({downOptions}?: {
        downOptions?: any | any[] | undefined;
    }): any[];
    static exec({execOptions, environmentVariables, service, command, commandArguments}?: {
        execOptions?: any | any[] | undefined;
        environmentVariables?: KeyValuePair | KeyValuePair[] | undefined;
        service?: string | undefined;
        command?: string | undefined;
        commandArguments?: any | any[] | undefined;
    }): any;
    static run({runOptions, volumes, ports, environmentVariables, labels, service, command, commandArguments}?: {
        runOptions?: any | any[] | undefined;
        volumes?: any | any[] | undefined;
        ports?: any | any[] | undefined;
        environmentVariables?: KeyValuePair | KeyValuePair[] | undefined;
        labels?: KeyValuePair | KeyValuePair[] | undefined;
        service?: string | undefined;
        command?: string | undefined;
        commandArguments?: any | any[] | undefined;
    }): any;
    static up({upOptions, scale, services}?: {
        upOptions?: any | any[] | undefined;
        scale?: KeyValuePair | KeyValuePair[] | undefined;
        services?: any | any[] | undefined;
    }): any;
}
