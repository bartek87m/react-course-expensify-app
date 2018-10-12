const path = require('path');
const webpack = require('webpack');
const ExptractTextPlugin = require('extract-text-webpack-plugin');
console.log(path.join(__dirname, 'public'));

// process.env.NODE_ENV //zmienna przechowująca w jakim środowisku jesteśmy ustawiana automatycznie przez heroku na 'production'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({ path: '.env.test'}); //dzięki niemu każda zmienna z pliku ma process.env.nazwaZmiennej w pliku
}else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({ path: '.env.development'});

}

module.exports = (env) => {

    const isProduction = env === 'production';
    const CSSExtract = new ExptractTextPlugin('styles.css');
   
    return {
        entry: ['babel-polyfill','./src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
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
            CSSExtract,
            new webpack.DefinePlugin({ //musimy manualnie przekazać zmienne do naszego kodu client side java scirt
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY), //najpier nazwa zmiennej po stronie klienta a następnie ta sama nazwa po stronie node
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', //pokazuje link do błedu w naszym pliku a nie w bundle.js
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true, //mówi dev serwerowi że będziemy używać routingu po stronie przeglądarki a nie serwera
            //kiedy przeglądarka dostaje 404 ładuje jeszcze raz index.html który ponownie ładuje bundle.js i wyświetla komponent, który
            //kryje się pod danym adresem url
            publicPath: '/dist/'
        }
    }
}


//webpack uruchamia babel kiedy widzi pliki .js