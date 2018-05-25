/**
 *
 * @export
 * @interface IDockerComposeOptions provides the option flags when running a docker command
 */
export interface IDockerComposeOptions {
    /**
     *  Specify an alternate compose file (default: docker-compose.yml)
     *
     * @type {string}
     * @memberof IDockerOptions
     */
    'file'?: string;

    /**
     * Specify an alternate project name
     * (default: directory name)
     *
     * @type {string}
     * @memberof IDockerOptions
     */
    'project-name'?: string;

    /**
     * Show more output
     *
     * @type {boolean}
     * @memberof IDockerOptions
     */
    'verbose'?: boolean;

    /**
     * Set the logging level ("debug"|"info"|"warn"|"error"|"fatal") (default "info")
     *
     * @type {string}
     * @memberof IDockerOptions
     */
    'log-level': string;

    /**
     * Do not print ANSI control characters
     *
     * @type {boolean}
     * @memberof IDockerOptions
     */
    'no-ansi'?: boolean;

    /**
     * Print version and exit
     *
     * @type {boolean}
     * @memberof IDockerOptions
     */
    'version'?: boolean;

    /**
     * Daemon socket(s) to connect to (default [])
     *
     * @type {string}
     * @memberof IDockerOptions
     */
    'host'?: string;

    /**
     * Use TLS; implied by --tlsverify
     *
     * @type {boolean}
     * @memberof IDockerOptions
     */
    'tls': boolean;

    /**
     * Trust certs signed only by this CA (default "/root/.docker/ca.pem")
     *
     * @type {string}
     * @memberof IDockerOptions
     */
    'tlscacert': string;

    /**
     * Path to TLS certificate file (default "/root/.docker/cert.pem")
     *
     * @type {string}
     * @memberof IDockerOptions
     */
    'tlscert': string;

    /**
     * Path to TLS key file (default "/root/.docker/key.pem")
     *
     * @type {string}
     * @memberof IDockerOptions
     */
    'tlskey': string;

    /**
     * Use TLS and verify the remote
     *
     * @type {boolean}
     * @memberof IDockerOptions
     */
    'tlsverify': boolean;

    /**
     * Don't check the daemon's hostname against the name specified in the client certificate
     * @type {boolean}
     * @memberof IDockerOptions
     */
    'skip-hostname-check'?: boolean;

    /**
     * Specify an alternate working directory
     * (default: the path of the Compose file)
     * @type {string}
     * @memberof IDockerOptions
     */
    'project-directory'?: string;

    /**
     * If set, Compose will attempt to convert deploy
     * keys in v3 files to their non-Swarm equivalent
     * @type {boolean}
     * @memberof IDockerOptions
     */
    'compatibility'?: boolean;
}
