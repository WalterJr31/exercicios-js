function Resultado(){
    let idade = document.getElementById('idade').value

    if(idade < 17){
        document.getElementById('resposta').innerHTML = 'Menor de idade'
    }else{
        document.getElementById('resposta').innerHTML = 'Maior de idade'
    }
}