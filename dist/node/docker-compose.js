"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_spawner_1 = require("@common/command-spawner");
const OptionsConverters = require("@docker-compose-command-converters/index");
class DockerCompose {
    static command(options = {}) {
        const fullArgs = OptionsConverters.commandOptionsConverter(options);
        return command_spawner_1.default('docker-compose', fullArgs, options.spawnOptions);
    }
    static build(options = {}) {
        return DockerCompose.command({
            command: 'build',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.buildOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions,
        });
    }
    static down(options = {}) {
        return DockerCompose.command({
            command: 'down',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.downOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions
        });
    }
    static exec(options = {}) {
        return DockerCompose.command({
            command: 'exec',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.execOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions
        });
    }
    static run(options = {}) {
        return DockerCompose.command({
            command: 'run',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.runOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions
        });
    }
    static up(options = {}) {
        return DockerCompose.command({
            command: 'up',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.upOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions
        });
    }
    static version(options = {}) {
        return DockerCompose.command({
            command: 'version',
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions
        });
    }
}
exports.DockerCompose = DockerCompose;
//# sourceMappingURL=docker-compose.js.map