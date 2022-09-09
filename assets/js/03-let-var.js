// var texto = 'hola'
// var texto = 'hola dos'       no da error

// let texto = 'hola'
// let texto = 'hola dos'        da error 

// console.log('_____CON VAR______')
// // var texto1 = 'Curso de JavaScript'
// // console.log(texto1)

// // {
// //     var texto1 = 'Curso de Larabel 5'           //var definida dentro de un ambito
// //     console.log(texto1)
// // }

// // console.log(texto1)                             //toma el valor de la variable de ambito y no la variable global - var tiende a pisar los valores fuera del ambito

console.log('_____CON LET______')
let texto2 = 'Curso de JavaScript'
console.log(texto2)

{
    let texto2 = 'Curso de Larabel 5'           //let que se define en el ambito queda dentro del mismo, se evita errores.
    console.log(texto2)
}

console.log(texto2) 