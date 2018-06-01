"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const childProcess = require("child_process");
function commandSpawner(command, fullArgs, spawnOptions = {}, onData) {
    return new Promise((resolve, reject) => {
        spawnOptions.stdio = spawnOptions.stdio || 'inherit';
        const process = childProcess.spawn(command, fullArgs, spawnOptions);
        if (typeof onData === 'function') {
            process.on('data', onData);
        }
        process.on('exit', (returnCode, signal) => {
            if (returnCode > 0) {
                return reject(returnCode);
            }
            resolve('done');
        });
    });
}
exports.commandSpawner = commandSpawner;
//# sourceMappingURL=command-spawner.js.map