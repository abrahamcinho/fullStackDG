function tareas(){
//Llamamos al filesystem
const fs = require("fs")

if (process.argv.length < 3){
    console.log("Atención - Tienes que pasar una acción");
}else{
    switch(process.argv[2]){
        case "listar":
            fs.readFile("./tareas.json", "utf8", function(error, data){
                if (error != null){
                    console.log("El archivo no existe") 
                }else{
                    //console.log(data);
                    console.log(data.getFileExtension);
                } 
            });
        break;
        default: 
            console.log("No entiendo qué quieres hacer.");
        break;
    }
}
//console.log(process.argv)
}
//tareas();
module.exports = tareas;