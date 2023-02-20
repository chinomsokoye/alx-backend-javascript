Curriculum <br>
**Short Specialization** <br>

# 0x05. NodeJS Basics

`Back-end` `JavaScript` `ES6` `NodeJS` `ExpressJS`

## Resources

**Read or watch:**

* [Node JS getting started](https://www.nodejs.org/en/docs/guide/getting-started-guide/)
* [Process API doc](https://www.node.readthedocs.io/en/latest/api/process/)
* [Child process](https://www.nodejs.org/api/child_process.html)
* [Express getting started](https://www.expressjs.com/en/starter/installing.html)
* [Mocha documentation](https://www.mochajs.org)
* [Nodemon documentation](https://www.github.com/remy/nodemon#nodemon)

## Requirements

* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* Files intrepreted/compiled using Ubuntu 18.04 LTS on `node` (version 12.x.x)
* File must end with a new line
* Mandatory `README.md` file
* Code should use the `js` extension
* Code tested using `Jest` and the command `npm run test`
* Code wil be verified against lint using ESLint
* Code needs to pass entire tests and lint, verify entire project running `npm run full-test`
* All functions/classes must be exported using the format: `module.exports = myFunction;`

## Provided Files

`database.csv`
```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

`package.json`
<details>
  <summary>Click to show/hide file contents</summary>

  ```json
  {
    "name": "node_js_basics",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "lint": "./node_modules/.bin/eslint",
      "check-lint": "lint [0-9]*.js",
      "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
      "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "chai-http": "^4.3.0",
      "express": "^4.17.1"
    },
    "devDependencies": {
      "babel-cli": "^6.26.0",
      "babel-preset-env": "^1.7.0",
      "nodemon": "^2.0.2",
      "eslint": "^6.4.0",
      "eslint-config-airbnb-base": "^14.0.0",
      "eslint-plugin-import": "^2.18.2",
      "eslint-plugin-jest": "^22.17.0",
      "chai": "^4.2.0",
      "mocha": "^6.2.2",
      "request": "^2.88.0",
      "sinon": "^7.5.0"
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
    parseOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
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
      }
    ]
  };
  ```
</details>

**and...** <br>
Don't forget to run `$ npm install` when `package.json` file is available

## Finally...
