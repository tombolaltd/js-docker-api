import { ArgumentBuilder } from '@common/argument-builder';
import { KeyValuePair } from '@common/key-value-pair';
import * as OptionsInterfaces from '@docker-compose-option-interfaces/index';

export function buildOptionsConverter(options: OptionsInterfaces.IBuildOptions): any[] {
    const argumentBuilder: ArgumentBuilder = new ArgumentBuilder();

    argumentBuilder.pushBooleanArgs('--compress', options.compress);
    argumentBuilder.pushBooleanArgs('--force-rm', options.forceRm);
    argumentBuilder.pushBooleanArgs('--no-cache', options.noCache);
    argumentBuilder.pushBooleanArgs('--pull', options.pull);
    argumentBuilder.pushFlaggedArgs('--memory', options.memory);

    argumentBuilder.pushFlaggedKeyValueArgs('--build-arg', options.buildArguments);
    argumentBuilder.pushPlainArgs(options.services);
    return argumentBuilder.arguments;
}
