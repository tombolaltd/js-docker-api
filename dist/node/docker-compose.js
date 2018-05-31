"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_spawner_1 = require("./internal/command-spawner");
const docker_compose_arg_converters_1 = require("./internal/docker-compose-arg-converters");
class DockerCompose {
    static command({ command, commandArguments, composeFilepath, dockerComposeOptions, spawnOptions, useStdIo } = {}) {
        const fullArgs = docker_compose_arg_converters_1.DockerComposeArgConverters.command({
            command,
            commandArguments,
            composeFilepath,
            dockerComposeOptions
        });
        const spawner = command_spawner_1.commandSpawner('docker-compose', fullArgs, spawnOptions);
        if (useStdIo) {
            return spawner.on('stdout', console.log).on('stderr', console.error);
        }
        return spawner;
    }
    static build({ composeFilepath, buildOptions, buildArguments, dockerComposeOptions, services, spawnOptions, useStdIo } = {}) {
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
            spawnOptions,
            useStdIo
        });
    }
    static down({ composeFilepath, dockerComposeOptions, downOptions, spawnOptions, useStdIo } = {}) {
        const commandArguments = docker_compose_arg_converters_1.DockerComposeArgConverters.down({
            downOptions
        });
        return DockerCompose.command({
            command: 'down',
            composeFilepath,
            commandArguments,
            dockerComposeOptions,
            spawnOptions,
            useStdIo
        });
    }
    static exec({ composeFilepath, dockerComposeOptions, disablePsuedoTty, index, execOptions, environmentVariables, service, command, commandArguments, spawnOptions, useStdIo } = {}) {
        const fullCommandArgs = docker_compose_arg_converters_1.DockerComposeArgConverters.exec({
            disablePsuedoTty,
            index,
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
            spawnOptions,
            useStdIo
        });
    }
    static run({ composeFilepath, dockerComposeOptions, disablePsuedoTty, user, runOptions, publish, volumes, workdir, ports, environmentVariables, labels, service, command, commandArguments, spawnOptions, useStdIo } = {}) {
        const fullCommandArgs = docker_compose_arg_converters_1.DockerComposeArgConverters.run({
            disablePsuedoTty,
            user,
            runOptions,
            publish,
            volumes,
            workdir,
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
            spawnOptions,
            useStdIo
        });
    }
    static up({ composeFilepath, dockerComposeOptions, upOptions, scale, services, spawnOptions, useStdIo } = {}) {
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
            spawnOptions,
            useStdIo
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