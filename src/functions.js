function addToCart(quantity, productName = "Elma") {
  //Elma default değeri
  console.log("Sepete eklendi: Ürün: " + productName + " adet :" + quantity);
}

//addToCart()
addToCart(10);
//addToCart(15)

let sayHello = () => {
  //fonksiyonu bir değişkene atayabiliriz.
  console.log("Hello World!");
};

sayHello();

let sayHello2 = function () {
  console.log("Hello World 2!");
};

sayHello2();

function addToCart2(productName, quantity, unitPrice) {}

addToCart2("Elma", 5, 10);
addToCart2("Armut", 2, 20);
addToCart2("Limon", 3, 15);

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };

function addToCart3(product) {
  console.log("Ürün: " + product.productName); //buraya bir şey gelecek ve bunun ProductName'i olacak
  console.log("Adet: " + product.quantity);
  console.log("Fiyat: " + product.unitPrice);
}

addToCart3(product1);

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 };

let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 };

product2 = product3; //pr''nin referans numarası pr3'ün referans numarası
product2.productName = "KARPUZ";
console.log(product3.productName);

let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
sayi2 = 100;
console.log(sayi1);

function addToCart4(x) {//scope
  console.log(products);
}

let products = [ //array içinde objeler
    {productName: "Elma", unitPrice: 10, quantity: 5 },
    {productName: "Armut", unitPrice: 10, quantity: 5 },
    {productName: "Karpuz", unitPrice: 10, quantity: 5 }
];

addToCart4(products)


//rest

function add(...numbers) { //rest operatörü
    
    let total=0;

    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]       
    }
    console.log(total)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers=[30,10,500,600,120]
console.log(...numbers) //spread
console.log(Math.max(...numbers))//spread 



//destructuring

//array destructuring
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Maramara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]

    ]
]

//console.log(icAnadolu.population)
//console.log(marmara.name)
console.log(icAnadoluSehirleri)


//object destructuring
let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName: "Elma", unitPrice: 10, quantity: 5 })

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

