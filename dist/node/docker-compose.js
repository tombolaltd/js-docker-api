"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_spawner_1 = require("./internal/command-spawner");
const option_converter_1 = require("./internal/option-converter");
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
    static build({ composeFilepath, buildOptions, buildArguments, services, spawnOptions } = {}) {
        let dockerArgs = [];
        if (typeof (buildOptions) !== 'undefined' && buildOptions) {
            dockerArgs = dockerArgs.concat(option_converter_1.optionConverter(buildOptions));
        }
        if (typeof (buildArguments) !== 'undefined' && buildArguments) {
            buildArguments.forEach((val) => {
                dockerArgs.push(val[0]);
                dockerArgs.push(val[1]);
            });
        }
        if (typeof (services) !== 'undefined' && services) {
            dockerArgs = dockerArgs.concat(option_converter_1.optionConverter(services));
        }
        return DockerCompose.command({
            command: 'build',
            composeFilepath,
            dockerArgs,
            spawnOptions
        });
    }
    static version({ spawnOptions } = {}) {
        return DockerCompose.command({
            command: 'version',
            spawnOptions
        });
    }
}
exports.DockerCompose = DockerCompose;
//# sourceMappingURL=docker-compose.js.map