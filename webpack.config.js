module.exports = {
    // webpack folder's entry js - excluded from jekll's build process.
    entry: __dirname + '/' + "webpack/entry.js",
    output: {
      // we're going to put the generated file in the assets folder so jekyll will grab it.
        path: __dirname + '/' +  'assets/javascripts/',
        filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {  
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        }
      ]
    }
  };