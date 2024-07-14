let n = 2;

switch (true){
    case (n>=5 && n<=10):
        console.log ("5%");
        break;
    case (n>=11 && n<=20):
        console.log ("10%");
        break;
    case (n>=20):
        console.log ("15%");
        break;
    default:
        console.log("No aplica descuento");

}