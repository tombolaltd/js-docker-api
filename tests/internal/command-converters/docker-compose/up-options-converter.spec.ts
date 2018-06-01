import { expect } from 'chai';
import 'mocha';
import * as converters from '../../../../src/internal/command-converters/docker-compose';

describe('The up function', () => {
    it('Passing no parameter object results in an empty list', ()  => {
       const result: any[] = DockerComposeArgConverters.up();
       expect(result).to.deep.equal([]);
    });

    it('Passing empty parameter object results in an empty list', ()  => {
        const result: any[] = DockerComposeArgConverters.up({});
        expect(result).to.deep.equal([]);
    });

    it('Passing options array populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.up({
            upOptions: {
                'detach': true,
                'no-color': false
            }
        });
        expect(result).to.deep.equal(['--detach']);
    });

    it('Passing single scale variable value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.up({scale: { key1: 1}});
        expect(result).to.deep.equal(['--scale', 'key1=1']);
    });

    it('Passing build scale variable array value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.up({scale: [{ key1: 1}, { key2: 2}]});
        expect(result).to.deep.equal(['--scale', 'key1=1', '--scale', 'key2=2']);
    });

    it('Passing service value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.up({ services: 'qux'});
        expect(result).to.deep.equal(['qux']);
    });

    it('Passing service array populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.up({ services: ['qux', 'quux']});
        expect(result).to.deep.equal(['qux', 'quux']);
    });

    it('Passing all options value populates correctly - in the expected order', ()  => {
        const result: any[] = DockerComposeArgConverters.up({
            upOptions: {
                'detach': true,
                'no-color': false,
                'no-deps': true,
                'scale': [{ myService3: 3}, { myService4: 4}]
            },
            scale: [{ key1: 1}, { key2: 2}],
            services: ['myService1', 'myService2']
        });
        expect(result).to.deep.equal([
            '--detach', '--no-deps',
            '--scale', 'myService3=3', '--scale', 'myService4=4',
            '--scale', 'key1=1', '--scale', 'key2=2',
            'myService1', 'myService2'
        ]);
    });
});
