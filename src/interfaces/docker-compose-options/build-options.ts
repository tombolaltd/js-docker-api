import { KeyValuePair } from '../../key-value-pair';
export interface IBuildOptions {
    // Compress the build context using gzip.
    'compress'?: boolean;

    // Always remove intermediate containers.
    'force-rm'?: boolean;

    // Do not use cache when building the image.
    'no-cache'?: boolean;

    // Always attempt to pull a newer version of the image.
    'pull'?: boolean;

    // Sets memory limit for the build container.
    'memory'?: string;

    // Set build-time variables for services.
    'build-arg'?: KeyValuePair<any> | Array<KeyValuePair<any>>;
}
