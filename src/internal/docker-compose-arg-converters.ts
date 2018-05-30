import { IDockerComposeOptions } from '../interfaces/docker-compose-options';
import { KeyValuePair } from '../key-value-pair';
import { ArgumentBuilders } from './argument-builders';
import { optionConverter } from './option-converter';

export class DockerComposeArgConverters {
    // This makes the conversion of public API calls to CLI arguments testable without an actual spawn...
    public static command({
        command,
        commandArguments,
        composeFilepath,
        dockerComposeOptions,
        }: {
            command?: string | undefined,
            commandArguments?: string | string[] | undefined
            composeFilepath?: string | string[] | undefined,
            dockerComposeOptions?: IDockerComposeOptions
        } = {}): any[]  {
        const fullArgs: any[] = [];

        ArgumentBuilders.pushFlaggedArgs(fullArgs, '--file', composeFilepath);
        ArgumentBuilders.pushPlainArgs(fullArgs, optionConverter(dockerComposeOptions));
        ArgumentBuilders.pushPlainArgs(fullArgs, command);
        ArgumentBuilders.pushPlainArgs(fullArgs, commandArguments);

        return fullArgs;
    }

    public static build({
            buildOptions,
            buildArguments,
            services,
        }: {
            buildOptions?: any | any[]| undefined,
            buildArguments?: KeyValuePair | KeyValuePair[] | undefined,
            services?: any | any[] | undefined
        } = {}): any[]  {
        const fullCommandArgs: any[] = [];

        ArgumentBuilders.pushPlainArgs(fullCommandArgs, buildOptions);
        ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--build-arg', buildArguments);
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, services);

        return fullCommandArgs;
    }

    public static down ({ downOptions }: {
            downOptions?: any | any[]| undefined,
        } = {}): any[] {
        const fullCommandArgs: any[] = [];
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, downOptions);
        return fullCommandArgs;
    }
    public static exec({
        execOptions,
        environmentVariables,
        service,
        command,
        commandArguments
        }: {execOptions?: any | any[]| undefined,
            environmentVariables?: KeyValuePair | KeyValuePair[] | undefined,
            service?: string | undefined,
            command?: string | undefined,
            commandArguments?: any | any[] | undefined
        } = {}): any{
        const fullCommandArgs: any[] = [];
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, execOptions);
        ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--env', environmentVariables);
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, service);
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, command);
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, commandArguments);
        return fullCommandArgs;
    }

    public static run({
            runOptions,
            volumes,
            ports,
            environmentVariables,
            labels,
            service,
            command,
            commandArguments
        }: {runOptions?: any | any[]| undefined,
            volumes?: any| any[] | undefined,
            ports?: any| any[] | undefined,
            environmentVariables?: KeyValuePair | KeyValuePair[] | undefined,
            labels?: KeyValuePair| KeyValuePair[] | undefined,
            service?: string | undefined,
            command?: string | undefined,
            commandArguments?: any | any[] | undefined
        } = {}): any{
        const fullCommandArgs: any[] = [];
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, runOptions);
        ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--volume', volumes);
        ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--publish', ports);

        ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '-e', environmentVariables);
        ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--label', labels);

        ArgumentBuilders.pushPlainArgs(fullCommandArgs, service);
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, command);
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, commandArguments);
        return fullCommandArgs;
    }

    public static up({
        upOptions,
        scale,
        services
        }: {upOptions?: any | any[]| undefined,
            scale?: KeyValuePair| KeyValuePair[] | undefined,
            services?: any | any[] | undefined,
        } = {}): any{
        const fullCommandArgs: any[] = [];
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, upOptions);
        ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--scale', scale);
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, services);
        return fullCommandArgs;
    }
}
