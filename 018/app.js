function PositivoOuNegativo(){
    let n1 = document.getElementById("numero1").value

    if(n1 >= 1 ){
        document.getElementById("resultado").innerHTML = "Positivo "

    }else if (n1 <= -1){
        document.getElementById("resultado").innerHTML = "Negativo "

    }else if(n1 == 0){
        document.getElementById("resultado").innerHTML = "Neutro"

    }else{
        document.getElementById("resultado").innerHTML = "Valor Inválido"
    }
    //limpar campo
    document.getElementById("numero1").value = ""
}