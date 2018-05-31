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
    'project-name'?: string;

    /**
     * Show more output
     *
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    'verbose'?: boolean;

    /**
     * Set the logging level ("debug"|"info"|"warn"|"error"|"fatal") (default "info")
     *
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    'log-level'?: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL' ;

    /**
     * Do not print ANSI control characters
     *
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    'no-ansi'?: boolean;

    /**
     * Print version and exit
     *
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    'version'?: boolean;

    /**
     * Daemon socket(s) to connect to (default [])
     *
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    'host'?: string;

    /**
     * Use TLS; implied by --tlsverify
     *
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    'tls'?: boolean;

    /**
     * Trust certs signed only by this CA (default "/root/.docker/ca.pem")
     *
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    'tlscacert'?: string;

    /**
     * Path to TLS certificate file (default "/root/.docker/cert.pem")
     *
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    'tlscert'?: string;

    /**
     * Path to TLS key file (default "/root/.docker/key.pem")
     *
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    'tlskey'?: string;

    /**
     * Use TLS and verify the remote
     *
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    'tlsverify'?: boolean;

    /**
     * Don't check the daemon's hostname against the name specified in the client certificate
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    'skip-hostname-check'?: boolean;

    /**
     * Specify an alternate working directory
     * (default: the path of the Compose file)
     * @type {string}
     * @memberof IDockerComposeOptions
     */
    'project-directory'?: string;

    /**
     * If set, Compose will attempt to convert deploy
     * keys in v3 files to their non-Swarm equivalent
     * @type {boolean}
     * @memberof IDockerComposeOptions
     */
    'compatibility'?: boolean;
}
