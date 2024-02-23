module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true,
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        'xo',
        "plugin:react/jsx-runtime",
        'plugin:prettier/recommended'

    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        'react',
        '@typescript-eslint',
        'prettier',
        'unused-imports',
        'react-hooks',
    ],

    rules: {
        "no-console": "warn",
        'new-cap': 'off',
        "prettier/prettier": "off",
        "unused-imports/no-unused-imports": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/destructuring-assignment": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/no-unused-state": "warn",
        "react/self-closing-comp": "warn",
    }
}
