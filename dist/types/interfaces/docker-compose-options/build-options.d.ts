import { KeyValuePair } from '../../key-value-pair';
import { ICommandBaseOptions } from './command-base-options';
export interface IBuildOptions extends ICommandBaseOptions {
    compress?: boolean;
    forceRm?: boolean;
    noCache?: boolean;
    pull?: boolean;
    memory?: string;
    buildArguments?: KeyValuePair<any> | Array<KeyValuePair<any>>;
    services?: string | string[];
}
