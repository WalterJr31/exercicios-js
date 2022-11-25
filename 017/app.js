function MaiorNumero(){
    let n1 = document.getElementById("numero1").value
    let n2 = document.getElementById("numero2").value

    if(parseInt(n1) > parseInt(n2) ){
        document.getElementById("resultado").innerHTML = "O resultado é:  " + n1

    }else {
        document.getElementById("resultado").innerHTML = "O Resultado é: " + n2
    }
}