import * as OptionsInterfaces from '../../../interfaces/docker-compose-options';
import { KeyValuePair } from '../../../key-value-pair';
import { ArgumentBuilders } from '../../argument-builders';
import { dockerComposeOptionsConverter } from './docker-compose-options-converter';

export function commandOptionsConverter(options: OptionsInterfaces.ICommandOptions): any[] {
    const fullCommandArgs: any[] = [];

    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--file', options.composeFilepath);
    ArgumentBuilders.pushPlainArgs(fullCommandArgs, dockerComposeOptionsConverter(options.dockerComposeOptions));
    ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.command);
    ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.commandArguments);

    return fullCommandArgs;
}
