import ArgumentBuilder from '@common/argument-builder';
import { KeyValuePair } from '@common/key-value-pair';
import { dockerComposeOptionsConverter } from '@docker-compose-command-converters';
import * as OptionsInterfaces from '@docker-compose-option-interfaces';

export function commandOptionsConverter(options: OptionsInterfaces.ICommandOptions): any[] {
    const argumentBuilder: ArgumentBuilder = new ArgumentBuilder();

    argumentBuilder.pushFlaggedArgs('--file', options.composeFilepath);
    argumentBuilder.pushPlainArgs(dockerComposeOptionsConverter(options.dockerComposeOptions  || {} ));
    argumentBuilder.pushPlainArgs(options.command);
    argumentBuilder.pushPlainArgs(options.commandArguments);

    return argumentBuilder.arguments;
}
