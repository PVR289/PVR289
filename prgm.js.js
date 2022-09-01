function fact(){
    var d=prompt("Enter the number:")
    var fact=1;
    for (i=d;i<=0;i--){
        fact=fact*i;
    }
    return fact
}
var a = prompt("Enter number 1st:");
var b = prompt("Enter number 2nd:");
var c = parseInt(prompt("Enter the choice of operation as: 1 +,2 *,3 /,4**,5 fact"));
switch (c) {
    case 1:
        console.log("The addition is :", a + b);
        break;

    case 2:
        console.log("The multiplication is : ", a * b);
        break;

    case 3:
        console.log("The division is :", a/b);
        
    case 4:
        console.log("The exponent is :" , a**b);

    case 5:
        console.log("The factorial is:", fact());
 
    default:
        console.log("Enter valid choice");
}
        