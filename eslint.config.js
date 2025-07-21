import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      requireConfigFile: false,
    },
    plugins: ['react', 'prettier', 'react-hooks', 'import-helpers'],
    ignorePatterns: ['!.eslintrc.js', '!.stylelintrc.js'],
    rules: {
      'import/default': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'import/prefer-default-export': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
    settings: {
      'import/core-modules': ['react-router-dom'],
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      'import/resolver': {
        typescript: {},
      },
    },
    overrides: [
      {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        env: {
          browser: true,
          es6: true,
          jest: true,
        },
        extends: ['prettier', 'plugin:import/errors', 'plugin:import/warnings'],
        globals: {
          Atomics: 'readonly',
          SharedArrayBuffer: 'readonly',
          importScripts: 'readonly',
          firebase: 'readonly',
          registration: 'readonly',
        },
        parser: '@typescript-eslint/parser',
        parserOptions: {
          ecmaFeatures: { jsx: true },
          ecmaVersion: 2018,
          sourceType: 'module',
          project: './tsconfig.json',
        },
        plugins: ['react', 'prettier', 'react-hooks', 'import-helpers', '@typescript-eslint'],
        rules: {
          'prettier/prettier': 'error',
          'react-hooks/rules-of-hooks': 'error',
          'react-hooks/exhaustive-deps': 'warn',
          'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
          'no-param-reassign': 'off',
          'import/prefer-default-export': 'off',
        },
        settings: {
          'import/resolver': {
            typescript: {},
          },
        },
      },
    ],
    },
])
