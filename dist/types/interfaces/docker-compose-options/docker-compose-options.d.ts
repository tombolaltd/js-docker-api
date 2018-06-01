export interface IDockerComposeOptions {
    projectName?: string;
    verbose?: boolean;
    logLevel?: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL';
    noAnsi?: boolean;
    version?: boolean;
    host?: string;
    tls?: boolean;
    tlsCACert?: string;
    tlsCert?: string;
    tlsKey?: string;
    tlsVerify?: boolean;
    skipHostnameCheck?: boolean;
    projectDirectory?: string;
    compatibility?: boolean;
}
