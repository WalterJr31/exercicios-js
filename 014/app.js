function verificarData(){
    var data = document.getElementById("txtData").value;
    data = data.split("/");
    document.write("Dia: "+data[0]+"<br>");
    document.write("Mês: "+data[1]+"<br>");
    document.write("Ano: "+data[2]+"<br>");
}