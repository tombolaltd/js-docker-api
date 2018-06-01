import { downOptionsConverter } from '@docker-compose-command-converters/down-options-converter';
import { expect } from 'chai';
import 'mocha';

describe('The downOptionsConverter function', () => {
    it('Passing empty parameter object results in an empty list', ()  => {
        const result: any[] = downOptionsConverter({});
        expect(result).to.deep.equal([]);
    });

    it('The DockerCompose value is not converted by this function', ()  => {
       const result: any[] = downOptionsConverter({
           dockerComposeOptions: {
               verbose: true,
           }
       });
       expect(result).to.deep.equal([]);
    });

    it('Passing options value populates correctly', ()  => {
        const result: any[] = downOptionsConverter({
            rmi: 'all',
            removeOrphans: true,
            volumes: true,
            timeout: 100
        });
        expect(result).to.deep.equal([
            '--rmi', 'all',
            '--volumes',
            '--remove-orphans',
            '--timeout', 100]
        );
    });
});
