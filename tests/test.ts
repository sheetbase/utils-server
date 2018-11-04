import { expect } from 'chai';
import { describe, it } from 'mocha';

import * as Utils from '../src/public_api';

describe('Utils Server test', () => {

    it('#o2a should work', () => {
        const OBJ = { a: 1, b: 2, c: { c1: 1, c2: 2 } };
        const ARR = [
            { $key: 'a', value: 1 },
            { $key: 'b', value: 2 },
            { $key: 'c', c1: 1, c2: 2 },
        ];
        const arr = Utils.o2a(OBJ);
        expect(arr).deep.equal(ARR);
    });

    it('#a2o should work', () => {
        const ARR = [{id: 'a', a: 1}, {key: 'b', b: 1}, {slug: 'c', b: 1}];
        const OBJ = {
            a: {id: 'a', a: 1},
            b: {key: 'b', b: 1},
            c: {slug: 'c', b: 1},
        };
        const obj = Utils.a2o(ARR);
        expect(obj).deep.equal(OBJ);
    });

    it('#uniqueId should works', () => {
        const id = Utils.uniqueId();
        expect(id.substr(0, 1)).to.equal('-');
        expect(id.length).to.equal(12);
    });

    it('#uniqueId should create id (32 chars)', () => {
        const id = Utils.uniqueId(32);
        expect(id.length).to.equal(32);
    });

    it('#uniqueId should create id (12 chars, start with 1)', () => {
        const id = Utils.uniqueId(null, '1');
        expect(id.substr(0, 1)).to.equal('1');
    });
});