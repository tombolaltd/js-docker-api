"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builders_1 = require("./argument-builders");
class DockerComposeArgConverters {
    static command({ command, commandArgs, composeFilepath, dockerArgs, } = {}) {
        const fullArgs = [];
        argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullArgs, '--file', composeFilepath);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullArgs, dockerArgs);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullArgs, command);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullArgs, commandArgs);
        return fullArgs;
    }
    static build({ buildOptions, buildArguments, services, } = {}) {
        const dockerArgs = [];
        argument_builders_1.ArgumentBuilders.pushPlainArgs(dockerArgs, buildOptions);
        argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(dockerArgs, '--build-arg', buildArguments);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(dockerArgs, services);
        return dockerArgs;
    }
    static down({ downOptions } = {}) {
        const dockerArgs = [];
        argument_builders_1.ArgumentBuilders.pushPlainArgs(dockerArgs, downOptions);
        return dockerArgs;
    }
    static exec({ execOptions, environmentVariables, service, command, commandArguments } = {}) {
        const dockerArgs = [];
        argument_builders_1.ArgumentBuilders.pushPlainArgs(dockerArgs, execOptions);
        argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(dockerArgs, '--env', environmentVariables);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(dockerArgs, service);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(dockerArgs, command);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(dockerArgs, commandArguments);
        return dockerArgs;
    }
    static up({ upOptions, scale, services } = {}) {
        const dockerArgs = [];
        argument_builders_1.ArgumentBuilders.pushPlainArgs(dockerArgs, upOptions);
        argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(dockerArgs, '--scale', scale);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(dockerArgs, services);
        return dockerArgs;
    }
}
exports.DockerComposeArgConverters = DockerComposeArgConverters;
//# sourceMappingURL=docker-compose-arg-converters.js.map