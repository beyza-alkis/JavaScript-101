// ********** number **********

// number veri turu tanimlamak
let price = 100;
let tax = 0.19;
let priceTax  = price * tax;
let total = price + priceTax;
console.log(
    "Fiyat: ", price,           // 100
    "KDV Orani: ", tax,         // 0.19 
    "KDV Tutari: ", priceTax,   // 19
    "Son Fiyat:  ", total       // 119
);

// artirma ve azaltma islemleri
let counter = 320;
counter = counter + 1; // uzun yontemi
counter += 1; // kisa yontem
counter ++; // daha da kisa yontem
console.log(counter);

counter --;
counter -= 1;
console.log(counter);

counter *= 10;
console.log(counter);

counter /= 2;
console.log(counter);

// islem onceligi
console.log(2 + 3 * 10); // 32
console.log( (2 + 3) * 10 ); // 50

// mod(kalan) alma %

// a) sayi tek mi cift mi?
console.log(14 % 2); 
console.log(23 % 2);

// b) 8 urun alan koliye tum urunler (18 urun) sigiyor mu?
console.log("Koliye Sigmayan Urun Sayisi: ", 18 % 8);

// us alma **
console.log(2 * 2 * 2 *2); //uzun yol
console.log(2 ** 4); // kisa yol

// asagi yuvarlama (Math.floor)
console.log("Asagi yuvarlama: ", Math.floor(3.7)); // 3 (sayilar arasi virgul degil nokta olmali)

// yukari yuvarlama (Math.ceil)
console.log("Yukari yuvarlama: ", Math.ceil(3.7)); // 4 (sayilar arasi virgul degil nokta olmali)

// yakina yuvarlama (Math.round)
console.log("Yakina yuvarlama: ", Math.round(2.7)); // 3
console.log("Yakina yuvarlama: ", Math.round(2.4)); // 2
console.log("Yakina yuvarlama: ", Math.round(2.5)); // 3