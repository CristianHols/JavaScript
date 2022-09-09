
var saludo = 'Hola Mundoooo'

let pais = 'Argentina'      //no es estricto el uso de ; al final
let continente = 'Sur América'
let antiguedad = '1816'
// let pais_y_continente = pais+''+continente     //concatenacion de variables - unir 2 datos 

let pais_y_continente =  `${pais} ${continente}` //metodo para espaciar 

// console.log( pais_y_continente )

pais = 'España'
continente = 'Europa'

console.log( pais, continente, antiguedad, 'Pais y Continente', pais_y_continente, 100, false ) //reasignacion y alzamiento de datos