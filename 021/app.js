function Media() {

    let nota1 = document.getElementById('n1').value
    let nota2 = document.getElementById('n2').value
    let n3 = (parseFloat(nota1) + parseFloat(nota2)) / 2

    if (n3 == 10) {

        document.getElementById('nota').innerHTML = 'Aprovado com Distinção'

    } else if (n3 >= 7) {

        document.getElementById('nota').innerHTML = 'Aprovado'

    } else {

        document.getElementById('nota').innerHTML = 'Reprovado'

    }

}