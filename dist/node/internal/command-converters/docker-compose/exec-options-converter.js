"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builder_1 = require("@common/argument-builder");
function execOptionsConverter(options) {
    const argumentBuilder = new argument_builder_1.default();
    argumentBuilder.pushBooleanArgs('-T', options.disablePsuedoTty);
    argumentBuilder.pushEqualArgs('--index', options.index);
    argumentBuilder.pushBooleanArgs('--detach', options.detach);
    argumentBuilder.pushBooleanArgs('--privileged', options.privileged);
    argumentBuilder.pushFlaggedArgs('--user', options.user);
    argumentBuilder.pushFlaggedArgs('--workdir', options.workdir);
    argumentBuilder.pushFlaggedKeyValueArgs('--env', options.environmentVariables);
    argumentBuilder.pushPlainArgs(options.service);
    argumentBuilder.pushPlainArgs(options.command);
    argumentBuilder.pushPlainArgs(options.commandArguments);
    return argumentBuilder.arguments;
}
exports.execOptionsConverter = execOptionsConverter;
//# sourceMappingURL=exec-options-converter.js.map