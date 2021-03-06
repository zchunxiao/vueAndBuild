module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      '@vue/standard'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-prototype-builtins': 0,
      'eqeqeq': 0
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }
  