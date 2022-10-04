import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');
// (Pokemon.prototype as any).customName = 'Pikachu';
// charmander.savePokemonToDB(-1);
charmander.publicApi = 'https://google.com.mx';
console.log(charmander);
