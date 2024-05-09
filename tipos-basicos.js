console.log("inicio ================");
// tipo numero
var numero = 3;
var numero2 = 7;
// console.log(numero + numero2)
// console.log(numero - numero2)
// console.log(numero / numero2)
// console.log(numero * numero2)

// tipo boolean
var boolean1 = true;
var boolean2 = false;
// console.log(true && true && true)
// console.log(true || false || false)

// tipo string
var texto = "abacaxi";
var texto2 = "eu gosto de";
// console.log(texto2 + ' ' + texto)
// console.log(texto[0])

// tipo null
var var1 = null;
// console.log(var1 && true)

// tipo function
function soma(valor1, valor2) {}
// console.log(soma())

// tipo array
var lista = [
  0,
  6,
  45,
  true,
  "blas",
  function bla() {
    return 1;
  },
  8,
  9,
  9,
  9,
  9,
];
lista.forEach(function (valor, index) {
  // console.log(index, valor)
});

// tipo objeto
var objeto = {
  nome: "jose",
  idade: 23,
  gatos: [{ idade: [{}, 7] }],
  obj: {},
};
console.log(objeto["nome"], objeto["idade"], objeto.nome);
