"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OptionsConverters = require("./internal/command-converters/docker-compose");
const command_spawner_1 = require("./internal/command-spawner");
class DockerCompose {
    static command(options = {}) {
        const fullArgs = OptionsConverters.commandOptionsConverter(options);
        const spawner = command_spawner_1.commandSpawner('docker-compose', fullArgs, options.spawnOptions);
        if (options.useStdIo) {
            return spawner.on('stdout', console.log)
                .on('stderr', console.error);
        }
        return spawner;
    }
    static build(options = {}) {
        return DockerCompose.command({
            command: 'build',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.buildOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions,
            useStdIo: options.useStdIo
        });
    }
    static down(options = {}) {
        return DockerCompose.command({
            command: 'down',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.downOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions,
            useStdIo: options.useStdIo
        });
    }
    static exec(options = {}) {
        return DockerCompose.command({
            command: 'exec',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.execOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions,
            useStdIo: options.useStdIo
        });
    }
    static run(options = {}) {
        return DockerCompose.command({
            command: 'run',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.runOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions,
            useStdIo: options.useStdIo
        });
    }
    static up(options = {}) {
        return DockerCompose.command({
            command: 'up',
            composeFilepath: options.composeFilepath,
            commandArguments: OptionsConverters.upOptionsConverter(options),
            dockerComposeOptions: options.dockerComposeOptions,
            spawnOptions: options.spawnOptions,
            useStdIo: options.useStdIo
        });
    }
    static version({ dockerComposeOptions, spawnOptions, useStdIo } = {}) {
        return DockerCompose.command({
            command: 'version',
            dockerComposeOptions,
            spawnOptions,
            useStdIo
        });
    }
}
exports.DockerCompose = DockerCompose;
//# sourceMappingURL=docker-compose.js.map