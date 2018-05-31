import { KeyValuePair } from '../../key-value-pair';
export interface IUpOptions {
    'detach'?: boolean | undefined;
    'no-color'?: boolean | undefined;
    'quiet-pull'?: boolean | undefined;
    'no-deps'?: boolean | undefined;
    'force-recreate'?: boolean | undefined;
    'always-recreate-deps'?: boolean | undefined;
    'no-recreate'?: boolean | undefined;
    'no-build'?: boolean | undefined;
    'no-start'?: boolean | undefined;
    'build'?: boolean | undefined;
    'abort-on-container-exit '?: boolean | undefined;
    'timeout'?: number | undefined;
    'renew-anon-volumes'?: boolean | undefined;
    'remove-orphans'?: boolean | undefined;
    'exit-code-from'?: boolean | undefined;
    'scale'?: KeyValuePair<number> | Array<KeyValuePair<number>> | undefined;
}
