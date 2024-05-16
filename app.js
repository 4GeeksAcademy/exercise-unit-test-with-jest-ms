console.log("Hello World")

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { sum };

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yen
    let valueInYen = valueInDollar * 146.26168224299064;
    // Retornamos el valor en yen
    return valueInYen;
}   

// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a Pound
    let valueInPound = valueInYen * 0.005559105431309904;
    // Retornamos el valor en Pound
    return valueInPound;
}   
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound }
