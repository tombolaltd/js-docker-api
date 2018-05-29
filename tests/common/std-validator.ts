import { expect } from 'chai';

export class StdValidator {
    private outputDebugInfo: boolean;
    private stdOutput: any[] = [];

    constructor (outputDebugInfoInfo?: boolean) {
        this.outputDebugInfo = outputDebugInfoInfo || false;
    }

    public onStdOut = (line: any) =>  {
        this.stdOutput.push(line);
        this.outputDebugInfoLine(line);
    }

    public onStdErr = (errLine: any) => {
        this.outputErrorLine(errLine);
    }

    public validate = (result: any[]) => {
        expect(result).is.a('array');
        expect(result).to.deep.equal(this.stdOutput);
    }

    private outputDebugInfoLine (line: string): void {
        if ( this.outputDebugInfo ) {
            console.log(line);
        }
    }

    private outputErrorLine (errorLine: any): void {
        if ( this.outputDebugInfo ) {
            console.error(errorLine);
        }
    }
}
