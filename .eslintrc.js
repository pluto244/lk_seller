module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:jsx-a11y/recommended'
    ],
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        alias: {
          map: [
            ['@', './src'],
            ['@components', './src/components'],
            ['@utils', './src/utils']
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },
    plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y'],
    rules: {
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
      'jsx-a11y/anchor-is-valid': 'off'
    },
    env: {
      browser: true,
      es2021: true,
      node: true
    }
  };
  