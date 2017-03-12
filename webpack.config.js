var fs = require( 'fs' );
var webpack = require( 'webpack' );
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

var libraryName = 'sham-ui-label-widget';
var plugins = [], outputFile;

if ( env === 'build' ) {
    plugins.push( new UglifyJsPlugin( { minimize: true } ) );
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}

var libraryConfig = {
    entry: __dirname + '/src/label.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        extensions: [ '.js' ]
    },
    plugins: plugins
};

var testConfig = {
    entry: __dirname + '/test/main.js',
    devtool: 'source-map',
    output: {
    path:  __dirname + '/test/assets',
        filename: 'bundle.js',
        umdNamedDefine: true
},
    module: {
        loaders: [
            {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        extensions: [ '.js' ]
    },
    plugins: plugins
};

module.exports = [ libraryConfig, testConfig ];