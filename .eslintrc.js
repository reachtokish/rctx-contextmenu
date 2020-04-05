module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [0],
        "comma-dangle": ["error", "never"],
        "brace-style": ["error", "stroustrup"],
        "react/jsx-filename-extension": [0],
        "react/prop-types": [0],
        "arrow-parens": ["error", "as-needed"]
    }
};