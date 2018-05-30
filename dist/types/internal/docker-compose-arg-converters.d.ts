import { KeyValuePair } from '../key-value-pair';
export declare class DockerComposeArgConverters {
    static command({command, commandArgs, composeFilepath, dockerArgs}?: {
        command?: string | undefined;
        commandArgs?: string | string[] | undefined;
        composeFilepath?: string | string[] | undefined;
        dockerArgs?: any | any[] | undefined;
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
    static up({upOptions, scale, services}?: {
        upOptions?: any | any[] | undefined;
        scale?: KeyValuePair | KeyValuePair[] | undefined;
        services?: any | any[] | undefined;
    }): any;
}
