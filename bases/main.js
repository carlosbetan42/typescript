"use strict";
(function () {
    function sumar(a, b) {
        return a + b;
    }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
    contar(superHeroes);
    var llamarBatman = function (llamar) {
        if (llamar) {
            console.log('Batiseñal activada');
        }
    };
    llamarBatman();
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(', ');
    };
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(function () {
    (function () {
        var a = 10;
        var b;
    })();
})();
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["superman"] = 100] = "superman";
    })(Fuerza || (Fuerza = {}));
    var fuerzaFlash = Fuerza.flash;
    var fuerzaSuperman = Fuerza.superman;
    var fuerzaBatman = Fuerza.batman;
    var fuerzaAcuaman = Fuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || 'no lastName').toUpperCase();
        }
        return "".concat(firstName, " ").concat(lastName || 'no lastName');
    };
    var name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'no lastName');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado"; };
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return 'Batiseñal activada';
    };
    var heroName = returnName();
})();
(function () {
    var batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4,
    };
    var bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log('Disparando');
        },
    };
    console.log('paso 1');
    var villanos = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false,
        },
        {
            nombre: 'Erik Magnus Lehnsherr',
            edad: 49,
            mutante: true,
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true,
        },
    ];
    console.log('paso 2');
    var charles = {
        poder: 'psiquico',
        estatura: 1.78,
    };
    var apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
    };
    console.log(apocalipsis);
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza'],
        getName: function () {
            return this.name;
        },
    };
    console.log(flash.getName());
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var myCustomVariable = 'Test';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
    numbers.forEach(function (v) { return console.log(v); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = 6;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("auxilio");
    console.log("Hola mundo");
})();
(function () {
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number("55A");
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = "Batman";
    var linternaVerde = "Linterna Verde";
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    var abc = 123;
    console.log("I'm ".concat(batman, ", ").concat(abc));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No está presente");
})();
(function () {
    var hero = ["Dr Strange", 100, true];
    hero[0] = "Ironman";
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return undefined;
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map