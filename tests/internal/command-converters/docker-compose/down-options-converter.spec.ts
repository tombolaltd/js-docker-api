import { expect } from 'chai';
import 'mocha';
import * as converters from '../../../../src/internal/command-converters/docker-compose';

describe('The down function', () => {
    it('Passing no parameter object results in an empty list', ()  => {
       const result: any[] = DockerComposeArgConverters.down();
       expect(result).to.deep.equal([]);
    });

    it('Passing empty parameter object results in an empty list', ()  => {
        const result: any[] = DockerComposeArgConverters.down({});
        expect(result).to.deep.equal([]);
    });

    it('Passing options value populates correctly', ()  => {
        const result: any[] = DockerComposeArgConverters.down({
            downOptions: {'remove-orphans': true, 'volumes': false, 'timeout': 100}
        });
        expect(result).to.deep.equal(['--remove-orphans', '--timeout', 100]);
    });

});
