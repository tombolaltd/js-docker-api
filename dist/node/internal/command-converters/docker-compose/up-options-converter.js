"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builder_1 = require("@common/argument-builder");
function upOptionsConverter(options) {
    const argumentBuilder = new argument_builder_1.default();
    argumentBuilder.pushBooleanArgs('--detach', options.detach);
    argumentBuilder.pushBooleanArgs('--no-color', options.noColor);
    argumentBuilder.pushBooleanArgs('--quiet-pull', options.quietPull);
    argumentBuilder.pushBooleanArgs('--no-deps', options.noDeps);
    argumentBuilder.pushBooleanArgs('--force-recreate', options.forceRecreate);
    argumentBuilder.pushBooleanArgs('--always-recreate-deps', options.alwaysRecreateDeps);
    argumentBuilder.pushBooleanArgs('--no-recreate', options.noRecreate);
    argumentBuilder.pushBooleanArgs('--no-build', options.noBuild);
    argumentBuilder.pushBooleanArgs('--no-start', options.noStart);
    argumentBuilder.pushBooleanArgs('--build', options.build);
    argumentBuilder.pushBooleanArgs('--abort-on-container-exit', options.abortOnContainerExit);
    argumentBuilder.pushFlaggedArgs('--timeout', options.timeout);
    argumentBuilder.pushBooleanArgs('--renew-anon-volumes', options.renewAnonVolumes);
    argumentBuilder.pushBooleanArgs('--remove-orphans', options.removeOrphans);
    argumentBuilder.pushBooleanArgs('--exit-code-from', options.exitCodeFrom);
    argumentBuilder.pushFlaggedKeyValueArgs('--scale', options.scale);
    argumentBuilder.pushPlainArgs(options.services);
    return argumentBuilder.arguments;
}
exports.upOptionsConverter = upOptionsConverter;
//# sourceMappingURL=up-options-converter.js.map