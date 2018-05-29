"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_process_promises_1 = require("ts-process-promises");
const PromiseWithEvents_1 = require("ts-process-promises/lib/PromiseWithEvents");
function commandSpawner(command, fullArgs, spawnOptions) {
    return new PromiseWithEvents_1.PromiseWithEvents((resolve, reject, eventEmitter) => {
        const result = [];
        ts_process_promises_1.spawn(command, fullArgs, spawnOptions)
            .on('stdout', (line) => {
            eventEmitter.emit('stdout', line);
            result.push(line);
        })
            .on('stderr', (err) => {
            eventEmitter.emit('stderr', err);
        })
            .then((value) => {
            console.log('**************************************************');
            console.log(value, `${command} ${fullArgs.join(' ')}`);
            console.log('**************************************************');
            if (value.exitCode === 0) {
                resolve(result);
            }
            else {
                reject(new Error(`The command "${command} ${fullArgs.join(' ')}" returned an exit status of ${value.exitCode}`));
            }
        });
    });
}
exports.commandSpawner = commandSpawner;
//# sourceMappingURL=command-spawner.js.map