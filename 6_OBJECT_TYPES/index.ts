                              // 1 - tipo de objeto para funções
interface Product {
  name: string
  price: number
  isAvailable: boolean
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name}, seu preço é R$${product.price}`,
  )
  if (product.isAvailable) {
    console.log('Este produto está disponível!')
  }
}

const shirt: Product = {
  name: 'Camisa',
  price: 29.99,
  isAvailable: true,
}

showProductDetails(shirt)
showProductDetails({name: 'tenis', price: 30.99, isAvailable: false})


                              // 2 - propriedade opcional em interface
interface User {
  email: string
  role?: string
}

function showUserDetails(user: User) {
  console.log(`E-mail do usuário: ${user.email}`)
  if (user.role) {
    console.log(`Sua função no sistema é de: ${user.role}`)
  }
}

const u1 = { email: 'matheus@teste.com', role: 'Admin' }
const u2 = { email: 'joao@teste.com' }

showUserDetails(u1)
showUserDetails(u2)

                              // 3 - readonly
interface Car {
  brand: string
  readonly wheels: number
}

const fusca: Car = {
  brand: 'Vw',
  wheels: 4,
}

console.log(fusca)

// fusca.wheels = 5

                              // 4 - index signature

interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10,
}

coords.y = 15

console.log(coords)

interface OnlyNumberArray {
  [index: number]: number
}

const arr1: OnlyNumberArray = [1, 2, 3]
 //const arr2: OnlyNumberArray = ['1', '2', '3']

console.log(arr1)

                          // 5 - extending types
interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superpowers: string[]
}

const goku: SuperHuman = {
  name: 'Goku',
  age: 50,
  superpowers: ['Kamehameha', 'Genki Dama'],
}

console.log(goku)

                  // 6 - intersection types

interface Character {
  name: string
}
interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun

const pessoa: HumanWithGun = {
  name: 'Jander',
  type: 'Revolver',
  caliber: 38
}
console.log(pessoa);

                                    // 7 - readonly array

let myArray: ReadonlyArray<string> = ['Maçã', 'Laranja', 'Banana']

//myArray[3] = 'Mamão'
myArray = myArray.map((item)=>{
  return `fruta: ${item}`
})
console.log(myArray)

                                        // 8 - tuplas
                                        
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
// const mixedArray: fiveNumbers = ["teste", 1]

type nameAndAge = [string, number]

const anotherUser = ['Matheus', 30]

anotherUser[1] = 'João'

console.log(anotherUser)

                                        // 9 - tuplas com readonly

function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([1, 2])
// showNumbers(['teste', 1])