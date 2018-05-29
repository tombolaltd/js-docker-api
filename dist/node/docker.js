"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_spawner_1 = require("./internal/command-spawner");
const option_converter_1 = require("./internal/option-converter");
class Docker {
    static command({ command, options, dockerArgs, spawnOptions } = {}) {
        let fullArgs = [];
        if (typeof (options) !== 'undefined' && options) {
            fullArgs = fullArgs.concat(option_converter_1.optionConverter(options));
        }
        if (typeof (command) !== 'undefined' && command) {
            fullArgs.push(command);
        }
        if (typeof (dockerArgs) !== 'undefined' && dockerArgs && dockerArgs.length > 0) {
            fullArgs = fullArgs.concat(dockerArgs);
        }
        return command_spawner_1.commandSpawner('docker', fullArgs, spawnOptions);
    }
    static help() {
        return Docker.command({ dockerArgs: ['--help'] });
    }
    static version() {
        return Docker.command({ dockerArgs: ['--version'] });
    }
    static ps({ dockerArgs, spawnOptions } = {}) {
        return Docker.command({ command: 'ps', dockerArgs, spawnOptions });
    }
}
exports.Docker = Docker;
//# sourceMappingURL=docker.js.map