import { KeyValuePair } from '../../key-value-pair';
import { ICommandBaseOptions } from './command-base-options';
export interface IExecOptions extends ICommandBaseOptions {
    detach?: boolean;
    privileged?: boolean;
    user?: string;
    environmentVariables?: KeyValuePair<any> | Array<KeyValuePair<any>>;
    workdir?: string;
    disablePsuedoTty?: boolean;
    index?: number;
    service?: string;
    command?: string;
    commandArguments?: any | any[];
}
