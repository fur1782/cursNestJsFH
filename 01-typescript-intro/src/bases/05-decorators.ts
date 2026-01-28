
class NewPokemon {
    constructor (
        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`NO VULL!!`);
    }

    speak() {
        console.log(`NO VULL PARLAR!`);
    }
}

const MyDecorator = () => {
    return (target: Function) => {
        // console.log(target);
        return NewPokemon;
    }
}

@MyDecorator()
export class Pokemon {
    constructor (
        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`${this.name.toUpperCase()}!!`);
    }

    speak() {
        console.log(`${this.name},${this.name}!`);
    }

}

export const charmander = new Pokemon(4, 'Charmander');