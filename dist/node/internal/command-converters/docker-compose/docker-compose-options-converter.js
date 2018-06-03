"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argument_builder_1 = require("@common/argument-builder");
function dockerComposeOptionsConverter(options) {
    const argumentBuilder = new argument_builder_1.default();
    argumentBuilder.pushFlaggedArgs('--project-name', options.projectName);
    argumentBuilder.pushBooleanArgs('--verbose', options.verbose);
    argumentBuilder.pushFlaggedArgs('--log-level', options.logLevel);
    argumentBuilder.pushBooleanArgs('--no-ansi', options.noAnsi);
    argumentBuilder.pushBooleanArgs('--version', options.version);
    argumentBuilder.pushFlaggedArgs('--host', options.host);
    argumentBuilder.pushBooleanArgs('--tls', options.tls);
    argumentBuilder.pushFlaggedArgs('--tlscacert', options.tlsCACert);
    argumentBuilder.pushFlaggedArgs('--tlscert', options.tlsCert);
    argumentBuilder.pushFlaggedArgs('--tlskey', options.tlsKey);
    argumentBuilder.pushBooleanArgs('--tlsverify', options.tlsVerify);
    argumentBuilder.pushBooleanArgs('--skip-hostname-check', options.skipHostnameCheck);
    argumentBuilder.pushFlaggedArgs('--project-directory', options.projectDirectory);
    argumentBuilder.pushBooleanArgs('--compatibility', options.compatibility);
    return argumentBuilder.arguments;
}
exports.dockerComposeOptionsConverter = dockerComposeOptionsConverter;
//# sourceMappingURL=docker-compose-options-converter.js.map