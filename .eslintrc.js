const prettierOptions = require('./.prettierrc.js')

const RULES = {
    OFF: 0,
    WARNING: 1,
    ERROR: 2
};

module.exports = {
    "env": {
        "browser": true,
        "cypress/globals": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "prettier",
        "prettier",
        "prettier/react",
        "prettier/standard"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "babel",
        "cypress",
        "prettier",
        "react",
        "react-hooks"
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        'prettier/prettier': [RULES.ERROR, prettierOptions]
    }
};
