function siete(){
    const countryToCurrency = require('country-to-currency');

    const monedaPais = (moneda) => {return countryToCurrency[moneda];}

    let moneda = monedaPais("AR");
    console.log(moneda);
}

siete()

module.exports = siete;