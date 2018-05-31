import { KeyValuePair } from '../../key-value-pair';

export interface IExecOptions {
    // -T is implemented in the DockerCompose method, it has the snowflake nature

    // Detached mode: Run command in the background.
    'detach'?: boolean;

    // Give extended privileges to the process.
    'privileged'?: boolean;

    // Run the command as this user.
    'user'?: string;

    // Set environment variables (can be used multiple times, not supported in API < 1.25)
    'env': KeyValuePair<any> | Array<KeyValuePair<any>>;

    // Path to workdir directory for this command.
    'workdir'?: string;
}
