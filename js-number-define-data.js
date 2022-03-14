// ********** number **********

// number veri turu tanimlamak
let price = 100;
let tax = 0.19;
let priceTax  = price * tax;
let total = price + priceTax
console.log(
    "Fiyat: ", price,           // 100
    "KDV Orani: ", tax,         // 0.19 
    "KDV Tutari: ", priceTax,   // 19
    "Son Fiyat:  ", total       // 119
)

// artirma ve azaltma islemleri
let counter = 320;
counter = counter + 1; // uzun yontemi
counter += 1; // kisa yontem
counter ++; // daha da kisa yontem
console.log(counter)

counter --;
counter -= 1;
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 2;
console.log(counter)
