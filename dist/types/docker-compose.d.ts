import { SpawnOptions } from 'ts-process-promises';
import { PromiseWithEvents } from 'ts-process-promises/lib/PromiseWithEvents';
import * as OptionsInterfaces from './interfaces/docker-compose-options';
export declare class DockerCompose {
    static command(options?: OptionsInterfaces.ICommandOptions): PromiseWithEvents<any[]>;
    static build(options?: OptionsInterfaces.IBuildOptions): PromiseWithEvents<any[]>;
    static down(options?: OptionsInterfaces.IDownOptions): PromiseWithEvents<any[]>;
    static exec(options?: OptionsInterfaces.IExecOptions): PromiseWithEvents<any[]>;
    static run(options?: OptionsInterfaces.IRunOptions): PromiseWithEvents<any[]>;
    static up(options?: OptionsInterfaces.IUpOptions): PromiseWithEvents<any[]>;
    static version({dockerComposeOptions, spawnOptions, useStdIo}?: {
        dockerComposeOptions?: OptionsInterfaces.IDockerComposeOptions | undefined;
        spawnOptions?: SpawnOptions | undefined;
        useStdIo?: boolean | undefined;
    }): PromiseWithEvents<any[]>;
}
