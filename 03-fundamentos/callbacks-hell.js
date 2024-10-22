const empleados = [
    {
        id: 1,
        nombre: 'Sandra'
    },
    {
        id: 2,
        nombre: 'Leticia'
    },
    {
        id: 3,
        nombre: 'Amalia'
    },
];

const salarios = [
    {
        id: 1,
        salario: 7000
    },
    {
        id: 2,
        salario: 6500
    }
];

    const getEmpleado = (id, callback) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;

        if(empleado) {
            callback(null, empleado);
        } else {
            callback(`Empleado con id ${id} no existe`);
        }
    };



const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;

    if(salario) {
        callback(null, salario);
    } else {
        callback(`No existe salario para el empleado con id ${id}`);
    }
    return salario;
};

let id = 4;

getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('ERRORR!!');
        return console.log(err);
    }

    getSalario(id, (err, salario) => {
        if (err) {
            return console.log(err);
        }

        console.log('El empleado: ', empleado, 'tiene un salario de: ', salario);
    });
});


/*
getEmpleado(1, (error, empleado) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Empleado encontrado: ${empleado}`);

     
        getSalario(1, (error, salario) => {
            if (error) {
                console.log(error);
            } else {
                console.log(`Salario de ${empleado}: ${salario}`);
            }
        });
    }
});
*/