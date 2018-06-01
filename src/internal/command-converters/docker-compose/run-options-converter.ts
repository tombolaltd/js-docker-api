import * as OptionsInterfaces from '../../../interfaces/docker-compose-options';
import { KeyValuePair } from '../../../key-value-pair';
import { ArgumentBuilders } from '../../argument-builders';

export function runOptionsConverter(options: OptionsInterfaces.IRunOptions): any[] {
    const fullCommandArgs: any[] = [];

    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '-T', options.disablePsuedoTty);
    ArgumentBuilders.pushEqualArgs(fullCommandArgs, '--user', options.user);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--detach', options.detach);
    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--name', options.name);
    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--entrypoint', options.entrypoint);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-deps', options.noDeps);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--rm', options.rm);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--service-ports', options.servicePorts);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--use-aliases', options.useAliases);
    ArgumentBuilders.pushEqualArgs(fullCommandArgs, '--volume', options.volumes);
    ArgumentBuilders.pushEqualArgs(fullCommandArgs, '--publish', options.ports);
    ArgumentBuilders.pushEqualArgs(fullCommandArgs, '--workdir', options.workdir);
    ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '-e', options.environmentVariables);
    ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--label', options.labels);

    ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.service);
    ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.command);
    ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.commandArguments);

    return fullCommandArgs;
}
