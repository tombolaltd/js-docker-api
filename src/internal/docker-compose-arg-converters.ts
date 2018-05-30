import { KeyValuePair } from '../key-value-pair';
import { ArgumentBuilders } from './argument-builders';

export class DockerComposeArgConverters {
    // This makes the conversion of public API calls to CLI arguments testable without an actual spawn...
    public static command({
        command,
        commandArgs,
        composeFilepath,
        dockerArgs,
        }: {
            command?: string | undefined,
            commandArgs?: string | string[] | undefined
            composeFilepath?: string | string[] | undefined,
            dockerArgs?: any | any[]| undefined
        } = {}): any[]  {
        const fullArgs: any[] = [];

        ArgumentBuilders.pushFlaggedArgs(fullArgs, '--file', composeFilepath);
        ArgumentBuilders.pushPlainArgs(fullArgs, dockerArgs);
        ArgumentBuilders.pushPlainArgs(fullArgs, command);
        ArgumentBuilders.pushPlainArgs(fullArgs, commandArgs);

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
        const dockerArgs: any[] = [];

        ArgumentBuilders.pushPlainArgs(dockerArgs, buildOptions);
        ArgumentBuilders.pushFlaggedKeyValueArgs(dockerArgs, '--build-arg', buildArguments);
        ArgumentBuilders.pushPlainArgs(dockerArgs, services);

        return dockerArgs;
    }

    public static down ({ downOptions }: {
            downOptions?: any | any[]| undefined,
        } = {}): any[] {
        const dockerArgs: any[] = [];
        ArgumentBuilders.pushPlainArgs(dockerArgs, downOptions);
        return dockerArgs;
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
        const dockerArgs: any[] = [];
        ArgumentBuilders.pushPlainArgs(dockerArgs, execOptions);
        ArgumentBuilders.pushFlaggedKeyValueArgs(dockerArgs, '--env', environmentVariables);
        ArgumentBuilders.pushPlainArgs(dockerArgs, service);
        ArgumentBuilders.pushPlainArgs(dockerArgs, command);
        ArgumentBuilders.pushPlainArgs(dockerArgs, commandArguments);
        return dockerArgs;
    }

    public static up({
        upOptions,
        scale,
        services
        }: {upOptions?: any | any[]| undefined,
            scale?: KeyValuePair| KeyValuePair[] | undefined,
            services?: any | any[] | undefined,
        } = {}): any{
        const dockerArgs: any[] = [];
        ArgumentBuilders.pushPlainArgs(dockerArgs, upOptions);
        ArgumentBuilders.pushFlaggedKeyValueArgs(dockerArgs, '--scale', scale);
        ArgumentBuilders.pushPlainArgs(dockerArgs, services);
        return dockerArgs;
    }
}
