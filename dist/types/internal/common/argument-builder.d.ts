import { KeyValuePair } from '@common/key-value-pair';
export declare class ArgumentBuilder {
    private args;
    pushFlaggedKeyValueArgs(argFlagName: string, values: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined): void;
    pushPlainArgs(values: any | any[] | undefined): void;
    pushFlaggedArgs(flag: string, values: any | any[] | undefined): void;
    pushEqualArgs(flag: string, values: any | any[] | undefined): void;
    readonly arguments: any[];
    pushBooleanArgs(flag: string, value?: boolean): void;
    private pushFlaggedArg(flag, value);
    private pushPlainArg(value);
    private pushEqualArg(key, value);
    private pushFlaggedKeyValueArg(argFlagName, value);
    private canAddValue(value);
}
