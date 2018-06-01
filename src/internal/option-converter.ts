// TODO: Depreacate when docker command ported
import { ArgumentBuilders } from './argument-builders';

function addOption(returnedArray: any[], key: string, value: any): void {
    const flag = `--${key}`;
    const valueType = typeof(value);
    if (valueType === 'boolean'){
        if (value){
            // This is a flag, dont set it to a boolean so "--detach"
            // rather then "--detach true"
            ArgumentBuilders.pushPlainArgs(returnedArray, flag);
        }
    } else if (valueType === 'object') {
        // Assuming any object is a Key value pair. If we need to include json as an argument, make it a string!
        ArgumentBuilders.pushFlaggedKeyValueArgs(returnedArray, flag, value);
    }
    else {
        ArgumentBuilders.pushPlainArgs(returnedArray, [flag, value]);
    }
}

function addOptions(returnedArray: any[], key: string, values: any[]): void {
    for (const option of values) {
        addOption(returnedArray, key, option);
    }
}

export function optionConverter (options?: any): any[]{
    const returnedArray: any[] = [];

    for (const key in options) {
        if (options.hasOwnProperty(key)){
            const value = options[key];
            if (Array.isArray(value)) {
                addOptions(returnedArray, key, value);
            } else {
                addOption(returnedArray, key, value);
            }
        }
    }

    return returnedArray;
}
