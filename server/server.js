const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; //zmienna, którą potrzebuje heroku zeby wystartować server

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"))
    //spełnioa wszystkie zależności, na każdy nieznany adres przekazuje index.thml
    //co powala używań routingu Reacta
});

app.listen(port, () => {
    console.log("Server is up");
});