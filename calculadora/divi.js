function dividirNumeros (num1,num2){
    if (num1===0 || num2===0){
        return ("No se puede dividir entre 0, intenta con otro numero")
    }else{
        return (num1/num2)
    }
    
}

module.exports = dividirNumeros;