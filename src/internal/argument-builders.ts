import { KeyValuePair } from '../key-value-pair';

export class ArgumentBuilders {
    public static pushFlaggedKeyValueArgs(args: any[], argFlagName: string, values: KeyValuePair<any> | Array<KeyValuePair<any>> | undefined): void {
        if (typeof(values) !== 'undefined') {
            if (Array.isArray(values)){
                values.forEach((value: any) => {
                    ArgumentBuilders.pushFlaggedKeyValueArg(args, argFlagName, value);
                });
            } else {
                ArgumentBuilders.pushFlaggedKeyValueArg(args, argFlagName, values);
            }
        }
    }

    public static pushPlainArgs(args: any[], values: any | any[] | undefined): void {
        if (typeof(values) !== 'undefined') {
            if (Array.isArray(values)){
                values.forEach((value: any) => {
                    ArgumentBuilders.pushPlainArg(args, value);
                });
            } else {
                ArgumentBuilders.pushPlainArg(args, values);
            }
        }
    }

    public static pushFlaggedArgs(args: any[], flag: string, values: any | any[] | undefined): void {
        if (typeof(values) !== 'undefined') {
            if (Array.isArray(values)){
                values.forEach((value: any) => {
                    ArgumentBuilders.pushFlaggedArg(args, flag, value);
                });
            } else {
                ArgumentBuilders.pushFlaggedArg(args, flag, values);
            }
        }
    }

    public static pushEqualArgs(args: any[], flag: string, values: any | any[] | undefined): void {
        if (typeof(values) !== 'undefined') {
            if (Array.isArray(values)){
                values.forEach((value: any) => {
                    ArgumentBuilders.pushEqualArg(args, flag, value);
                });
            } else {
                ArgumentBuilders.pushEqualArg(args, flag, values);
            }
        }
    }

    private static pushFlaggedArg(args: any[], flag: string, value: any | undefined): void {
        if (typeof(value) !== 'undefined' && ArgumentBuilders.canAddValue(value)) {
            args.push(flag);
            args.push(value);
        }
    }

    private static pushPlainArg(args: any[], value: any | undefined): void {
        if (typeof(value) !== 'undefined' && ArgumentBuilders.canAddValue(value)) {
            args.push(value);
        }
    }

    private static pushEqualArg(args: any[], key: string, value: any | undefined): void {
        if (typeof(value) !== 'undefined' && ArgumentBuilders.canAddValue(value)) {
            args.push(`${key}=${value}`);
        }
    }

    private static pushFlaggedKeyValueArg(args: any[], argFlagName: string, value: KeyValuePair<any> | undefined): void {
        if (typeof(value) !== 'undefined' && ArgumentBuilders.canAddValue(value)) {
            // kvp.jkey is coming back undefined, do this instead.
            const key = Object.getOwnPropertyNames(value)[0];
            args.push(argFlagName);
            args.push(`${key}=${value[key]}`);
        }
    }

    private static canAddValue(value: any): boolean {
        if (value == null) {
            return false;
        }
        return value !== '';
    }
}
