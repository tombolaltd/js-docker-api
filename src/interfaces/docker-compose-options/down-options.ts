import { KeyValuePair } from '../../key-value-pair';
import { ICommandBaseOptions } from './command-base-options';

export interface IDownOptions extends ICommandBaseOptions {
    // Remove images. all = Remove all images used by any service. 'local' = Remove only images that don't have a custom tag set by the `image` field.
    rmi?: 'all' | 'local';

    // Remove named volumes declared in the `volumes` section of the Compose file and anonymous volumesattached to containers.
    volumes?: boolean;

    // Remove containers for services not defined in the Compose file
    removeOrphans?: boolean;

    // Specify a shutdown timeout in seconds. (default: 10)
    timeout?: number;
}
