const path = require('path');
const ExptractTextPlugin = require('extract-text-webpack-plugin');
console.log(path.join(__dirname, 'public'));

module.exports = (env) => {

    const isProduction = env === 'production';
    const CSSExtract = new ExptractTextPlugin('styles.css');
   
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, //wyrażenie rególarne sprawdze czy załadowany plik kończy sie .js
                exclude: /node_modules/
            }, {
                test: /\.s?css$/ ,//? umożliwia obsłógę css i scss czyniąc s opcjonalnym
                use:  CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })//use poswala załadować tablice loaderów
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', //pokazuje link do błedu w naszym pliku a nie w bundle.js
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true //mówi dev serwerowi że będziemy używać routingu po stronie przeglądarki a nie serwera
            //kiedy przeglądarka dostaje 404 ładuje jeszcze raz index.html który ponownie ładuje bundle.js i wyświetla komponent, który
            //kryje się pod danym adresem url
        }
    }
}


//webpack uruchamia babel kiedy widzi pliki .js