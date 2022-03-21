// ********** learn about data type and data type transformations **********

// veri turunu ogrenmek typeof
let numb = 111;
let stringNumb = "111";
let hasPassword = true;
console.log(
    "numb: ",
    typeof(numb)
);
console.log(
    "stringNumb: ",
    typeof(stringNumb)
);
console.log(
    "hasPassword: ",
    typeof(hasPassword)
);

//string(metinsel) bilgileri int ve float'a donusturmek
let number1 = "11";
number1 = parseInt(number1)
console.log("number 1: ", number1, typeof(number1)); // number

let number2 = "11px";
number2 = parseInt(number2)
console.log("number 2: ", number2, typeof(number2)); // number

let number3 = "11px";
number3 = Number (number3)
console.log("number 3: ", number3, typeof(number3)); // NaN (sayi olamaz)

let number4 = "11";
number4 = Number(number4)
console.log("number 4: ", number4, typeof(number4)); // number 

let number5 = "11.4px";
number5 = parseFloat(number5)
console.log("number 5: ", number5, typeof(number5 )); // number 

// number veri tipinden string'e donusturmek
let number6 = 55;
number6 =number6.toString();
console.log(number6, typeof(number6));