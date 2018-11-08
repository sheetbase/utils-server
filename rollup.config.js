export default {
    input: './dist/public_api.js',
    output: {
        file: './dist/bundles/sheetbase-utils-server.umd.js',
        format: 'umd',
        name: 'Utils',
        sourcemap: true
    },
};