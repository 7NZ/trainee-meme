"use strict";

module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "extends": [
        "eslint:recommended"
    ],
    "ignorePatterns": ["*.json"],
    "rules": {
        "comma-spacing": ["error", { "before": false, "after": true }], // 强制逗号后面有空格
        "quotes": ["warn", "single", { "avoidEscape": true }], // 使用单引号
        "semi": ["error", "always", { "omitLastInOneLineBlock": false}], // 总是使用分号
        "semi-spacing": "error", // 强制分号之前和之后使用一致的空格
        "no-extra-semi": "error", // 禁止不必要的分号
        "no-undef": "error", // 禁止未声明的变量
        "no-unused-vars": "warn",
        "no-class-assign": "error", // 禁止修改类声明的变量
        "no-compare-neg-zero": "error", // 禁止与 -0 进行比较
        "no-const-assign": "error", // 禁止修改 const 声明的变量
        "no-func-assign": "error", // 禁止对 function 声明重新赋值
        "no-mixed-spaces-and-tabs": "error", // 禁止使用 空格 和 tab 混合缩进
        "no-inner-declarations": "error", // 禁止在嵌套的块中出现变量声明或 function 声明
        "no-unreachable": "error", // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
        "space-before-blocks": "error", // 强制块之前有空格
        "space-infix-ops": ["error", {"int32Hint": true}], // 要求操作符周围有空格
        "indent": ["error", 2, { "SwitchCase": 1 }], // 缩进2
        "no-mixed-spaces-and-tabs": "error", // 使用一致的缩进
        "no-unexpected-multiline": "error",
        "keyword-spacing": "error",
        "key-spacing": ["error", { "afterColon": true }],
        "arrow-spacing": "error"
    }
}
