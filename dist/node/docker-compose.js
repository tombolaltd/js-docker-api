"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_spawner_1 = require("./internal/command-spawner");
class DockerCompose {
    static command({ command, composeFilepath, dockerArgs, spawnOptions } = {}) {
        let fullArgs = [];
        if (typeof (composeFilepath) !== 'undefined' && composeFilepath) {
            fullArgs = fullArgs.concat('--file');
            fullArgs = fullArgs.concat(composeFilepath);
        }
        if (typeof (command) !== 'undefined' && command) {
            fullArgs.push(command);
        }
        if (typeof (dockerArgs) !== 'undefined' && dockerArgs && dockerArgs.length > 0) {
            fullArgs = fullArgs.concat(dockerArgs);
        }
        return command_spawner_1.commandSpawner('docker-compose', fullArgs, spawnOptions);
    }
}
exports.DockerCompose = DockerCompose;
//# sourceMappingURL=docker-compose.js.map