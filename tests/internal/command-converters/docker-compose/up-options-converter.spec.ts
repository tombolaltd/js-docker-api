import { upOptionsConverter } from '@docker-compose-command-converters/up-options-converter';
import { expect } from 'chai';
import 'mocha';

describe('The upOptionsConverter function', () => {

    it('Passing empty parameter object results in an empty list', ()  => {
        const result: any[] = upOptionsConverter({});
        expect(result).to.deep.equal([]);
    });

    it('Passing options array populates correctly', ()  => {
        const result: any[] = upOptionsConverter({
            detach: true,
            noColor: false
        });
        expect(result).to.deep.equal(['--detach']);
    });

    it('Passing single scale variable value populates correctly', ()  => {
        const result: any[] = upOptionsConverter({scale: { key1: 1}});
        expect(result).to.deep.equal(['--scale', 'key1=1']);
    });

    it('Passing build scale variable array value populates correctly', ()  => {
        const result: any[] = upOptionsConverter({scale: [{ key1: 1}, { key2: 2}]});
        expect(result).to.deep.equal(['--scale', 'key1=1', '--scale', 'key2=2']);
    });

    it('Passing service value populates correctly', ()  => {
        const result: any[] = upOptionsConverter({ services: 'qux'});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing service array populates correctly', ()  => {
        const result: any[] = upOptionsConverter({ services: ['qux', 'quux']});
        expect(result).to.deep.equal(['qux', 'quux']);
    });

    it('The DockerCompose value is not converted by this function', ()  => {
       const result: any[] = upOptionsConverter({
           dockerComposeOptions: {
               verbose: true,
           }
       });
       expect(result).to.deep.equal([]);
    });

    it('Passing all options value populates correctly - in the expected order', ()  => {
        const result: any[] = upOptionsConverter({
            detach: true,
            quietPull: true,
            noColor: false,
            noDeps: true,
            forceRecreate: true,
            alwaysRecreateDeps: true,
            noRecreate: true,
            noBuild: true,
            noStart: true,
            build: true,
            abortOnContainerExit: true,
            timeout: 20,
            renewAnonVolumes: true,
            removeOrphans: true,
            exitCodeFrom: true,
            scale: [{ key1: 1}, { key2: 2}],
            services: ['myService1', 'myService2']
        });
        expect(result).to.deep.equal([
            '--detach',
            '--quiet-pull',
            '--no-deps',
            '--force-recreate',
            '--always-recreate-deps',
            '--no-recreate',
            '--no-build',
            '--no-start',
            '--build',
            '--abort-on-container-exit',
            '--timeout', 20,
            '--renew-anon-volumes',
            '--remove-orphans',
            '--exit-code-from',
            '--scale', 'key1=1', '--scale', 'key2=2',
            'myService1', 'myService2'
        ]);
    });
});
