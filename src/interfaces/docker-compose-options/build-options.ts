import { KeyValuePair } from '@common/key-value-pair';
import { ICommandBaseOptions } from './command-base-options';
export interface IBuildOptions extends ICommandBaseOptions {
    // Compress the build context using gzip.
    compress?: boolean;

    // Always remove intermediate containers.
    forceRm?: boolean;

    // Do not use cache when building the image.
    noCache?: boolean;

    // Always attempt to pull a newer version of the image.
    pull?: boolean;

    // Sets memory limit for the build container.
    memory?: string;

    // Set build-time variables for services.
    buildArguments?: KeyValuePair<any> | Array<KeyValuePair<any>>;

    services?: string | string[];
}
