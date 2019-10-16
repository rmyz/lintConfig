# tiendeo-lint
​
## Installation
​
1. Install `lintConfig`package:

```sh
npm i -D lintConfig
```
​
2. Add these lines to `package.json`:
​
```json
"eslintConfig": {
   "extends": ["./node_modules/lintconfig/.eslintrc.js"]
 },
 "stylelint": {
   "extends": "./node_modules/lintconfig/stylelint.config.js"
 },
```
​
## Usage
​
1. Add these scripts to the `package.json`:
​
```json
"eslint": "./node_modules/.bin/eslint ./src",
"stylelint": "./node_modules/.bin/stylelint \"**/*.{js,jsx}\"",
"format": "npm run prettier -- --write --config ./node_modules/lintconfig/.prettierrc.js",
"prettier": "./node_modules/.bin/prettier \"**/*.{js,jsx,css,json}\"",
```
​
#### Lint JS files
​
```sh
$ npm run eslint [options]
```
​
#### Fix JS files
​
```sh
$ npm run eslint -- --fix [options]
```
​
#### Format JS files
​
```sh
$ npm run format [options]
```
​
#### Lint Styled-Components
​
```sh
$ npm run stylelint [options]
```
​
#### Fix Styled-Components
​
```sh
$ npm run stylelint -- --fix [options]
```
​
## Recommended setup
