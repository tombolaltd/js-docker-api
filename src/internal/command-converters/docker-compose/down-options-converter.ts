import * as OptionsInterfaces from '../../../interfaces/docker-compose-options';
import { KeyValuePair } from '../../../key-value-pair';
import { ArgumentBuilders } from '../../argument-builders';

export function downOptionsConverter(options: OptionsInterfaces.IDownOptions): any[] {
    const fullCommandArgs: any[] = [];
    // '--rmi'?: 'all' | 'local';
    // '--volumes'?: boolean;
    // '--remove-orphans'?: boolean;
    // '--timeout'?: number;

    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--rmi', options.rmi);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--volumes', options.volumes);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--remove-orphans', options.removeOrphans);
    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--timeout', options.timeout);
    return fullCommandArgs;
}
