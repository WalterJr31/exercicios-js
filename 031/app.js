function tabuada(){
    let tabuada = document.getElementById('tabuada').value

    for(var count=1; count <=10 ; count++)
    document.getElementById('resultado').innerHTML += (tabuada + "X" + count + "=" + (tabuada * count) + "<br />");
}