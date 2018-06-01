// This is needed for JS to resolve like @common/key-value-pair.
// It must be the first executed line https://www.npmjs.com/package/module-alias
/* tslint:disable:no-var-requires */
require('module-alias/register');
/* tslint:enable:no-var-requires */
export * from './docker-compose';
export { KeyValuePair } from '@common/key-value-pair';
export * from '@docker-compose-option-interfaces/index';

// export * from './docker';
// export * from './interfaces/docker-options';
