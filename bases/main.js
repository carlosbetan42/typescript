"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log('...... gogogo!!!');
    },
};
const guason = {
    reir: true,
    comer: true,
    llorar: false,
};
const reir = (guason) => {
    if (guason.reir) {
        console.log('JAJAJAJA');
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() { }
}
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Test',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa',
        },
        getFullAddress() {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        },
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 4,
            city: 'Toronto',
            zip: 'KY2 SU12',
        },
        getFullAddress() {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map