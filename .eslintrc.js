module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        project: false,
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    parser: {
      ts: '@typescript-eslint/parser',
      '<template>': 'espree',
    },
    project: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/no-deprecated': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
    ],
    'max-len': ['error', { ignoreComments: true }],
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: { 'i18next/no-literal-string': 'off' },
    },
  ],
}
