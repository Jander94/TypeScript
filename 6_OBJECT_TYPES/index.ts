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
// const arr2: OnlyNumberArray = ['1', '2', '3']

console.log(arr1)