function add(a, b, callback) {
    const result = a + b;
    callback(result);
}

console.log('Antes de la ejecución');

add(3, 5, function(result) {
    console.log(result); // Esto imprimirá 8
});

console.log('Después de la ejecución');