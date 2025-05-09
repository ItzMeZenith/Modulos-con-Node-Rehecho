const cinco = () => {
    const url = require('url');
    //const address = new URL("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
    const address = new URL("sedfsdgfesdfvcx");

    addressString = address.toString()

    let objeto = url.parse(addressString, true);
    
    console.log(objeto.host); 
    console.log(objeto.pathname);
    console.log(objeto.query);
}

cinco()

module.exports = cinco;