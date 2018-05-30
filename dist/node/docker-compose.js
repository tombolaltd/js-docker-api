"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_spawner_1 = require("./internal/command-spawner");
const docker_compose_arg_converters_1 = require("./internal/docker-compose-arg-converters");
class DockerCompose {
    static command({ command, commandArguments, composeFilepath, dockerComposeOptions, spawnOptions } = {}) {
        const fullArgs = docker_compose_arg_converters_1.DockerComposeArgConverters.command({
            command,
            commandArguments,
            composeFilepath,
            dockerComposeOptions
        });
        return command_spawner_1.commandSpawner('docker-compose', fullArgs, spawnOptions);
    }
    static build({ composeFilepath, buildOptions, buildArguments, dockerComposeOptions, services, spawnOptions } = {}) {
        const commandArguments = docker_compose_arg_converters_1.DockerComposeArgConverters.build({
            buildOptions,
            buildArguments,
            services,
        });
        return DockerCompose.command({
            command: 'build',
            commandArguments,
            composeFilepath,
            dockerComposeOptions,
            spawnOptions
        });
    }
    static down({ composeFilepath, dockerComposeOptions, downOptions, spawnOptions } = {}) {
        const commandArguments = docker_compose_arg_converters_1.DockerComposeArgConverters.down({
            downOptions
        });
        return DockerCompose.command({
            command: 'down',
            composeFilepath,
            commandArguments,
            dockerComposeOptions,
            spawnOptions
        });
    }
    static exec({ composeFilepath, dockerComposeOptions, execOptions, environmentVariables, service, command, commandArguments, spawnOptions } = {}) {
        const fullCommandArgs = docker_compose_arg_converters_1.DockerComposeArgConverters.exec({
            execOptions,
            environmentVariables,
            service,
            command,
            commandArguments
        });
        return DockerCompose.command({
            command: 'exec',
            composeFilepath,
            commandArguments: fullCommandArgs,
            dockerComposeOptions,
            spawnOptions
        });
    }
    static run({ composeFilepath, dockerComposeOptions, runOptions, volumes, ports, environmentVariables, labels, service, command, commandArguments, spawnOptions } = {}) {
        const fullCommandArgs = docker_compose_arg_converters_1.DockerComposeArgConverters.run({
            runOptions,
            volumes,
            ports,
            environmentVariables,
            labels,
            service,
            command,
            commandArguments
        });
        return DockerCompose.command({
            command: 'run',
            composeFilepath,
            commandArguments: fullCommandArgs,
            dockerComposeOptions,
            spawnOptions
        });
    }
    static up({ composeFilepath, dockerComposeOptions, upOptions, scale, services, spawnOptions } = {}) {
        const commandArguments = docker_compose_arg_converters_1.DockerComposeArgConverters.up({
            upOptions,
            scale,
            services
        });
        return DockerCompose.command({
            command: 'up',
            composeFilepath,
            commandArguments,
            dockerComposeOptions,
            spawnOptions
        });
    }
    static version({ dockerComposeOptions, spawnOptions } = {}) {
        return DockerCompose.command({
            command: 'version',
            dockerComposeOptions,
            spawnOptions
        });
    }
}
exports.DockerCompose = DockerCompose;
//# sourceMappingURL=docker-compose.js.map