"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builders_1 = require("../../argument-builders");
function dockerComposeOptionsConverter(options) {
    const fullCommandArgs = [];
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--project-name', options.projectName);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--verbose', options.verbose);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--log-level', options.logLevel);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-ansi', options.noAnsi);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--version', options.version);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--host', options.host);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--tls', options.tls);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--tlscacert', options.tlsCACert);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--tlscert', options.tlsCert);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--tlskey', options.tlsKey);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--tlsverify', options.tlsVerify);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--skip-hostname-check', options.skipHostnameCheck);
    argument_builders_1.ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--project-directory', options.projectDirectory);
    argument_builders_1.ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--compatibility', options.compatibility);
    return fullCommandArgs;
}
exports.dockerComposeOptionsConverter = dockerComposeOptionsConverter;
//# sourceMappingURL=docker-compose-options-converter.js.map