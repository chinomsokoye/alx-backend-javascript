Curriculum <br>
**Short Specializations** <br>

# 0x04. Typescript

```JavaScript```
```TypeScript```

## Resources

**Read or watch:**

* [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## General Requirements

* Files transpiled on Ubuntu 18.04
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* Mandatory `README.md` file
* Code should use the `ts` extension when possible
* TS Code checked using the `jest` (version 24.9.*) [Jest Testing Framework](https://www.jestjs.io)
* TypeScript compiler should not show any warning or error when compiling code

## Install Jest, and ESLint

In your project directory:

* Install Jest using: `npm install --save-dev jest`
* Install ESLint using: `npm install --save-dev eslint`

## Configuration Files

Please use these configuration files

`package.json`
<details>
  <summary>Click to show/hide file contents</summary>

  ```json
  {
	"name": "typescript_dependencies",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
	  "start-dev": "webpack-dev-server --open",
	  "build": "webpack",
	  "test": "jest"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"devDependencies": {
	  "@babel/plugin-proposal-export-default-from": "^7.5.2",
	  "@babel/preset-typescript": "^7.7.2",
	  "@types/jest": "^24.0.23",
	  "@typescript-eslint/eslint-plugin": "^2.4.0",
	  "@typescript-eslint/parser": "^2.4.0",
	  "clean-webpack-plugin": "^3.0.0",
	  "fork-ts-checker-webpack-plugin": "^1.5.1",
	  "html-webpack-plugin": "^3.2.0",
	  "jest": "^24.9.0",
	  "source-map": "^0.7.3",
	  "ts-jest": "^24.1.0",
	  "ts-loader": "^6.2.0".
	  "typescript": "^3.6.4",
	  "webpack": "^4.41.2",
	  "webpack-cli": "^3.3.9",
	  "webpack-dev-server": "^3.8.2"
	}
  }
  ```
</details>

`webpack.config.js`
<details>
  <summary>Click to show/hide file contents</summary>

  ```typescript
  const path = require("path");
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  const ForkTsCheckerWebPackPlugin = require('fork-ts-checker-webpack-plugin');

  module.exports = {
    entry: "./js/main.ts",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
	  test: /\.tsx?$/,
	  loader: 'ts-loader',
	  options: {
	    transpileOnly: true
	  }
	}
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
      contentBase: "./dist"
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "Development"
      })
    ],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
    }
  };
  ```
</details>

`tsconfig.json`
<details>
  <summary>Click to show/hide file contents</summary>

  ```json
  {
    "compilerOptions": {
      "outDir": "./dist/",
      "sourceMap": true,
      "nonImplicitAny": true,
      "module": "es6",
      "target": "es5",
      "allowJs": true,
      "moduleResolution": "node"
    }
  }
  ```
</details>

`.eslintrc.js`
<details>
  <summary>Click to show/hide file contents</summary>

  ```typescript
  module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended', // Uses the recommmeded rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
    },
  };
  ```
</details>

### Finally...
