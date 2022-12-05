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
// const arr2: OnlyNumberArray = ['1', '2', '3']
console.log(arr1);
