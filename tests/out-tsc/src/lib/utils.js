exports.__esModule = true;
function o2a(object, keyName) {
    if (keyName === void 0) { keyName = '$key'; }
    var array = [];
    for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
        var key = _a[_i];
        if (object[key] instanceof Object) {
            object[key][keyName] = key;
        }
        else {
            var value = object[key];
            object[key] = {};
            object[key][keyName] = key;
            object[key]['value'] = value;
        }
        array.push(object[key]);
    }
    return array;
}
exports.o2a = o2a;
function a2o(array, keyName) {
    if (keyName === void 0) { keyName = 'key'; }
    var object = {};
    for (var i = 0; i < (array || []).length; i++) {
        var item = array[i];
        object[item[keyName] ||
            item['slug'] ||
            (item['id'] ? '' + item['id'] : null) ||
            (item['#'] ? '' + item['#'] : null) ||
            ('' + Math.random() * 1E20)] = item;
    }
    return object;
}
exports.a2o = a2o;
function uniqueId(length, startWith) {
    if (length === void 0) { length = 12; }
    if (startWith === void 0) { startWith = '-'; }
    var maxLoop = length - 8;
    var ASCII_CHARS = startWith + '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
    var lastPushTime = 0;
    var lastRandChars = [];
    var now = new Date().getTime();
    var duplicateTime = (now === lastPushTime);
    lastPushTime = now;
    var timeStampChars = new Array(8);
    var i;
    for (i = 7; i >= 0; i--) {
        timeStampChars[i] = ASCII_CHARS.charAt(now % 64);
        now = Math.floor(now / 64);
    }
    var uid = timeStampChars.join('');
    if (!duplicateTime) {
        for (i = 0; i < maxLoop; i++) {
            lastRandChars[i] = Math.floor(Math.random() * 64);
        }
    }
    else {
        for (i = maxLoop - 1; i >= 0 && lastRandChars[i] === 63; i--) {
            lastRandChars[i] = 0;
        }
        lastRandChars[i]++;
    }
    for (i = 0; i < maxLoop; i++) {
        uid += ASCII_CHARS.charAt(lastRandChars[i]);
    }
    return uid;
}
exports.uniqueId = uniqueId;
function honorData(data) {
    if (data === void 0) { data = {}; }
    for (var key in data) {
        if (data[key] === '' || data[key] === null || data[key] === undefined) {
            // delete null key
            delete data[key];
        }
        else if ((data[key] + '').toLowerCase() === 'true') {
            // boolean TRUE
            data[key] = true;
        }
        else if ((data[key] + '').toLowerCase() === 'false') {
            // boolean FALSE
            data[key] = false;
        }
        else if (!isNaN(data[key])) {
            // number
            if (Number(data[key]) % 1 === 0) {
                // tslint:disable-next-line:ban
                data[key] = parseInt(data[key], 2);
            }
            if (Number(data[key]) % 1 !== 0) {
                // tslint:disable-next-line:ban
                data[key] = parseFloat(data[key]);
            }
        }
        else {
            // JSON
            try {
                data[key] = JSON.parse(data[key]);
            }
            catch (e) {
                // continue
            }
        }
    }
    return data;
}
exports.honorData = honorData;
