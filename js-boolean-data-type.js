// ********** boolean data type **********

// 0 ve 1' i anlamak
let isActive = false; // 0
isActive = true; // 1
console.log(isActive); // true doner

let userName;
let isUserName = Boolean(userName);
console.log(isUserName); // userName bos tanimlandigi icin false doner

Boolean("11"); // true doner
Boolean("0"); // true doner
Boolean(""); // false doner cunku  herhangi bir seyle tanimlanmadi

userName = "user";
console.log("User Name: ", Boolean(userName));

// 0, -0, null, false, NaN, undefined, ("") -->
Boolean(0); // false
Boolean(-0); // false
Boolean(-0.1); // true
Boolean(0 === 0); // true
