import * as OptionsInterfaces from '../../../interfaces/docker-compose-options';
import { KeyValuePair } from '../../../key-value-pair';
import { ArgumentBuilders } from '../../argument-builders';

export function upOptionsConverter(options: OptionsInterfaces.IUpOptions): any[] {
    const fullCommandArgs: any[] = [];

    // '--detach'?: boolean;
    // '--no-color'?: boolean;
    // '--quiet-pull'?: boolean;
    // '--no-deps'?: boolean;
    // '--force-recreate'?: boolean;
    // '--always-recreate-deps'?: boolean;
    // '--no-recreate'?: boolean;
    // '--no-build'?: boolean;
    // '--no-start'?: boolean;
    // '--build'?: boolean;
    // '--abort-on-container-exit'?: boolean;
    // '--timeout'?: number;
    // '--renew-anon-volumes'?: boolean;
    // '--remove-orphans'?: boolean;
    // '--exit-code-from'?: boolean;

    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--detach', options.detach);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-color', options.noColor);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--quiet-pull', options.quietPull);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-deps', options.noDeps);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--force-recreate', options.forceRecreate);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--always-recreate-deps', options.alwaysRecreateDeps);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-recreate', options.noRecreate);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-build', options.noBuild);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--no-start', options.noStart);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--build', options.build);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--abort-on-container-exit', options.abortOnContainerExit);
    ArgumentBuilders.pushFlaggedArgs(fullCommandArgs, '--timeout', options.timeout);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--renew-anon-volumes', options.renewAnonVolumes);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--remove-orphans', options.removeOrphans);
    ArgumentBuilders.pushBooleanArgs(fullCommandArgs, '--exit-code-from', options.exitCodeFrom);

    ArgumentBuilders.pushFlaggedKeyValueArgs(fullCommandArgs, '--scale', options.scale);
    ArgumentBuilders.pushPlainArgs(fullCommandArgs, options.services);

    return fullCommandArgs;
}
