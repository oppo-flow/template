// // https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    'prettier'
  ],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    // no-var
    'no-var': 'error',
    // 要求或禁止 var 声明中的初始化
    'init-declarations': 1,
    // 要求或禁止使用分号而不是 ASI
    semi: ['error', 'never'],
    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'unix'],
    // 空格2个
    indent: ['error', 2, { SwitchCase: 1 }],
    // 双峰驼命名格式
    camelcase: 2,
    // 控制逗号前后的空格
    'comma-spacing': [2, { before: false, after: true }],
    // 控制逗号在行尾出现还是在行首出现
    'comma-style': [2, 'last'],
    //禁止修改const声明的变量
    'no-const-assign': 2,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-extend-native': 'off',
    'prettier/prettier': 1
  }
}
