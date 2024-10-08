//mathematicaly operator
let n1 =20;
let n2 =23;
let res =n1+n2;
let sub =n1-n2;
let mul =n1*n2;
let div =n1/n2;
console.log(res,sub,mul,div);
//even odd

let num3=29;
let even =num3 % 2
console.log(even);

//exponention operator

let square = 2**2;
console.log(square);

//relation operator
//to compare two values
console.log(10>5); //boolean
console.log(10<5);

//equality operator
//'==' value check
//'===' value and data type chec
console.log(5 >= 5);

console.log(5=="5");
console.log(5===5);
console.log(5 !="5");

//conditional
//if (condition) {
//true code to be excuted

//falsy value :
//false,0,-0."",``,null,undefiend,

if (" ") {
    console.log("it is true") //if you get space then value will be rue

}

let total_bill = 500;
disconut_startbill= 1000;
if(total_bill>disconut_startbill){
console.log("discount")
}
    else{
        console.log("no discount")
    }
    //task2

    let per="hari";
    let age=30;
    if(per=="hari" && age>22){
        console.log("he is male and able to marry")
    }
    else{
        console.log("cant able to marry")
    }