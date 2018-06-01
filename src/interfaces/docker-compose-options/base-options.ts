import { KeyValuePair } from '@common/key-value-pair';
import childProcess = require('child_process');
import { IDockerComposeOptions } from './docker-compose-options';

export interface IBaseOptions {
    dockerComposeOptions?: IDockerComposeOptions;
    spawnOptions?: childProcess.SpawnOptions;
}
