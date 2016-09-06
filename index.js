/*eslint strict:"off", quote-props:"off"*/
'use strict';

module.exports = {
//  parser: 'esprima',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      jsx: false,
      experimentalObjectRestSpread: false
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    'shared-node-browser': true,
    es6: true,
    worker: true,
    serviceworker: true
  },
  globals: {},
  rules: {
    // Possible Errors
    'comma-dangle': [ 'warn', 'never' ],
    'no-cond-assign': [ 'warn', 'except-parens' ],
    'no-console': [ 'warn', { allow: [ 'warn', 'error' ]}],
    'no-constant-condition': [ 'error' ],
    'no-control-regex': [ 'warn' ],
    'no-debugger': [ 'warn' ],
    'no-dupe-args': [ 'error' ],
    'no-dupe-keys': [ 'error' ],
    'no-duplicate-case': [ 'error' ],
    'no-empty': [ 'warn' ],
    'no-empty-character-class': [ 'error' ],
    'no-ex-assign': [ 'error' ],
    'no-extra-boolean-cast': [ 'warn' ],
    'no-extra-parens': [ 'off', 'all', {
      conditionalAssign: false,
      returnAssign: true,
      nestedBinaryExpressions: false
    }],
    'no-extra-semi': [ 'warn' ],
    'no-func-assign': [ 'error' ],
    'no-inner-declarations': [ 'error', 'both' ],
    'no-invalid-regexp': [ 'warn' ],
    'no-irregular-whitespace': [ 'warn' ],
    'no-negated-in-lhs': [ 'error' ],
    'no-obj-calls': [ 'error' ],
    'no-regex-spaces': [ 'error' ],
    'no-sparse-arrays': [ 'error' ],
    'no-unexpected-multiline': [ 'warn' ],
    'no-unreachable': [ 'warn' ],
    'use-isnan': [ 'warn' ],
    'valid-jsdoc': [ 'off' ],
    'valid-typeof': [ 'error' ],

    // Best Practices
    'accessor-pairs': [ 'warn' ],
    'array-callback-return': [ 'error' ],
    'block-scoped-var': [ 'off' ],
    'complexity': [ 'warn', 18 ],
    'consistent-return': [ 'warn' ],
    'curly': [ 'error', 'all' ],
    'default-case': [ 'warn' ],
    'dot-location': [ 'warn', 'property' ],
    'dot-notation': [ 'warn' ],
    'eqeqeq': [ 'error', 'allow-null' ],
    'guard-for-in': [ 'warn' ],
    'no-alert': [ 'error' ],
    'no-caller': [ 'error' ],
    'no-case-declarations': [ 'error' ],
    'no-div-regex': [ 'error' ],
    'no-else-return': [ 'error' ],
    'no-empty-function': [ 'error' ],
    'no-empty-pattern': [ 'error' ],
    'no-eq-null': [ 'off' ],
    'no-eval': [ 'warn' ],
    'no-extend-native': [ 'error' ],
    'no-extra-bind': [ 'error' ],
    'no-extra-label': [ 'error' ],
    'no-fallthrough': [ 'error' ],
    'no-floating-decimal': [ 'error' ],
    'no-implicit-coercion': [ 'warn' ],
    'no-implicit-globals': [ 'warn' ],
    'no-implied-eval': [ 'error' ],
    'no-invalid-this': [ 'warn' ],
    'no-iterator': [ 'error' ],
    'no-labels': [ 'warn' ],
    'no-lone-blocks': [ 'error' ],
    'no-loop-func': [ 'error' ],
    'no-magic-numbers': [ 'off' ],
    'no-multi-spaces': [ 'warn', { exceptions: {
      Property: true,
      VariableDeclarator: true,
      ImportDeclaration: true
    }}],
    'no-multi-str': [ 'error' ],
    'no-native-reassign': [ 'error' ],
    'no-new': [ 'error' ],
    'no-new-func': [ 'error' ],
    'no-new-wrappers': [ 'error' ],
    'no-octal': [ 'error' ],
    'no-octal-escape': [ 'error' ],
    'no-param-reassign': [ 'error' ],
    'no-proto': [ 'error' ],
    'no-redeclare': [ 'error' ],
    'no-return-assign': [ 'error', 'except-parens' ],
    'no-script-url': [ 'error' ],
    'no-self-assign': [ 'error' ],
    'no-self-compare': [ 'error' ],
    'no-sequences': [ 'error' ],
    'no-throw-literal': [ 'error' ],
    'no-unmodified-loop-condition': [ 'warn' ],
    'no-unused-expressions': [ 'warn' ],
    'no-unused-labels': [ 'warn' ],
    'no-useless-call': [ 'error' ],
    'no-useless-concat': [ 'error' ],
    'no-useless-escape': [ 'error' ],
    'no-void': [ 'warn' ],
    'no-warning-comments': [ 'off' ],
    'no-with': [ 'error' ],
    'radix': [ 'warn' ],
    'vars-on-top': [ 'error' ],
    'wrap-iife': [ 'error', 'inside' ],
    'yoda': [ 'error' ],

    // Strict Mode
    'strict': [ 'error', 'safe' ],

    // Variables
    'init-declarations': [ 'off' ],
    'no-catch-shadow': [ 'error' ],
    'no-delete-var': [ 'error' ],
    'no-label-var': [ 'error' ],
    'no-restricted-globals': [ 'off' ],
    'no-shadow': [ 'error' ],
    'no-shadow-restricted-names': [ 'error' ],
    'no-undef': [ 'error' ],
    'no-undef-init': [ 'error' ],
    'no-undefined': [ 'error' ],
    'no-unused-vars': [ 'warn' ],
    'no-use-before-define': [ 'error', 'nofunc' ],

    // Node.js and CommonJS
    'callback-return': [ 'error' ],
    'global-require': [ 'error' ],
    'handle-callback-err': [ 'error', '^(err|error|.+Error)$' ],
    'no-mixed-requires': [ 'off' ],
    'no-new-require': [ 'error' ],
    'no-path-concat': [ 'error' ],
    'no-process-env': [ 'off' ],
    'no-process-exit': [ 'error' ],
    'no-restricted-modules': [ 'off' ],
    'no-sync': [ 'off' ],

    // Stylistic Issues
    'array-bracket-spacing': [ 'error', 'always', { objectsInArrays: false, arraysInArrays: false }],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs', { allowSingleLine: false }],
    'camelcase': [ 'warn', { properties: 'never' }],
    'comma-spacing': [ 'error', { before: false, after: true }],
    'comma-style': [ 'error', 'last' ],
    'computed-property-spacing': [ 'error', 'always' ],
    'consistent-this': [ 'error', 'self' ],
    'eol-last': [ 'error', 'unix'],
    'func-names': [ 'off' ],
    'func-style': [ 'off' ],
    'id-blacklist': [
      'warn',
      'e',
      'obj',
      'arr',
      'str',
      'data'
    ],
    'id-length': [ 'warn', {
      min: 3,
      exceptions: [
        'on',
        'cb',
        'fs',
        'db',
        'os',
        'v8',
        'vm',
	      's3',
	      'id'
      ]
    }],
    'id-match': [ 'off' ],
    'indent': [ 'error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1
    }],
    'jsx-quotes': [ 'warn', 'prefer-double' ],
    'key-spacing': [ 'error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': [ 'error', { before: true, after: true }],
    'linebreak-style': [ 'warn', 'unix' ],
    'lines-around-comment': [ 'off' ],
    'max-depth': [ 'error', 15 ],
    'max-len': [ 'warn', {
      code: 120,
      comments: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreTrailingComments: true
    }],
    'max-nested-callbacks': [ 'error', { max: 8 }],
    'max-params': [ 'error', { max: 5 }],
    'max-statements': [ 'warn', { max: 25 }],
    'max-statements-per-line': [ 'error', { max: 2 }],
    'new-cap': [ 'error' ],
    'new-parens': [ 'error' ],
    'newline-after-var': [ 'error', 'always' ],
    'newline-before-return': [ 'error' ],
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 3 }],
    'no-array-constructor': [ 'error' ],
    'no-bitwise': [ 'off' ],
    'no-continue': [ 'off' ],
    'no-inline-comments': [ 'off' ],
    'no-lonely-if': [ 'warn' ],
    'no-mixed-spaces-and-tabs': [ 'error' ],
    'no-multiple-empty-lines': [ 'off' ],
    'no-negated-condition': [ 'warn' ],
    'no-nested-ternary': [ 'error' ],
    'no-new-object': [ 'error' ],
    'no-plusplus': [ 'off' ],
    'no-restricted-syntax': [ 'off' ],
    'no-spaced-func': [ 'error' ],
    'no-ternary': [ 'off' ],
    'no-trailing-spaces': [ 'warn' ],
    'no-underscore-dangle': [ 'off' ],
    'no-unneeded-ternary': [ 'warn' ],
    'no-whitespace-before-property': [ 'error' ],
    'object-curly-spacing': [ 'error', 'always', {
      objectsInObjects: false,
      arraysInObjects: false
    }],
    'one-var': [ 'error', 'always' ],
    'one-var-declaration-per-line': [ 'error', 'initializations' ],
    'operator-assignment': [ 'warn', 'always' ],
    'operator-linebreak': [ 'error', 'after' ],
    'padded-blocks': [ 'off', {
      blocks: 'never',
      switches: 'never',
      classes: 'never'
    }],
    'quote-props': [ 'error', 'as-needed' ],
    'quotes': [ 'error', 'single', { avoidEscape: true }],
    'require-jsdoc': [ 'off', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true
      }
    }],
    'semi': [ 'error', 'always' ],
    'semi-spacing': [ 'error', { before: false, after: true }],
    'sort-imports': [ 'off' ],
    'sort-vars': [ 'off' ],
    'space-before-blocks': [ 'warn', 'always' ],
    'space-before-function-paren': [ 'warn', 'never' ],
    'space-in-parens': [ 'warn', 'always', {
      exceptions: [
        '{}', '[]', '()', 'empty'
      ]
    }],
    'space-infix-ops': [ 'error' ],
    'space-unary-ops': [ 'error', {
      words: true,
      nonwords: false
    }],
    'spaced-comment': [ 'off' ],
    'wrap-regex': [ 'error' ],

    // ECMAScript 6
    'arrow-body-style': [ 'error', 'as-needed' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'arrow-spacing': [ 'error', { before: true, after: true }],
    'constructor-super': [ 'error' ],
    'generator-star-spacing': [ 'error', 'after' ],
    'no-class-assign': [ 'error' ],
    'no-confusing-arrow': [ 'error', { allowParens: true }],
    'no-const-assign': [ 'error' ],
    'no-dupe-class-members': [ 'error' ],
    'no-duplicate-imports': [ 'error' ],
    'no-new-symbol': [ 'error' ],
    'no-restricted-imports': [ 'off' ],
    'no-this-before-super': [ 'error' ],
    'no-useless-constructor': [ 'error' ],
    'no-var': [ 'off' ],
    'object-shorthand': [ 'error', 'always' ],
    'prefer-arrow-callback': [ 'off' ],
    'prefer-const': [ 'off' ],
    'prefer-reflect': [ 'off' ],
    'prefer-rest-params': [ 'warn' ],
    'prefer-spread': [ 'warn' ],
    'prefer-template': [ 'error' ],
    'require-yield': [ 'error' ],
    'template-curly-spacing': [ 'error', 'always' ],
    'yield-star-spacing': [ 'error', 'after' ]
  }
};
