const moment = require.requireActual('moment');
//używamy orginalengo moment, gdybyśmy użyli import zaimportowaliśmy byśmy wersję mock stworzoną przez nas


 export default (timestamp = 0) => {
    return moment(timestamp)
 } 