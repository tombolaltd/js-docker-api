import { KeyValuePair } from '../../key-value-pair';
import { ICommandBaseOptions } from './command-base-options';

export interface IUpOptions extends ICommandBaseOptions {
    //  Detached mode: Run containers in the background print new container names. Incompatible with --abort-on-container-exit
    detach?: boolean;

    // Produce monochrome output.
    noColor?: boolean;

    // Pull without printing progress information
    quietPull?: boolean;

    // Don't start linked services.
    noDeps?: boolean;

    // Recreate containers even if their configuration and image haven't changed.
    forceRecreate?: boolean;

    // Recreate dependent containers. Incompatible with --no-recreate.
    alwaysRecreateDeps?: boolean;

    // If containers already exist, don't recreate them. Incompatible with --force-recreate and --renew-anon-volumes.
    noRecreate?: boolean;

    // Don't build an image, even if it's missing.
    noBuild?: boolean;

    // Don't start the services after creating them.
    noStart?: boolean;

    // Build images before starting containers.
    build?: boolean;

    // Stops all containers if any container was stopped. Incompatible with --detach.
    abortOnContainerExit?: boolean;

    // Use this timeout in seconds for container shutdown when attached or when containers are already running. (default: 10)
    timeout?: number;

    // Recreate anonymous volumes instead of retrieving data from the previous containers.
    renewAnonVolumes?: boolean;

    // Remove containers for services not defined in the Compose file.
    removeOrphans?: boolean;

    // Return the exit code of the selected service container. Implies --abort-on-container-exit.
    exitCodeFrom?: boolean;

    // Scale SERVICE to NUM instances. Overrides the `scale` setting in the Compose file if present
    scale?: KeyValuePair<number> | Array<KeyValuePair<number>>;

    services?: string | string[];
}
