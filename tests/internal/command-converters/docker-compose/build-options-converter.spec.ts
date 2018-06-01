import { buildOptionsConverter } from '@docker-compose-command-converters/build-options-converter';
import { expect } from 'chai';
import 'mocha';

describe('The buildOptionsConverter function', () => {
    it('Passing empty parameter object results in an empty list', ()  => {
        const result: any[] = buildOptionsConverter({});
        expect(result).to.deep.equal([]);
    });

    it('Passing options value populates correctly', ()  => {
        const result: any[] = buildOptionsConverter({
            compress: true,
            pull: false,
            buildArguments: [{key1: 'val1'}, {key2: 2}]
        });
        expect(result).to.deep.equal(['--compress', '--build-arg', 'key1=val1', '--build-arg', 'key2=2']);
    });

    it('Passing single build args value populates correctly', ()  => {
        const result: any[] = buildOptionsConverter({buildArguments: { key1: 'value1'}});
        expect(result).to.deep.equal(['--build-arg', 'key1=value1']);
    });

    it('Passing build args array value populates correctly', ()  => {
        const result: any[] = buildOptionsConverter({buildArguments: [{ key1: 'value1'}, { key2: 'value2'}]});
        expect(result).to.deep.equal(['--build-arg', 'key1=value1', '--build-arg', 'key2=value2']);
    });

    it('Passing service value populates correctly', ()  => {
        const result: any[] = buildOptionsConverter({ services: ['qux']});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing service array populates correctly', ()  => {
        const result: any[] = buildOptionsConverter({ services: ['qux', 'quux']});
        expect(result).to.deep.equal(['qux', 'quux']);
    });

    it('The DockerCompose value is not converted by this function', ()  => {
        const result: any[] = buildOptionsConverter({
            dockerComposeOptions: {
                verbose: true,
            }
        });
        expect(result).to.deep.equal([]);
    });

    it('Passing all options value populates correctly - in the expected order', ()  => {
        const result: any[] = buildOptionsConverter({
            buildArguments: [{ key1: 'value1'}, { key2: 2}],
            compress: true,
            pull: true,
            forceRm: true,
            noCache: true,
            memory: '2GB',
            services: ['qux', 'quux'],
            dockerComposeOptions: {
                verbose: true,
            }
        });
        expect(result).to.deep.equal([
            '--compress',
            '--force-rm',
            '--no-cache',
            '--pull',
            '--memory', '2GB',
            '--build-arg', 'key1=value1', '--build-arg', 'key2=2',
            'qux', 'quux'
        ]);
    });
});
