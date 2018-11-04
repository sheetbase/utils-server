export default {
    input: './dist/public_api.js',
    output: {
        file: 'dist/bundles/utils.umd.js',
        format: 'umd',
        name: 'sheetbase.utils',
        sourcemap: true
    },
};