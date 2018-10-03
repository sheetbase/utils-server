# Sheetbase Module: utils-server

Useful utilities for Sheetbase backend app.

[![License][license_badge]][license_url] [![clasp][clasp_badge]][clasp_url] [![Support me on Patreon][patreon_badge]][patreon_url] [![PayPal][paypal_donate_badge]][paypal_donate_url] [![Ask me anything][ask_me_badge]][ask_me_url]

# Install

- NPM: ``$ npm install --save @sheetbase/utils-server``

- As library: ``1DvgE7s0BRsgiI8uVvnx3OaIVHVYskgA0CaF0ykKPDa-IVl6csneLQQxT`` (set Indentifier to **Utils** and select latest version, [view code](https://script.google.com/d/1DvgE7s0BRsgiI8uVvnx3OaIVHVYskgA0CaF0ykKPDa-IVl6csneLQQxT/edit?usp=sharing))

## Usage

```ts
// o2a
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

// a2o
const a = [1, 2, {a: 1, b: 2, c: 3}, {key: 'd', d1: 2, d2: 2}];
const o = Utils.a2o(a);
Logger.log(o);

// uid
Logger.log( Utils.uid() );
Logger.log( Utils.uid(32) );
Logger.log( Utils.uid(12, '1') );
```

## License

[MIT][license_url]

[license_badge]: https://img.shields.io/github/license/mashape/apistatus.svg
[license_url]: https://github.com/sheetbase/module-utils-server/blob/master/LICENSE

[clasp_badge]: https://img.shields.io/badge/built%20with-clasp-4285f4.svg
[clasp_url]: https://github.com/google/clasp

[patreon_badge]: https://ionicabizau.github.io/badges/patreon.svg
[patreon_url]: https://www.patreon.com/lamnhan

[paypal_donate_badge]: https://ionicabizau.github.io/badges/paypal_donate.svg
[paypal_donate_url]: https://www.paypal.me/lamnhan

[ask_me_badge]: https://img.shields.io/badge/ask/me-anything-1abc9c.svg
[ask_me_url]: https://m.me/sheetbase