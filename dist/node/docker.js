"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_process_promises_1 = require("ts-process-promises");
const PromiseWithEvents_1 = require("ts-process-promises/lib/PromiseWithEvents");
const option_converter_1 = require("./internal/option-converter");
class Docker {
    static command({ command, options, dockerArgs, spawnOptions }) {
        let fullArgs = [];
        if (typeof (options) !== 'undefined' && options) {
            fullArgs = fullArgs.concat(option_converter_1.optionConverter(options));
        }
        if (typeof (command) !== 'undefined' && command) {
            fullArgs.push(command);
        }
        console.log(dockerArgs);
        if (typeof (dockerArgs) !== 'undefined' && dockerArgs && dockerArgs.length > 0) {
            fullArgs = fullArgs.concat(dockerArgs);
        }
        return new PromiseWithEvents_1.PromiseWithEvents((resolve, reject, eventEmitter) => {
            const result = [];
            ts_process_promises_1.spawn('docker', fullArgs, spawnOptions)
                .on('stdout', (line) => {
                eventEmitter.emit('stdout', line);
                result.push(line);
            })
                .on('error', (err) => { throw err; })
                .then((value) => {
                if (value.exitCode === 0) {
                    resolve(result);
                }
                else {
                    reject(new Error(`The command returned an exit status of ${value.exitCode}`));
                }
            });
        });
    }
    static help() {
        return Docker.command({ dockerArgs: ['--help'] });
    }
    static version() {
        return Docker.command({ dockerArgs: ['--version'] });
    }
    static ps({ options, dockerArgs, spawnOptions }) {
        return Docker.command({ dockerArgs: ['--version'] });
    }
}
exports.Docker = Docker;
//# sourceMappingURL=docker.js.map