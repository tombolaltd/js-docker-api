import { KeyValuePair } from '@common/key-value-pair';
import { ICommandBaseOptions } from './command-base-options';

export interface IExecOptions extends ICommandBaseOptions {

    // Detached mode: Run command in the background.
    detach?: boolean;

    // Give extended privileges to the process.
    privileged?: boolean;

    // Run the command as this user.
    user?: string;

    // Set environment variables (can be used multiple times, not supported in API < 1.25)
    environmentVariables?: KeyValuePair<any> | Array<KeyValuePair<any>>;

    // Path to workdir directory for this command.
    workdir?: string;

    disablePsuedoTty?: boolean;
    index?: number;
    service?: string;
    command?: string;
    commandArguments?: any | any[];
}
