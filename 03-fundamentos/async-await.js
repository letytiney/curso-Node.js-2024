const empleados = [
    {
        id: 1,
        nombre: 'Josefa'
    },
    {
        id: 2,
        nombre: 'Leticia'
    },
    {
        id: 3,
        nombre: 'Sandra'
    },
];

const salarios = [
    {
        id: 1,
        salario: 10000
    },
    {
        id: 2,
        salario: 5500
    }
];

const getEmpleado = (id) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;

    return new Promise((resolve, reject) => {
        empleado
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`);
    });
};

const getSalario = (id) => {
    const salario = salarios.find(s => s.id === id)?.salario;

    return new Promise((resolve, reject) => {
        salario
            ? resolve(salario)
            : reject(`No existe el salario del empleado id ${id}`);
    });
};

const getInfoUsuario = async() => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado} es de ${salario}`;
    } catch(err) {
        throw err;
    }
};



const id = 1;

getInfoUsuario(id)
  .then(msg => {
    console.log('TODO BIEN');
    console.log(msg);
  })
  .catch(err => {
    console.log('TODO MAL');
    console.log(err);
  });
