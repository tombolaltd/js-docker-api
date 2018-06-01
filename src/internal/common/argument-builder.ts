import { KeyValuePair } from '@common/key-value-pair';

export class ArgumentBuilder {
    private args: any = [];

    public pushFlaggedKeyValueArgs(argFlagName: string, values: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined): void {
        if (typeof(values) !== 'undefined') {
            if (Array.isArray(values)){
                values.forEach((value: any) => {
                    this.pushFlaggedKeyValueArg(argFlagName, value);
                });
            } else {
                this.pushFlaggedKeyValueArg(argFlagName, values);
            }
        }
    }

    public pushPlainArgs(values: any | any[] | undefined): void {
        if (typeof(values) !== 'undefined') {
            if (Array.isArray(values)){
                values.forEach((value: any) => {
                    this.pushPlainArg(value);
                });
            } else {
                this.pushPlainArg(values);
            }
        }
    }

    public pushFlaggedArgs(flag: string, values: any | any[] | undefined): void {
        if (typeof(values) !== 'undefined') {
            if (Array.isArray(values)){
                values.forEach((value: any) => {
                    this.pushFlaggedArg(flag, value);
                });
            } else {
                this.pushFlaggedArg(flag, values);
            }
        }
    }

    public pushEqualArgs(flag: string, values: any | any[] | undefined): void {
        if (typeof(values) !== 'undefined') {
            if (Array.isArray(values)){
                values.forEach((value: any) => {
                    this.pushEqualArg(flag, value);
                });
            } else {
                this.pushEqualArg(flag, values);
            }
        }
    }

    public get arguments(): any[] {
        return this.args;
    }

    /**
     * Used when passing as simple flag e.g. { foo: true } => "--foo"
     *
     * @param {string} flag the flag to add
     * @param {boolean} [value] whether or not to add the flag.
     * @memberof ArgumentBuilders
     */
    public pushBooleanArgs(flag: string, value?: boolean): void {
        if (typeof(value) !== 'undefined' && value) {
            this.pushPlainArg(flag);
        }
    }

    private pushFlaggedArg(flag: string, value: any | undefined): void {
        if (typeof(value) !== 'undefined' && this.canAddValue(value)) {
            this.args.push(flag);
            this.args.push(value);
        }
    }

    private pushPlainArg(value: any | undefined): void {
        if (typeof(value) !== 'undefined' && this.canAddValue(value)) {
            this.args.push(value);
        }
    }

    private pushEqualArg(key: string, value: any | undefined): void {
        if (typeof(value) !== 'undefined' && this.canAddValue(value)) {
            this.args.push(`${key}=${value}`);
        }
    }

    private pushFlaggedKeyValueArg(argFlagName: string, value: KeyValuePair<any> | undefined): void {
        if (typeof(value) !== 'undefined' && this.canAddValue(value)) {
            // kvp.jkey is coming back undefined, do this instead.
            const key = Object.getOwnPropertyNames(value)[0];
            this.args.push(argFlagName);
            this.args.push(`${key}=${value[key]}`);
        }
    }

    private canAddValue(value: any): boolean {
        if (value == null) {
            return false;
        }
        return value !== '';
    }
}
