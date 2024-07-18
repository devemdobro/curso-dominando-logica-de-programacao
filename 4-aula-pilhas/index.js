class BookStack {
	constructor() {
		this.stack = [];
	}

	get length() {
		return this.stack.length;
	}

	// pop(): Remove o item do topo da pilha
	pop() {
		return this.stack.pop();
	}

	// push(item): Adiciona um item ao topo da pilha
	push(item) {
		return this.stack.push(item);
	}

	// peek(): Retorna o item no topo da pilha
	peek() {
		if (this.isEmpty()) {
			throw new Error("The stack is empty");
		}

		return this.stack[this.length - 1];
	}

	// isEmpty(): Retorna verdadeiro se a pilha estiver vazia
	isEmpty() {
		return this.length === 0;
	}
}

let myBookStack = new BookStack();
myBookStack.push("Clean Code");
myBookStack.push("Data Structures");
console.log(myBookStack.stack);
console.log(myBookStack.peek());
console.log(myBookStack.isEmpty());
myBookStack.pop();
console.log(myBookStack.length);
console.log((myBookStack.peek()));