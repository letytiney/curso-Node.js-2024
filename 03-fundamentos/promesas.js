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
const id = 5;

// getEmpleado(id)
//   .then( empleado => console.log(empleado))
//   .catch( err => console.log(err));

// getSalario(id)
//   .then( salario => console.log(salario))
//   .catch( err => console.log(err));

getEmpleado(id)
  .then( empleado => {

    getSalario(id)
      .then(salario => {
        console.log('El empleado: ', empleado, 'tiene un salario: ', salario);
      })
      .catch( err => console.log(err))

  })
  .catch( err => console.log(err))
