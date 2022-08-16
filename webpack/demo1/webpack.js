const webpack = require('webpack');

const compiler = webpack([
    {
        entry: './index.js',
        mode: 'production',
        output: {
            filename: 'main.production.js'
        }
    },
    {
        entry: './index.js',
        mode: 'development',
        output: {
            filename: 'main.development.js'
        }
    },
    {
        entry: './index.js',
        output: {
            filename: 'main.unknown.js'
        }
    }
])

compiler.run((err, stat) => {
    console.log(stat.toJson())
})