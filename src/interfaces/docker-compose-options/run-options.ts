import { KeyValuePair } from '@common/key-value-pair';
import { ICommandBaseOptions } from './command-base-options';

export interface IRunOptions extends ICommandBaseOptions {
    // Detached mode: Run container in the background, print new container name.
    detach?: boolean;

    // Assign a name to the container
    name?: string;

    // Override the entrypoint of the image.
    entrypoint?: string;

    // Don't start linked services.
    noDeps?: boolean;

    // Remove container after run. Ignored in detached mode.
    rm?: boolean;

    // Run command with the service's ports enabled and mapped to the host.
    servicePorts?: boolean;

    // Use the service's network aliases in the network(s) the container connects to.
    useAliases?: boolean;

    disablePsuedoTty?: boolean;
    user?: string;
    publish?: any| any[];
    volumes?: any| any[];
    workdir?: string | string;
    ports?: any| any[];
    environmentVariables?: KeyValuePair<any> | Array<KeyValuePair<any>>;
    labels?: KeyValuePair<string> | Array<KeyValuePair<string>>;
    service?: string;
    command?: string;
    commandArguments?: any | any[];
}
