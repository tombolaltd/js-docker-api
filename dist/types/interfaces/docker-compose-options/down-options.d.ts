import { ICommandBaseOptions } from './command-base-options';
export interface IDownOptions extends ICommandBaseOptions {
    rmi?: 'all' | 'local';
    volumes?: boolean;
    removeOrphans?: boolean;
    timeout?: number;
}
