Curriculum <br>
**Short Specializations** <br>

# 0x00. ES6 Basics

`JavaScript` `ES6`

Concepts

_For this project, look at these concepts:_

* [Modern JavaScript](https://www.alx-intranet.hbtn.io/concepts/541)
* [Software Linter](https://www.alx-intranet.hbtn.io/concepts/542)

## Resources

**Read or watch:**

* [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
* [Statements and declarations](https://www.developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Arrow functions](https://www.developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Default parameters](https://www.developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* [Rest parameter](https://www.developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* [JavaScript ES6 - Iterables and Iterators](https://www.towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

## General Requirements

* Files executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* Mandatory `README.md` file
* Code should use the `js` extension
* Code tested using the [Jest Testing Framework](https://www.jestjs.io) and command `npm run test`
* Code analyzed using the linter [ESLint](https://www.eslint.org) along with specific rules provided
* All functions must be exported
* All test and lint need be passed and verifed by running `npm run full-test`

## Setup

#### Install NodeJS 12.11.x

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
## Install Jest, Babel, and ESLint

In your project directory:

* Install Jest using: `npm install --save-dev jest`
* Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
* Install ESLint using: `npm install --save-dev eslint`

## Configuration Files

`package.json`
<details>
  <summary>Click to show/hide file contents</summary>

  ```json
  {
	"scripts": {
	  "lint": "./node_modules/.bin/eslint",
	  "check-lint": "lint [0-9]*.js",
	  "dev": "npx babel-node",
	  "test": "jest",
	  "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
	},
	"devDependencies": {
	  "@babel/core": "^7.6.0",
	  "@babel/node": "^7.8.0",
	  "@babel/preset-env": "^7.6.0",
	  "eslint": "^6.4.0",
	  "eslint-config-airbnb-base": "^14.0.0",
	  "eslint-plugin-import": "^2.18.2",
	  "eslint-plugin-jest": "^22.17.0",
	  "jest": "^24.9.0"
	}
  }
  ```
</details>

`babel.config.js`
<details>
  <summary>Click to show/hide file contents</summary>

  ```javascript
  module.exports = {
    presets: [
      [
	'@babel/preset-env',
	{
	   targets: {
	     node: 'current',
	   },
	 },
      ],
    ],
  };
  ```
</details>

`.eslintrc.js`
<details>
  <summary>Click to show/hide file contents</summary>

  ```javascript
  module.exports = {
    env: {
      browser: false,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-base',
      'plugin:jest/all',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
	'LabeledStatement',
	'WithStatement',
      ],
    },
    overrides:[
      {
        files: ['*.js'],
	excludedFiles: 'babel.config.js',
      },
    ],
  };
  ```
</details>

### Finally...

Don't forget to run `npm install` when you have the `package.json` file from the terminal of project folder to install necessary project dependencies.
