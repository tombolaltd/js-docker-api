"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builders_1 = require("./argument-builders");
const option_converter_1 = require("./option-converter");
class DockerComposeArgConverters {
    static command({ command, commandArguments, composeFilepath, dockerComposeOptions, } = {}) {
        const fullArgs = [];
        argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullArgs, '--file', composeFilepath);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullArgs, option_converter_1.optionConverter(dockerComposeOptions));
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullArgs, command);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullArgs, commandArguments);
        return fullArgs;
    }
    static build({ buildOptions, buildArguments, services, } = {}) {
        const fullCommandArgs = [];
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, buildOptions);
        argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--build-arg', buildArguments);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, services);
        return fullCommandArgs;
    }
    static down({ downOptions } = {}) {
        const fullCommandArgs = [];
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, downOptions);
        return fullCommandArgs;
    }
    static exec({ execOptions, environmentVariables, service, command, commandArguments } = {}) {
        const fullCommandArgs = [];
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, execOptions);
        argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--env', environmentVariables);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, service);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, command);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, commandArguments);
        return fullCommandArgs;
    }
    static run({ runOptions, volumes, ports, environmentVariables, labels, service, command, commandArguments } = {}) {
        const fullCommandArgs = [];
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, runOptions);
        argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--volume', volumes);
        argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--publish', ports);
        argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '-e', environmentVariables);
        argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--label', labels);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, service);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, command);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, commandArguments);
        return fullCommandArgs;
    }
    static up({ upOptions, scale, services } = {}) {
        const fullCommandArgs = [];
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, option_converter_1.optionConverter(upOptions));
        argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--scale', scale);
        argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, services);
        return fullCommandArgs;
    }
}
exports.DockerComposeArgConverters = DockerComposeArgConverters;
//# sourceMappingURL=docker-compose-arg-converters.js.map