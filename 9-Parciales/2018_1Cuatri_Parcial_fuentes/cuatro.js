function mostrar()
{
 var numero1;
 var numero2;
 var suma;
 var resta;
var numero1 = parseInt(prompt("ingrese el numero1"));
var numero2 = parseInt(prompt("ingrese el numero2"));


 if (numero1 == numero2) {

    alert(numero1 + "" + numero2 );
     
 }
 if(numero1 > numero2){
     resta = numero1 - numero2;
     
alert(resta);
 } 
 else {

suma = numero1 + numero2;

alert(suma);
 }
 if(suma > 10)
 {
alert("lasuma es"+suma+"y supero al 10");

 }



     




 




}