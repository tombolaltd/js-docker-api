"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_spawner_1 = require("./internal/command-spawner");
const docker_compose_arg_converters_1 = require("./internal/docker-compose-arg-converters");
class DockerCompose {
    static command({ command, commandArgs, composeFilepath, dockerArgs, spawnOptions } = {}) {
        const fullArgs = docker_compose_arg_converters_1.DockerComposeArgConverters.command({
            command,
            commandArgs,
            composeFilepath,
            dockerArgs
        });
        return command_spawner_1.commandSpawner('docker-compose', fullArgs, spawnOptions);
    }
    static build({ composeFilepath, buildOptions, buildArguments, services, spawnOptions } = {}) {
        const dockerArgs = docker_compose_arg_converters_1.DockerComposeArgConverters.build({
            buildOptions,
            buildArguments,
            services,
        });
        return DockerCompose.command({
            command: 'build',
            composeFilepath,
            dockerArgs,
            spawnOptions
        });
    }
    static down({ composeFilepath, downOptions, spawnOptions } = {}) {
        const dockerArgs = docker_compose_arg_converters_1.DockerComposeArgConverters.down({
            downOptions
        });
        return DockerCompose.command({
            command: 'down',
            composeFilepath,
            dockerArgs,
            spawnOptions
        });
    }
    static exec({ composeFilepath, execOptions, environmentVariables, service, command, commandArguments, spawnOptions } = {}) {
        const dockerArgs = docker_compose_arg_converters_1.DockerComposeArgConverters.exec({
            execOptions,
            environmentVariables,
            service,
            command,
            commandArguments
        });
        return DockerCompose.command({
            command: 'exec',
            composeFilepath,
            dockerArgs,
            spawnOptions
        });
    }
    static up({ composeFilepath, upOptions, scale, services, spawnOptions } = {}) {
        const dockerArgs = docker_compose_arg_converters_1.DockerComposeArgConverters.up({
            upOptions,
            scale,
            services
        });
        return DockerCompose.command({
            command: 'up',
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