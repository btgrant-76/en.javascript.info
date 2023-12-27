module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'airbnb-base',
		'plugin:vue/recommended'
	],
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'globals': {
		'jest': true,
		'expect': true,
		'mockFn': true,
		'config': true,
		'afterEach': true,
		'beforeAll': true,
		'beforeEach': true,
		'describe': true,
		'it': true,
		'runs': true,
		'waitsFor': true,
		'require': true,
		'xdescribe': true,
		'xit': true
	},
	'rules': {
		'import/no-extraneous-dependencies': 'never',
		'import/no-unresolved': 'never',
		'import/no-dynamic-require': 'warn',
		'strict': ['error', 'never'],
		'no-debugger': 'error',
		'consistent-return': 'off',
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'no-console': 'warn',
		'no-mixed-operators': 'warn',
		'no-plusplus': 'off',
		'no-continue': 'off',
		'no-empty': ['error', { 'allowEmptyCatch': true }],
		'object-shorthand': ['error', 'always', { 'avoidQuotes': false }],
		'quotes': ['error', 'single'],
		'comma-dangle': ['error', 'never'],
		'no-underscore-dangle': 'off',
		'func-names': ['error', 'as-needed'],
		'space-before-function-paren': ['error', {
			'anonymous': 'always',
			'named': 'never',
			'asyncArrow': 'always'
		}],
		'arrow-parens': ['error', 'as-needed'],
		'max-len': [1, 300, 4, {'ignoreUrls': true}],
		'vue/component-name-in-template-casing': ['error', 'kebab-case'],
		'vue/name-property-casing': ['error', 'kebab-case'],
		'vue/no-v-html': 'off',
		'vue/html-indent': ['error', 'tab'],
		'vue/html-self-closing': ['error', {
			'html': {
				'void': 'always',
				'normal': 'any',
				'component': 'always'
			},
			'svg': 'any'
		}],
		'vue/max-attributes-per-line': ['error', {
			'singleline': 6,
			'multiline': {
				'max': 1,
				'allowFirstLine': false
			}
		}],
		'vue/singleline-html-element-content-newline': 'off',
		'vue/order-in-components': 'off',
		'no-param-reassign': ['error', { 'props': false }],
		'no-restricted-globals': ['error', 'event', 'fdescribe'],
		'radix': ['error', 'as-needed'],
		'no-shadow': 'off'
	}
};