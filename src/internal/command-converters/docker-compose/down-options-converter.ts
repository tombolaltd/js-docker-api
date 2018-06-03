import ArgumentBuilder from '@common/argument-builder';
import { KeyValuePair } from '@common/key-value-pair';
import * as OptionsInterfaces from '@docker-compose-option-interfaces/index';

export function downOptionsConverter(options: OptionsInterfaces.IDownOptions): any[] {
    const argumentBuilder: ArgumentBuilder = new ArgumentBuilder();

    argumentBuilder.pushFlaggedArgs('--rmi', options.rmi);
    argumentBuilder.pushBooleanArgs('--volumes', options.volumes);
    argumentBuilder.pushBooleanArgs('--remove-orphans', options.removeOrphans);
    argumentBuilder.pushFlaggedArgs('--timeout', options.timeout);
    return argumentBuilder.arguments;
}
