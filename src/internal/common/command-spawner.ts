
import childProcess = require('child_process');

export function commandSpawner (command: string,
    fullArgs: any[],
    spawnOptions?: childProcess.SpawnOptions | undefined,
    onData?: (...args: any[]) => void): Promise<string> {
    return new Promise((resolve, reject) => {
        const process: childProcess.ChildProcess = childProcess.spawn(command, fullArgs, spawnOptions);

        if (typeof onData === 'function') {
            process.on('data', onData);
        }

        process.on('exit', (returnCode: number, signal: string) => {
            if (returnCode > 0) {
                return reject(`The process errored with a non-zero code: ${returnCode}: ${signal}`);
            }

            resolve(signal);
        });
    });
}
