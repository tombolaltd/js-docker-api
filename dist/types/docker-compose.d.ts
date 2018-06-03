import * as OptionsInterfaces from '@docker-compose-option-interfaces';
export { KeyValuePair } from '@common/key-value-pair';
export declare class DockerCompose {
    static command(options?: OptionsInterfaces.ICommandOptions): Promise<string>;
    static build(options?: OptionsInterfaces.IBuildOptions): Promise<string>;
    static down(options?: OptionsInterfaces.IDownOptions): Promise<string>;
    static exec(options?: OptionsInterfaces.IExecOptions): Promise<string>;
    static run(options?: OptionsInterfaces.IRunOptions): Promise<string>;
    static up(options?: OptionsInterfaces.IUpOptions): Promise<string>;
    static version(options?: OptionsInterfaces.IBaseOptions): Promise<string>;
}
