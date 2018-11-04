exports.__esModule = true;
var chai_1 = require("chai");
var mocha_1 = require("mocha");
var Utils = require("../src/public_api");
mocha_1.describe('Utils Server test', function () {
    mocha_1.it('#o2a should work', function () {
        var OBJ = { a: 1, b: 2, c: { c1: 1, c2: 2 } };
        var ARR = [
            { $key: 'a', value: 1 },
            { $key: 'b', value: 2 },
            { $key: 'c', c1: 1, c2: 2 },
        ];
        var arr = Utils.o2a(OBJ);
        chai_1.expect(arr).deep.equal(ARR);
    });
    mocha_1.it('#a2o should work', function () {
        var ARR = [{ id: 'a', a: 1 }, { key: 'b', b: 1 }, { slug: 'c', b: 1 }];
        var OBJ = {
            a: { id: 'a', a: 1 },
            b: { key: 'b', b: 1 },
            c: { slug: 'c', b: 1 }
        };
        var obj = Utils.a2o(ARR);
        chai_1.expect(obj).deep.equal(OBJ);
    });
    mocha_1.it('#uniqueId should works', function () {
        var id = Utils.uniqueId();
        chai_1.expect(id.substr(0, 1)).to.equal('-');
        chai_1.expect(id.length).to.equal(12);
    });
    mocha_1.it('#uniqueId should create id (32 chars)', function () {
        var id = Utils.uniqueId(32);
        chai_1.expect(id.length).to.equal(32);
    });
    mocha_1.it('#uniqueId should create id (12 chars, start with 1)', function () {
        var id = Utils.uniqueId(null, '1');
        chai_1.expect(id.substr(0, 1)).to.equal('1');
    });
});
