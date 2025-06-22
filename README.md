## Banks-NG

A tiny library that provides Nigerian bank information.

### Install

- `yarn add --exact banks-ng`
- `npm i --save-exact --save banks-ng`


### How to use

```javascript
import { getBanks, getBank } from 'banks-ng';

const result = getBanks();

//[
//  {
//   id: 0,
//   name: 'Access Bank',
//   logo: 'https://cdn.jsdelivr.net/npm/banks-ng@<version>/dist/access-bank.png',
//  },
// ...
// ]

const index = 0; // Use the id above as reference.
const result = getBank(index);

// {
//   name: 'Access Bank',
//   slug: 'access-bank',
//   code: '801',
//   ussd: '*901#'
//   logo: 'https://cdn.jsdelivr.net/npm/banks-ng@<version>/dist/access-bank.png',
//   address: '999c, Danmole Street, Off Idejo Street, Off Adeola Odeku Street, Victoria Island, Lagos',
//  }
```

### Report Bugs

Well, #$%$ happens, please report here https://github.com/cozzbie/banks-ng/issues


### License

[MIT © Timi Aiyemo](https://cozzbie.mit-license.org/)