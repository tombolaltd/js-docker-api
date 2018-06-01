import { expect } from 'chai';
import 'mocha';
import * as converters from '../../../../src/internal/command-converters/docker-compose';

describe('The build function', () => {
    it('Passing no parameter object results in an empty list', ()  => {
       const result: any[] = DockerComposeArgConverters.build();
       expect(result).to.deep.equal([]);
    });

    it('Passing empty parameter object results in an empty list', ()  => {
        const result: any[] = DockerComposeArgConverters.build({});
        expect(result).to.deep.equal([]);
    });

    it('Passing options value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.build({
            buildOptions: {
                'compress': true,
                'pull': false,
                'build-arg': [{key1: 'val1'}, {key2: 2}]
            }
        });
        expect(result).to.deep.equal(['--compress', '--build-arg', 'key1=val1', '--build-arg', 'key2=2']);
    });

    it('Passing single build args value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.build({buildArguments: { key1: 'value1'}});
        expect(result).to.deep.equal(['--build-arg', 'key1=value1']);
    });

    it('Passing build args array value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.build({buildArguments: [{ key1: 'value1'}, { key2: 'value2'}]});
        expect(result).to.deep.equal(['--build-arg', 'key1=value1', '--build-arg', 'key2=value2']);
    });

    it('Passing service value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.build({ services: ['qux']});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing service array populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.build({ services: ['qux', 'quux']});
        expect(result).to.deep.equal(['qux', 'quux']);
    });

    it('Passing all options value populates correctly - in the expected order', ()  => {
        const result: any[] = DockerComposeArgConverters.build({
            buildArguments: [{ key1: 'value1'}, { key2: 'value2'}],
            buildOptions: {
                'compress': true,
                'pull': false,
                'build-arg': [{key1: 'val1'}, {key2: 2}]
            },
            services: ['qux', 'quux']
        });
        expect(result).to.deep.equal([
            '--compress', '--build-arg', 'key1=val1', '--build-arg', 'key2=2',
            '--build-arg', 'key1=value1', '--build-arg', 'key2=value2',
            'qux', 'quux'
        ]);
    });
});
