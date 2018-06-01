import { ArgumentBuilder } from '@common/argument-builder';
import { KeyValuePair } from '@common/key-value-pair';
import * as OptionsInterfaces from '@docker-compose-option-interfaces/index';

export function upOptionsConverter(options: OptionsInterfaces.IUpOptions): any[] {
    const argumentBuilder: ArgumentBuilder = new ArgumentBuilder();
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