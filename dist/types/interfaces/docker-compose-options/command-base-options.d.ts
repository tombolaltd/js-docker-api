import { SpawnOptions } from 'ts-process-promises';
import { IDockerComposeOptions } from './docker-compose-options';
export interface ICommandBaseOptions {
    composeFilepath?: string;
    dockerComposeOptions?: IDockerComposeOptions;
    spawnOptions?: SpawnOptions;
    useStdIo?: boolean;
}
