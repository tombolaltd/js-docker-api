import { KeyValuePair } from '@common/key-value-pair';
import childProcess = require('child_process');
import { IBaseOptions } from './base-options';
import { IDockerComposeOptions } from './docker-compose-options';

export interface ICommandBaseOptions extends IBaseOptions{
    composeFilepath?: string | string[];
}
