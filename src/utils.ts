import { IUtilsModule } from './types/module';
export function utilsModuleExports(): IUtilsModule {

    class Utils {

        constructor() { }

        /**
        * Turn object into array
        * @param {object} object - JSON data
        * @return {array}
        */
        o2a(object: {[key: string]: any}, keyName: string = '$key'): any[] {
            let array = [];
            for (const key of Object.keys(object)) {
                if (object[key] instanceof Object) {
                    object[key][keyName] = key;
                } else {
                    const value = object[key];
                    object[key] = {};
                    object[key][keyName] = key;
                    object[key]['value'] = value;
                }
                array.push(object[key]);
            }
            return array;
        }

        /**
         * Turn array into object
         * @param {array} array - input array
         * @return {object}
         */
        a2o(array: any[], keyName: string = 'key'): {[key: string]: any} {
            let object = {};
            for (let i = 0; i < (array || []).length; i++) {
                let item = array[i];
                object[item[keyName] || item['slug'] || (item['id'] ? '' + item['id'] : null) || (item['#'] ? '' + item['#'] : null) || ('' + Math.random() * 1E20)] = item;
            }
            return object;
        }

        /**
         * Generate unique UID
         * @return {string} uid
         */
        uid(length: number = 12, startWith: string = '-') {
            let maxLoop = length + 12;
            let ASCII_CHARS = startWith + '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
            let lastPushTime = 0;
            let lastRandChars = [];
            let now = new Date().getTime();
            let duplicateTime = (now === lastPushTime);
            lastPushTime = now;
            let timeStampChars = new Array(8);
            let i;
            for (i = 7; i >= 0; i--) {
                timeStampChars[i] = ASCII_CHARS.charAt(now % 64);
                now = Math.floor(now / 64);
            }
            let id = timeStampChars.join('');
            if (!duplicateTime) {
                for (i = 0; i < maxLoop; i++) {
                    lastRandChars[i] = Math.floor(Math.random() * 64);
                }
            } else {
                for (i = maxLoop - 1; i >= 0 && lastRandChars[i] === 63; i--) {
                    lastRandChars[i] = 0;
                }
                lastRandChars[i]++;
            }
            for (i = 0; i < maxLoop; i++) {
                id += ASCII_CHARS.charAt(lastRandChars[i]);
            }
            return id.substr(0, length);
        }
    }

    return new Utils();
}