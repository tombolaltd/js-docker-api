import { KeyValuePair } from '../../key-value-pair';
export interface IBuildOptions {
    'compress'?: boolean;
    'force-rm'?: boolean;
    'no-cache'?: boolean;
    'pull'?: boolean;
    'memory'?: string;
    'build-arg'?: KeyValuePair<any> | Array<KeyValuePair<any>>;
}
