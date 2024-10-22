function sumar (a, b = 0, c=0 ){
    return a+b+c;
}
console.log("------------Uso de funcion basica sumar (a, c, b )----------------")
console.log('Uso de funcion basica');
console.log(sumar(10,20,50));
console.log(sumar(8));

//Funcion flecha
const sumar2 = (a, b = 0, c = 0) =>{
    return a + b +c;
}
console.log("------------Uso de funcion tipo flecha sumar (a, c, b )----------------")
console.log(sumar2(100, 200, 300));
console.log(sumar2(200));

console.log('------------Uso de funcion Flechas sin parentesis---------------------');
const sumar3 = (a, b = 0) => a + b;

console.log(sumar3(500, 500));
console.log(sumar3(900));

const saludar = () => 'Hola mundo';
console.log(saludar());

//Funcion flecha Ejercicio

console.log('------------Uso de funcion Flechas Ejercicio---------------------');

const dividir = (a= 10, b= 2) => console.log(`Numero ${b} divide ${a} el resultado es ${a/b}`);

console.log(`Funcion valores inicializados`);
console.log(dividir(100, 10));
console.log(dividir(90, 2));
console.log(dividir(25, 5));

