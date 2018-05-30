export interface IDockerOptions {
    'config'?: string;
    'host'?: string;
    'log-level'?: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL';
    'tls'?: boolean;
    'tlscacert'?: string;
    'tlscert'?: string;
    'tlskey'?: string;
    'tlsverify'?: boolean;
}
