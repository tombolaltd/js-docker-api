/// <reference types="node" />
import childProcess = require('child_process');
export default function commandSpawner(command: string, fullArgs: any[], spawnOptions?: childProcess.SpawnOptions | undefined, onData?: (...args: any[]) => void): Promise<string>;
