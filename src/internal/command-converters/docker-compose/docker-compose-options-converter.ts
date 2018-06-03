import ArgumentBuilder from '@common/argument-builder';
import { KeyValuePair } from '@common/key-value-pair';
import * as OptionsInterfaces from '@docker-compose-option-interfaces/index';

export function dockerComposeOptionsConverter(options: OptionsInterfaces.IDockerComposeOptions): any[] {
    const argumentBuilder: ArgumentBuilder = new ArgumentBuilder();

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
