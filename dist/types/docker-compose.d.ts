import { SpawnOptions } from 'ts-process-promises';
import { PromiseWithEvents } from 'ts-process-promises/lib/PromiseWithEvents';
export declare class DockerCompose {
    static command({command, composeFilepath, dockerArgs, spawnOptions}?: {
        command?: string | undefined;
        composeFilepath?: string | undefined;
        dockerArgs?: any[] | undefined;
        spawnOptions?: SpawnOptions | undefined;
    }): PromiseWithEvents<any[]>;
}
