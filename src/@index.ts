/**
 * 
 * Name: @sheetbase/utils-server
 * Description: Useful utilities for Sheetbase backend app.
 * Version: 0.0.1
 * Author: Sheetbase
 * Homepage: https://sheetbase.net
 * License: MIT
 * Repo: https://github.com/sheetbase/module-utils-server.git
 *
 */

import { IUtilsModule } from './types/module';
declare const utilsModuleExports: {(): IUtilsModule};
const utils = utilsModuleExports();
const Utils = utils;
const UTILS = utils;

for (const key of Object.keys(utils)) {
	this[key] = utils[key];
}

export { utils, Utils, UTILS };

export function sheetbase_utils_example1(): void {
    const o = {
        a: 1,
        b: 2,
        c: {
            c1: 1,
            c2: 2
        }
    };
    const a = Utils.o2a(o);
    Logger.log(a);
}

export function sheetbase_utils_example2(): void {
    const a = [1, 2, {a: 1, b: 2, c: 3}];
    const o = Utils.a2o(a);
    Logger.log(o);
}

export function sheetbase_utils_example3(): void {
    Logger.log( Utils.uid() );
    Logger.log( Utils.uid(32) );
    Logger.log( Utils.uid(12, '1') );
}