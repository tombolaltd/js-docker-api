import { ArgumentBuilder } from '@common/argument-builder';
import { KeyValuePair } from '@common/key-value-pair';
import * as OptionsInterfaces from '@docker-compose-option-interfaces/index';

export function execOptionsConverter(options: OptionsInterfaces.IExecOptions): any[] {
    const argumentBuilder: ArgumentBuilder = new ArgumentBuilder();

    argumentBuilder.pushBooleanArgs('-T', options.disablePsuedoTty);
    argumentBuilder.pushEqualArgs('--index', options.index);

    argumentBuilder.pushBooleanArgs('--detach', options.detach);
    argumentBuilder.pushBooleanArgs('--privileged', options.privileged);
    argumentBuilder.pushFlaggedArgs('--user', options.user);
    argumentBuilder.pushFlaggedArgs('--workdir', options.workdir);

    argumentBuilder.pushFlaggedKeyValueArgs('--env', options.environmentVariables);
    argumentBuilder.pushPlainArgs(options.service);
    argumentBuilder.pushPlainArgs(options.command);
    argumentBuilder.pushPlainArgs(options.commandArguments);
    return argumentBuilder.arguments;
}
