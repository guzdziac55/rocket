module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['react-app', 'airbnb-typescript', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {},
}

// 'plugin:react/recommended'
