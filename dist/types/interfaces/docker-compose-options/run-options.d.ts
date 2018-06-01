import { KeyValuePair } from '@common/key-value-pair';
import { ICommandBaseOptions } from './command-base-options';
export interface IRunOptions extends ICommandBaseOptions {
    detach?: boolean;
    name?: string;
    entrypoint?: string;
    noDeps?: boolean;
    rm?: boolean;
    servicePorts?: boolean;
    useAliases?: boolean;
    disablePsuedoTty?: boolean;
    user?: string;
    publish?: any | any[];
    volumes?: any | any[];
    workdir?: string | string;
    ports?: any | any[];
    environmentVariables?: KeyValuePair<any> | Array<KeyValuePair<any>>;
    labels?: KeyValuePair<string> | Array<KeyValuePair<string>>;
    service?: string;
    command?: string;
    commandArguments?: any | any[];
}
