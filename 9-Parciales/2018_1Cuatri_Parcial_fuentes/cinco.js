function mostrar()
{
    var planeta = prompt("ingrese un planeta del sistema solar");
    planeta = planeta.toLocaleLowerCase();
switch(planeta)
{
case "tierra":
    alert("acá vivimos");
break;
case "mercurio":
case "venus":
alert("aca hace mas calor");
break;

case "urano":
case "neptuno":
    alert("aca hace mas frio");
    break;

    default:
    alert("Esto no es un planeta");
}
}
