import globals from "globals"
import jsonPlugin from "@eslint/json"
import js from "@eslint/js"
import stylisticJs from '@stylistic/eslint-plugin-js'
import babelParser from '@babel/eslint-parser'
import reactPlugin from 'eslint-plugin-react'

const jsoncParser = await import("jsonc-eslint-parser")

export default [
  {
    files: ["**/*.json"],
    plugins: {
      json: jsonPlugin
    },
    languageOptions: {
      parser: jsoncParser.default
    },
    rules: {
      ...jsonPlugin.configs.recommended.rules, // Inherit recommended JSON rules (if any)
    }
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["**/*.json"],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parser: babelParser, // Specify the parser
      parserOptions: {
        requireConfigFile: false, // Prevent looking for a Babel config file
        babelOptions: {
          presets: ['@babel/preset-react'], // Tell Babel to handle React JSX
        },
      }
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      react: reactPlugin
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      //'no-console': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error'
    }
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node
    }
  },
]
