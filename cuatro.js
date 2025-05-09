function cuatro(){
    const fs = require('node:fs');

    fs.readFile('./hola.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
    fs.renameSync("hola.txt", "buenas.txt")
}

cuatro()

module.exports = cuatro;