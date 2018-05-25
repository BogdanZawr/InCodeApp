module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "strict": 0,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "lines-between-class-members": [
            "error", "always"
        ],
        "no-multi-spaces": [
            "error", {
                "ignoreEOLComments": false,
            }],
        'comma-spacing': [
            "error", {
                "before": false,
                "after": true
            }
        ],
        // "padded-blocks": [
        //     "error", "always"
        // ]
    }
};

// module.exports = {
//     "extends": "airbnb"
// };