import { SpawnOptions } from 'ts-process-promises';
import { PromiseWithEvents } from 'ts-process-promises/lib/PromiseWithEvents';
export declare function commandSpawner(command: string, fullArgs: any[], spawnOptions?: SpawnOptions | undefined): PromiseWithEvents<any[]>;
