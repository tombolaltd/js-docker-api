"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builders_1 = require("../../argument-builders");
function execOptionsConverter(options) {
    const fullCommandArgs = [];
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '-T', options.disablePsuedoTty);
    argument_builders_1.ArgumentBuilders.pushEqualArgs(fullCommandArgs, '--index', options.index);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--detach', options.detach);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--privileged', options.privileged);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--user', options.user);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--workdir', options.workdir);
    argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--env', options.environmentVariables);
    argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.service);
    argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.command);
    argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.commandArguments);
    return fullCommandArgs;
}
exports.execOptionsConverter = execOptionsConverter;
//# sourceMappingURL=exec-options-converter.js.map