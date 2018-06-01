"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builder_1 = require("@common/argument-builder");
function runOptionsConverter(options) {
    const argumentBuilder = new argument_builder_1.ArgumentBuilder();
    argumentBuilder.pushBooleanArgs('-T', options.disablePsuedoTty);
    argumentBuilder.pushEqualArgs('--user', options.user);
    argumentBuilder.pushBooleanArgs('--detach', options.detach);
    argumentBuilder.pushFlaggedArgs('--name', options.name);
    argumentBuilder.pushFlaggedArgs('--entrypoint', options.entrypoint);
    argumentBuilder.pushBooleanArgs('--no-deps', options.noDeps);
    argumentBuilder.pushBooleanArgs('--rm', options.rm);
    argumentBuilder.pushBooleanArgs('--service-ports', options.servicePorts);
    argumentBuilder.pushBooleanArgs('--use-aliases', options.useAliases);
    argumentBuilder.pushEqualArgs('--volume', options.volumes);
    argumentBuilder.pushEqualArgs('--publish', options.ports);
    argumentBuilder.pushEqualArgs('--workdir', options.workdir);
    argumentBuilder.pushFlaggedKeyValueArgs('-e', options.environmentVariables);
    argumentBuilder.pushFlaggedKeyValueArgs('--label', options.labels);
    argumentBuilder.pushPlainArgs(options.service);
    argumentBuilder.pushPlainArgs(options.command);
    argumentBuilder.pushPlainArgs(options.commandArguments);
    return argumentBuilder.arguments;
}
exports.runOptionsConverter = runOptionsConverter;
//# sourceMappingURL=run-options-converter.js.map