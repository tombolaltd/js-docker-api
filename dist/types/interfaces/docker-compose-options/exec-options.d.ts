import { KeyValuePair } from '../../key-value-pair';
export interface IExecOptions {
    'detach'?: boolean;
    'privileged'?: boolean;
    'user'?: string;
    'env': KeyValuePair<any> | Array<KeyValuePair<any>>;
    'workdir'?: string;
}
