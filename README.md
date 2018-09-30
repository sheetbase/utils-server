# Sheetbase Module: utils-server

Useful utilities for Sheetbase backend app.

# Install

- NPM: ``$ npm install --save @sheetbase/utils-server``

- As library: ``1DvgE7s0BRsgiI8uVvnx3OaIVHVYskgA0CaF0ykKPDa-IVl6csneLQQxT`` (set Indentifier to **Utils**, [view code](https://script.google.com/d/1DvgE7s0BRsgiI8uVvnx3OaIVHVYskgA0CaF0ykKPDa-IVl6csneLQQxT/edit?usp=sharing))

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
const a = [1, 2, {a: 1, b: 2, c: 3}];
const o = Utils.a2o(a);
Logger.log(o);

// uid
Logger.log( Utils.uid() );
Logger.log( Utils.uid(32) );
Logger.log( Utils.uid(12, '1') );

```

## License

[MIT][license-url]

[license-url]: https://github.com/sheetbase/module-utils-server/blob/master/LICENSE