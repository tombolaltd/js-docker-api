import { KeyValuePair } from '../../key-value-pair';

export interface IRunOptions {
    // Detached mode: Run container in the background, print new container name.
    'detach'?: boolean;

    // Assign a name to the container
    'name'?: string;

    // Override the entrypoint of the image.
    'entrypoint'?: string;

    // Add or override a label
    'label'?: KeyValuePair<string> | Array<KeyValuePair<string>>;

    // Don't start linked services.
    'no-deps'?: boolean;

    // Remove container after run. Ignored in detached mode.
    'rm'?: boolean;

    // Run command with the service's ports enabled and mapped to the host.
    'service-ports'?: boolean;

    // Use the service's network aliases in the network(s) the container connects to.
    'use-aliases'?: boolean;
}
