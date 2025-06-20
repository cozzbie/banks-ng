const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const unusedImports = require("eslint-plugin-unused-imports");
const stylistic = require("@stylistic/eslint-plugin");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/strict-type-checked",
        "airbnb-base",
        "airbnb-typescript/base",
    ),

    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: __dirname,
        },

        parser: tsParser,
    },

    plugins: {
        "@typescript-eslint": typescriptEslint,
        "unused-imports": unusedImports,
        "@stylistic": stylistic,
    },

    rules: {
        "max-len": "off",
        "no-await-in-loop": "off",
        "no-restricted-syntax": "off",
        "import/no-default-export": "error",
        "class-methods-use-this": "off",
        "import/prefer-default-export": "off",
        "@stylistic/quotes": ["error", "single"],
        "@stylistic/semi": ["error", "always"],
        "@stylistic/no-trailing-spaces": "error",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "unused-imports/no-unused-imports": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/indent": "off",

        "unused-imports/no-unused-vars": ["off", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        }],

        "@typescript-eslint/prefer-destructuring": ["error", {
            "object": true,
            "array": true,
        }],

        "import/no-extraneous-dependencies": ["error", {
            "devDependencies": ["**/*.{u,i}spec.ts"],
        }],
    },
}, globalIgnores(["**/*.cjs"])]);
