function exibir(){
     var num1 = Number(document.getElementById("numero1").value);
     var num2 = Number(document.getElementById("numero2").value);
     var num3= Number(document.getElementById("numero3").value);

     var aux = num1;

     if(num2 > num1){
      aux=num2;
      num2=num1;
      num1=aux;
     }

     if(num3 > num1){
      aux=num3;
      num3=num1;
      num1=aux;
     }

     if(num3 > num2){
      aux=num3;
      num3=num2;
      num2=aux;
     }
     alert(num1+"-"+num2+"-"+num3);
    }
