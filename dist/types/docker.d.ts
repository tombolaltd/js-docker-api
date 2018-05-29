import { SpawnOptions } from 'ts-process-promises';
import { PromiseWithEvents } from 'ts-process-promises/lib/PromiseWithEvents';
import { IDockerOptions } from './interfaces/docker-options';
export declare class Docker {
    static command({command, options, dockerArgs, spawnOptions}?: {
        command?: string | undefined;
        options?: IDockerOptions | undefined;
        dockerArgs?: any[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
    }): PromiseWithEvents<any[]>;
    static help(): PromiseWithEvents<any[]>;
    static version(): PromiseWithEvents<any[]>;
    static ps({dockerArgs, spawnOptions}?: {
        dockerArgs?: any[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
    }): PromiseWithEvents<any[]>;
}
