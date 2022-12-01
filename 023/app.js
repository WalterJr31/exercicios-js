function MaiorNumero(){
    let n1 = document.getElementById('valor1').value
    let n2 = document.getElementById('valor2').value
    let n3 = document.getElementById('valor3').value

    if(n1 > n2 && n1> n3){
        document.getElementById('resultado').innerHTML = "O maior número é: " + n1
    }else if(n2 > n1 && n2 > n3){
        document.getElementById('resultado').innerHTML = "O maior número é: " +  n2
    }else{
        document.getElementById('resultado').innerHTML = "O maior número é: " +  n3
    }
}