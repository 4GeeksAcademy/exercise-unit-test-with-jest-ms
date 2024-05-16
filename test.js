// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dollar should be 146.26168224299064 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    // If 1.07 dollars is 156.5 yen, then 3.5 dollars should be (156.5 * 3.5 / 1.07) yen
    const expected = 156.5 * 3.5 / 1.07; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(511.91588785046724); // 
})

test("One yen should be 0.005559105431309904 Pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const Pound = fromYenToPound(3.5);

    // If 156.5 yen is 0.87 pound, then 3.5 yen should be (3,5 * 0.87 / 156.5;) pound
    const expected = 3.5 * 0.87 / 156.5; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.019456869009584665); // 
})
