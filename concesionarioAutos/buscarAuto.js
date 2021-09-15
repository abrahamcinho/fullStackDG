var autos = require("./autos");

const concesionaria = {
    autos: autos,
    buscarAuto: function buscarAuto (patente){
        for (i = 0; i < autos.length; i++){
            if (autos[i].patente.includes(patente)) {
                //console.log("Patente encontrada", patente)
                //console.log(autos[i]);
                return (autos[i]);
            }else{
                //console.log("No se encontro la patente.", null)
                return null;
            }
        }  
    },
};

concesionaria.buscarAuto("APL123");