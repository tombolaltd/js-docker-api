"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builder_1 = require("@common/argument-builder");
const _docker_compose_command_converters_1 = require("@docker-compose-command-converters");
function commandOptionsConverter(options) {
    const argumentBuilder = new argument_builder_1.default();
    argumentBuilder.pushFlaggedArgs('--file', options.composeFilepath);
    argumentBuilder.pushPlainArgs(_docker_compose_command_converters_1.dockerComposeOptionsConverter(options.dockerComposeOptions || {}));
    argumentBuilder.pushPlainArgs(options.command);
    argumentBuilder.pushPlainArgs(options.commandArguments);
    return argumentBuilder.arguments;
}
exports.commandOptionsConverter = commandOptionsConverter;
//# sourceMappingURL=command-options-converter.js.map