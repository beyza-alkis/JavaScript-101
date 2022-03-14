// ********** let ve const ile degisken tanimlama ********** 

// var ile degisken tanimlamak; !eski yontem!
var serverName = "api.google.com"
console.log(serverName)

// let ile degiskeni bos tanimlamak;
let serverName;
console.log(serverName)

// let ile degiskene bilgi atamak;
serverName = "https://google.com"
console.log(serverName)

// let ile degiskene bilgi atayarak tanimlama;
let password = "1234";
console.log(password)

// degisken atamasi yapmadan once kullanmaya calismak;
/* HATALI KULLANIM
    console.log(fullName)
    let fullName = "beyzadev";
*/
let fullName = "beyzadev";
console.log(fullName)

// let ile tanimlana degislenin icindeki bilgiyi degistirmek; 
fullName = "Lorem Ipsum Dolor";
console.log(fullName) 

// birlestirme veya ekleme islemi;
fullName = fullName + " Yeni Bilgi"
console.log(fullName)

fullName = fullName + " Test Bilgisi"
fullName = "2. Bilgi : " + fullName
console.log(fullName)

fullName = "Sifirlandi"
fullName += " ve yeni bilgi eklendi"
console.log(fullName)

// const ile degisken tanimlamak;
const SERVER_PASSWORD = "35w46s75we867to8yfp9uod" // const kullandigimiz icin degisim yapamayiz.
console.log(SERVER_PASSWORD)
