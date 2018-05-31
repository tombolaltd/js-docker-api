import * as OptionsInterfaces from '../interfaces/docker-compose-options';
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
            dockerComposeOptions?: OptionsInterfaces.IDockerComposeOptions
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
            buildOptions?: OptionsInterfaces.IBuildOptions | undefined,
            buildArguments?: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined,
            services?: string | string[] | undefined
        } = {}): any[]  {
        const fullCommandArgs: any[] = [];

        ArgumentBuilders.pushPlainArgs(fullCommandArgs, optionConverter(buildOptions));
        ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--build-arg', buildArguments);
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, services);

        return fullCommandArgs;
    }

    public static down ({ downOptions }: {
            downOptions?: OptionsInterfaces.IDownOptions | undefined,
        } = {}): any[] {
        const fullCommandArgs: any[] = [];
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, optionConverter(downOptions));
        return fullCommandArgs;
    }
    public static exec({
        disablePsuedoTty,
        index,
        execOptions,
        environmentVariables,
        service,
        command,
        commandArguments
        }: {disablePsuedoTty?: boolean | undefined
            index?: number,
            execOptions?: OptionsInterfaces.IExecOptions | undefined,
            environmentVariables?: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined,
            service?: string | undefined,
            command?: string | undefined,
            commandArguments?: any | any[] | undefined
        } = {}): any{
        const fullCommandArgs: any[] = [];
        // This is a poorly documented feature only added for compatibility:
        // It can't be part of the normal options object as it is only short
        // form (e.g. "-T" rather than "--psuedo-tty-disable")
        if (disablePsuedoTty) {
            ArgumentBuilders.pushPlainArgs(fullCommandArgs, '-T');
        }

        if (typeof(index) === 'number') {
            ArgumentBuilders.pushPlainArgs(fullCommandArgs, `--index=${index}`);
        }

        ArgumentBuilders.pushPlainArgs(fullCommandArgs, optionConverter(execOptions));
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
            environmentVariables?: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined,
            labels?: KeyValuePair<string> | Array<KeyValuePair<string>> | undefined,
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
        }: {upOptions?: OptionsInterfaces.IUpOptions | undefined,
            scale?: KeyValuePair<number>| Array<KeyValuePair<number>> | undefined,
            services?: string | string[] | undefined,
        } = {}): any {
        const fullCommandArgs: any[] = [];
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, optionConverter(upOptions));
        ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--scale', scale);
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, services);
        return fullCommandArgs;
    }
}
