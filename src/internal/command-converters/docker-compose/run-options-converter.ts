import { ArgumentBuilder } from '@common/argument-builder';
import { KeyValuePair } from '@common/key-value-pair';
import * as OptionsInterfaces from '@docker-compose-option-interfaces/index';

export function runOptionsConverter(options: OptionsInterfaces.IRunOptions): any[] {
    const argumentBuilder: ArgumentBuilder = new ArgumentBuilder();

    argumentBuilder.pushBooleanArgs('-T', options.disablePsuedoTty);
    argumentBuilder.pushEqualArgs('--user', options.user);
    argumentBuilder.pushBooleanArgs('--detach', options.detach);
    argumentBuilder.pushFlaggedArgs('--name', options.name);
    argumentBuilder.pushFlaggedArgs('--entrypoint', options.entrypoint);
    argumentBuilder.pushBooleanArgs('--no-deps', options.noDeps);
    argumentBuilder.pushBooleanArgs('--rm', options.rm);
    argumentBuilder.pushBooleanArgs('--service-ports', options.servicePorts);
    argumentBuilder.pushBooleanArgs('--use-aliases', options.useAliases);
    argumentBuilder.pushEqualArgs('--volume', options.volumes);
    argumentBuilder.pushEqualArgs('--publish', options.ports);
    argumentBuilder.pushEqualArgs('--workdir', options.workdir);
    argumentBuilder.pushFlaggedKeyValueArgs('-e', options.environmentVariables);
    argumentBuilder.pushFlaggedKeyValueArgs('--label', options.labels);

    argumentBuilder.pushPlainArgs(options.service);
    argumentBuilder.pushPlainArgs(options.command);
    argumentBuilder.pushPlainArgs(options.commandArguments);

    return argumentBuilder.arguments;
}
