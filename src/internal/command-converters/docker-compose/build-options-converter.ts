import * as OptionsInterfaces from '../../../interfaces/docker-compose-options';
import { KeyValuePair } from '../../../key-value-pair';
import { ArgumentBuilders } from '../../argument-builders';

export function buildOptionsConverter(options: OptionsInterfaces.IBuildOptions): any[] {
    const fullCommandArgs: any[] = [];

    // '--compress'?: boolean;
    // '--force-rm'?: boolean;
    // '--no-cache'?: boolean;
    // '--pull'?: boolean;
    // '--memory'?: string;

    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--compress', options.compress);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--force-rm', options.forceRm);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-cache', options.noCache);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--pull', options.pull);
    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--memory', options.memory);

    ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--build-arg', options.buildArguments);
    ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.services);
    return fullCommandArgs;
}
