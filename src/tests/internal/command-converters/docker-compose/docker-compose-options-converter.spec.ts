
import { dockerComposeOptionsConverter } from '@docker-compose-command-converters';
import { expect } from 'chai';
import 'mocha';

describe('The dockerComposeOptionsConverter function', () => {
    it('Passing empty parameter object results in an empty list', ()  => {
        const result: any[] = dockerComposeOptionsConverter({});
        expect(result).to.deep.equal([]);
    });

    it('Passing options value populates correctly', ()  => {
        const result: any[] = dockerComposeOptionsConverter({
            projectName: 'project-name',
            verbose: true,
            logLevel: 'INFO',
            noAnsi: true,
            version: true,
            host: 'host',
            tls: true,
            tlsCACert: 'tlscacert',
            tlsCert: 'tlscert',
            tlsKey: 'tlskey',
            tlsVerify: true,
            skipHostnameCheck: true,
            projectDirectory: 'project-directory',
            compatibility: true,
        });

        expect(result).to.deep.equal([
            '--project-name', 'project-name',
            '--verbose',
            '--log-level', 'INFO',
            '--no-ansi',
            '--version',
            '--host', 'host',
            '--tls',
            '--tlscacert', 'tlscacert',
            '--tlscert', 'tlscert',
            '--tlskey', 'tlskey',
            '--tlsverify',
            '--skip-hostname-check',
            '--project-directory', 'project-directory',
            '--compatibility'
        ]);
    });
});
