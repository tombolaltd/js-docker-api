function pushOption(array: any[], key: string, value?: any): void {
    array.push(`--${key}`);
    if (value){
        array.push(value);
    }
}

function addOption(returnedArray: any[], options: any,  key: string): void {
    const value = options[key];
    if (typeof(value) === 'boolean'){
        if (value){
            pushOption(returnedArray, key);
        }
    } else {
        pushOption(returnedArray, key, value);
    }
}
export function optionConverter (options?: any): any[]{
    const returnedArray: any[] = [];

    for (const key in options) {
        if (options.hasOwnProperty(key)){
            addOption(returnedArray, options, key);
        }
    }

    return returnedArray;
}
