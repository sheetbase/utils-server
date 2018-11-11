# ⛔️ DEPRECATED

We have merged this repo with [@sheetbase/core-server](https://github.com/sheetbase/core-server), please use it instead.

# Sheetbase Module: @sheetbase/utils-server

Useful utilities for Sheetbase backend app.

<!-- <block:header> -->

[![Build Status](https://travis-ci.com/sheetbase/utils-server.svg?branch=master)](https://travis-ci.com/sheetbase/utils-server) [![Coverage Status](https://coveralls.io/repos/github/sheetbase/utils-server/badge.svg?branch=master)](https://coveralls.io/github/sheetbase/utils-server?branch=master) [![NPM](https://img.shields.io/npm/v/@sheetbase/utils-server.svg)](https://www.npmjs.com/package/@sheetbase/utils-server) [![License][license_badge]][license_url] [![clasp][clasp_badge]][clasp_url] [![Support me on Patreon][patreon_badge]][patreon_url] [![PayPal][paypal_donate_badge]][paypal_donate_url] [![Ask me anything][ask_me_badge]][ask_me_url]

<!-- </block:header> -->

## Install

Using npm: `npm install --save @sheetbase/utils-server`

```ts
import * as Utils from "@sheetbase/utils-server";
```

As a library: `1DvgE7s0BRsgiI8uVvnx3OaIVHVYskgA0CaF0ykKPDa-IVl6csneLQQxT`

Set the _Indentifier_ to **UtilsModule** and select the lastest version, [view code](https://script.google.com/d/1DvgE7s0BRsgiI8uVvnx3OaIVHVYskgA0CaF0ykKPDa-IVl6csneLQQxT/edit?usp=sharing).

```ts
declare const UtilsModule: { Utils: any };
const Utils = UtilsModule.Utils;
```

## Usage

- Docs homepage: https://sheetbase.github.io/utils-server

- API reference: https://sheetbase.github.io/utils-server/api

### Examples

```ts
import * as Utils from "./public_api";

export function example1(): void {
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

export function example2(): void {
  const a = [1, 2, { a: 1, b: 2, c: 3 }, { key: "d", d1: 2, d2: 2 }];
  const o = Utils.a2o(a);
  Logger.log(o);
}

export function example3(): void {
  Logger.log(Utils.uniqueId());
  Logger.log(Utils.uniqueId(32));
  Logger.log(Utils.uniqueId(12, "1"));
}

export function example4(): void {
  const o = {
    a: 1,
    a1: "1",
    b: true,
    b1: "TRUE",
    c: { c1: 1, c2: 2 },
    c1: '{ "c1": 1, "c2": 2 }',
    d: null
  };
  const output = Utils.honorData(o);
  Logger.log(output);
}
```

## License

**@sheetbase/utils-server** is released under the [MIT](https://github.com/sheetbase/utils-server/blob/master/LICENSE) license.

<!-- <block:footer> -->

[license_badge]: https://img.shields.io/github/license/mashape/apistatus.svg
[license_url]: https://github.com/sheetbase/utils-server/blob/master/LICENSE
[clasp_badge]: https://img.shields.io/badge/built%20with-clasp-4285f4.svg
[clasp_url]: https://github.com/google/clasp
[patreon_badge]: https://lamnhan.github.io/assets/images/badges/patreon.svg
[patreon_url]: https://www.patreon.com/lamnhan
[paypal_donate_badge]: https://lamnhan.github.io/assets/images/badges/paypal_donate.svg
[paypal_donate_url]: https://www.paypal.me/lamnhan
[ask_me_badge]: https://img.shields.io/badge/ask/me-anything-1abc9c.svg
[ask_me_url]: https://m.me/sheetbase

<!-- </block:footer> -->
