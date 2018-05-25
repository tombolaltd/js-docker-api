export interface IDockerOptions {
    config?: string;
    host?: string;
    logLevel: string;
    tls: boolean;
    tlscacert: string;
    tlscert: string;
    tlskey: string;
    tlsverify: boolean;
}
