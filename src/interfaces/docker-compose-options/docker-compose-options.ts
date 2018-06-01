import { KeyValuePair } from '@common/key-value-pair';
/**
 *
 * @export
 * @interface IDockerComposeOptions provides the option flags when running a docker command
 */
export interface IDockerComposeOptions {
    /**
     * Specify an alternate project name
     * (default: directory name)
     *
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    projectName?: string;

    /**
     * Show more output
     *
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    verbose?: boolean;

    /**
     * Set the logging level ("debug"|"info"|"warn"|"error"|"fatal") (default "info")
     *
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    logLevel?: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL' ;

    /**
     * Do not print ANSI control characters
     *
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    noAnsi?: boolean;

    /**
     * Print version and exit
     *
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    version?: boolean;

    /**
     * Daemon socket(s) to connect to (default [])
     *
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    host?: string;

    /**
     * Use TLS; implied by --tlsverify
     *
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    tls?: boolean;

    /**
     * Trust certs signed only by this CA (default "/root/.docker/ca.pem")
     *
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    tlsCACert?: string;

    /**
     * Path to TLS certificate file (default "/root/.docker/cert.pem")
     *
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    tlsCert?: string;

    /**
     * Path to TLS key file (default "/root/.docker/key.pem")
     *
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    tlsKey?: string;

    /**
     * Use TLS and verify the remote
     *
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    tlsVerify?: boolean;

    /**
     * Don't check the daemon's hostname against the name specified in the client certificate
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    skipHostnameCheck?: boolean;

    /**
     * Specify an alternate working directory
     * (default: the path of the Compose file)
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    projectDirectory?: string;

    /**
     * If set, Compose will attempt to convert deploy
     * keys in v3 files to their non-Swarm equivalent
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    compatibility?: boolean;
}
