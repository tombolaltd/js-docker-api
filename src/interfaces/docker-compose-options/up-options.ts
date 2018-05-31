import { KeyValuePair } from '../../key-value-pair';

export interface IUpOptions {
    //  Detached mode: Run containers in the background print new container names. Incompatible with --abort-on-container-exit
    'detach'?: boolean | undefined;

    // Produce monochrome output.
    'no-color'?: boolean | undefined;

    // Pull without printing progress information
    'quiet-pull'?: boolean | undefined;

    // Don't start linked services.
    'no-deps'?: boolean | undefined;

    // Recreate containers even if their configuration and image haven't changed.
    'force-recreate'?: boolean | undefined;

    // Recreate dependent containers. Incompatible with --no-recreate.
    'always-recreate-deps'?: boolean | undefined;

    // If containers already exist, don't recreate them. Incompatible with --force-recreate and --renew-anon-volumes.
    'no-recreate'?: boolean | undefined;

    // Don't build an image, even if it's missing.
    'no-build'?: boolean | undefined;

    // Don't start the services after creating them.
    'no-start'?: boolean | undefined;

    // Build images before starting containers.
    'build'?: boolean | undefined;

    // Stops all containers if any container was stopped. Incompatible with --detach.
    'abort-on-container-exit '?: boolean | undefined;

    // Use this timeout in seconds for container shutdown when attached or when containers are already running. (default: 10)
    'timeout'?: number | undefined;

    // Recreate anonymous volumes instead of retrieving data from the previous containers.
    'renew-anon-volumes'?: boolean | undefined;

    // Remove containers for services not defined in the Compose file.
    'remove-orphans'?: boolean | undefined;

    // Return the exit code of the selected service container. Implies --abort-on-container-exit.
    'exit-code-from'?: boolean | undefined;

    // Scale SERVICE to NUM instances. Overrides the `scale` setting in the Compose file if present
    'scale'?: KeyValuePair<number> | Array<KeyValuePair<number>> | undefined;
    }
