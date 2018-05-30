export interface IDockerComposeOptions {
    'project-name'?: string;
    'verbose'?: boolean;
    'log-level'?: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL';
    'no-ansi'?: boolean;
    'version'?: boolean;
    'host'?: string;
    'tls'?: boolean;
    'tlscacert'?: string;
    'tlscert'?: string;
    'tlskey'?: string;
    'tlsverify'?: boolean;
    'skip-hostname-check'?: boolean;
    'project-directory'?: string;
    'compatibility'?: boolean;
}
