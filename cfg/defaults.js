/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

const precss       = require('precss');
const autoprefixer = require('autoprefixer');
// const cssmodules   = require('postcss-modules');

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
        // loader: 'style-loader!css-loader!less-loader!postcss-loader'

        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules,
  postcss: [
    precss,
    autoprefixer,
    /*
    cssmodules
    cssmodules({
      getJSON: function(cssFileName, json) {
        console.log(arguments)
        var path          = require('path');
        var cssName       = path.basename(cssFileName, '.css');
        var jsonFileName  = path.resolve('./build' + cssName + '.json');
        console.log(1);
        fs.writeFileSync(jsonFileName, JSON.stringify(json));
        console.log(2);
      }
    })
    */
  ]
};
