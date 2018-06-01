"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builders_1 = require("../../argument-builders");
const docker_compose_options_converter_1 = require("./docker-compose-options-converter");
function commandOptionsConverter(options) {
    const fullCommandArgs = [];
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--file', options.composeFilepath);
    argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, docker_compose_options_converter_1.dockerComposeOptionsConverter(options.dockerComposeOptions));
    argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.command);
    argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.commandArguments);
    return fullCommandArgs;
}
exports.commandOptionsConverter = commandOptionsConverter;
//# sourceMappingURL=command-options-converter.js.map