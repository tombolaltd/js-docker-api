import * as OptionsInterfaces from '../interfaces/docker-compose-options';
import { KeyValuePair } from '../key-value-pair';
export declare class DockerComposeArgConverters {
    static command({command, commandArguments, composeFilepath, dockerComposeOptions}?: {
        command?: string | undefined;
        commandArguments?: string | string[] | undefined;
        composeFilepath?: string | string[] | undefined;
        dockerComposeOptions?: OptionsInterfaces.IDockerComposeOptions;
    }): any[];
    static build({buildOptions, buildArguments, services}?: {
        buildOptions?: any | any[] | undefined;
        buildArguments?: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined;
        services?: any | any[] | undefined;
    }): any[];
    static down({downOptions}?: {
        downOptions?: any | any[] | undefined;
    }): any[];
    static exec({execOptions, environmentVariables, service, command, commandArguments}?: {
        execOptions?: any | any[] | undefined;
        environmentVariables?: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined;
        service?: string | undefined;
        command?: string | undefined;
        commandArguments?: any | any[] | undefined;
    }): any;
    static run({runOptions, volumes, ports, environmentVariables, labels, service, command, commandArguments}?: {
        runOptions?: any | any[] | undefined;
        volumes?: any | any[] | undefined;
        ports?: any | any[] | undefined;
        environmentVariables?: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined;
        labels?: KeyValuePair<string> | Array<KeyValuePair<string>> | undefined;
        service?: string | undefined;
        command?: string | undefined;
        commandArguments?: any | any[] | undefined;
    }): any;
    static up({upOptions, scale, services}?: {
        upOptions?: OptionsInterfaces.IUpOptions | undefined;
        scale?: KeyValuePair<number> | Array<KeyValuePair<number>> | undefined;
        services?: string | string[] | undefined;
    }): any;
}
