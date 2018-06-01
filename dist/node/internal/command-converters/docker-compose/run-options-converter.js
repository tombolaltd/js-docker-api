"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builders_1 = require("../../argument-builders");
function runOptionsConverter(options) {
    const fullCommandArgs = [];
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '-T', options.disablePsuedoTty);
    argument_builders_1.ArgumentBuilders.pushEqualArgs(fullCommandArgs, '--user', options.user);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--detach', options.detach);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--name', options.name);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--entrypoint', options.entrypoint);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-deps', options.noDeps);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--rm', options.rm);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--service-ports', options.servicePorts);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--use-aliases', options.useAliases);
    argument_builders_1.ArgumentBuilders.pushEqualArgs(fullCommandArgs, '--volume', options.volumes);
    argument_builders_1.ArgumentBuilders.pushEqualArgs(fullCommandArgs, '--publish', options.ports);
    argument_builders_1.ArgumentBuilders.pushEqualArgs(fullCommandArgs, '--workdir', options.workdir);
    argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '-e', options.environmentVariables);
    argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--label', options.labels);
    argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.service);
    argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.command);
    argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.commandArguments);
    return fullCommandArgs;
}
exports.runOptionsConverter = runOptionsConverter;
//# sourceMappingURL=run-options-converter.js.map