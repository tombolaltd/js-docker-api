"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builder_1 = require("@common/argument-builder");
const docker_compose_options_converter_1 = require("@docker-compose-command-converters/docker-compose-options-converter");
function commandOptionsConverter(options) {
    const argumentBuilder = new argument_builder_1.ArgumentBuilder();
    argumentBuilder.pushFlaggedArgs('--file', options.composeFilepath);
    argumentBuilder.pushPlainArgs(docker_compose_options_converter_1.dockerComposeOptionsConverter(options.dockerComposeOptions || {}));
    argumentBuilder.pushPlainArgs(options.command);
    argumentBuilder.pushPlainArgs(options.commandArguments);
    return argumentBuilder.arguments;
}
exports.commandOptionsConverter = commandOptionsConverter;
//# sourceMappingURL=command-options-converter.js.map