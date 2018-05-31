import { KeyValuePair } from '../../key-value-pair';
export interface IRunOptions {
    'detach'?: boolean;
    'name'?: string;
    'entrypoint'?: string;
    'label'?: KeyValuePair<string> | Array<KeyValuePair<string>>;
    'no-deps'?: boolean;
    'rm'?: boolean;
    'service-ports'?: boolean;
    'use-aliases'?: boolean;
}
