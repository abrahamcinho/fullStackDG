var autos = require("./autos");
const concesionaria = {
    autos: autos,
    buscarAuto: function buscarAuto (patente){
        for (let i = 0; i < this.autos.length; i++){
            if (this.autos[i].patente.includes(patente) === true) {
                //console.log(autos[i]);
                return (this.autos[i]);
            // }else{
            //     //console.log("No se encontro la patente.", null)
            //     return null;
            }
        }
        return null;  
    },
    venderAuto: function venderAuto (patente){
        let cambioEstadoVenta = this.buscarAuto(patente);
        console.log(this.buscarAuto(patente));
        cambioEstadoVenta.vendido = true;
        console.log(this.buscarAuto(patente));
    },
};

//concesionaria.venderAuto("APL123");
concesionaria.venderAuto("JJK116");

