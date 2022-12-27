"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name}, seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log('Este produto está disponível!');
    }
}
const shirt = {
    name: 'Camisa',
    price: 29.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: 'tenis', price: 30.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`E-mail do usuário: ${user.email}`);
    if (user.role) {
        console.log(`Sua função no sistema é de: ${user.role}`);
    }
}
const u1 = { email: 'matheus@teste.com', role: 'Admin' };
const u2 = { email: 'joao@teste.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'Vw',
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
const arr1 = [1, 2, 3];
//const arr2: OnlyNumberArray = ['1', '2', '3']
console.log(arr1);
const goku = {
    name: 'Goku',
    age: 50,
    superpowers: ['Kamehameha', 'Genki Dama'],
};
console.log(goku);
const pessoa = {
    name: 'Jander',
    type: 'Revolver',
    caliber: 38
};
console.log(pessoa);
// 7 - readonly array
let myArray = ['Maçã', 'Laranja', 'Banana'];
//myArray[3] = 'Mamão'
myArray = myArray.map((item) => {
    return `fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = ['Matheus', 30];
anotherUser[1] = 'João';
console.log(anotherUser);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
// showNumbers(['teste', 1])
