import { KeyValuePair } from '../key-value-pair';
export declare class ArgumentBuilders {
    static pushFlaggedKeyValueArgs(args: any[], argFlagName: string, values: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined): void;
    static pushPlainArgs(args: any[], values: any | any[] | undefined): void;
    static pushFlaggedArgs(args: any[], flag: string, values: any | any[] | undefined): void;
    private static pushFlaggedArg(args, flag, value);
    private static pushPlainArg(args, value);
    private static pushFlaggedKeyValueArg(args, argFlagName, value);
}
