import Promise = require('bluebird');
import * as Events from 'events';
import { spawn, SpawnOptions, SpawnResult } from 'ts-process-promises';
import { PromiseWithEvents } from 'ts-process-promises/lib/PromiseWithEvents';

export function commandSpawner(command: string, fullArgs: any[], spawnOptions?: SpawnOptions | undefined): PromiseWithEvents<any[]> {
    return new PromiseWithEvents<any[]>((resolve: ((reason: any[] | Promise.Thenable<any[]> ) => void), reject: ((error: any) => void), eventEmitter: Events.EventEmitter) => {
        const result: any[] = [];

        spawn(command, fullArgs, spawnOptions)
            .on('stdout', (line: any) => {
                eventEmitter.emit('stdout', line);
                result.push(line);
            })
            .on('stderr', (err: any) => {
                eventEmitter.emit('stderr', err);
            })
            .then((value: SpawnResult) => {
                if (value.exitCode === 0) {
                    resolve(result);
                } else {
                    reject(new Error(`The command "${command} ${fullArgs.join(' ')}" returned an exit status of ${value.exitCode}`));
                }
            });
    });
}
