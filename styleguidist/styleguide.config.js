const path = require('path');
console.log(path.resolve(__dirname))
// stop()
const { version } = require('../package.json');
module.exports = {
  title: 'Veris Styleguide',
  version,
  components: '../src/components/[A-Za-z]**/*.js',
  ignore: ['**/src/test.js'],
  require: ['../dist/index.css'],
  styleguideDir: "../docs",
  webpackConfig: {
    resolve: {
      alias: {
        "react": path.resolve(__dirname, 'node_modules/react/'),
        "react-dom": path.resolve(__dirname, 'node_modules/react-dom/'),
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options:{                    
            "presets": ["@babel/preset-react"],
            "plugins": ["@babel/plugin-proposal-class-properties"]               
          }  
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options:{                    
            "presets": ["@babel/preset-react"],
            "plugins": ["@babel/plugin-proposal-class-properties"]               
          }  
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};