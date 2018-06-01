"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builders_1 = require("../../argument-builders");
function upOptionsConverter(options) {
    const fullCommandArgs = [];
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--detach', options.detach);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-color', options.noColor);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--quiet-pull', options.quietPull);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-deps', options.noDeps);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--force-recreate', options.forceRecreate);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--always-recreate-deps', options.alwaysRecreateDeps);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-recreate', options.noRecreate);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-build', options.noBuild);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-start', options.noStart);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--build', options.build);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--abort-on-container-exit', options.abortOnContainerExit);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--timeout', options.timeout);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--renew-anon-volumes', options.renewAnonVolumes);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--remove-orphans', options.removeOrphans);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--exit-code-from', options.exitCodeFrom);
    argument_builders_1.ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--scale', options.scale);
    argument_builders_1.ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.services);
    return fullCommandArgs;
}
exports.upOptionsConverter = upOptionsConverter;
//# sourceMappingURL=up-options-converter.js.map