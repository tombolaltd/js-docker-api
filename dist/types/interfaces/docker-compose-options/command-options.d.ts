import { ICommandBaseOptions } from './command-base-options';
export interface ICommandOptions extends ICommandBaseOptions {
    command?: string;
    commandArguments?: any | any[];
}
