module.exports = {
    entry: './scripts/main.ts',
    output: {
        filename: './scripts/bundle.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        loaders: [
          { test: /.ts$/, loader: 'awesome-typescript-loader' }
        ]
    }
};