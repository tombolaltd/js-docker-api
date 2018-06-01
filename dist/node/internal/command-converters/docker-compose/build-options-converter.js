"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builders_1 = require("../../argument-builders");
function buildOptionsConverter(options) {
    const fullCommandArgs = [];
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--compress', options.compress);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--force-rm', options.forceRm);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-cache', options.noCache);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--pull', options.pull);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--memory', options.memory);
    argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--build-arg', options.buildArguments);
    argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.services);
    return fullCommandArgs;
}
exports.buildOptionsConverter = buildOptionsConverter;
//# sourceMappingURL=build-options-converter.js.map