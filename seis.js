function seis(){
    try{ 
        const cinco = require('./cinco')
    }catch(error){
        console.log("ERROR")
    }
}

seis()

module.exports = seis;