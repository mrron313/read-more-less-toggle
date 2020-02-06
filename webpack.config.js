var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ReadMoreLess.js',
    output: {
        path: path.resolve('lib'),
        filename: 'ReadMoreLess.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                      loader: 'babel-loader',
                      options: {
                        presets: ['react']
                      }
                    }
                  ],
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
        ]
    }
}