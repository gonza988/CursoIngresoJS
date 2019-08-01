function mostrar()
{
var  numero = 0;
var contadorDivisores = 0;
var i;

numero = parseInt(prompt("ingrese un numero"))
for(i = 1; i <= numero; i++){
    if(numero % 1 ==0){
        contadorDivisores++;
        document.write(i+"<br>");
    }
document.write("cantidad de divisores")


}//FIN DE LA FUNCIÓN