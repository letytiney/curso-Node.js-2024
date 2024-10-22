
//Explicación de Callbacks
console.log(`1-\n\n-------Uso de funcion setTimeOut con funcion normal-------------`)
setTimeout(function(){
    console.log('2-Hola Mundo proceso 2');
}, 3000);

//El problema de esta función es que ejecuta todo en la función
//Por ejemplo el control de despliegue del tiempo del mensaje debería ser
//fuera de la función.
const getUsuarioById = (id) => {
    const usuario = {
        id,
        nombre: 'Sandra'
    }

    setTimeout(() => {
        console.log('5- ', usuario);
    }, 5000);
}

getUsuarioById(82);
/*
console.log('6-\n\n Uso de objeto ')
console.log('Proceso 2' )

//Acá no se está enviando como argumento otra función pero no se
//está ejecutando
getUsuarioById(200, () => {
    console.log('Hola mundo desde getUsuarioByID');
});



//Aplicando callback

const getUsuarioById2 = (id, callbacks) => {
    const user = {
        id,
        nombre: 'Leticia'
    }

    setTimeout(() => {
        callbacks(user);
    }, 1500);
}


console.log('10-\n\n ----------Uso de callback getUsuarioById2 ')
getUsuarioById2(700, (user) => {
    console.log('11- Hola mundo desde getUsuarioByID2(700)', user);
});

//Agregando como argumento el usuario

console.log('12-\n\n -----------Uso de callback getUsuarioById2 ')
getUsuarioById2(650, (usuario) => {
    console.log('Hola mundo desde el ID 650');
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});
*/