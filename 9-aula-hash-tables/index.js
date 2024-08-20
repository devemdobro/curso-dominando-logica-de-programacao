class State {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

const states = new Map();
states.set('rs', new State(1, 'Rio Grande do Sul'));
states.set('sp', new State(2, 'São Paulo'));
states.set('rj', new State(3, 'Rio de Janeiro'));

const key = 'rs';
const state = states.get(key);

console.log(state);

if(state) {
    console.log(`ID: ${state.id}, Name: ${state.name}`);
} else {
    console.log('State not found');
}
