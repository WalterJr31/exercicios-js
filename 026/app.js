function Periodo() {

    let ola = document.getElementById('ola').value

    if (ola == 'm') {

        document.getElementById('hello').innerHTML = 'Bom Dia!'

    } else if (ola == 'v') {

        document.getElementById('hello').innerHTML = 'Boa Tarde!'

    } else {

        document.getElementById('hello').innerHTML = 'Boa Noite!'

    }

}