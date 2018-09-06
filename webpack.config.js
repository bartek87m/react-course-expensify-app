const path = require('path');

console.log(path.join(__dirname, 'public'));

module.exports = {
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
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ] //use poswala załadować tablice loaderów
        }]
    },
    devtool: 'cheap-module-eval-source-map', //pokazuje link do błedu w naszym pliku a nie w bundle.js
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true //mówi dev serwerowi że będziemy używać routingu po stronie przeglądarki a nie serwera
        //kiedy przeglądarka dostaje 404 ładuje jeszcze raz index.html który ponownie ładuje bundle.js i wyświetla komponent, który
        //kryje się pod danym adresem url
    }
};

//webpack uruchamia babel kiedy widzi pliki .js