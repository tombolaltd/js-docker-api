import * as OptionsInterfaces from '../../../interfaces/docker-compose-options';
import { KeyValuePair } from '../../../key-value-pair';
import { ArgumentBuilders } from '../../argument-builders';

export function execOptionsConverter(options: OptionsInterfaces.IExecOptions): any[] {
    const fullCommandArgs: any[] = [];
        // '--detach'?: boolean;
        // '--privileged'?: boolean;
        // '--user'?: string;
        // '--workdir'?: string;
        ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '-T', options.disablePsuedoTty);
        ArgumentBuilders.pushEqualArgs(fullCommandArgs, '--index', options.index);

        ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--detach', options.detach);
        ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--privileged', options.privileged);
        ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--user', options.user);
        ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--workdir', options.workdir);

        ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--env', options.environmentVariables);
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.service);
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.command);
        ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.commandArguments);
    return fullCommandArgs;
}
