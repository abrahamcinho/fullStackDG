var autos = require("./autos");
const concesionaria = {
    autos: autos,
    buscarAuto (patente){
        for (let i = 0; i < this.autos.length; i++){
            if (this.autos[i].patente === patente) {
                return (this.autos[i]);
                console.log(this.autos[i])
            }else{
                //console.log("No se encontro la patente.", null)
                return null;
            }
        }  
    },
    venderAuto (patente){
        let unidad = this.buscarAuto(patente);
        console.log(unidad)
        unidad.vendido = true;
        console.log(unidad)
    },
}

concesionaria.venderAuto("APL123");
//concesionaria.venderAuto("JJK116");

// ABRAHAM CALLBACK
// venderAuto: function venderAuto (patente, buscarAuto){
    //     //return buscarAuto(patente);
    //     console.log(buscarAuto(patente));
    //     //console.log("Se ejecuta")
    //     //console.log(autos[0].vendido)
    // },