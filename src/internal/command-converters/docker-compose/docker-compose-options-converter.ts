import * as OptionsInterfaces from '../../../interfaces/docker-compose-options';
import { KeyValuePair } from '../../../key-value-pair';
import { ArgumentBuilders } from '../../argument-builders';

export function dockerComposeOptionsConverter(options: OptionsInterfaces.IDockerComposeOptions): any[] {
    const fullCommandArgs: any[] = [];

    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--project-name', options.projectName);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--verbose', options.verbose);
    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--log-level', options.logLevel);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-ansi', options.noAnsi);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--version', options.version);
    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--host', options.host);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--tls', options.tls);
    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--tlscacert', options.tlsCACert);
    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--tlscert', options.tlsCert);
    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--tlskey', options.tlsKey);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--tlsverify', options.tlsVerify);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--skip-hostname-check', options.skipHostnameCheck);
    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--project-directory', options.projectDirectory);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--compatibility', options.compatibility);

    return fullCommandArgs;
}
