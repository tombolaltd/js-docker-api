import { KeyValuePair } from '../../key-value-pair';
import { ICommandBaseOptions } from './command-base-options';
export interface IUpOptions extends ICommandBaseOptions {
    detach?: boolean;
    noColor?: boolean;
    quietPull?: boolean;
    noDeps?: boolean;
    forceRecreate?: boolean;
    alwaysRecreateDeps?: boolean;
    noRecreate?: boolean;
    noBuild?: boolean;
    noStart?: boolean;
    build?: boolean;
    abortOnContainerExit?: boolean;
    timeout?: number;
    renewAnonVolumes?: boolean;
    removeOrphans?: boolean;
    exitCodeFrom?: boolean;
    scale?: KeyValuePair<number> | Array<KeyValuePair<number>>;
    services?: string | string[];
}
