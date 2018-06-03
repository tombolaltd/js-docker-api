"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builder_1 = require("@common/argument-builder");
function downOptionsConverter(options) {
    const argumentBuilder = new argument_builder_1.default();
    argumentBuilder.pushFlaggedArgs('--rmi', options.rmi);
    argumentBuilder.pushBooleanArgs('--volumes', options.volumes);
    argumentBuilder.pushBooleanArgs('--remove-orphans', options.removeOrphans);
    argumentBuilder.pushFlaggedArgs('--timeout', options.timeout);
    return argumentBuilder.arguments;
}
exports.downOptionsConverter = downOptionsConverter;
//# sourceMappingURL=down-options-converter.js.map