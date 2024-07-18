class MovieQueue {
	constructor() {
		this.queue = [];
	}

	get length() {
		return this.queue.length;
	}

	// enqueue(item): Adiciona um item ao topo da fila
	enqueue(item) {
		return this.queue.unshift(item);
	}
	// dequeue(): Remove o item do topo da fila
	dequeue() {
		if (this.isEmpty()) {
			throw new Error("Não é possível remover de uma fila vazia");
		}
		return this.queue.pop();
	}
	// peek(): Retorna o item que está no topo da fila
	peek() {
        if(this.isEmpty()){
            throw new Error("Não é possível visualizar o topo de uma fila vazia");
        }
		return this.queue[this.length - 1];
	}
	// isEmpty(): Retorna verdadeiro se a fila estiver vazia
	isEmpty() {
		return this.length === 0;
	}
}

const myMovieQueue = new MovieQueue();
myMovieQueue.enqueue("Harry Potter");
myMovieQueue.enqueue("The Matrix");

myMovieQueue.dequeue();
console.log(myMovieQueue.peek());
