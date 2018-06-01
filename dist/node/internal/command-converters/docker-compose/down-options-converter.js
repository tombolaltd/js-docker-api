"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builders_1 = require("../../argument-builders");
function downOptionsConverter(options) {
    const fullCommandArgs = [];
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--rmi', options.rmi);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--volumes', options.volumes);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--remove-orphans', options.removeOrphans);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--timeout', options.timeout);
    return fullCommandArgs;
}
exports.downOptionsConverter = downOptionsConverter;
//# sourceMappingURL=down-options-converter.js.map