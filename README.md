# install project

```bash
pnpm init
```

"type": "module",

# install jest

tambahkan pada development devendensi
https://jestjs.io/docs/getting-started

```sh
pnpm add --save-dev jest
```

## run

```sh
# terminal
node_modules/.bin/jest # menggunakan windows
./node_modules/.bin/jest # menggunakan linux/mac
pnpm test # menjalankan menggunakan package.json
npx jest # ini adalah perintah singkat yang bekerja seperti (node_modules/.bin/jest)
```

# Using Babel

Babel berfungsi untuk membuat jest mengenali ESmodule
install

https://jestjs.io/docs/getting-started

```sh
pnpm add --save-dev babel-jest @babel/core @babel/preset-env
```

buat file babel.config.js on root

```js
export default {
  presets: ["@babel/preset-env"],
};
```

maka sekarang code kita sudah suport ESModule

# Configuring Jest

Configuring Jest digunakan untuk menambahkan fitur
https://jestjs.io/docs/configuration

silahkan buat file jest.config.js

```js
export const verbose = true;
```

# Jest Command Line Interface

digunakan untuk melakukan perintah lebih spesipik

```sh
pnpm jest --help

--runTestsByPath # menjalankan unites spesipik
-t, --testNamePattern # menjalankan unites spesipik dan pattern tertentu

#
pnpm jest test/sum.test.js # or
pnpm jest --runTestsByPath test/sum.test.js

#
pnpm jest --testNamePattern "test sum function 3"
```
