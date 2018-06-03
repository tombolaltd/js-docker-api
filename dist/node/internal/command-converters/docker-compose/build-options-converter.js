"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builder_1 = require("@common/argument-builder");
function buildOptionsConverter(options) {
    const argumentBuilder = new argument_builder_1.default();
    argumentBuilder.pushBooleanArgs('--compress', options.compress);
    argumentBuilder.pushBooleanArgs('--force-rm', options.forceRm);
    argumentBuilder.pushBooleanArgs('--no-cache', options.noCache);
    argumentBuilder.pushBooleanArgs('--pull', options.pull);
    argumentBuilder.pushFlaggedArgs('--memory', options.memory);
    argumentBuilder.pushFlaggedKeyValueArgs('--build-arg', options.buildArguments);
    argumentBuilder.pushPlainArgs(options.services);
    return argumentBuilder.arguments;
}
exports.buildOptionsConverter = buildOptionsConverter;
//# sourceMappingURL=build-options-converter.js.map