// 除基础配置外，大部分配置项参考 https://www.npmjs.com/package/eslint-config-fornode
module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'jest': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jest/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    // 'vue',
    // '@typescript-eslint',
    // 'json',
    // 'jest'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    // Value ["unix","windows"] should NOT have more than 1 items.
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    // 控制逗号前后的空格
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    // 'no-unused-vars': ['error', { 'args': 'none' }],
    'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': [
    //   'error',
    //   {
    //     'vars': 'all',
    //     'args': 'none',
    //     'ignoreRestSiblings': false
    //   }
    // ],
    // if else while for do后面的代码块需要{ }包围
    'curly': [2, 'all'],
    'keyword-spacing': [
      'error',
      {
        'after': true
      }
    ],
    'array-bracket-spacing': ['error', 'never'],
    // 'object-curly-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'brace-style': ['error', 'stroustrup'],
    'no-trailing-spaces': ['error'],
    'no-fallthrough': 0,
    'require-atomic-updates': 'off',
    // 冒号空格 e.g. {'a': 1}
    // 'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'operator-linebreak': [2, 'before'], // 将操作符号强制在行首
    'block-spacing': ['error', 'never'], // 单行代码块中紧贴括号部分不允许包含空格。
    'no-irregular-whitespace': 0,
    'space-infix-ops': 1,
    'no-multiple-empty-lines': 'error',
    'no-multi-spaces': 'error', // 禁止出现多个空格而且不是用来作缩进的
    // 'newline-per-chained-call': ['error', {'ignoreChainWithDepth': 2}], //要求方法链中每个调用都有一个换行符
    'eol-last': 'error', // 要求文件末尾保留一行空行
    'spaced-comment': ['error', 'always'], // 要求在注释前有空白
    'arrow-spacing': 'error', // 要求箭头函数的箭头之前和之后有空格
    // 'space-before-blocks': 'error', // 强制{之前有一个空格
    // 函数声明、具名函数表达式、函数调用中，函数名和 ( 之间不允许有空格
    'space-before-function-paren': [
      'error',
      { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }
    ],
    // 禁止重复键值、参数、case, 默认均为开启
    // 'no-dupe-args': 2,
    // 'no-dupe-keys': 2,
    // 'no-duplicate-case': 2,
    'no-empty': [2, { 'allowEmptyCatch': true }], // 禁止除catch外的空语句块
    'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
    'max-lines': [1, {
      'max': 700, // 推荐使用500行
      'skipComments': true,
      'skipBlankLines': true,
    }], // 文件最大行数, warning
    'max-lines-per-function': [1, {
      'max': 60, // 推荐使用50，暂时放开
      'skipComments': true,
      'skipBlankLines': true,
      'IIFEs': true
    }], // 函数最大行数, warning
    'max-depth': [1, 4], // 最大嵌套深度
  }
};
